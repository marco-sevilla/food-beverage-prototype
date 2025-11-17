'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@mdi/react';
import clsx from 'clsx';
import { colors, spacing } from '@/lib/design-tokens';
import { AnimatedSection } from './PageTransition';
import { CreateMenuModal } from './CreateMenuModal';
import { CreateItemModal } from './CreateItemModal';
import { DeleteMenuModal } from './DeleteMenuModal';
import { DeleteItemModal } from './DeleteItemModal';
import { FOOD_ITEMS, formatMenuDisplay, type FoodItem } from '@/data/foodItems';
import { 
  mdiArrowLeft, 
  mdiHome, 
  mdiBrushVariant, 
  mdiAccountMultiple, 
  mdiSecurity, 
  mdiCog,
  mdiBook,
  mdiFoodForkDrink,
  mdiTrendingUp,
  mdiLoginVariant,
  mdiLogoutVariant,
  mdiMessage,
  mdiCurrencyUsd,
  mdiShieldCheck,
  mdiFileDocument,
  mdiLink,
  mdiChevronDown,
  mdiPencil,
  mdiDelete,
  mdiEye,
  mdiToggleSwitch,
  mdiToggleSwitchOff,
  mdiImage
} from '@mdi/js';
// Import the CanarySidebar component
import CanarySidebar, { SidebarVariant, type SidebarSection, type SidebarNavigationItem } from './CanarySidebar';
import CanarySelect, { type CanarySelectOption } from './temp-components/CanarySelect';
import { InputSize } from './temp-components/types';

// Tab component using component library patterns
interface TabProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  tabRef?: React.RefObject<HTMLButtonElement>;
}

const Tab: React.FC<TabProps> = ({ children, active = false, onClick, tabRef }) => (
  <button 
    ref={tabRef}
    className="flex flex-col items-start overflow-hidden cursor-pointer bg-transparent border-none outline-none" 
    onClick={onClick}
  >
    <div className="flex items-center justify-center py-1 px-4 gap-2">
      <span className={`font-roboto text-body-sm font-medium transition-colors duration-200 ${
        active ? 'text-canary-blue-1' : 'text-canary-black-2'
      }`}>
        {children}
      </span>
    </div>
    <div className="h-1 w-full bg-transparent" />
  </button>
);

// Button component
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'icon';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  if (variant === 'icon') {
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center p-1.5 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90"
    >
      {children}
    </button>
  );
};

// Menu item component
interface MenuItemProps {
  name: string;
  entryPoint: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onPreview?: () => void;
  isLast?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, entryPoint, onEdit, onDelete, onPreview, isLast = false }) => (
  <div className={`flex items-center justify-between py-4 px-4 pr-6 bg-white ${
    isLast ? '' : 'border-b border-neutral-200'
  }`}>
    {/* Menu Name Column - fixed width to match header */}
    <div className="w-48 lg:w-48 md:w-40 sm:w-32 font-roboto text-body-sm font-medium text-canary-black-1 truncate ml-3">
      {name}
    </div>
    
    {/* Entry Points Column - positioned to align with header */}
    <div className="w-48 lg:w-48 md:w-40 sm:w-32 hidden sm:block font-roboto text-body-sm font-normal text-canary-black-1 truncate">
      {entryPoint}
    </div>
    
    {/* Actions Column - fixed width to match header with 3 buttons */}
    <div className="flex items-center gap-2 w-24 justify-end">
      <Button variant="icon" onClick={onPreview}>
        <Icon path={mdiEye} size={0.8} color="#666666" />
      </Button>
      <Button variant="icon" onClick={onEdit}>
        <Icon path={mdiPencil} size={0.8} />
      </Button>
      <Button variant="icon" onClick={onDelete}>
        <Icon path={mdiDelete} size={0.8} color="#E40046" />
      </Button>
    </div>
  </div>
);


// Toggle Switch component
interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => (
  <button
    onClick={() => onChange(!checked)}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
      checked ? 'bg-canary-blue-1' : 'bg-gray-300'
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        checked ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);

// Food Item component for Item Library tab
interface FoodItemProps {
  id: string;
  name: string;
  internalName?: string;
  image: string;
  menus: string[];
  price: number;
  available: boolean;
  onToggle: (id: string, available: boolean) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  isLast?: boolean;
}

