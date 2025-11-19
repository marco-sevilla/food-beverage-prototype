import Tesseract from 'tesseract.js';

// Type definitions
export interface MenuItem {
  name: string;
}

export interface MenuSection {
  sectionName: string;
  items: MenuItem[];
}

export interface ParsedMenu {
  menuName: string;
  sections: MenuSection[];
}

// OCR Configuration
const OCR_CONFIG = {
  lang: 'eng',
  options: {
    tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 \n\t.,&-\'',
    tessedit_pageseg_mode: Tesseract.PSM.AUTO,
  }
};

/**
 * Extract raw text from image/PDF using Tesseract.js
 */
export async function extractTextFromFile(file: File): Promise<string> {
  try {
    const result = await Tesseract.recognize(file, OCR_CONFIG.lang, {
      logger: (m) => console.log('OCR Progress:', m)
    });
    
    return result.data.text;
  } catch (error) {
    console.error('OCR extraction failed:', error);
    throw new Error('Failed to extract text from file');
  }
}

/**
 * Clean and normalize extracted text
 */
function cleanText(text: string): string {
  // Process line by line to preserve structure
  const lines = text.split('\n');
  
  const cleanedLines = lines
    .map(line => {
      return line
        // Remove prices - more comprehensive patterns
        .replace(/\$[\d.,]+/g, '')
        .replace(/[\d.,]+\s*USD?/gi, '')
        .replace(/[\d]+\.[\d]{2}/g, '')
        .replace(/\b[\d]{1,3}(\.\d{2})?\b/g, '') // Remove standalone numbers that look like prices
        // Remove OCR artifacts and decorative elements
        .replace(/[-_=•·]{3,}/g, '') // Remove long chains of dashes/underscores
        .replace(/[«»""\[\]{}()©®™]/g, '') // Remove special characters
        .replace(/[|\\\/]{2,}/g, '') // Remove multiple slashes
        .replace(/\b[A-Z]{1}\b/g, '') // Remove standalone capital letters (OCR errors)
        .replace(/\b\d+\s*[A-Z]+\s*\d+\b/g, '') // Remove number-letter-number patterns
        // Remove common menu noise words
        .replace(/\b(market\s*price|mp|seasonal|new!?)\b/gi, '')
        // Clean up fragmented text
        .replace(/\b[a-z]{1,2}\b/g, '') // Remove 1-2 letter fragments
        .replace(/[^\w\s,.-]/g, ' ') // Replace remaining special chars with spaces
        // Remove multiple spaces
        .replace(/\s+/g, ' ')
        // Trim whitespace
        .trim();
    })
    .filter(line => line.length > 2) // Remove very short lines
    .filter(line => !/^[^a-zA-Z]*$/.test(line)); // Remove lines with no letters
  
  return cleanedLines.join('\n');
}

/**
 * Identify potential menu name from text
 */
function extractMenuName(lines: string[]): string {
  console.log('📋 Extracting menu name from lines:', lines.slice(0, 5));
  
  // Look for explicit menu titles in first few lines
  for (let i = 0; i < Math.min(3, lines.length); i++) {
    const line = lines[i];
    
    // Skip very short lines or lines that are clearly not titles
    if (line.length < 4 || line.length > 40) continue;
    
    // Must contain "menu" and be reasonably short
    if (/\b(menu)\b/i.test(line) && !isLikelyItem(line) && !isLikelySection(line)) {
      console.log(`✅ Found menu title with "menu": "${line}"`);
      return line;
    }
  }
  
  // Look for restaurant/establishment name in the first line (often the actual title)
  const firstLine = lines[0];
  if (firstLine && firstLine.length >= 5 && firstLine.length <= 50) {
    // Check if it's not a section or item
    if (!isLikelySection(firstLine) && !isLikelyItem(firstLine)) {
      // Avoid generic food terms
      const genericTerms = /\b(appetizer|main|dessert|drink|beverage|starter|entree|course)\b/i;
      if (!genericTerms.test(firstLine)) {
        console.log(`✅ Using first line as menu name: "${firstLine}"`);
        return firstLine;
      }
    }
  }
  
  // Look for meal type only if it's clearly a title (short, uppercase, not too generic)
  for (let i = 0; i < Math.min(2, lines.length); i++) {
    const line = lines[i];
    if (line && line.length < 25 && line === line.toUpperCase() && 
        /\b(dinner|lunch|breakfast|brunch|all.?day)\b/i.test(line) && 
        !isLikelySection(line) && !isLikelyItem(line)) {
      console.log(`✅ Using meal type as menu name: "${line}"`);
      return line;
    }
  }
  
  // Generate fallback name based on content or date
  const fallbackName = generateFallbackMenuName(lines);
  console.log(`⚠️ No clear menu name found, using fallback: "${fallbackName}"`);
  return fallbackName;
}

/**
 * Generate a fallback menu name based on content
 */
