'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@mdi/react';
import clsx from 'clsx';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { colors, spacing } from '@/lib/design-tokens';
import CanarySwitch from './temp-components/CanarySwitch';
import CanaryCheckbox from './temp-components/CanaryCheckbox';
import CanaryInput from './temp-components/CanaryInput';
import CanaryButton from './temp-components/CanaryButton';
import { ButtonType, ButtonSize } from './temp-components/button-types';
import { AnimatedSection } from './PageTransition';
import { CreateMenuModal } from './CreateMenuModal';
import { CreateItemModal } from './CreateItemModal';
import { DeleteMenuModal } from './DeleteMenuModal';
import { DeleteItemModal } from './DeleteItemModal';
import { ChangelogButton } from './ChangelogButton';
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
  mdiImage,
  mdiClose,
  mdiDotsHorizontal,
  mdiDragVertical
} from '@mdi/js';
// Import the CanarySidebar component
import CanarySidebar, { SidebarVariant, type SidebarSection, type SidebarNavigationItem } from './CanarySidebar';
import { InputSize, InputType } from './temp-components/types';

// Tab component using component library patterns
interface TabProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  tabRef?: React.RefObject<HTMLButtonElement | null>;
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
  isSelected?: boolean;
  onSelect?: (selected: boolean) => void;
  onEdit?: () => void;
  onDelete?: () => void;
  isLast?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  entryPoint,
  isSelected = false,
  onSelect,
  onEdit,
  onDelete,
  isLast = false
}) => {
  // Open preview in a new browser tab
  const handlePreviewClick = () => {
    const previewUrl = `${window.location.origin}?preview=${encodeURIComponent(name)}`;
    window.open(previewUrl, '_blank');
  };

  return (
    <div className={`flex items-center py-4 px-4 pr-6 bg-white ${
      isLast ? '' : 'border-b border-neutral-200'
    }`}>
      {/* Checkbox Column */}
      <div className="w-8 flex items-center justify-center shrink-0">
        <CanaryCheckbox
          checked={isSelected}
          onChange={(checked) => onSelect?.(checked)}
        />
      </div>

      {/* Menu Name Column */}
      <div className="w-48 lg:w-48 md:w-40 sm:w-32 font-roboto text-body-sm font-medium text-canary-black-1 truncate ml-2">
        {name}
      </div>

      {/* Entry Points Column */}
      <div className="w-48 lg:w-48 md:w-40 sm:w-32 hidden sm:block font-roboto text-body-sm font-normal text-canary-black-1 truncate">
        {entryPoint}
      </div>

      {/* Actions Column */}
      <div className="flex items-center gap-2 w-24 justify-end ml-auto">
        <Button variant="icon" onClick={handlePreviewClick}>
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
};


// ToggleSwitch component replaced with official CanarySwitch

// Food Item component for Item Library tab
interface FoodItemProps {
  id: string;
  name: string;
  internalName?: string;
  image: string;
  menus: string[];
  price: number;
  available: boolean;
  isSelected?: boolean;
  onSelect?: (id: string, selected: boolean) => void;
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
  isSelected = false,
  onSelect,
  onToggle, 
  onEdit, 
  onDelete,
  isLast = false 
}) => {
  const [imageError, setImageError] = React.useState(false);

  return (
  <div className={`flex items-center py-4 px-4 pr-6 bg-white ${
    isLast ? '' : 'border-b border-neutral-200'
  }`}>
    {/* Checkbox Column */}
    <div className="w-8 flex items-center justify-center shrink-0">
      <CanaryCheckbox
        checked={isSelected}
        onChange={(checked) => onSelect?.(id, checked)}
      />
    </div>
    
    {/* Item Column (thumbnail + name) */}
    <div className="w-64 lg:w-64 md:w-52 sm:w-40 flex items-center gap-3 ml-2 min-w-0">
      {image && !imageError ? (
        <img 
          src={image} 
          alt={name}
          className="w-10 h-10 rounded object-cover shrink-0"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-10 h-10 bg-neutral-200 rounded flex items-center justify-center shrink-0">
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
    
    {/* Actions Column */}
    <div className="flex items-center gap-3 w-32 justify-end ml-auto">
      <CanarySwitch checked={available} onChange={(checked) => onToggle(id, checked)} size="normal" />
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

// Sortable Row Component for drag and drop
interface SortableRowProps {
  id: string;
  children: (props: { dragListeners: any; isDragging: boolean }) => React.ReactNode;
}

const SortableRow: React.FC<SortableRowProps> = ({ id, children }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      {...attributes}
    >
      {children({ dragListeners: listeners, isDragging })}
    </div>
  );
};

// Main component
interface MenuManagementPageProps {
  menus: Array<{ name: string; entryPoint: string; isNew?: boolean }>;
  onEditMenu?: (menuName: string, entryPoint: string) => void;
  onCreateMenu?: (menuName: string, parsedMenu?: import('../utils/claudeMenuParser').ParsedMenu) => void;
  onDeleteMenu?: (menuName: string) => void;
  onPreviewMenu?: (menuName: string) => void;
  onEditItem?: (itemId: string) => void;
  onUpdateItem?: (updatedItem: FoodItem) => void;
  onShowToast?: (message: string, type: 'success' | 'error' | 'warning') => void;
  initialActiveTab?: 'menus' | 'item-library' | 'settings';
  onGoToOrdering?: () => void;
  onBackToOrders?: () => void;
  onCompendium?: () => void;
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
  onCompendium,
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
  const [taxesEnabled, setTaxesEnabled] = useState(false);
  const [supplementalFeesEnabled, setSupplementalFeesEnabled] = useState(false);
  
  // Pricing & fees field states
  const [taxLabel, setTaxLabel] = useState('Sales tax');
  const [taxPercentage, setTaxPercentage] = useState('8');
  const [feeLabel, setFeeLabel] = useState('Delivery fee');
  const [feeAmount, setFeeAmount] = useState('4.00');
  
  // Track initial values for change detection
  const [initialValues, setInitialValues] = useState<{
    prepTime: string;
    fees: typeof fees;
    taxes: typeof taxes;
  }>({
    prepTime: prepTimeMinutes.toString(),
    fees: [],
    taxes: []
  });
  const [hasChanges, setHasChanges] = useState(false);

  // Add Fee states
  // Removed separate add fee state - fees are now added immediately as editable entries
  const [fees, setFees] = useState<Array<{
    id: string;
    label: string;
    type: 'flat' | 'percentage';
    amount: string;
    taxable: boolean;
  }>>([]);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  // Add Tax states
  const [taxes, setTaxes] = useState<Array<{
    id: string;
    label: string;
    rate: string;
    applyTo: 'subtotal' | 'subtotal_fees';
  }>>([]);
  
  // Bulk selection state
  const [selectedMenus, setSelectedMenus] = useState<Set<string>>(new Set());
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  // Helper function to format currency with thousand separators
  const formatCurrency = (value: string): string => {
    // Remove all non-digit characters except decimal point
    const cleanValue = value.replace(/[^\d.]/g, '');
    
    // Prevent double zeros at the start
    if (cleanValue === '00') {
      return '0';
    }
    
    // Split by decimal point
    const parts = cleanValue.split('.');
    
    // Format the integer part with thousand separators
    const integerPart = parseInt(parts[0] || '0', 10).toLocaleString('en-US');
    
    // Handle decimal part (limit to 2 decimal places)
    if (parts.length > 1) {
      const decimalPart = parts[1].slice(0, 2);
      return `${integerPart}.${decimalPart}`;
    }
    
    return integerPart;
  };
  
  // Helper function to parse formatted currency back to plain number string
  const parseCurrency = (value: string): string => {
    return value.replace(/[^\d.]/g, '');
  };

  // Setup drag sensors for drag and drop
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Handle drag end for fees
  const handleFeeDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const oldIndex = fees.findIndex((fee) => fee.id === active.id);
      const newIndex = fees.findIndex((fee) => fee.id === over.id);
      setFees(arrayMove(fees, oldIndex, newIndex));
    }
  };

  // Handle drag end for taxes
  const handleTaxDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const oldIndex = taxes.findIndex((tax) => tax.id === active.id);
      const newIndex = taxes.findIndex((tax) => tax.id === over.id);
      setTaxes(arrayMove(taxes, oldIndex, newIndex));
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-dropdown-container]')) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Check for changes whenever values update
  useEffect(() => {
    const currentValues = {
      prepTime,
      fees: JSON.stringify(fees),
      taxes: JSON.stringify(taxes)
    };
    
    const initialValuesCopy = {
      prepTime: initialValues.prepTime,
      fees: JSON.stringify(initialValues.fees),
      taxes: JSON.stringify(initialValues.taxes)
    };
    
    const changed = currentValues.prepTime !== initialValuesCopy.prepTime ||
                   currentValues.fees !== initialValuesCopy.fees ||
                   currentValues.taxes !== initialValuesCopy.taxes;
                   
    setHasChanges(changed);
  }, [prepTime, fees, taxes, initialValues]);

  // Validation functions
  const validateSettings = (): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];
    
    // Validate prep time
    const prepTimeNum = parseInt(prepTime);
    if (isNaN(prepTimeNum) || prepTimeNum <= 0) {
      errors.push('Average delivery time must be a positive number');
    }
    
    // Validate fees
    fees.forEach((fee, index) => {
      if (!fee.label.trim()) {
        errors.push(`Fee ${index + 1}: Label cannot be empty`);
      }
      
      const amount = fee.type === 'flat' 
        ? parseFloat(parseCurrency(fee.amount))
        : parseFloat(fee.amount);
        
      if (isNaN(amount) || amount <= 0) {
        errors.push(`Fee "${fee.label || `${index + 1}`}": Amount cannot be zero or empty`);
      }
    });
    
    // Validate taxes
    taxes.forEach((tax, index) => {
      if (!tax.label.trim()) {
        errors.push(`Tax ${index + 1}: Label cannot be empty`);
      }
      
      const rate = parseFloat(tax.rate);
      if (isNaN(rate) || rate <= 0) {
        errors.push(`Tax "${tax.label || `${index + 1}`}": Rate cannot be zero or empty`);
      }
    });
    
    return {
      isValid: errors.length === 0,
      errors
    };
  };

  // Save settings function
  const handleSaveSettings = () => {
    const validation = validateSettings();
    
    if (!validation.isValid) {
      // Show validation errors
      validation.errors.forEach(error => {
        onShowToast?.(error, 'error');
      });
      return;
    }
    
    // Save to localStorage
    try {
      localStorage.setItem('settings_prepTime', prepTime);
      localStorage.setItem('settings_fees', JSON.stringify(fees));
      localStorage.setItem('settings_taxes', JSON.stringify(taxes));
      
      // Update prep time callback
      if (onUpdatePrepTime && !isNaN(parseInt(prepTime))) {
        onUpdatePrepTime(parseInt(prepTime));
      }
      
      // Update initial values to current values
      setInitialValues({
        prepTime,
        fees: JSON.parse(JSON.stringify(fees)),
        taxes: JSON.parse(JSON.stringify(taxes))
      });
      
      // Show success toast
      onShowToast?.('Settings saved successfully', 'success');
      
      // Reset hasChanges
      setHasChanges(false);
    } catch (error) {
      onShowToast?.('Failed to save settings', 'error');
    }
  };

  // Load saved settings on component mount
  useEffect(() => {
    try {
      const savedPrepTime = localStorage.getItem('settings_prepTime');
      const savedFees = localStorage.getItem('settings_fees');
      const savedTaxes = localStorage.getItem('settings_taxes');
      
      let loadedPrepTime = prepTimeMinutes.toString();
      let loadedFees: typeof fees = [];
      let loadedTaxes: typeof taxes = [];
      
      if (savedPrepTime) {
        loadedPrepTime = savedPrepTime;
        setPrepTime(savedPrepTime);
      }
      
      if (savedFees) {
        loadedFees = JSON.parse(savedFees);
        setFees(loadedFees);
      }
      
      if (savedTaxes) {
        loadedTaxes = JSON.parse(savedTaxes);
        setTaxes(loadedTaxes);
      }
      
      // Set initial values to loaded values
      setInitialValues({
        prepTime: loadedPrepTime,
        fees: loadedFees,
        taxes: loadedTaxes
      });
    } catch (error) {
      console.error('Failed to load settings:', error);
    }
  }, []);

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


  const handleCreateMenu = async (menuName: string, parsedMenu?: import('../utils/claudeMenuParser').ParsedMenu) => {
    if (onCreateMenu) {
      await onCreateMenu(menuName, parsedMenu);
    }
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

  // Bulk selection handlers
  const handleMenuSelect = (menuName: string, selected: boolean) => {
    setSelectedMenus(prev => {
      const newSelection = new Set(prev);
      if (selected) {
        newSelection.add(menuName);
      } else {
        newSelection.delete(menuName);
      }
      return newSelection;
    });
  };

  const handleItemSelect = (itemId: string, selected: boolean) => {
    setSelectedItems(prev => {
      const newSelection = new Set(prev);
      if (selected) {
        newSelection.add(itemId);
      } else {
        newSelection.delete(itemId);
      }
      return newSelection;
    });
  };

  const handleBulkDelete = () => {
    if (activeTab === 'menus' && selectedMenus.size > 0) {
      // Delete selected menus
      selectedMenus.forEach(menuName => {
        onDeleteMenu?.(menuName);
      });
      setSelectedMenus(new Set());
      onShowToast?.(`${selectedMenus.size} menu${selectedMenus.size > 1 ? 's' : ''} deleted successfully`, 'success');
    } else if (activeTab === 'item-library' && selectedItems.size > 0) {
      // Delete selected items
      setFoodItems(prevItems => 
        prevItems.filter(item => !selectedItems.has(item.id))
      );
      
      // Remove from localStorage
      import('@/utils/persistence').then(({ deleteItem }) => {
        selectedItems.forEach(itemId => {
          deleteItem(itemId);
        });
      });
      
      setSelectedItems(new Set());
      onShowToast?.(`${selectedItems.size} item${selectedItems.size > 1 ? 's' : ''} deleted successfully`, 'success');
    }
  };

  // Clear selections when switching tabs
  useEffect(() => {
    setSelectedMenus(new Set());
    setSelectedItems(new Set());
  }, [activeTab]);

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
          if (itemId === 'compendium' && onCompendium) {
            onCompendium();
          }
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
        <div className="flex-1 bg-[#FAFAFA] py-8 px-10 sm:px-4 md:px-6 flex flex-col gap-6 overflow-auto">
          {/* Content Container with Max Width and Centering */}
          <div className="w-full max-w-[900px] mx-auto">
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
                  <div className="flex items-center py-2 px-4 pr-6 font-roboto text-caption-sm font-medium text-canary-black-3 uppercase">
                    {/* Checkbox Column Header */}
                    <div className="w-8 shrink-0"></div>
                    
                    {/* Menu Name Column Header */}
                    <div className="w-48 lg:w-48 md:w-40 sm:w-32 ml-2">Menu name</div>
                    
                    {/* Entry Points Column Header */}
                    <div className="w-48 lg:w-48 md:w-40 sm:w-32 hidden sm:block">Entry Points</div>
                    
                    {/* Actions Column Header */}
                    <div className="w-24 opacity-0 text-right ml-auto">Actions</div>
                  </div>

                  {/* Menu Items */}
                  <div className="border border-neutral-200 rounded-lg overflow-hidden">
                    {menus.map((item, index) => (
                      <MenuItem
                        key={`${index}-${item.name}`}
                        name={item.name}
                        entryPoint={item.entryPoint}
                        isSelected={selectedMenus.has(item.name)}
                        onSelect={(selected) => handleMenuSelect(item.name, selected)}
                        isLast={index === menus.length - 1}
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
                  <div className="flex items-center py-2 px-4 pr-6 font-roboto text-caption-sm font-medium text-canary-black-3 uppercase">
                    {/* Checkbox Column Header */}
                    <div className="w-8 shrink-0"></div>
                    
                    {/* Item Column Header */}
                    <div className="w-64 lg:w-64 md:w-52 sm:w-40 ml-2">Item</div>
                    
                    {/* Menus Column Header */}
                    <div className="w-56 lg:w-56 md:w-44 sm:w-36">Menus</div>
                    
                    {/* Price Column Header */}
                    <div className="w-20">Price</div>
                    
                    {/* Actions Column Header */}
                    <div className="w-32 text-right ml-auto">Availability</div>
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
                        isSelected={selectedItems.has(item.id)}
                        onSelect={handleItemSelect}
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
                <div className="flex items-center justify-between gap-4 mb-6">
                  <h2 className="font-roboto text-title font-semibold text-canary-black-1 shrink-0">
                    Settings
                  </h2>
                  <CanaryButton
                    type={ButtonType.PRIMARY}
                    size={ButtonSize.NORMAL}
                    isDisabled={!hasChanges}
                    onClick={handleSaveSettings}
                  >
                    Save
                  </CanaryButton>
                </div>

                {/* Settings Content */}
                <div className="flex flex-col gap-3 w-full">
                  {/* Average order delivery time card - redesigned */}
                  <div className="bg-white border border-neutral-200 rounded-lg p-6 flex items-center justify-between">
                    <div className="flex flex-col gap-0 flex-1 mr-6">
                      <p className="font-roboto text-[14px] font-medium leading-[22px] text-canary-black-1">
                        Average order delivery time
                      </p>
                      <p className="font-roboto text-[14px] font-normal leading-[22px] text-canary-black-3 whitespace-pre-wrap">
                        Set how long it typically takes to deliver an order based when an order is submitted, not when it's been approved. The average delivery time is used to estimate arrival times for guests and highlight urgent orders for staff.
                      </p>
                    </div>
                    <div className="w-[200px] shrink-0">
                      <CanaryInput
                        label="Average delivery time (minutes)"
                        type={InputType.TEXT}
                        value={prepTime}
                        onChange={(e) => {
                          const newPrepTime = e.target.value;
                          setPrepTime(newPrepTime);
                          if (onUpdatePrepTime && !isNaN(parseInt(newPrepTime))) {
                            onUpdatePrepTime(parseInt(newPrepTime));
                          }
                        }}
                        size={InputSize.COMPACT}
                        placeholder="45"
                      />
                    </div>
                  </div>

                  {/* Fees and Taxes Section with Preview */}
                  <div className="bg-white border border-neutral-200 rounded-lg p-6">
                    {/* Section Header */}
                    <div className="flex flex-col gap-0 mb-6">
                      <p className="font-roboto text-[14px] font-medium leading-[22px] text-canary-black-1">
                        Fees and taxes
                      </p>
                      <p className="font-roboto text-[14px] font-normal leading-[22px] text-canary-black-3">
                        Apply flat rate or percentage fees or taxes to guest orders.
                      </p>
                    </div>
                    
                    {/* Two Column Layout */}
                    <div className="flex gap-8">
                      {/* Left Column - Tables */}
                      <div className="flex-1 flex flex-col gap-6">
                    
                    <div className="flex flex-col gap-3">
                      {/* Animated container for table/empty state */}
                      <div className="relative" style={{ minHeight: '86px' }}>
                        {/* Empty state with fade out animation */}
                        <div 
                          className={`absolute inset-0 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center transition-all duration-200 ease-out ${
                            fees.length > 0
                              ? 'opacity-0 pointer-events-none' 
                              : 'opacity-100'
                          }`} 
                          style={{ height: '86px' }}
                        >
                          <p className="font-roboto text-[14px] font-normal leading-[22px] text-canary-black-3 text-center">
                            No supplemental fees
                          </p>
                        </div>

                        {/* Table with fade in + scale animation */}
                        <div 
                          className={`flex flex-col gap-1 transition-all duration-300 ease-out ${
                            fees.length > 0
                              ? 'opacity-100 scale-100 translate-y-0'
                              : 'opacity-0 scale-95 translate-y-1 pointer-events-none'
                          }`}
                        >
                          {/* Table Header */}
                          <div className="flex items-center py-0 h-4 px-4">
                            <div className="w-[124px] shrink-0">
                              <p className="font-roboto text-[10px] font-medium leading-[16px] text-canary-black-3 uppercase">
                                FEE LABEL
                              </p>
                            </div>
                            <div className="w-[124px] shrink-0 ml-3">
                              <p className="font-roboto text-[10px] font-medium leading-[16px] text-canary-black-3 uppercase">
                                TYPE
                              </p>
                            </div>
                            <div className="w-[124px] shrink-0 ml-3">
                              <p className="font-roboto text-[10px] font-medium leading-[16px] text-canary-black-3 uppercase">
                                AMOUNT
                              </p>
                            </div>
                            <div className="w-[60px] shrink-0 ml-6">
                              <p className="font-roboto text-[10px] font-medium leading-[16px] text-canary-black-3 uppercase">
                                TAXABLE?
                              </p>
                            </div>
                            <div className="flex-1"></div>
                          </div>

                          {/* Table Body */}
                          <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragEnd={handleFeeDragEnd}
                          >
                            <SortableContext
                              items={fees.map(fee => fee.id)}
                              strategy={verticalListSortingStrategy}
                            >
                              <div className="border border-neutral-200 rounded-lg">
                                {/* Editable fees */}
                                {fees.map((fee, index) => (
                                  <SortableRow key={fee.id} id={fee.id}>
                                    {({ dragListeners, isDragging }) => (
                                      <div className={`relative bg-white flex items-center justify-between px-4 py-4 ${index === 0 ? 'rounded-t-lg' : ''} ${index === fees.length - 1 ? 'rounded-b-lg' : ''} ${index < fees.length - 1 ? 'border-b border-neutral-200' : ''}`}>
                                        <div className="flex items-center">
                                          <div className="w-[124px]">
                                      <CanaryInput
                                        type={InputType.TEXT}
                                        size={InputSize.COMPACT}
                                        value={fee.label}
                                        onChange={(e) => {
                                          setFees(fees.map(f => f.id === fee.id ? { ...f, label: e.target.value } : f));
                                        }}
                                        placeholder="Fee label"
                                        autoFocus={index === fees.length - 1 && fee.label === ''}
                                      />
                                    </div>
                                    <div className="w-[124px] ml-3">
                                      <select
                                        value={fee.type}
                                        onChange={(e) => {
                                          setFees(fees.map(f => f.id === fee.id ? { ...f, type: e.target.value as 'flat' | 'percentage' } : f));
                                        }}
                                        className="w-full h-8 px-2 pr-8 border border-canary-black-3 rounded text-[14px] font-roboto bg-white focus:outline-none focus:border-canary-blue-1 appearance-none"
                                        style={{
                                          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                          backgroundRepeat: 'no-repeat',
                                          backgroundPosition: 'right 8px center',
                                          backgroundSize: '16px'
                                        }}
                                      >
                                        <option value="flat">Flat fee</option>
                                        <option value="percentage">Percentage</option>
                                      </select>
                                    </div>
                                    <div className="w-[124px] ml-3">
                                      {fee.type === 'flat' ? (
                                        <div className="relative">
                                          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[14px] font-roboto text-black pointer-events-none z-10 flex items-center h-8">
                                            $
                                          </div>
                                          <input
                                            type="text"
                                            className="w-full h-8 px-2 pl-6 border border-[#666666] rounded text-[14px] font-roboto bg-white focus:outline focus:outline-2 focus:outline-[#2858c4] focus:outline-offset-[-1px]"
                                            value={formatCurrency(fee.amount)}
                                            onChange={(e) => {
                                              const rawValue = parseCurrency(e.target.value);
                                              // Prevent double zeros
                                              if (rawValue === '00') {
                                                setFees(fees.map(f => f.id === fee.id ? { ...f, amount: '0' } : f));
                                              } else {
                                                setFees(fees.map(f => f.id === fee.id ? { ...f, amount: rawValue } : f));
                                              }
                                            }}
                                            placeholder="0.00"
                                          />
                                        </div>
                                      ) : (
                                        <CanaryInput
                                          type={InputType.TEXT}
                                          size={InputSize.COMPACT}
                                          value={fee.amount}
                                          onChange={(e) => {
                                            setFees(fees.map(f => f.id === fee.id ? { ...f, amount: e.target.value } : f));
                                          }}
                                          placeholder="0.00%"
                                        />
                                      )}
                                    </div>
                                    <div className="w-[60px] ml-6">
                                      <CanaryCheckbox
                                        checked={fee.taxable}
                                        onChange={(checked) => {
                                          const updatedFees = fees.map(f => 
                                            f.id === fee.id ? {...f, taxable: checked} : f
                                          );
                                          setFees(updatedFees);
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="relative ml-4" data-dropdown-container>
                                    <button
                                      onClick={() => {
                                        setOpenDropdownId(openDropdownId === fee.id ? null : fee.id);
                                      }}
                                      className="text-canary-black-3 hover:text-canary-black-1 p-1 rounded hover:bg-gray-50"
                                    >
                                      <Icon path={mdiDotsHorizontal} size={0.75} />
                                    </button>
                                    
                                    {/* Dropdown menu */}
                                    {openDropdownId === fee.id && (
                                      <div className="absolute right-0 top-8 bg-white border border-neutral-200 rounded-lg shadow-lg py-1 z-50 min-w-[120px]">
                                        <button
                                          onClick={() => {
                                            setFees(fees.filter(f => f.id !== fee.id));
                                            setOpenDropdownId(null);
                                          }}
                                          className="w-full text-left px-3 py-2 text-[14px] font-roboto text-canary-black-1 hover:bg-gray-50 flex items-center gap-2"
                                        >
                                          <Icon path={mdiDelete} size={0.5} />
                                          Delete fee
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )}
                            </SortableRow>
                          ))}
                        </div>
                      </SortableContext>
                    </DndContext>
                  </div>
                </div>
                
                {/* Add fee button - always visible and active */}
                <button
                  onClick={() => {
                    const newFee = {
                      id: Date.now().toString(),
                      label: '',
                      type: 'flat' as const,
                      amount: '',
                      taxable: false
                    };
                    setFees([...fees, newFee]);
                  }}
                  className="bg-canary-blue-light text-canary-blue-1 px-4 h-8 rounded font-roboto font-medium text-[12px] hover:opacity-90 transition-opacity self-start"
                  style={{ backgroundColor: 'rgba(40, 88, 196, 0.1)' }}
                >
                  Add fee
                </button>
              </div>
              
              {/* Taxes Section - No divider, no separate header */}
              <div className="flex flex-col gap-4">
              
              <div className="flex flex-col gap-3">
                {/* Animated container for table/empty state */}
                <div className="relative" style={{ minHeight: '86px' }}>
                        {/* Empty state with fade out animation */}
                        <div 
                          className={`absolute inset-0 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center transition-all duration-200 ease-out ${
                            taxes.length > 0
                              ? 'opacity-0 pointer-events-none' 
                              : 'opacity-100'
                          }`} 
                          style={{ height: '86px' }}
                        >
                          <p className="font-roboto text-[14px] font-normal leading-[22px] text-canary-black-3 text-center">
                            No taxes
                          </p>
                        </div>

                        {/* Table with fade in + scale animation */}
                        <div 
                          className={`flex flex-col gap-1 transition-all duration-300 ease-out ${
                            taxes.length > 0
                              ? 'opacity-100 scale-100 translate-y-0'
                              : 'opacity-0 scale-95 translate-y-1 pointer-events-none'
                          }`}
                        >
                          {/* Table Header */}
                          <div className="flex items-center py-0 h-4 px-4">
                            <div className="w-[124px] shrink-0">
                              <p className="font-roboto text-[10px] font-medium leading-[16px] text-canary-black-3 uppercase">
                                TAX LABEL
                              </p>
                            </div>
                            <div className="w-[124px] shrink-0 ml-3">
                              <p className="font-roboto text-[10px] font-medium leading-[16px] text-canary-black-3 uppercase">
                                RATE
                              </p>
                            </div>
                            <div className="w-[200px] shrink-0 ml-3">
                              <p className="font-roboto text-[10px] font-medium leading-[16px] text-canary-black-3 uppercase">
                                APPLY TO
                              </p>
                            </div>
                            <div className="flex-1"></div>
                          </div>

                          {/* Table Body */}
                          <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragEnd={handleTaxDragEnd}
                          >
                            <SortableContext
                              items={taxes.map(tax => tax.id)}
                              strategy={verticalListSortingStrategy}
                            >
                              <div className="border border-neutral-200 rounded-lg">
                                {/* Editable taxes */}
                                {taxes.map((tax, index) => (
                                  <SortableRow key={tax.id} id={tax.id}>
                                    {({ dragListeners, isDragging }) => (
                                      <div className={`relative bg-white flex items-center justify-between px-4 py-4 ${index === 0 ? 'rounded-t-lg' : ''} ${index === taxes.length - 1 ? 'rounded-b-lg' : ''} ${index < taxes.length - 1 ? 'border-b border-neutral-200' : ''}`}>
                                        <div className="flex items-center">
                                          <div className="w-[124px]">
                                            <CanaryInput
                                              type={InputType.TEXT}
                                              size={InputSize.COMPACT}
                                              value={tax.label}
                                              onChange={(e) => {
                                                setTaxes(taxes.map(t => t.id === tax.id ? { ...t, label: e.target.value } : t));
                                              }}
                                              placeholder="Tax label"
                                              autoFocus={index === taxes.length - 1 && tax.label === ''}
                                            />
                                          </div>
                                          <div className="w-[124px] ml-3">
                                            <CanaryInput
                                              type={InputType.TEXT}
                                              size={InputSize.COMPACT}
                                              value={tax.rate}
                                              onChange={(e) => {
                                                setTaxes(taxes.map(t => t.id === tax.id ? { ...t, rate: e.target.value } : t));
                                              }}
                                              placeholder="0.00%"
                                            />
                                          </div>
                                          <div className="w-[200px] ml-3">
                                            <select
                                              value={tax.applyTo}
                                              onChange={(e) => {
                                                setTaxes(taxes.map(t => t.id === tax.id ? { ...t, applyTo: e.target.value as 'subtotal' | 'subtotal_fees' } : t));
                                              }}
                                              className="w-full h-8 px-2 pr-8 border border-canary-black-3 rounded text-[14px] font-roboto bg-white focus:outline-none focus:border-canary-blue-1 appearance-none"
                                              style={{
                                                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'right 8px center',
                                                backgroundSize: '16px'
                                              }}
                                            >
                                              <option value="subtotal">Subtotal only</option>
                                              <option value="subtotal_fees">Subtotal + fees</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="relative ml-4" data-dropdown-container>
                                          <button
                                            onClick={() => {
                                              setOpenDropdownId(openDropdownId === tax.id ? null : tax.id);
                                            }}
                                            className="text-canary-black-3 hover:text-canary-black-1 p-1 rounded hover:bg-gray-50"
                                          >
                                            <Icon path={mdiDotsHorizontal} size={0.75} />
                                          </button>
                                          
                                          {/* Dropdown menu */}
                                          {openDropdownId === tax.id && (
                                            <div className="absolute right-0 top-8 bg-white border border-neutral-200 rounded-lg shadow-lg py-1 z-50 min-w-[120px]">
                                              <button
                                                onClick={() => {
                                                  setTaxes(taxes.filter(t => t.id !== tax.id));
                                                  setOpenDropdownId(null);
                                                }}
                                                className="w-full text-left px-3 py-2 text-[14px] font-roboto text-canary-black-1 hover:bg-gray-50 flex items-center gap-2"
                                              >
                                                <Icon path={mdiDelete} size={0.5} />
                                                Delete tax
                                              </button>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    )}
                                  </SortableRow>
                                ))}
                            </div>
                          </SortableContext>
                          </DndContext>
                        </div>
                      </div>
                      
                      {/* Add tax button - always visible and active */}
                      <button
                        onClick={() => {
                          const newTax = {
                            id: Date.now().toString(),
                            label: '',
                            rate: '',
                            applyTo: 'subtotal' as const
                          };
                          setTaxes([...taxes, newTax]);
                        }}
                        className="bg-canary-blue-light text-canary-blue-1 px-4 h-8 rounded font-roboto font-medium text-[12px] hover:opacity-90 transition-opacity self-start"
                        style={{ backgroundColor: 'rgba(40, 88, 196, 0.1)' }}
                      >
                        Add tax
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Guest Preview */}
                {/* Calculate price breakdown */}
                {(() => {
                  const subtotal = 100; // Static subtotal
                  const breakdown: Array<{ label: string; amount: number; isTotal?: boolean }> = [];
                  
                  // 1. Taxes on subtotal only
                  const subtotalOnlyTaxes = taxes.filter(t => t.applyTo === 'subtotal' && t.label && t.rate);
                  let subtotalTaxAmount = 0;
                  subtotalOnlyTaxes.forEach(tax => {
                    const rate = parseFloat(tax.rate) || 0;
                    const amount = (subtotal * rate) / 100;
                    subtotalTaxAmount += amount;
                    breakdown.push({ label: tax.label, amount });
                  });
                  
                  // 2. Taxable fees
                  const taxableFees = fees.filter(f => f.taxable && f.label && f.amount);
                  let taxableFeesAmount = 0;
                  taxableFees.forEach(fee => {
                    const amount = fee.type === 'flat' 
                      ? parseFloat(fee.amount) || 0
                      : (subtotal * (parseFloat(fee.amount) || 0)) / 100;
                    taxableFeesAmount += amount;
                    breakdown.push({ label: fee.label, amount });
                  });
                  
                  // 3. Taxes on subtotal + fees
                  const subtotalPlusFeesTaxes = taxes.filter(t => t.applyTo === 'subtotal_fees' && t.label && t.rate);
                  let subtotalPlusFeesTaxAmount = 0;
                  subtotalPlusFeesTaxes.forEach(tax => {
                    const rate = parseFloat(tax.rate) || 0;
                    const amount = ((subtotal + taxableFeesAmount) * rate) / 100;
                    subtotalPlusFeesTaxAmount += amount;
                    breakdown.push({ label: tax.label, amount });
                  });
                  
                  // 4. Non-taxable fees
                  const nonTaxableFees = fees.filter(f => !f.taxable && f.label && f.amount);
                  let nonTaxableFeesAmount = 0;
                  nonTaxableFees.forEach(fee => {
                    const amount = fee.type === 'flat'
                      ? parseFloat(fee.amount) || 0
                      : (subtotal * (parseFloat(fee.amount) || 0)) / 100;
                    nonTaxableFeesAmount += amount;
                    breakdown.push({ label: fee.label, amount });
                  });
                  
                  // Calculate total
                  const total = subtotal + subtotalTaxAmount + taxableFeesAmount + 
                                subtotalPlusFeesTaxAmount + nonTaxableFeesAmount;
                  
                  return (
                <div className="w-[260px] shrink-0">
                  <div className="flex flex-col gap-1">
                    <p className="font-roboto text-[10px] font-medium leading-[16px] text-canary-black-3 uppercase">
                      PRICE BREAKDOWN EXAMPLE
                    </p>
                    <div className="bg-white border border-canary-black-6 rounded-lg p-4 shadow-[0px_2px_6px_rgba(0,0,0,0.2)]">
                      <div className="flex flex-col gap-2">
                        {/* Subtotal - always shown */}
                        <div className="flex justify-between items-center">
                          <span className="font-roboto text-[14px] font-normal leading-[22px] text-canary-black-1">Subtotal</span>
                          <span className="font-roboto text-[14px] font-normal leading-[22px] text-canary-black-1">
                            ${subtotal.toFixed(2)}
                          </span>
                        </div>
                        
                        {/* Dynamic line items */}
                        {breakdown.map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="font-roboto text-[14px] font-normal leading-[22px] text-canary-black-1">
                              {item.label}
                            </span>
                            <span className="font-roboto text-[14px] font-normal leading-[22px] text-canary-black-1">
                              ${item.amount.toFixed(2)}
                            </span>
                          </div>
                        ))}
                        
                        {/* Divider and Total - always shown */}
                        <div className="border-t border-canary-black-6 pt-2">
                          <div className="flex justify-between items-center">
                            <span className="font-roboto text-[14px] font-normal leading-[22px] text-canary-black-1">Total</span>
                            <span className="font-roboto text-[14px] font-medium leading-[22px] text-canary-black-1">
                              ${total.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
                })()}
              </div>
              </div>
              </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <AnimatedSection delay={240}>
        <div className="fixed bottom-6 right-6 flex items-center gap-3 z-50">
          {/* Bulk Delete Button - show when items are selected */}
          {((activeTab === 'menus' && selectedMenus.size > 0) || 
            (activeTab === 'item-library' && selectedItems.size > 0)) && (
            <button
              onClick={handleBulkDelete}
              className="bg-red-600 text-white px-4 py-0 h-10 rounded font-roboto font-medium text-sm shadow-lg hover:opacity-90 transition-opacity whitespace-nowrap flex items-center justify-center"
            >
              Delete {activeTab === 'menus' ? 
                `${selectedMenus.size} menu${selectedMenus.size > 1 ? 's' : ''}` : 
                `${selectedItems.size} item${selectedItems.size > 1 ? 's' : ''}`
              }
            </button>
          )}
          
          {/* Go to Ordering Flow Button */}
          <button
            onClick={onGoToOrdering}
            className="bg-canary-blue-1 text-white px-4 py-0 h-10 rounded font-roboto font-medium text-sm shadow-lg hover:opacity-90 transition-opacity whitespace-nowrap flex items-center justify-center"
          >
            Go to ordering flow
          </button>
        </div>
      </AnimatedSection>
      
      {/* Changelog Button */}
      <ChangelogButton />
      
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
