import Anthropic from '@anthropic-ai/sdk';

// Type definitions (same as the original parser)
export interface MenuItem {
  name: string;
  description?: string;
  price?: number;
}

export interface MenuSection {
  sectionName: string;
  items: MenuItem[];
}

export interface ParsedMenu {
  menuName: string;
  sections: MenuSection[];
}

// Helper function to convert file to base64
async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove the data URL prefix (data:image/jpeg;base64,)
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = error => reject(error);
  });
}

// Helper function to get media type from file
function getMediaType(file: File): string {
  const type = file.type;
  if (type.startsWith('image/')) {
    return type;
  }
  // For PDFs, we'll need to convert to image first or handle differently
  if (type === 'application/pdf') {
    return 'image/png'; // Placeholder - PDFs need special handling
  }
  return 'image/jpeg'; // Default fallback
}

/**
 * Optimize section grouping to avoid duplicate or overly granular sections
 */
function optimizeSections(sections: MenuSection[]): MenuSection[] {
  // If there are too many sections with only 1 item each, consolidate them
  const singleItemSections = sections.filter(section => section.items.length === 1);
  const multiItemSections = sections.filter(section => section.items.length > 1);
  
  // If more than half of sections have only 1 item, we likely have over-segmentation
  if (singleItemSections.length > sections.length / 2 && singleItemSections.length > 2) {
    console.log(`🔧 Optimizing sections: Found ${singleItemSections.length} single-item sections, consolidating...`);
    
    // Group single-item sections by food type
    const mainItems: MenuItem[] = [];
    const dessertItems: MenuItem[] = [];
    const sideItems: MenuItem[] = [];
    const beverageItems: MenuItem[] = [];
    
    singleItemSections.forEach(section => {
      const item = section.items[0];
      const itemName = item.name.toLowerCase();
      const sectionName = section.sectionName.toLowerCase();
      
      // Categorize based on item name or section name keywords
      if (sectionName.includes('dessert') || sectionName.includes('sweet') || 
          itemName.includes('cake') || itemName.includes('ice cream') || itemName.includes('cookie') || 
          itemName.includes('pie') || itemName.includes('chocolate')) {
        dessertItems.push(item);
      } else if (sectionName.includes('side') || sectionName.includes('bread') || 
                 itemName.includes('fries') || itemName.includes('bread') || itemName.includes('salad')) {
        sideItems.push(item);
      } else if (sectionName.includes('drink') || sectionName.includes('beverage') || 
                 itemName.includes('soda') || itemName.includes('juice') || itemName.includes('coffee')) {
        beverageItems.push(item);
      } else {
        // Default to main items
        mainItems.push(item);
      }
    });
    
    // Create consolidated sections
    const optimizedSections: MenuSection[] = [...multiItemSections];
    
    if (mainItems.length > 0) {
      optimizedSections.push({
        sectionName: "Mains",
        items: mainItems
      });
    }
    
    if (dessertItems.length > 0) {
      optimizedSections.push({
        sectionName: "Desserts",
        items: dessertItems
      });
    }
    
    if (sideItems.length > 0) {
      optimizedSections.push({
        sectionName: "Sides",
        items: sideItems
      });
    }
    
    if (beverageItems.length > 0) {
      optimizedSections.push({
        sectionName: "Beverages",
        items: beverageItems
      });
    }
    
    console.log(`✅ Consolidated ${singleItemSections.length} sections into ${optimizedSections.length} sections`);
    return optimizedSections;
  }
  
  // If sections look reasonable, return as-is
  return sections;
}

/**
 * Parse menu using Anthropic Claude's vision capabilities
 */
