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
import { EmailPreview } from './EmailPreview';
import { DenialEmailPreview } from './DenialEmailPreview';
import { Toast } from './Toast';
import { FOOD_ITEMS, convertToSectionItem, getFoodItemsByMenu, type FoodItem as CentralizedFoodItem } from '@/data/foodItems';
import { loadData, saveMenuData, saveMenuAvailability as persistMenuAvailability, savePrepTime } from '@/utils/persistence';
import { AnimatePresence } from 'framer-motion';

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

type Page = 'order-management' | 'menu-management' | 'edit-menu' | 'edit-item' | 'edit-section' | 'menu-availability' | 'mobile-preview' | 'mobile-menu-ordering' | 'menu-preview' | 'order-summary' | 'order-loading' | 'order-confirmation' | 'email-preview' | 'denial-email-preview';

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

  const [appState, setAppState] = useState<AppState>({
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
  });

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
        phase: 'blur'
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
          phase: 'fade-in'
        }
      }));
    }, 350);

    // End transition (after fade-in completes)
    setTimeout(() => {
      setAppState(prev => ({
        ...prev,
        pageTransition: {
          isTransitioning: false,
          phase: 'none'
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
    transitionToPage('menu-management');
  };

  const navigateToMenuManagementWithTab = (tab: 'menus' | 'item-library' | 'settings') => {
    transitionToPage('menu-management', {
      activeManagementTab: tab
    });
  };


  const navigateToMobileMenuOrdering = () => {
    transitionToPage('mobile-preview');
  };

  const navigateToMenuPreview = (menuName: string) => {
    const menu = appState.menus.find(m => m.name === menuName);
    setAppState(prev => ({
      ...prev,
      currentPage: 'menu-preview',
      previewingMenu: menu || { name: menuName, entryPoint: 'Preview' },
      isPreviewMode: true,
      cart: {} // Clear cart when starting preview
    }));
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
    setAppState(prev => ({
      ...prev,
      currentPage: 'mobile-menu-ordering',
      cart: {} // Clear the cart after order completion
    }));
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

  const createNewMenu = (menuName: string) => {
    const newMenu: MenuItem = {
      name: menuName,
      internal_name: menuName, // Initially same as external name
      external_name: menuName, // Initially same as name
      entryPoint: 'In-room dining',
      isNew: true
    };

    setAppState(prev => ({
      ...prev,
      menus: [...prev.menus, newMenu],
      currentPage: 'edit-menu',
      editingMenu: newMenu
    }));
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
    setAppState(prev => ({
      ...prev,
      menus: prev.menus.filter(menu => menu.name !== menuName)
    }));
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
            onBack={navigateBackToMobilePreview}
            onViewCart={navigateToOrderSummary}
            onUpdateQuantity={handleUpdateQuantity}
            onAddItemToCart={addItemToCart}
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
            onBack={appState.isPreviewMode ? navigateBackFromPreview : navigateBackToMobileMenuOrdering}
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
          onOrderClick={() => setAppState(prev => ({ ...prev, currentPage: 'mobile-menu-ordering' }))}
        />
      );
    case 'edit-menu':
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
    case 'menu-management':
    default:
      return renderPage(
        <MenuManagementPage
          menus={appState.menus}
          onEditMenu={navigateToEditMenu}
          onCreateMenu={createNewMenu}
          onDeleteMenu={deleteMenu}
          onPreviewMenu={navigateToMenuPreview}
          onEditItem={navigateToEditItem}
          onUpdateItem={saveItem}
          onShowToast={showToast}
          initialActiveTab={appState.activeManagementTab}
          onGoToOrdering={navigateToMobileMenuOrdering}
          onBackToOrders={navigateToOrderManagement}
          prepTimeMinutes={appState.prepTimeMinutes}
          onUpdatePrepTime={updatePrepTime}
        />
      );
  }
};