const FoodItem: React.FC<FoodItemProps> = ({ 
  id, 
  name, 
  internalName,
  image, 
  menus, 
  price, 
  available, 
  onToggle, 
  onEdit, 
  onDelete,
  isLast = false 
}) => {
  const [imageError, setImageError] = React.useState(false);

  return (
  <div className={`flex items-center justify-between py-4 px-4 pr-6 bg-white ${
    isLast ? '' : 'border-b border-neutral-200'
  }`}>
    {/* Item Column - image + name */}
    <div className="flex items-center gap-3 w-72 lg:w-72 md:w-60 sm:w-48">
      {image && !imageError ? (
        <img 
          src={image} 
          alt={name}
          className="w-10 h-10 rounded object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-10 h-10 bg-neutral-200 rounded flex items-center justify-center">
          <Icon path={mdiImage} size={0.6} color="#666666" />
        </div>
      )}
      <div className="flex flex-col min-w-0">
        <span className="font-roboto text-body-sm font-medium text-canary-black-1 truncate">
          {internalName || name}
        </span>
        {internalName && (
          <span className="font-roboto text-caption text-canary-black-4 truncate">
            {name}
          </span>
        )}
      </div>
    </div>
    
    {/* Menus Column */}
    <div className="w-56 lg:w-56 md:w-44 sm:w-36 font-roboto text-body-sm font-normal text-canary-black-1 truncate">
      {formatMenuDisplay(menus)}
    </div>
    
    {/* Price Column */}
    <div className="w-20 font-roboto text-body-sm font-normal text-canary-black-1">
      ${price.toFixed(2)}
    </div>
    
    {/* Availability Column - toggle + actions */}
    <div className="flex items-center gap-3 w-32 justify-end">
      <ToggleSwitch checked={available} onChange={(checked) => onToggle(id, checked)} />
      <Button variant="icon" onClick={() => onEdit(id)}>
        <Icon path={mdiPencil} size={0.8} />
      </Button>
      <Button variant="icon" onClick={() => onDelete(id)}>
        <Icon path={mdiDelete} size={0.8} color="#E40046" />
      </Button>
    </div>
  </div>
  );
};

// Main component
interface MenuManagementPageProps {
  menus: Array<{ name: string; entryPoint: string; isNew?: boolean }>;
  onEditMenu?: (menuName: string, entryPoint: string) => void;
  onCreateMenu?: (menuName: string) => void;
  onDeleteMenu?: (menuName: string) => void;
  onPreviewMenu?: (menuName: string) => void;
  onEditItem?: (itemId: string) => void;
  onUpdateItem?: (updatedItem: FoodItem) => void;
  onShowToast?: (message: string, type: 'success' | 'error' | 'warning') => void;
  initialActiveTab?: 'menus' | 'item-library' | 'settings';
  onGoToOrdering?: () => void;
  onBackToOrders?: () => void;
  prepTimeMinutes?: number;
  onUpdatePrepTime?: (prepTimeMinutes: number) => void;
}

