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
import { Toast } from './Toast';
import { FOOD_ITEMS, convertToSectionItem, getFoodItemsByMenu, type FoodItem as CentralizedFoodItem } from '@/data/foodItems';
import { loadData, saveMenuData, saveMenuAvailability as persistMenuAvailability } from '@/utils/persistence';

type Page = 'menu-management' | 'edit-menu' | 'edit-item' | 'edit-section' | 'menu-availability' | 'mobile-preview' | 'mobile-menu-ordering' | 'order-summary' | 'order-loading' | 'order-confirmation';

interface MenuItem {
  name: string;
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
  toast: {
    isVisible: boolean;
    message: string;
    type: 'success' | 'error' | 'warning';
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

  const [appState, setAppState] = useState<AppState>({
    currentPage: 'menu-management',
    menus: savedData.menus || initialMenus,
    cart: {},
    activeManagementTab: 'menus',
    toast: {
      isVisible: false,
      message: '',
      type: 'success'
    }
  });

  // Save menus to localStorage whenever they change
  useEffect(() => {
    saveMenuData(appState.menus);
  }, [appState.menus]);

  const navigateToEditMenu = (menuName: string, entryPoint: string) => {
    const menu = appState.menus.find(m => m.name === menuName);
    setAppState(prev => ({
      ...prev,
      currentPage: 'edit-menu',
      editingMenu: menu || { name: menuName, entryPoint },
      activeManagementTab: 'menus' // Set to menus so we return to the menus tab
    }));
  };

  const navigateToMenuManagement = () => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'menu-management'
    }));
  };

  const navigateToMenuManagementWithTab = (tab: 'menus' | 'item-library' | 'settings') => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'menu-management',
      activeManagementTab: tab
    }));
  };


  const navigateToMobileMenuOrdering = () => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'mobile-preview'
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
      currentPage: 'mobile-menu-ordering'
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
    // Use centralized food items data
    const item = FOOD_ITEMS.find(i => i.id === itemId) || FOOD_ITEMS[0];
    
    setAppState(prev => ({
      ...prev,
      currentPage: 'edit-item',
      editingItem: item,
      activeManagementTab: 'item-library' // Set to item-library so we return to the correct tab
    }));
  };

  const saveItem = (item: FoodItem) => {
    setAppState(prev => {
      // Find the menu and section containing this item
      const updatedMenus = prev.menus.map(menu => {
        if (menu.name === prev.editingMenu?.name) {
          const updatedSections = menu.sections?.map(section => {
            if (section.id === prev.editingSection?.id) {
              // Update or add the item to this section
              const existingItemIndex = section.items.findIndex(existingItem => existingItem.id === item.id);
              const updatedItems = [...section.items];
              
              if (existingItemIndex >= 0) {
                // Update existing item
                updatedItems[existingItemIndex] = {
                  id: item.id,
                  name: item.name,
                  image: item.image || ''
                };
              } else {
                // Add new item
                updatedItems.push({
                  id: item.id,
                  name: item.name,
                  image: item.image || ''
                });
              }
              
              return {
                ...section,
                items: updatedItems
              };
            }
            return section;
          }) || [];
          
          return {
            ...menu,
            sections: updatedSections
          };
        }
        return menu;
      });

      return {
        ...prev,
        menus: updatedMenus
      };
    });
    
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

  const saveMenu = (menuName: string, isNew: boolean) => {
    if (!menuName.trim()) {
      showToast('Menu name is required', 'error');
      return false;
    }

    if (isNew) {
      setAppState(prev => ({
        ...prev,
        menus: prev.menus.map(menu =>
          menu.isNew && menu.name === prev.editingMenu?.name
            ? { ...menu, name: menuName, isNew: false }
            : menu
        ),
        editingMenu: prev.editingMenu ? { ...prev.editingMenu, name: menuName, isNew: false } : undefined
      }));
      showToast('Menu created successfully', 'success');
    } else {
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

  switch (appState.currentPage) {
    case 'menu-availability':
      return (
        <>
          <MenuAvailabilityPage
            menuName={appState.editingMenu?.name}
            onBack={navigateBackToEditMenu}
            onSave={saveMenuAvailability}
          />
          <Toast
            message={appState.toast.message}
            type={appState.toast.type}
            isVisible={appState.toast.isVisible}
            onClose={hideToast}
          />
        </>
      );
    case 'edit-section':
      return (
        <>
          <EditSectionPage
            section={appState.editingSection}
            onBack={navigateBackToEditMenu}
            onSave={saveSection}
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
            onBack={navigateBackToMobileMenuOrdering}
            onAddMoreItems={navigateBackToMobileMenuOrdering}
            onUpdateQuantity={handleUpdateQuantity}
            onSubmitOrder={navigateToOrderLoading}
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
      return (
        <>
          <MobileGuestExperience
            onBack={navigateToMenuManagement}
            onOrderClick={() => setAppState(prev => ({ ...prev, currentPage: 'mobile-menu-ordering' }))}
          />
          <Toast
            message={appState.toast.message}
            type={appState.toast.type}
            isVisible={appState.toast.isVisible}
            onClose={hideToast}
          />
        </>
      );
    case 'edit-menu':
      return (
        <>
          <EditMenuPage
            menuName={appState.editingMenu?.name}
            isNewMenu={appState.editingMenu?.isNew}
            sections={appState.editingMenu?.sections}
            onBack={() => navigateToMenuManagementWithTab('menus')}
            onSave={saveMenu}
            onEditSection={navigateToEditSection}
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
      return (
        <>
          <MenuManagementPage
            menus={appState.menus}
            onEditMenu={navigateToEditMenu}
            onCreateMenu={createNewMenu}
            onDeleteMenu={deleteMenu}
            onEditItem={navigateToEditItem}
            initialActiveTab={appState.activeManagementTab}
            onGoToOrdering={navigateToMobileMenuOrdering}
          />
          <Toast
            message={appState.toast.message}
            type={appState.toast.type}
            isVisible={appState.toast.isVisible}
            onClose={hideToast}
          />
        </>
      );
  }
};