export async function parseMenuWithClaude(file: File, apiKey: string): Promise<ParsedMenu> {
  try {
    const processingId = `claude-parse-${Date.now()}-${file.name}`;
    console.log(`🤖 Starting Claude vision analysis for ${processingId}...`);
    console.log('📂 File details:', {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified
    });

    // Initialize Anthropic client
    const anthropic = new Anthropic({
      apiKey: apiKey,
      // Note: In production, you'd want to use this server-side to protect the API key
      dangerouslyAllowBrowser: true
    });

    // Convert file to base64
    console.log(`📷 Converting image to base64 for ${processingId}...`);
    const base64Image = await fileToBase64(file);
    const mediaType = getMediaType(file);

    // Prepare the prompt for Claude
    const prompt = `Please analyze this menu image and extract the menu structure including item names, descriptions, and prices. Return ONLY a valid JSON object with this exact structure:

{
  "menuName": "The name/title of the menu (if visible, otherwise infer from content)",
  "sections": [
    {
      "sectionName": "Section name (e.g., 'Appetizers', 'Main Courses', etc.)",
      "items": [
        {
          "name": "Item name (clean, without price)",
          "description": "Item description if available (optional)",
          "price": 12.99
        }
      ]
    }
  ]
}

Section Detection Rules:
- ONLY create sections when there are explicit section headers visible on the menu (like "Appetizers", "Main Courses", "Desserts", etc.)
- DO NOT create a section for every individual food item
- If items have no clear section headers, group them intelligently based on food type:
  * Group similar items together (e.g., all pasta dishes, all salads, all sandwiches)
  * Use contextual section names like "Mains", "Entrees", "Sides", "Beverages", "Desserts" based on the food types
  * If most items are main dishes without headers, put them in a "Main Courses" or "Mains" section
  * Only create separate sections when items are clearly different categories

Item Extraction Rules:
- For each item, extract:
  * Clean item name (without price symbols or currency)
  * Description if available (ingredients, preparation style, etc.)
  * Price as a number (convert from text like "$12.99" to 12.99)
- If no description is visible for an item, omit the description field
- If no price is visible for an item, omit the price field
- Extract prices accurately, handling various formats ($12, $12.99, 12.99, etc.)

Avoid Common Mistakes:
- DO NOT create sections with the same name as individual items
- DO NOT create a separate section for each dish
- If you see "Pasta Primavera" as a dish, do not create a "Pasta Primavera" section with one item
- Group items logically - multiple pasta dishes go in one "Pasta" or "Main Courses" section
- If there's only one clear section header (like "Desserts") and other ungrouped items, put ungrouped items in appropriate contextual sections

General Rules:
- Extract the actual menu name from the top of the menu if visible
- If no clear menu name is visible, create an appropriate name based on the content
- Focus on accuracy and completeness
- Aim for 2-5 logical sections maximum unless the menu clearly has more

Return only the JSON object, no additional text or explanations.`;

    // Call Claude API
    console.log(`🧠 Sending to Claude API for ${processingId}...`);
    const response = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 2000,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: prompt
            },
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: mediaType as any,
                data: base64Image
              }
            }
          ]
        }
      ]
    });

    // Parse the response
    const responseText = response.content[0].type === 'text' ? response.content[0].text : '';
    console.log(`📄 Claude response for ${processingId}:`, responseText);

    // Extract JSON from the response (in case Claude adds extra text)
    let jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No valid JSON found in Claude response');
    }

    const parsedMenu: ParsedMenu = JSON.parse(jsonMatch[0]);
    
    // Validate the structure
    if (!parsedMenu.menuName || !Array.isArray(parsedMenu.sections)) {
      throw new Error('Invalid menu structure returned by Claude');
    }

    // Ensure all sections have required fields
    parsedMenu.sections = parsedMenu.sections.filter(section => 
      section.sectionName && Array.isArray(section.items) && section.items.length > 0
    );

    if (parsedMenu.sections.length === 0) {
      throw new Error('No valid menu sections found');
    }

    // Post-process to improve section grouping
    parsedMenu.sections = optimizeSections(parsedMenu.sections);

    console.log(`✅ Claude parsing successful for ${processingId}:`, parsedMenu);
    console.log(`📊 Results: ${parsedMenu.sections.length} sections, ${parsedMenu.sections.reduce((total, section) => total + section.items.length, 0)} total items`);

    return parsedMenu;

  } catch (error) {
    console.error('❌ Claude menu parsing failed:', error);
    
    // Provide more helpful error messages
    if (error instanceof Error) {
      if (error.message.includes('not_found_error')) {
        throw new Error('Claude API model not found. Please check your API key permissions or try again later.');
      }
      if (error.message.includes('authentication_error')) {
        throw new Error('Invalid API key. Please check your Anthropic API key.');
      }
      if (error.message.includes('rate_limit_error')) {
        throw new Error('API rate limit exceeded. Please try again in a moment.');
      }
      if (error.message.includes('overloaded_error')) {
        throw new Error('Claude API is temporarily overloaded. Please try again in a moment.');
      }
    }
    
    throw new Error(`Claude parsing failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Main function to parse menu from file using Claude
 */
export async function parseMenuFromFile(file: File): Promise<ParsedMenu> {
  // Get API key from environment variable or local storage
  const apiKey = process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY || 
                localStorage.getItem('anthropic_api_key');
  
  if (!apiKey) {
    throw new Error('Anthropic API key not found. Please set NEXT_PUBLIC_ANTHROPIC_API_KEY environment variable or store it in localStorage under "anthropic_api_key"');
  }

  return parseMenuWithClaude(file, apiKey);
}

/**
 * Test function with mock response
 */
export function testClaudeMenuParser(): ParsedMenu {
  console.log('🧪 Testing Claude menu parser with mock data...');
  
  const mockClaudeResponse: ParsedMenu = {
    menuName: "The Garden Bistro - Dinner Menu",
    sections: [
      {
        sectionName: "Mains",
        items: [
          { name: "Grilled Salmon", description: "Atlantic salmon with lemon and dill", price: 24.99 },
          { name: "Beef Steak", description: "8oz ribeye steak with seasonal vegetables", price: 29.99 },
          { name: "Pasta Primavera", description: "Fresh pasta with seasonal vegetables in light sauce", price: 18.99 },
          { name: "Margherita Pizza", description: "Traditional pizza with fresh mozzarella and basil", price: 16.99 },
          { name: "Caesar Salad", description: "Fresh romaine lettuce with parmesan cheese and croutons", price: 12.99 },
          { name: "Chicken Wings", description: "Buffalo style wings with ranch dipping sauce", price: 14.99 }
        ]
      },
      {
        sectionName: "Desserts",
        items: [
          { name: "Chocolate Cake", description: "Rich chocolate cake with vanilla ice cream", price: 8.99 },
          { name: "Ice Cream Sundae", description: "Three scoops with hot fudge and whipped cream", price: 7.99 },
          { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 9.99 }
        ]
      },
      {
        sectionName: "Sides",
        items: [
          { name: "Garlic Bread", description: "Homemade bread with garlic butter and herbs", price: 8.99 },
          { name: "French Fries", description: "Crispy golden fries with sea salt", price: 6.99 }
        ]
      }
    ]
  };
  
  console.log('✅ Mock Claude response:', JSON.stringify(mockClaudeResponse, null, 2));
  return mockClaudeResponse;
}