function generateFallbackMenuName(lines: string[]): string {
  console.log('🔍 Generating fallback menu name from lines:', lines.slice(0, 3));
  
  // Try to infer from content - but be more selective
  const allText = lines.join(' ').toLowerCase();
  
  // Only use content-based names if they appear prominently (not just in items)
  const firstFewLines = lines.slice(0, 5).join(' ').toLowerCase();
  
  // Check if meal types appear in the first few lines (more likely to be menu titles)
  if (firstFewLines.includes('breakfast') || firstFewLines.includes('brunch')) {
    console.log('📝 Found "breakfast/brunch" in early lines - using Breakfast Menu');
    return 'Breakfast Menu';
  }
  if (firstFewLines.includes('lunch')) {
    console.log('📝 Found "lunch" in early lines - using Lunch Menu');
    return 'Lunch Menu';
  }
  if (firstFewLines.includes('dinner')) {
    console.log('📝 Found "dinner" in early lines - using Dinner Menu');
    return 'Dinner Menu';
  }
  
  // For dessert and beverages, only use if they dominate the menu (more than 50% of sections)
  const dessertSections = lines.filter(line => line.toLowerCase().includes('dessert')).length;
  const drinkSections = lines.filter(line => line.toLowerCase().includes('drink') || line.toLowerCase().includes('beverage')).length;
  const totalSections = lines.filter(line => line.length > 3 && line.length < 30).length;
  
  if (dessertSections > 0 && dessertSections / Math.max(totalSections, 1) > 0.5) {
    console.log('📝 Dessert sections dominate - using Dessert Menu');
    return 'Dessert Menu';
  }
  
  if (drinkSections > 0 && drinkSections / Math.max(totalSections, 1) > 0.5) {
    console.log('📝 Drink sections dominate - using Beverage Menu');
    return 'Beverage Menu';
  }
  
  // Default fallback - use date to make it unique
  const fallbackName = `Imported Menu - ${new Date().toLocaleDateString()}`;
  console.log('📝 Using generic fallback name:', fallbackName);
  return fallbackName;
}

/**
 * Helper to check if a line looks like a section
 */
function isLikelySection(line: string): boolean {
  const sectionKeywords = [
    'appetizer', 'appetizers', 'starter', 'starters',
    'main', 'mains', 'entree', 'entrees', 'course', 'courses',
    'dessert', 'desserts', 'beverage', 'beverages', 'drinks'
  ];
  const lowerLine = line.toLowerCase();
  return sectionKeywords.some(keyword => lowerLine.includes(keyword));
}

/**
 * Helper to check if a line looks like a food item
 */
function isLikelyItem(line: string): boolean {
  // Items often have descriptive words or are mixed case
  return /\b(with|served|made|fresh|grilled|fried|baked|roasted)\b/i.test(line) ||
         (line !== line.toUpperCase() && line !== line.toLowerCase());
}

/**
 * Identify section headers vs menu items
 */
function identifyLineType(line: string, nextLine?: string): 'section' | 'item' | 'ignore' {
  // Skip very short or very long lines
  if (line.length < 3 || line.length > 100) return 'ignore';
  
  // Skip obvious description/ingredient lines
  if (line.length > 40 && /\b(with|made|served|fresh|house|topped|accompanied|includes)\b/i.test(line)) {
    return 'ignore';
  }
  
  // Skip lines that are clearly fragmented or corrupted OCR
  if (/[{}[\]()]{2,}|[0-9]{3,}|[^a-zA-Z\s]{3,}/.test(line)) {
    return 'ignore';
  }
  
  // Clear section indicators - more specific patterns
  const sectionPatterns = [
    /^(appetizers?|starters?)$/i,
    /^(soups?)$/i,
    /^(salads?)$/i,
    /^(mains?|entrees?|main courses?)$/i,
    /^(sandwiches?|burgers?)$/i,
    /^(pasta|pizza)s?$/i,
    /^(desserts?|sweets?)$/i,
    /^(drinks?|beverages?|cocktails?)$/i,
    /^(wine|beer|tea|coffee)$/i,
    /^(sides?|extras?)$/i,
    /^(pastries?|bakery)$/i,
    /^(breakfast|lunch|dinner)$/i,
    /^all.?day$/i
  ];
  
  // Check for exact section matches
  const lowerLine = line.toLowerCase().trim();
  if (sectionPatterns.some(pattern => pattern.test(lowerLine))) {
    return 'section';
  }
  
  // Formatted section headers - must be ALL CAPS and reasonable length
  if (line === line.toUpperCase() && 
      line.length > 3 && line.length < 20 && 
      !/\b(with|and|or|the|of|in|on|at|for)\b/i.test(line) && // Avoid descriptive text
      !/\d/.test(line)) { // No numbers
    return 'section';
  }
  
  // Everything else is a menu item
  return 'item';
}

/**
 * Parse cleaned text into structured menu data
 */