export const MenuManagementPage: React.FC<MenuManagementPageProps> = ({ 
  menus, 
  onEditMenu, 
  onCreateMenu,
  onDeleteMenu,
  onPreviewMenu,
  onEditItem,
  onUpdateItem,
  onShowToast,
  initialActiveTab = 'menus',
  onGoToOrdering,
  onBackToOrders,
  prepTimeMinutes = 30,
  onUpdatePrepTime
}) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isCreateItemModalOpen, setIsCreateItemModalOpen] = useState(false);
  const [deleteModalState, setDeleteModalState] = useState<{
    isOpen: boolean;
    menuName: string;
  }>({ isOpen: false, menuName: '' });
  const [deleteItemModalState, setDeleteItemModalState] = useState<{
    isOpen: boolean;
    itemId: string;
    itemName: string;
  }>({ isOpen: false, itemId: '', itemName: '' });
  const [activeTab, setActiveTab] = useState<'menus' | 'item-library' | 'settings'>(initialActiveTab);
  
  const [foodItems, setFoodItems] = useState(FOOD_ITEMS);
  const [prepTime, setPrepTime] = useState(prepTimeMinutes.toString());

  // Load saved items from localStorage and merge with default items
  useEffect(() => {
    import('@/utils/persistence').then(({ getAllItems, getImage }) => {
      const savedItems = getAllItems();
      if (Object.keys(savedItems).length > 0) {
        setFoodItems(prevItems => {
          // First, update existing items with saved data
          const updatedExistingItems = prevItems.map(item => {
            const savedItem = savedItems[item.id];
            const savedImage = getImage(item.id);
            if (savedItem) {
              // Merge saved data, prioritizing saved images
              return { 
                ...item, 
                ...savedItem,
                image: savedItem.image || savedImage || item.image
              };
            } else if (savedImage) {
              // Only image was saved separately
              return { ...item, image: savedImage };
            }
            return item;
          });
          
          // Then, add any new items that don't exist in the static FOOD_ITEMS
          const existingItemIds = new Set(prevItems.map(item => item.id));
          const newItems = Object.values(savedItems).filter(savedItem => 
            !existingItemIds.has(savedItem.id)
          ).map(savedItem => ({
            // Ensure all required properties are present with defaults
            ...savedItem,
            menus: savedItem.menus || [],
            available: savedItem.available !== undefined ? savedItem.available : true,
            internalName: savedItem.internalName || savedItem.name,
            description: savedItem.description || '',
            price: savedItem.price || 0,
            image: savedItem.image || ''
          }));
          
          // Combine existing updated items with new items
          return [...updatedExistingItems, ...newItems];
        });
      }
    });
  }, []);

  // Handle item updates from EditItemPage
  useEffect(() => {
    if (onUpdateItem) {
      // Create a function that updates local state
      const updateLocalItem = (updatedItem: FoodItem) => {
        setFoodItems(prevItems => {
          const existingItemIndex = prevItems.findIndex(item => item.id === updatedItem.id);
          
          if (existingItemIndex !== -1) {
            // Update existing item
            return prevItems.map(item =>
              item.id === updatedItem.id ? { ...item, ...updatedItem } : item
            );
          } else {
            // Add new item if it doesn't exist
            return [...prevItems, updatedItem];
          }
        });
      };
      // This will be used by AppRouter to update items
      (window as any).__updateMenuItem = updateLocalItem;
    }
  }, [onUpdateItem]);

  // Refs for tab animation
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const menusTabRef = useRef<HTMLButtonElement>(null);
  const itemLibraryTabRef = useRef<HTMLButtonElement>(null);
  const settingsTabRef = useRef<HTMLButtonElement>(null);
  const [tabIndicator, setTabIndicator] = useState({ left: 0, width: 0 });

  // Update tab indicator position when active tab changes
  useEffect(() => {
    const updateTabIndicator = () => {
      let activeTabElement: HTMLButtonElement | null = null;

      switch (activeTab) {
        case 'menus':
          activeTabElement = menusTabRef.current;
          break;
        case 'item-library':
          activeTabElement = itemLibraryTabRef.current;
          break;
        case 'settings':
          activeTabElement = settingsTabRef.current;
          break;
      }

      if (activeTabElement && tabContainerRef.current) {
        const containerRect = tabContainerRef.current.getBoundingClientRect();
        const tabRect = activeTabElement.getBoundingClientRect();
        
        setTabIndicator({
          left: tabRect.left - containerRect.left,
          width: tabRect.width
        });
      }
    };

    // Small delay to ensure DOM is updated
    const timer = setTimeout(updateTabIndicator, 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Initial setup
  useEffect(() => {
    const updateTabIndicator = () => {
      const activeTabElement = menusTabRef.current; // Default to menus tab
      
      if (activeTabElement && tabContainerRef.current) {
        const containerRect = tabContainerRef.current.getBoundingClientRect();
        const tabRect = activeTabElement.getBoundingClientRect();
        
        setTabIndicator({
          left: tabRect.left - containerRect.left,
          width: tabRect.width
        });
      }
    };

    updateTabIndicator();
  }, []);


  const handleCreateMenu = (menuName: string) => {
    onCreateMenu?.(menuName);
    setIsCreateModalOpen(false);
  };

  const handleDeleteClick = (menuName: string) => {
    setDeleteModalState({ isOpen: true, menuName });
  };

  const handleDeleteConfirm = () => {
    onDeleteMenu?.(deleteModalState.menuName);
    setDeleteModalState({ isOpen: false, menuName: '' });
  };

  const handleDeleteCancel = () => {
    setDeleteModalState({ isOpen: false, menuName: '' });
  };

  const handleItemToggle = (id: string, available: boolean) => {
    setFoodItems(items => 
      items.map(item => 
        item.id === id ? { ...item, available } : item
      )
    );
  };

  const handleItemEdit = (id: string) => {
    onEditItem?.(id);
  };

  const handleItemDelete = (id: string) => {
    const item = foodItems.find(item => item.id === id);
    if (item) {
      setDeleteItemModalState({
        isOpen: true,
        itemId: id,
        itemName: item.internalName || item.name
      });
    }
  };

  const handleDeleteItemConfirm = () => {
    const { itemId } = deleteItemModalState;
    
    // Remove from local state
    setFoodItems(prevItems => prevItems.filter(item => item.id !== itemId));
    
    // Remove from localStorage
    import('@/utils/persistence').then(({ deleteItem }) => {
      deleteItem(itemId);
    });
    
    // Show success toast
    onShowToast?.(`Item deleted successfully`, 'success');
    
    // Close modal
    setDeleteItemModalState({ isOpen: false, itemId: '', itemName: '' });
  };

  const handleDeleteItemCancel = () => {
    setDeleteItemModalState({ isOpen: false, itemId: '', itemName: '' });
  };

  const handleCreateItem = () => {
    setIsCreateItemModalOpen(true);
  };

  const handleCreateItemSubmit = (itemName: string) => {
    // Create new food item with default values
    const newItem: FoodItem = {
      id: `item-${Date.now()}`,
      name: itemName,
      internalName: itemName,
      description: '',
      price: 0,
      image: '',
      menus: [],
      available: true
    };

    // Add to food items list
    setFoodItems(prevItems => [...prevItems, newItem]);

    // Save to localStorage
    import('@/utils/persistence').then(({ saveItem }) => {
      saveItem(newItem.id, newItem);
    });

    // Navigate to edit page for the new item
    onEditItem?.(newItem.id);

    setIsCreateItemModalOpen(false);
  };

  // Options for prep time setting
  const prepTimeOptions: CanarySelectOption[] = [
    { label: '15 minutes', value: '15' },
    { label: '20 minutes', value: '20' },
    { label: '25 minutes', value: '25' },
    { label: '30 minutes', value: '30' },
    { label: '35 minutes', value: '35' },
    { label: '40 minutes', value: '40' },
    { label: '45 minutes', value: '45' },
    { label: '50 minutes', value: '50' },
    { label: '60 minutes', value: '60' }
  ];

  // Create sidebar sections with exact typography
  const sidebarSections: SidebarSection[] = [
    {
      id: 'general',
      title: 'General Settings',
      items: [
        { 
          id: 'property-info', 
          label: 'Property Info', 
          icon: <Icon path={mdiHome} size="24px" />
        },
        { 
          id: 'branding', 
          label: 'Branding', 
          icon: <Icon path={mdiBrushVariant} size="24px" />
        },
        { 
          id: 'staff-members', 
          label: 'Staff Members', 
          icon: <Icon path={mdiAccountMultiple} size="24px" />
        },
        { 
          id: 'security', 
          label: 'Security', 
          icon: <Icon path={mdiSecurity} size="24px" />
        },
        { 
          id: 'integrations', 
          label: 'Integrations', 
          icon: <Icon path={mdiCog} size="24px" />
        }
      ]
    },
    {
      id: 'product',
      title: 'Product settings',
      items: [
        { 
          id: 'compendium', 
          label: 'Compendium', 
          icon: <Icon path={mdiBook} size="24px" />
        },
        { 
          id: 'fb-ordering', 
          label: 'F&B Ordering', 
          icon: <Icon path={mdiFoodForkDrink} size="24px" />
        },
        { 
          id: 'upsells', 
          label: 'Upsells', 
          icon: <Icon path={mdiTrendingUp} size="24px" />
        },
        { 
          id: 'check-in', 
          label: 'Check-in', 
          icon: <Icon path={mdiLoginVariant} size="24px" />
        },
        { 
          id: 'checkout', 
          label: 'Checkout', 
          icon: <Icon path={mdiLogoutVariant} size="24px" />
        },
        { 
          id: 'messages', 
          label: 'Messages', 
          icon: <Icon path={mdiMessage} size="24px" />
        },
        { 
          id: 'digital-tips', 
          label: 'Digital Tips', 
          icon: <Icon path={mdiCurrencyUsd} size="24px" />
        },
        { 
          id: 'authorizations', 
          label: 'Authorizations', 
          icon: <Icon path={mdiShieldCheck} size="24px" />
        },
        { 
          id: 'contracts', 
          label: 'Contracts', 
          icon: <Icon path={mdiFileDocument} size="24px" />
        },
        { 
          id: 'payment-links', 
          label: 'Payment Links', 
          icon: <Icon path={mdiLink} size="24px" />
        }
      ]
    }
  ];

  // Canary logo component
  const canaryLogo = (
    <img 
      src="/canary-logo.png" 
      alt="Canary" 
      style={{ width: '140px', height: '24px', objectFit: 'contain' }}
    />
  );

  // Back button component for the sidebar  
  const backButton = (
    <button 
      className="h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer text-white hover:opacity-90 transition-opacity"
      onClick={() => onBackToOrders?.()}
    >
      <div className="absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center">
        <Icon path={mdiArrowLeft} size={1} color="#ffffff" />
      </div>
      <span className="absolute left-12 font-roboto text-sm font-medium text-white">
        Back
      </span>
    </button>
  );

  return (
    <div className="flex h-screen rounded-xl shadow-canary overflow-hidden">
      {/* New CanarySidebar */}
      <CanarySidebar 
        variant={SidebarVariant.SETTINGS}
        sections={sidebarSections}
        logo={canaryLogo}
        selectedItemId="fb-ordering"
        backButton={backButton}
        onItemClick={(itemId) => {
          console.log('Clicked item:', itemId);
        }}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full min-w-0">
        {/* Top Header */}
        <div className="bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="font-roboto text-body-sm font-medium text-canary-black-1 truncate">
              Statler New York
            </span>
            <Icon path={mdiChevronDown} size={0.8} />
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-canary-black-5 shrink-0" />
            <div className="flex flex-col sm:hidden">
              <span className="font-roboto text-caption font-medium text-canary-black-1">
                Theresa Webb
              </span>
              <span className="font-roboto text-caption-sm font-normal text-canary-black-4 uppercase">
                Operations manager
              </span>
            </div>
            <Icon path={mdiChevronDown} size={0.8} />
          </div>
        </div>

        {/* Page Header */}
        <AnimatedSection delay={0}>
          <div className="bg-white border-b border-neutral-200 py-4 px-6 sm:px-4">
            <h1 className="font-roboto text-subtitle font-medium text-canary-black-1">
              Food and Beverage Ordering
            </h1>
          </div>
        </AnimatedSection>

        {/* Content */}
        <div className="flex-1 bg-white py-8 px-10 sm:px-4 md:px-6 flex flex-col gap-6 overflow-auto">
          {/* Content Container with Max Width and Centering */}
          <div className="w-full max-w-[1200px] mx-auto">
            {/* Tabs */}
            <AnimatedSection delay={80}>
              <div 
                ref={tabContainerRef}
                className="relative flex items-start overflow-x-auto min-h-[40px] mb-6"
              >
              <Tab 
                tabRef={menusTabRef}
                active={activeTab === 'menus'} 
                onClick={() => setActiveTab('menus')}
              >
                Menus
              </Tab>
              <Tab 
                tabRef={itemLibraryTabRef}
                active={activeTab === 'item-library'} 
                onClick={() => setActiveTab('item-library')}
              >
                Item library
              </Tab>
              <Tab 
                tabRef={settingsTabRef}
                active={activeTab === 'settings'} 
                onClick={() => setActiveTab('settings')}
              >
                Settings
              </Tab>
              
              {/* Sliding indicator */}
              <div
                className="absolute bottom-0 h-1 bg-canary-blue-1 transition-all duration-300 ease-out"
                style={{
                  left: `${tabIndicator.left}px`,
                  width: `${tabIndicator.width}px`,
                  transform: 'translateZ(0)' // Force hardware acceleration
                }}
              />
              </div>
            </AnimatedSection>

            {/* Tab Content */}
            {activeTab === 'menus' && (
              <AnimatedSection delay={160}>
                {/* Menus Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h2 className="font-roboto text-title font-semibold text-canary-black-1 shrink-0">
                    Menus
                  </h2>
                  <Button onClick={() => setIsCreateModalOpen(true)}>Create menu</Button>
                </div>

                <div className="flex flex-col gap-1">
                  {/* Headers */}
                  <div className="flex items-start justify-between px-4 pb-0 pr-6 sm:pl-4 font-roboto text-caption-sm font-medium text-canary-black-3 uppercase">
                    <div className="w-48 lg:w-48 md:w-40 sm:w-32 ml-3">Menu name</div>
                    <div className="w-48 lg:w-48 md:w-40 sm:w-32 hidden sm:block">Entry Points</div>
                    <div className="w-32 opacity-0 text-right">Actions</div>
                  </div>

                  {/* Menu Items */}
                  <div className="border border-neutral-200 rounded-lg overflow-hidden">
                    {menus.map((item, index) => (
                      <MenuItem
                        key={item.name}
                        name={item.name}
                        entryPoint={item.entryPoint}
                        isLast={index === menus.length - 1}
                        onPreview={() => onPreviewMenu?.(item.name)}
                        onEdit={() => onEditMenu?.(item.name, item.entryPoint)}
                        onDelete={() => handleDeleteClick(item.name)}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}

            {activeTab === 'item-library' && (
              <AnimatedSection delay={160}>
                {/* Item Library Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h2 className="font-roboto text-title font-semibold text-canary-black-1 shrink-0">
                    Item library
                  </h2>
                  <Button onClick={handleCreateItem}>Create new item</Button>
                </div>
                
                <div className="flex flex-col gap-1">
                  {/* Headers */}
                  <div className="flex items-start justify-between px-4 pb-0 pr-6 sm:pl-4 font-roboto text-caption-sm font-medium text-canary-black-3 uppercase">
                    <div className="w-72 lg:w-72 md:w-60 sm:w-48 ml-3">Item</div>
                    <div className="w-56 lg:w-56 md:w-44 sm:w-36">Menus</div>
                    <div className="w-20">Price</div>
                    <div className="w-32 text-right">Availability</div>
                  </div>

                  {/* Food Items */}
                  <div className="border border-neutral-200 rounded-lg overflow-hidden">
                    {foodItems.map((item, index) => (
                      <FoodItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        internalName={item.internalName}
                        image={item.image}
                        menus={item.menus}
                        price={item.price}
                        available={item.available}
                        onToggle={handleItemToggle}
                        onEdit={handleItemEdit}
                        onDelete={handleItemDelete}
                        isLast={index === foodItems.length - 1}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}

            {activeTab === 'settings' && (
              <AnimatedSection delay={160}>
                {/* Settings Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h2 className="font-roboto text-title font-semibold text-canary-black-1 shrink-0">
                    Settings
                  </h2>
                </div>

                {/* Settings Content */}
                <div className="flex flex-col gap-6">
                  {/* Average Order Prep Time Setting */}
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-roboto text-body-sm font-medium text-canary-black-1">
                        Average order prep time
                      </h3>
                      <p className="font-roboto text-body-sm text-canary-black-3">
                        How long an order typically takes to prepare. This is used to calculate estimated arrival times for guests and determine order urgency for staff.
                      </p>
                    </div>
                    
                    <div className="w-48">
                      <CanarySelect
                        options={prepTimeOptions}
                        value={prepTime}
                        onChange={(e) => {
                          const newPrepTime = e.target.value;
                          setPrepTime(newPrepTime);
                          onUpdatePrepTime?.(parseInt(newPrepTime));
                        }}
                        size={InputSize.NORMAL}
                        placeholder="Select prep time"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Go to Ordering Flow Button */}
      <AnimatedSection delay={240}>
        <button
          onClick={onGoToOrdering}
          className="fixed bottom-6 right-6 bg-canary-blue-1 text-white px-6 py-3 rounded-lg font-roboto font-medium text-body-sm shadow-lg hover:opacity-90 transition-opacity z-50"
        >
          Go to ordering flow
        </button>
      </AnimatedSection>

      {/* Create Menu Modal */}
      <CreateMenuModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateMenu={handleCreateMenu}
      />

      {/* Delete Menu Modal */}
      <DeleteMenuModal
        isOpen={deleteModalState.isOpen}
        onClose={handleDeleteCancel}
        onDeleteMenu={handleDeleteConfirm}
        menuName={deleteModalState.menuName}
      />

      {/* Create Item Modal */}
      <CreateItemModal
        isOpen={isCreateItemModalOpen}
        onClose={() => setIsCreateItemModalOpen(false)}
        onCreateItem={handleCreateItemSubmit}
      />

      {/* Delete Item Modal */}
      <DeleteItemModal
        isOpen={deleteItemModalState.isOpen}
        onClose={handleDeleteItemCancel}
        onDeleteItem={handleDeleteItemConfirm}
        itemName={deleteItemModalState.itemName}
      />
    </div>
  );
};