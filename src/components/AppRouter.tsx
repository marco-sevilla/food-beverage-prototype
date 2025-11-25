'use client';

import React, { useState, useEffect } from 'react';
import { MenuManagementPage } from './MenuManagementPage';
import { EditMenuPage } from './EditMenuPage';
import { EditItemPage } from './EditItemPage';
import { MobileGuestExperience } from './MobileGuestExperience';
import { MobileMenuOrdering } from './MobileMenuOrdering';
import { OrderSummary } from './OrderSummary';
import { OrderSubmissionLoading } from './OrderSubmissionLoading';
import { OrderConfirmation } from './OrderConfirmation';
import { EditSectionPage } from './EditSectionPage';
import { MenuAvailabilityPage } from './MenuAvailabilityPage';
import { OrderManagementPage } from './OrderManagementPage';
import { CompendiumPage } from './CompendiumPage';
import { EditCompendiumSectionPage } from './EditCompendiumSectionPage';
import { EditCompendiumItemPage } from './EditCompendiumItemPage';
import { GuestHubPage } from './GuestHubPage';
import { EmailPreview } from './EmailPreview';
import { DenialEmailPreview } from './DenialEmailPreview';
import { Toast } from './Toast';
import { FOOD_ITEMS, convertToSectionItem, getFoodItemsByMenu, type FoodItem as CentralizedFoodItem } from '@/data/foodItems';
import { loadData, saveMenuData, saveMenuAvailability as persistMenuAvailability, savePrepTime, createCompendiumItem, getCompendiumSection, saveCompendiumItem as persistCompendiumItem, CompendiumItem } from '@/utils/persistence';
import { AnimatePresence } from 'framer-motion';
import { runMenuParserTest } from '../utils/menuParser';
import { ParsedMenu } from '../utils/claudeMenuParser';

// OrderDetails interface for email preview
interface OrderDetails {
  id: string;
  orderNumber: string;
  guestName: string;
  guestEmail: string;
  roomNumber: string;
  orderDate: string;
  orderTime: string;
  timeElapsed: string;
  items: {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
    specialRequests?: string;
  }[];
  subtotal: number;
  totalItems: number;
  transactionId: string;
  status: string;
}

type Page = 'order-management' | 'menu-management' | 'edit-menu' | 'edit-item' | 'edit-section' | 'menu-availability' | 'mobile-preview' | 'mobile-menu-ordering' | 'menu-preview' | 'order-summary' | 'order-loading' | 'order-confirmation' | 'email-preview' | 'denial-email-preview' | 'compendium' | 'edit-compendium-section' | 'edit-compendium-item' | 'guest-hub';

interface MenuItem {
  name: string; // This will be the external_name for backward compatibility
  internal_name?: string; // Internal name for staff views
  external_name?: string; // External name for guest views (same as name initially)
  entryPoint: string;
  isNew?: boolean;
}

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

interface SectionItem {
  id: string;
  name: string;
  image: string;
  specialRequests?: string;
}

interface CartItemKey {
  itemId: string;
  specialRequests: string;
}

interface MenuSection {
  id: string;
  title: string;
  items: SectionItem[];
}

interface MenuWithSections extends MenuItem {
  sections?: MenuSection[];
}

interface AppState {
  currentPage: Page;
  editingMenu?: MenuWithSections;
  previewingMenu?: MenuWithSections;
  editingItem?: FoodItem;
  editingSection?: MenuSection;
  editingCompendiumSection?: string; // Section name for compendium editing
  editingCompendiumItem?: {
    itemName: string;
    sectionName: string;
    sectionId: string;
    itemId?: string;
  };
  compendiumRefreshKey?: number; // Used to force refresh of compendium section page
  menus: MenuWithSections[];
  cart: Record<string, { item: SectionItem; quantity: number; specialRequests: string }>;
  activeManagementTab: 'menus' | 'item-library' | 'settings';
  isPreviewMode: boolean;
  selectedOrderForEmail?: OrderDetails;
  selectedOrderForDenialEmail?: {
    order: OrderDetails;
    denialReason: string;
    denialComment?: string;
  };
  prepTimeMinutes: number;
  connectedMenusForOrdering?: string[]; // Connected menus for food ordering navigation
  orderingContext?: 'guest-hub' | 'menu-management'; // Track where ordering flow originated
  sourceGuestItem?: CompendiumItem; // Track which guest item the user came from when navigating to food ordering
  toast: {
    isVisible: boolean;
    message: string;
    type: 'success' | 'error' | 'warning';
  };
  pageTransition: {
    isTransitioning: boolean;
    fromPage?: Page;
    toPage?: Page;
    phase: 'blur' | 'fade-in' | 'none';
    direction: 'forward' | 'backward' | 'modal';
  };
}