function parseMenuStructure(text: string): ParsedMenu {
  const lines = text.split('\n').filter(line => line.trim().length > 0);
  
  if (lines.length === 0) {
    throw new Error('No readable text found in the document');
  }
  
  const menuName = extractMenuName(lines);
  console.log(`📝 Extracted menu name: "${menuName}"`);
  
  const sections: MenuSection[] = [];
  let currentSection: MenuSection | null = null;
  
  // Start parsing from second line if first line was used as menu name
  const startIndex = lines[0] === menuName ? 1 : 0;
  console.log(`📍 Starting parsing from line ${startIndex}`);
  console.log(`📋 All lines to parse:`, lines);
  
  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i];
    const nextLine = lines[i + 1];
    const lineType = identifyLineType(line, nextLine);
    
    console.log(`Line ${i}: "${line}" -> ${lineType}`);
    
    switch (lineType) {
      case 'section':
        // Start new section
        if (currentSection) {
          sections.push(currentSection);
        }
        currentSection = {
          sectionName: line,
          items: []
        };
        break;
        
      case 'item':
        // Add item to current section
        if (currentSection) {
          currentSection.items.push({ name: line });
        } else {
          // Create default section if no section defined yet
          currentSection = {
            sectionName: 'Menu Items',
            items: [{ name: line }]
          };
        }
        break;
        
      case 'ignore':
        // Skip this line
        break;
    }
  }
  
  // Don't forget the last section
  if (currentSection) {
    sections.push(currentSection);
  }
  
  console.log(`🔍 Raw sections created:`, sections);
  
  // Filter out empty sections
  const validSections = sections.filter(section => section.items.length > 0);
  
  console.log(`✅ Valid sections after filtering:`, validSections);
  console.log(`📊 Final result summary:`, {
    menuName,
    sectionCount: validSections.length,
    totalItems: validSections.reduce((total, section) => total + section.items.length, 0)
  });
  
  if (validSections.length === 0) {
    throw new Error('No valid menu sections found');
  }
  
  return {
    menuName,
    sections: validSections
  };
}

/**
 * Main function to parse menu from file
 */
export async function parseMenuFromFile(file: File): Promise<ParsedMenu> {
  try {
    const processingId = `parse-${Date.now()}-${file.name}`;
    console.log(`🚀 Starting OCR extraction for ${processingId}...`);
    console.log('📂 File details:', {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified
    });
    
    const rawText = await extractTextFromFile(file);
    
    console.log(`📄 Raw OCR text for ${processingId}:`, rawText.substring(0, 200) + '...');
    
    console.log(`🧹 Cleaning and parsing text for ${processingId}...`);
    const cleanedText = cleanText(rawText);
    
    console.log(`✨ Cleaned text for ${processingId}:`, cleanedText);
    
    const parsedMenu = parseMenuStructure(cleanedText);
    
    console.log(`✅ Final parsed menu for ${processingId}:`, parsedMenu);
    
    return parsedMenu;
  } catch (error) {
    console.error('❌ Menu parsing failed:', error);
    throw error;
  }
}

/**
 * Test function with mock menu text
 */
export function testMenuParser(): ParsedMenu {
  console.log('🧪 Testing menu parser with mock data...');
  
  // Mock OCR text that simulates what Tesseract might extract from a menu
  const mockMenuText = `
    DINNER MENU
    
    APPETIZERS
    Caesar Salad $12.95
    Chicken Wings with house sauce $14.50
    Garlic Bread made with fresh herbs $8.00
    
    MAIN COURSES
    Grilled Salmon served with seasonal vegetables $28.00
    Beef Steak with mashed potatoes $32.00
    Pasta Primavera fresh vegetables and herbs $22.00
    Margherita Pizza house made dough $18.50
    
    DESSERTS  
    Chocolate Cake rich and decadent $9.00
    Ice Cream Sundae with toppings $7.50
    Tiramisu traditional Italian recipe $8.50
    
    BEVERAGES
    House Wine red or white $8.00
    Craft Beer selection varies $6.00
    Coffee freshly brewed $3.50
  `;
  
  console.log('Mock raw text:', mockMenuText);
  
  const cleanedText = cleanText(mockMenuText);
  console.log('Cleaned text:', cleanedText);
  console.log('Cleaned text lines:', cleanedText.split('\n'));
  
  const parsedMenu = parseMenuStructure(cleanedText);
  console.log('✅ Parsed menu result:', JSON.stringify(parsedMenu, null, 2));
  
  return parsedMenu;
}

/**
 * Run test and display results in console
 */
export function runMenuParserTest(): void {
  try {
    console.log('🚀 Starting Menu Parser Test v2.0...');
    console.log('=====================================');
    
    const result = testMenuParser();
    
    console.log('📊 Test Results Summary:');
    console.log(`Menu Name: "${result.menuName}"`);
    console.log(`Total Sections: ${result.sections.length}`);
    
    result.sections.forEach((section, index) => {
      console.log(`${index + 1}. ${section.sectionName} (${section.items.length} items)`);
      section.items.forEach((item, itemIndex) => {
        console.log(`   ${itemIndex + 1}. ${item.name}`);
      });
    });
    
    console.log('=====================================');
    console.log('✅ Menu Parser Test Completed Successfully!');
    
  } catch (error) {
    console.error('❌ Menu Parser Test Failed:', error);
  }
}