export const AppRouter: React.FC = () => {
  // Add test function to global scope for console access
  useEffect(() => {
    (window as any).testMenuParser = runMenuParserTest;
    console.log('🧪 Menu Parser Test v2.0 Available: Run testMenuParser() in console');
  }, []);

  // Initialize menus with actual section data from centralized food items
  const getBreakfastItems = () => getFoodItemsByMenu('Breakfast').map(convertToSectionItem);
  const getLunchItems = () => getFoodItemsByMenu('Lunch').map(convertToSectionItem);
  const getDinnerItems = () => getFoodItemsByMenu('Dinner').map(convertToSectionItem);
  const getHappyHourItems = () => getFoodItemsByMenu('Happy hour').map(convertToSectionItem);
  const getDessertItems = () => getFoodItemsByMenu('Desserts').map(convertToSectionItem);

  const initialMenus: MenuWithSections[] = [
    { 
      name: 'Breakfast menu',
      internal_name: 'Breakfast menu',
      external_name: 'Breakfast menu', 
      entryPoint: 'In-room dining',
      sections: [
        {
          id: 'mains',
          title: 'Mains',
          items: getBreakfastItems()
        }
      ]
    },
    { 
      name: 'Lunch menu',
      internal_name: 'Lunch menu',
      external_name: 'Lunch menu', 
      entryPoint: 'In-room dining',
      sections: [
        {
          id: 'cold',
          title: 'Cold',
          items: [convertToSectionItem(FOOD_ITEMS.find(item => item.name === 'Salad')!)]
        },
        {
          id: 'mains',
          title: 'Mains',
          items: getLunchItems().filter(item => item.name !== 'Salad')
        },
        {
          id: 'sides',
          title: 'Sides',
          items: [convertToSectionItem(FOOD_ITEMS.find(item => item.name === 'Taco')!)]
        }
      ]
    },
    { 
      name: 'Dinner menu',
      internal_name: 'Dinner menu',
      external_name: 'Dinner menu', 
      entryPoint: 'In-room dining', 
      sections: [
        {
          id: 'mains',
          title: 'Mains', 
          items: getDinnerItems()
        }
      ]
    },
    { 
      name: 'Happy hour menu',
      internal_name: 'Happy hour menu',
      external_name: 'Happy hour menu', 
      entryPoint: 'In-room dining', 
      sections: [
        {
          id: 'appetizers',
          title: 'Appetizers',
          items: getHappyHourItems()
        }
      ]
    },
    { 
      name: 'Dessert menu',
      internal_name: 'Dessert menu',
      external_name: 'Dessert menu', 
      entryPoint: 'In-room dining', 
      sections: [
        {
          id: 'desserts',
          title: 'Desserts',
          items: getDessertItems()
        }
      ]
    },
  ];

  // Load saved data on app initialization
  const savedData = loadData();

  const [feedbackState, setFeedbackState] = useState({
    isVisible: false,
    type: 'success' as 'success' | 'error' | 'loading',
    message: ''
  });

  // Check URL parameters for preview mode on initial load
  const getInitialState = (): AppState => {
    const baseState: AppState = {
      currentPage: 'order-management',
      menus: savedData.menus || initialMenus,
      cart: {},
      activeManagementTab: 'menus',
      isPreviewMode: false,
      prepTimeMinutes: savedData.prepTimeMinutes || 30,
      toast: {
        isVisible: false,
        message: '',
        type: 'success'
      },
      pageTransition: {
        isTransitioning: false,
        phase: 'none',
        direction: 'forward'
      }
    };

    // Check for preview parameter in URL (only in browser)
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const previewMenuName = urlParams.get('preview');

      if (previewMenuName) {
        const menusToSearch = savedData.menus || initialMenus;
        const menu = menusToSearch.find(m => m.name === previewMenuName);

        if (menu) {
          return {
            ...baseState,
            currentPage: 'menu-preview',
            previewingMenu: menu,
            isPreviewMode: true,
            cart: {}
          };
        }
      }
    }

    return baseState;
  };

  const [appState, setAppState] = useState<AppState>(getInitialState);

  // Save menus to localStorage whenever they change
  useEffect(() => {
    saveMenuData(appState.menus);
  }, [appState.menus]);

  // Smooth page transition function
  const transitionToPage = (targetPage: Page, stateUpdates: Partial<AppState> = {}) => {
    // Phase 1: Start blur transition (400ms, fade to 55%)
    setAppState(prev => ({
      ...prev,
      pageTransition: {
        isTransitioning: true,
        fromPage: prev.currentPage,
        toPage: targetPage,
        phase: 'blur',
        direction: 'forward'
      }
    }));

    // Phase 2: Switch page and start fade-in (starts at 350ms, 50ms overlap)
    setTimeout(() => {
      setAppState(prev => ({
        ...prev,
        ...stateUpdates,
        currentPage: targetPage,
        pageTransition: {
          isTransitioning: true,
          fromPage: prev.pageTransition.fromPage,
          toPage: targetPage,
          phase: 'fade-in',
          direction: 'forward'
        }
      }));
    }, 350);

    // End transition (after fade-in completes)
    setTimeout(() => {
      setAppState(prev => ({
        ...prev,
        pageTransition: {
          isTransitioning: false,
          phase: 'none',
          direction: 'forward'
        }
      }));
    }, 750);
  };

  const navigateToEditMenu = (menuName: string, entryPoint: string) => {
    const menu = appState.menus.find(m => m.name === menuName);
    setAppState(prev => ({
      ...prev,
      currentPage: 'edit-menu',
      editingMenu: menu || { name: menuName, entryPoint },
      activeManagementTab: 'menus' // Set to menus so we return to the menus tab
    }));
  };

  const navigateToOrderManagement = () => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'order-management'
    }));
  };

  const navigateToEmailPreview = (order: OrderDetails, prepTimeMinutes?: number) => {
    transitionToPage('email-preview', {
      selectedOrderForEmail: order
    });
  };

  const navigateToDenialEmailPreview = (order: OrderDetails, denialReason: string, denialComment?: string) => {
    transitionToPage('denial-email-preview', {
      selectedOrderForDenialEmail: {
        order,
        denialReason,
        denialComment
      }
    });
  };

  const navigateToMenuManagement = () => {
    // Direct navigation without animation for sidebar navigation
    setAppState(prev => ({
      ...prev,
      currentPage: 'menu-management'
    }));
  };

  const navigateToCompendium = () => {
    // Direct navigation without animation for sidebar navigation
    setAppState(prev => ({
      ...prev,
      currentPage: 'compendium'
    }));
  };

  const navigateToGuestHub = () => {
    transitionToPage('guest-hub');
  };

  const navigateBackToGuestItemDetails = () => {
    // This will navigate back to guest hub with the source item selected
    // The GuestHubPage will show the item details if sourceGuestItem is set
    // Don't clear sourceGuestItem here since we want to pass it to GuestHubPage
    transitionToPage('guest-hub');
  };

  const clearSourceItem = () => {
    setAppState(prev => ({
      ...prev,
      sourceGuestItem: undefined
    }));
  };

  const navigateToFoodOrdering = (connectedMenus: string[], sourceItem?: CompendiumItem) => {
    setAppState(prev => ({
      ...prev,
      connectedMenusForOrdering: connectedMenus,
      orderingContext: 'guest-hub',
      sourceGuestItem: sourceItem
    }));
    transitionToPage('mobile-menu-ordering');
  };

  const navigateToEditCompendiumSection = (sectionName: string) => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'edit-compendium-section',
      editingCompendiumSection: sectionName
    }));
  };

  const navigateBackToCompendium = () => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'compendium',
      editingCompendiumSection: undefined
    }));
  };

  const navigateToEditCompendiumItem = (itemName: string, sectionName: string, sectionId: string, itemId?: string) => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'edit-compendium-item',
      editingCompendiumItem: {
        itemName,
        sectionName,
        sectionId,
        itemId // Add itemId to track existing items
      }
    }));
  };

  const navigateBackToEditCompendiumSection = () => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'edit-compendium-section',
      editingCompendiumItem: undefined,
      compendiumRefreshKey: Date.now() // Force refresh of section page
    }));
  };

  const saveCompendiumItem = (item: CompendiumItem) => {
    const editingItem = appState.editingCompendiumItem;
    if (!editingItem) return;

    // Set the correct sectionId and save the item
    const itemToSave = {
      ...item,
      sectionId: editingItem.sectionId
    };
    persistCompendiumItem(itemToSave);
    
    // Show success message
    showToast('Item saved successfully', 'success');
    
    // Update the editing item state to include the saved item ID for future edits
    setAppState(prev => ({
      ...prev,
      editingCompendiumItem: {
        ...prev.editingCompendiumItem!,
        itemId: itemToSave.id
      }
    }));
    
    // Don't navigate - stay on the edit page
  };

  const navigateToMenuManagementWithTab = (tab: 'menus' | 'item-library' | 'settings') => {
    transitionToPage('menu-management', {
      activeManagementTab: tab
    });
  };


  const navigateToMobileMenuOrdering = () => {
    transitionToPage('mobile-preview');
  };

  const navigateBackFromPreview = () => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'menu-management',
      previewingMenu: undefined,
      isPreviewMode: false,
      cart: {} // Clear cart when ending preview
    }));
  };

  const navigateBackToMobilePreview = () => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'mobile-preview'
    }));
  };

  const navigateToOrderSummary = () => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'order-summary'
    }));
  };

  const navigateBackToMobileMenuOrdering = () => {
    setAppState(prev => ({
      ...prev,
      currentPage: prev.isPreviewMode ? 'menu-preview' : 'mobile-menu-ordering'
    }));
  };

  const navigateToOrderLoading = () => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'order-loading'
    }));
    
    // After 3 seconds, navigate to confirmation
    setTimeout(() => {
      setAppState(prev => ({
        ...prev,
        currentPage: 'order-confirmation'
      }));
    }, 3000);
  };

  const navigateToOrderConfirmation = () => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'order-confirmation'
    }));
  };

  const closeOrderFlow = () => {
    setAppState(prev => {
      // Navigate based on ordering context
      const targetPage = prev.orderingContext === 'guest-hub' ? 'guest-hub' : 'mobile-menu-ordering';
      
      return {
        ...prev,
        currentPage: targetPage,
        cart: {}, // Clear the cart after order completion
        // Clear ordering context and connected menus after order completion
        orderingContext: undefined,
        connectedMenusForOrdering: undefined
      };
    });
  };

  // Helper function to generate cart key
  const generateCartKey = (itemId: string, specialRequests: string = '') => {
    return `${itemId}|${specialRequests}`;
  };

  // Helper function to add item to cart with special requests
  const addItemToCart = (item: SectionItem, quantity: number, specialRequests: string = '') => {
    const cartKey = generateCartKey(item.id, specialRequests);
    setAppState(prev => ({
      ...prev,
      cart: {
        ...prev.cart,
        [cartKey]: {
          item: { ...item, specialRequests },
          quantity: (prev.cart[cartKey]?.quantity || 0) + quantity,
          specialRequests
        }
      }
    }));
    
    // Show feedback animation
    setFeedbackState({
      isVisible: true,
      type: 'success',
      message: `${item.name} added to cart!`
    });
    
    // Hide feedback after 2 seconds
    setTimeout(() => {
      setFeedbackState(prev => ({ ...prev, isVisible: false }));
    }, 2000);
  };

  const handleUpdateQuantity = (item: SectionItem, quantity: number) => {
    const cartKey = generateCartKey(item.id, item.specialRequests || '');
    setAppState(prev => {
      if (quantity <= 0) {
        const { [cartKey]: removed, ...rest } = prev.cart;
        return { ...prev, cart: rest };
      }
      
      // If item exists in cart, update quantity
      const existingCartItem = prev.cart[cartKey];
      if (existingCartItem) {
        return {
          ...prev,
          cart: {
            ...prev.cart,
            [cartKey]: {
              ...existingCartItem,
              quantity
            }
          }
        };
      }
      
      // If item doesn't exist, add it with the specified quantity
      return {
        ...prev,
        cart: {
          ...prev.cart,
          [cartKey]: {
            item,
            quantity,
            specialRequests: item.specialRequests || ''
          }
        }
      };
    });
  };

  // Get all cart items from cart state
  const getAllCartItems = (): SectionItem[] => {
    return Object.values(appState.cart).map(cartEntry => cartEntry.item);
  };

  // Get cart for legacy compatibility (used by MobileMenuOrdering)
  const getLegacyCart = (): Record<string, number> => {
    const legacyCart: Record<string, number> = {};
    Object.values(appState.cart).forEach(cartEntry => {
      const key = cartEntry.item.id;
      legacyCart[key] = (legacyCart[key] || 0) + cartEntry.quantity;
    });
    return legacyCart;
  };


  const navigateToEditItem = (itemId: string) => {
    // First check centralized food items data
    let item = FOOD_ITEMS.find(i => i.id === itemId);
    
    // If not found in static data, check localStorage for saved items
    if (!item) {
      import('@/utils/persistence').then(({ getItem }) => {
        const savedItem = getItem(itemId);
        if (savedItem) {
          setAppState(prev => ({
            ...prev,
            currentPage: 'edit-item',
            editingItem: savedItem,
            activeManagementTab: 'item-library'
          }));
        } else {
          console.error(`Item with ID ${itemId} not found`);
        }
      });
      return;
    }
    
    setAppState(prev => ({
      ...prev,
      currentPage: 'edit-item',
      editingItem: item,
      activeManagementTab: 'item-library' // Set to item-library so we return to the correct tab
    }));
  };

  const saveItem = (item: FoodItem) => {
    // Update the MenuManagementPage state if the update function is available
    if ((window as any).__updateMenuItem) {
      (window as any).__updateMenuItem(item);
    }
    
    // Items are persisted to localStorage in the EditItemPage itself
    showToast('Item saved successfully', 'success');
  };

  const navigateToEditSection = (sectionId: string) => {
    // Find the actual section from the current menu
    const currentMenu = appState.editingMenu;
    const section = currentMenu?.sections?.find(s => s.id === sectionId);
    
    if (section) {
      setAppState(prev => ({
        ...prev,
        currentPage: 'edit-section',
        editingSection: section
      }));
    } else {
      // Create new section if not found
      const newSection: MenuSection = {
        id: sectionId,
        title: sectionId.charAt(0).toUpperCase() + sectionId.slice(1),
        items: []
      };
      setAppState(prev => ({
        ...prev,
        currentPage: 'edit-section',
        editingSection: newSection
      }));
    }
  };

  const navigateToCreateSection = (sectionName: string) => {
    const sectionId = sectionName.toLowerCase().replace(/\s+/g, '-');
    const newSection: MenuSection = {
      id: sectionId,
      title: sectionName,
      items: []
    };
    setAppState(prev => ({
      ...prev,
      currentPage: 'edit-section',
      editingSection: newSection
    }));
  };

  const navigateBackToEditMenu = () => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'edit-menu'
    }));
  };

  const saveSection = (section: MenuSection) => {
    // Update the section in the current menu
    setAppState(prev => {
      if (!prev.editingMenu) return prev;

      const updatedMenus = prev.menus.map(menu => {
        if (menu.name === prev.editingMenu?.name) {
          const updatedSections = menu.sections ? 
            menu.sections.map(s => s.id === section.id ? section : s) :
            [section];
          
          // If section doesn't exist, add it
          if (!menu.sections?.some(s => s.id === section.id)) {
            updatedSections.push(section);
          }

          return {
            ...menu,
            sections: updatedSections
          };
        }
        return menu;
      });

      return {
        ...prev,
        currentPage: 'edit-menu',
        editingSection: undefined,
        menus: updatedMenus,
        editingMenu: updatedMenus.find(m => m.name === prev.editingMenu?.name)
      };
    });
    showToast('Section saved successfully', 'success');
  };

  const navigateToMenuAvailability = () => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'menu-availability'
    }));
  };

  const saveMenuAvailability = (availability: any[]) => {
    const menuName = appState.editingMenu?.name;
    if (menuName) {
      // Save to localStorage persistence
      persistMenuAvailability(menuName, availability);
      showToast('Menu availability saved successfully', 'success');
    } else {
      showToast('Error: No menu selected', 'error');
    }
    
    // Navigate back to edit menu
    setAppState(prev => ({
      ...prev,
      currentPage: 'edit-menu'
    }));
  };

  const createNewMenu = async (menuName: string, parsedMenu?: ParsedMenu) => {
    console.log('🏗️ Creating new menu:', { menuName, parsedMenu });
    
    // First, save all parsed items to the Item Library
    const createdItemIds: string[] = [];
    
    if (parsedMenu && parsedMenu.sections && parsedMenu.sections.length > 0) {
      console.log(`📥 Processing ${parsedMenu.sections.length} sections from parsed menu...`);
      
      // Import persistence functions once
      const { saveItem } = await import('@/utils/persistence');
      
      parsedMenu.sections.forEach((parsedSection) => {
        console.log(`🔍 Processing section: "${parsedSection.sectionName}" with ${parsedSection.items.length} items`);
        
        parsedSection.items.forEach((item) => {
          // Create a unique ID for each item
          const itemId = `parsed-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
          
          // Create FoodItem for the Item Library
          const foodItem: CentralizedFoodItem = {
            id: itemId,
            name: item.name,
            internalName: item.name,
            description: item.description || '', // Use extracted description or empty string
            price: item.price || 0, // Use extracted price or default to 0
            image: '',
            menus: [menuName], // Associate with this menu
            available: true
          };
          
          // Save to localStorage persistence (synchronous now)
          saveItem(itemId, foodItem);
          
          console.log(`📝 Saved item "${item.name}" to Item Library with ID: ${itemId}`);
          createdItemIds.push(itemId);
        });
      });
      
      console.log(`✅ Successfully processed all items. Created ${createdItemIds.length} items total.`);
    } else {
      console.log('⚠️ No parsed menu data or empty sections array');
    }
    
    // Convert parsed menu sections to MenuSection format, referencing Item Library items
    console.log(`🔄 Starting section conversion. ParsedMenu exists: ${!!parsedMenu}`);
    console.log(`🔄 ParsedMenu sections: ${parsedMenu ? parsedMenu.sections.length : 'N/A'}`);
    
    const sections: MenuSection[] = parsedMenu && parsedMenu.sections ? 
      parsedMenu.sections.map((parsedSection, sectionIndex) => {
        console.log(`🔨 Converting section ${sectionIndex}: "${parsedSection.sectionName}" with ${parsedSection.items.length} items`);
        
        const section = {
          id: parsedSection.sectionName.toLowerCase().replace(/\s+/g, '-'),
          title: parsedSection.sectionName,
          items: parsedSection.items.map((item, itemIndex) => {
            // Calculate the correct item ID from our created items
            const globalItemIndex = parsedMenu.sections
              .slice(0, sectionIndex)
              .reduce((total, sec) => total + sec.items.length, 0) + itemIndex;
            
            const itemRef = {
              id: createdItemIds[globalItemIndex] || `fallback-${itemIndex}`,
              name: item.name,
              image: '',
              specialRequests: undefined
            };
            
            console.log(`   📦 Item ${itemIndex}: "${item.name}" → ID: ${itemRef.id}`);
            return itemRef;
          })
        };
        
        console.log(`✅ Created section: "${section.title}" with ${section.items.length} items`);
        return section;
      }) : [];

    console.log(`🔢 FINAL: Total sections created: ${sections.length}`);
    console.log(`📋 FINAL: All sections:`, sections);
    console.log(`📚 FINAL: Created ${createdItemIds.length} items in Item Library`);
    console.log(`🆔 FINAL: Item IDs:`, createdItemIds);

    const newMenu: MenuWithSections = {
      name: menuName,
      internal_name: menuName, // Initially same as external name
      external_name: menuName, // Initially same as name
      entryPoint: 'In-room dining',
      isNew: true,
      sections: sections
    };

    console.log(`✅ Final menu object:`, newMenu);

    const updatedMenus = [...appState.menus, newMenu];
    
    setAppState(prev => ({
      ...prev,
      menus: updatedMenus,
      currentPage: 'edit-menu',
      editingMenu: newMenu
    }));
    
    // IMPORTANT: Save to localStorage so it persists
    console.log(`💾 Saving menu to localStorage...`);
    saveMenuData(updatedMenus);
    console.log(`✅ Menu saved to localStorage successfully!`);
    
    console.log(`🎯 Menu creation complete. Should navigate to edit-menu page.`);
  };

  const saveMenu = (externalName: string, internalName: string, isNew: boolean) => {
    if (!externalName.trim() || !internalName.trim()) {
      showToast('Both external and internal menu names are required', 'error');
      return false;
    }

    if (isNew) {
      setAppState(prev => ({
        ...prev,
        menus: prev.menus.map(menu =>
          menu.isNew && menu.name === prev.editingMenu?.name
            ? { 
                ...menu, 
                name: externalName,
                external_name: externalName,
                internal_name: internalName,
                isNew: false 
              }
            : menu
        ),
        editingMenu: prev.editingMenu ? { 
          ...prev.editingMenu, 
          name: externalName,
          external_name: externalName,
          internal_name: internalName,
          isNew: false 
        } : undefined
      }));
      showToast('Menu created successfully', 'success');
    } else {
      // Update existing menu
      setAppState(prev => ({
        ...prev,
        menus: prev.menus.map(menu =>
          menu.name === prev.editingMenu?.name
            ? { 
                ...menu, 
                name: externalName,
                external_name: externalName,
                internal_name: internalName
              }
            : menu
        ),
        editingMenu: prev.editingMenu ? { 
          ...prev.editingMenu, 
          name: externalName,
          external_name: externalName,
          internal_name: internalName
        } : undefined
      }));
      showToast('Menu saved successfully', 'success');
    }
    return true;
  };

  const deleteMenu = (menuName: string) => {
    const updatedMenus = appState.menus.filter(menu => menu.name !== menuName);
    
    setAppState(prev => ({
      ...prev,
      menus: updatedMenus
    }));
    
    // IMPORTANT: Save to localStorage so deletion persists
    console.log(`🗑️ Saving updated menu list to localStorage after deleting "${menuName}"...`);
    saveMenuData(updatedMenus);
    console.log(`✅ Menu deletion saved to localStorage successfully!`);
    
    showToast('Menu deleted successfully', 'success');
  };

  const showToast = (message: string, type: 'success' | 'error' | 'warning') => {
    setAppState(prev => ({
      ...prev,
      toast: {
        isVisible: true,
        message,
        type
      }
    }));
  };

  const hideToast = () => {
    setAppState(prev => ({
      ...prev,
      toast: {
        ...prev.toast,
        isVisible: false
      }
    }));
  };

  const updatePrepTime = (prepTimeMinutes: number) => {
    setAppState(prev => ({
      ...prev,
      prepTimeMinutes
    }));
    savePrepTime(prepTimeMinutes);
  };

  // Create page wrapper with transition effects
  const renderPage = (pageContent: React.ReactNode) => {
    const { phase, isTransitioning } = appState.pageTransition;
    
    // Phase-specific styling
    const getTransitionStyles = () => {
      switch (phase) {
        case 'blur':
          // Phase 1: Blur out and fade to 55% (400ms)
          return {
            filter: 'blur(3px)',
            opacity: 0.55,
            transform: 'scale(0.98)',
            transition: 'all 400ms ease-out'
          };
        case 'fade-in':
          // Phase 2: New page fades from 55% to 100% (400ms)
          return {
            filter: 'blur(0px)',
            opacity: 1,
            transform: 'scale(1)',
            transition: 'all 400ms ease-out'
          };
        default:
          // No transition
          return {
            filter: 'blur(0px)',
            opacity: 1,
            transform: 'scale(1)',
            transition: 'none'
          };
      }
    };
    
    return (
      <div style={getTransitionStyles()}>
        {pageContent}
        <Toast
          message={appState.toast.message}
          type={appState.toast.type}
          isVisible={appState.toast.isVisible}
          onClose={hideToast}
        />
      </div>
    );
  };

  switch (appState.currentPage) {
    case 'order-management':
      return renderPage(
        <OrderManagementPage 
          onManageMenus={navigateToMenuManagement}
          onViewEmail={navigateToEmailPreview}
          onViewDenialEmail={navigateToDenialEmailPreview}
          prepTimeMinutes={appState.prepTimeMinutes}
        />
      );
    case 'email-preview':
      return renderPage(
        <EmailPreview
          order={appState.selectedOrderForEmail!}
          onClose={() => transitionToPage('order-management')}
          prepTimeMinutes={appState.prepTimeMinutes}
        />
      );
    case 'denial-email-preview':
      // Add safety check for selectedOrderForDenialEmail
      if (!appState.selectedOrderForDenialEmail?.order) {
        // If no order is selected, redirect back to order management
        setTimeout(() => transitionToPage('order-management'), 0);
        return renderPage(<div>Loading...</div>);
      }
      
      return (
        <>
          <DenialEmailPreview
            order={appState.selectedOrderForDenialEmail.order}
            denialReason={appState.selectedOrderForDenialEmail.denialReason}
            denialComment={appState.selectedOrderForDenialEmail.denialComment}
            onClose={() => transitionToPage('order-management')}
          />
          <Toast
            message={appState.toast.message}
            type={appState.toast.type}
            isVisible={appState.toast.isVisible}
            onClose={hideToast}
          />
        </>
      );
    case 'menu-availability':
      return renderPage(
        <MenuAvailabilityPage
          menuName={appState.editingMenu?.name}
          onBack={navigateBackToEditMenu}
          onSave={saveMenuAvailability}
        />
      );
    case 'edit-section':
      return (
        <>
          <EditSectionPage
            section={appState.editingSection}
            onBack={navigateBackToEditMenu}
            onSave={saveSection}
            parentMenu={appState.editingMenu ? {
              name: appState.editingMenu.name,
              sections: appState.editingMenu.sections || []
            } : undefined}
          />
          <Toast
            message={appState.toast.message}
            type={appState.toast.type}
            isVisible={appState.toast.isVisible}
            onClose={hideToast}
          />
        </>
      );
    case 'edit-item':
      return (
        <>
          <EditItemPage
            item={appState.editingItem}
            onBack={() => navigateToMenuManagementWithTab('item-library')}
            onSave={saveItem}
          />
          <Toast
            message={appState.toast.message}
            type={appState.toast.type}
            isVisible={appState.toast.isVisible}
            onClose={hideToast}
          />
        </>
      );
    case 'menu-preview':
      return (
        <>
          <MobileMenuOrdering
            menuName={appState.previewingMenu?.name}
            menus={appState.previewingMenu ? [appState.previewingMenu] : []}
            cart={getLegacyCart()}
            onBack={navigateBackFromPreview}
            onViewCart={navigateToOrderSummary}
            onUpdateQuantity={handleUpdateQuantity}
            onAddItemToCart={addItemToCart}
            isPreviewMode={true}
          />
          <Toast
            message={appState.toast.message}
            type={appState.toast.type}
            isVisible={appState.toast.isVisible}
            onClose={hideToast}
          />
        </>
      );
    case 'mobile-menu-ordering':
      return (
        <>
          <MobileMenuOrdering
            menuName={appState.previewingMenu?.name}
            menus={appState.menus}
            cart={getLegacyCart()}
            onBack={appState.connectedMenusForOrdering ? 
              (appState.sourceGuestItem ? navigateBackToGuestItemDetails : navigateToGuestHub) : 
              navigateBackToMobilePreview}
            onViewCart={navigateToOrderSummary}
            onUpdateQuantity={handleUpdateQuantity}
            onAddItemToCart={addItemToCart}
            connectedMenus={appState.connectedMenusForOrdering}
          />
          <Toast
            message={appState.toast.message}
            type={appState.toast.type}
            isVisible={appState.toast.isVisible}
            onClose={hideToast}
          />
        </>
      );
    case 'order-summary':
      return (
        <>
          <OrderSummary
            cartEntries={Object.values(appState.cart)}
            onBack={navigateBackToMobileMenuOrdering}
            onAddMoreItems={navigateBackToMobileMenuOrdering}
            onUpdateQuantity={handleUpdateQuantity}
            onSubmitOrder={navigateToOrderLoading}
            isPreviewMode={appState.isPreviewMode}
          />
          <Toast
            message={appState.toast.message}
            type={appState.toast.type}
            isVisible={appState.toast.isVisible}
            onClose={hideToast}
          />
        </>
      );
    case 'order-loading':
      return (
        <>
          <OrderSubmissionLoading
            onClose={closeOrderFlow}
          />
          <Toast
            message={appState.toast.message}
            type={appState.toast.type}
            isVisible={appState.toast.isVisible}
            onClose={hideToast}
          />
        </>
      );
    case 'order-confirmation':
      return (
        <>
          <OrderConfirmation
            cartEntries={Object.values(appState.cart)}
            onClose={closeOrderFlow}
            onGoToOrderManagement={navigateToOrderManagement}
          />
          <Toast
            message={appState.toast.message}
            type={appState.toast.type}
            isVisible={appState.toast.isVisible}
            onClose={hideToast}
          />
        </>
      );
    case 'mobile-preview':
      return renderPage(
        <MobileGuestExperience
          onBack={navigateToMenuManagement}
          onOrderClick={() => setAppState(prev => ({ 
            ...prev, 
            currentPage: 'mobile-menu-ordering',
            orderingContext: 'menu-management'
          }))}
        />
      );
    case 'edit-menu':
      // Debug: Log the editing menu state
      console.log('🔍 EditMenu page rendering. EditingMenu state:', appState.editingMenu);
      console.log('📂 Sections being passed to EditMenuPage:', appState.editingMenu?.sections);
      console.log('📊 Section count:', appState.editingMenu?.sections?.length || 0);
      
      return (
        <>
          <EditMenuPage
            menuName={appState.editingMenu?.name}
            internalName={appState.editingMenu?.internal_name}
            externalName={appState.editingMenu?.external_name}
            isNewMenu={appState.editingMenu?.isNew}
            sections={appState.editingMenu?.sections}
            onBack={() => navigateToMenuManagementWithTab('menus')}
            onSave={saveMenu}
            onEditSection={navigateToEditSection}
            onCreateSection={navigateToCreateSection}
            onAddAvailabilityHours={navigateToMenuAvailability}
          />
          <Toast
            message={appState.toast.message}
            type={appState.toast.type}
            isVisible={appState.toast.isVisible}
            onClose={hideToast}
          />
        </>
      );
    case 'compendium':
      return renderPage(
        <CompendiumPage
          onBack={navigateToOrderManagement}
          onNavigateToMenuManagement={navigateToMenuManagement}
          onEditSection={navigateToEditCompendiumSection}
          onNavigateToGuestHub={navigateToGuestHub}
        />
      );
    case 'edit-compendium-section':
      return renderPage(
        <EditCompendiumSectionPage
          key={appState.compendiumRefreshKey}
          sectionName={appState.editingCompendiumSection || 'Untitled Section'}
          onBack={navigateBackToCompendium}
          onNavigateToMenuManagement={navigateToMenuManagement}
          onEditItem={navigateToEditCompendiumItem}
          onNavigateToGuestHub={navigateToGuestHub}
        />
      );
    case 'edit-compendium-item':
      return renderPage(
        <EditCompendiumItemPage
          itemName={appState.editingCompendiumItem?.itemName || 'Untitled Item'}
          sectionName={appState.editingCompendiumItem?.sectionName || 'Unknown Section'}
          sectionId={appState.editingCompendiumItem?.sectionId || ''}
          itemId={appState.editingCompendiumItem?.itemId}
          onBack={navigateBackToEditCompendiumSection}
          onNavigateToMenuManagement={navigateToMenuManagement}
          onSave={saveCompendiumItem}
          onNavigateToGuestHub={navigateToGuestHub}
        />
      );
    case 'guest-hub':
      return renderPage(
        <GuestHubPage
          onBack={navigateToCompendium}
          onNavigateToFoodOrdering={navigateToFoodOrdering}
          initialSelectedItem={appState.sourceGuestItem}
          onClearSourceItem={clearSourceItem}
        />
      );
    case 'menu-management':
    default:
      return renderPage(
        <MenuManagementPage
          menus={appState.menus}
          onEditMenu={navigateToEditMenu}
          onCreateMenu={createNewMenu}
          onDeleteMenu={deleteMenu}
          onEditItem={navigateToEditItem}
          onUpdateItem={saveItem}
          onShowToast={showToast}
          initialActiveTab={appState.activeManagementTab}
          onGoToOrdering={navigateToMobileMenuOrdering}
          onBackToOrders={navigateToOrderManagement}
          onCompendium={navigateToCompendium}
          prepTimeMinutes={appState.prepTimeMinutes}
          onUpdatePrepTime={updatePrepTime}
        />
      );
  }
};