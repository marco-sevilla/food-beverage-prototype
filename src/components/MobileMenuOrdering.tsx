'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Icon from '@mdi/react';
import { 
  mdiArrowLeft, 
  mdiChevronDown,
  mdiPlus,
  mdiMinus,
  mdiDelete
} from '@mdi/js';
import { colors, typography, borderRadius, spacing } from '@/lib/design-tokens';
import clsx from 'clsx';
import { MenuItemDetails } from './MenuItemDetails';
import { MenuItemPlaceholder } from './MenuItemPlaceholder';
import { OrderingClosedModal } from './OrderingClosedModal';
import { MenuUnavailableMessage } from './MenuUnavailableMessage';
import { isMenuAvailable, getMenuAvailabilityInfo, getDefaultMenu } from '@/utils/menuAvailability';
import { loadData, saveDemoTime, saveSelectedMenu, saveCart, getImage, getItem, saveGuestInfo, getGuestInfo, saveViewMode, getViewMode } from '@/utils/persistence';
import CanaryInput from '../../temp-components/CanaryInput';
import CanarySegmentedControl from '../../temp-components/CanarySegmentedControl';
import { InputSize } from '../../temp-components/types';

// Time Controls Component
interface TimeControlsProps {
  day: string;
  hour: number;
  minute: number;
  ampm: 'AM' | 'PM';
  guestName: string;
  roomNumber: string;
  viewMode: 'mobile' | 'desktop';
  onDayChange: (day: string) => void;
  onHourChange: (hour: number) => void;
  onMinuteChange: (minute: number) => void;
  onAmPmChange: (ampm: 'AM' | 'PM') => void;
  onGuestNameChange: (guestName: string) => void;
  onRoomNumberChange: (roomNumber: string) => void;
  onViewModeChange: (viewMode: 'mobile' | 'desktop') => void;
}

const TimeControls: React.FC<TimeControlsProps> = ({
  day,
  hour,
  minute,
  ampm,
  guestName,
  roomNumber,
  viewMode,
  onDayChange,
  onHourChange,
  onMinuteChange,
  onAmPmChange,
  onGuestNameChange,
  onRoomNumberChange,
  onViewModeChange
}) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = [0, 15, 30, 45];

  return (
    <div className="fixed top-24 left-8 z-50 bg-white border border-neutral-200 rounded-lg p-4 shadow-lg max-w-xs">
      <h3 className="font-roboto text-body-sm font-semibold text-canary-black-1 mb-3">
        Demo Controls
      </h3>
      <div className="space-y-3">
        {/* Day of Week */}
        <div>
          <label className="block font-roboto text-caption font-medium text-canary-black-2 mb-1">
            Day
          </label>
          <select
            value={day}
            onChange={(e) => onDayChange(e.target.value)}
            className="w-full h-8 px-2 border border-neutral-200 rounded font-roboto text-body-sm focus:outline-none focus:ring-2 focus:ring-canary-blue-1"
          >
            {daysOfWeek.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Time */}
        <div>
          <label className="block font-roboto text-caption font-medium text-canary-black-2 mb-1">
            Time
          </label>
          <div className="flex gap-2">
            {/* Hour */}
            <select
              value={hour}
              onChange={(e) => onHourChange(parseInt(e.target.value))}
              className="flex-1 h-8 px-2 border border-neutral-200 rounded font-roboto text-body-sm focus:outline-none focus:ring-2 focus:ring-canary-blue-1"
            >
              {hours.map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>

            {/* Minute */}
            <select
              value={minute}
              onChange={(e) => onMinuteChange(parseInt(e.target.value))}
              className="flex-1 h-8 px-2 border border-neutral-200 rounded font-roboto text-body-sm focus:outline-none focus:ring-2 focus:ring-canary-blue-1"
            >
              {minutes.map(m => (
                <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
              ))}
            </select>

            {/* AM/PM */}
            <select
              value={ampm}
              onChange={(e) => onAmPmChange(e.target.value as 'AM' | 'PM')}
              className="w-16 h-8 px-2 border border-neutral-200 rounded font-roboto text-body-sm focus:outline-none focus:ring-2 focus:ring-canary-blue-1"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>

        {/* Guest Information */}
        <div>
          <CanaryInput
            label="Guest Name"
            value={guestName}
            onChange={(e) => onGuestNameChange(e.target.value)}
            placeholder="Enter guest name"
            size={InputSize.COMPACT}
          />
        </div>

        <div>
          <CanaryInput
            label="Room Number"
            value={roomNumber}
            onChange={(e) => onRoomNumberChange(e.target.value)}
            placeholder="Enter room number"
            size={InputSize.COMPACT}
          />
        </div>

        {/* View Mode Toggle */}
        <div>
          <label className="block font-roboto text-caption font-medium text-canary-black-2 mb-1">
            Preview Mode
          </label>
          <CanarySegmentedControl
            options={[
              { label: 'Mobile', value: 'mobile' },
              { label: 'Desktop', value: 'desktop' }
            ]}
            value={viewMode}
            onChange={(value) => onViewModeChange(value as 'mobile' | 'desktop')}
          />
        </div>

        {/* Current Time Display */}
        <div className="text-xs text-canary-black-4 font-roboto">
          Current: {day}, {hour}:{minute.toString().padStart(2, '0')} {ampm}
        </div>
      </div>
    </div>
  );
};

interface MenuWithSections {
  name: string;
  entryPoint: string;
  sections?: MenuSection[];
}

interface MobileMenuOrderingProps {
  onBack: () => void;
  onViewCart?: () => void;
  menuName?: string;
  menus?: MenuWithSections[];
  cart?: Record<string, number>;
  onUpdateQuantity?: (item: SectionItem, quantity: number) => void;
  onAddItemToCart?: (item: SectionItem, quantity: number, specialRequests?: string) => void;
  isPreviewMode?: boolean;
  connectedMenus?: string[]; // Filter menus to only show these connected menus
}

interface SectionItem {
  id: string;
  name: string;
  image: string;
  specialRequests?: string;
}

interface MenuSection {
  id: string;
  title: string;
  items: SectionItem[];
}

// Button component
interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outlined' | 'text' | 'icon';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  icon,
  iconPosition = 'left',
  className = '',
  disabled = false
}) => {
  const baseClasses = "inline-flex items-center justify-center font-roboto font-medium transition-all duration-200 outline-none";
  
  const variantClasses = {
    primary: "bg-black text-white hover:opacity-90 h-12 px-4 rounded",
    outlined: "bg-white border border-gray-600 text-gray-900 hover:bg-gray-50 h-12 px-2 rounded",
    text: "bg-transparent text-gray-700 hover:text-black h-10 px-4",
    icon: "bg-transparent text-gray-700 hover:text-black w-10 h-10 rounded-full hover:bg-gray-100"
  };
  
  const iconClasses = variant === 'icon' ? "w-6 h-6" : "w-4 h-4";
  const spacing = variant === 'icon' ? "" : (iconPosition === 'left' ? "mr-2" : "ml-2");
  
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseClasses, variantClasses[variant], className, {
        'opacity-50 cursor-not-allowed': disabled
      })}
    >
      {icon && iconPosition === 'left' && (
        <span className={clsx(iconClasses, spacing)}>{icon}</span>
      )}
      {variant !== 'icon' && children}
      {icon && iconPosition === 'right' && (
        <span className={clsx(iconClasses, spacing)}>{icon}</span>
      )}
    </button>
  );
};

// Enhanced Select component with availability info
interface MenuSelectProps {
  options: Array<{ label: string; value: string; timeInfo?: string; isAvailable?: boolean; status?: 'available-now' | 'available-later-today' | 'not-available-today' }>;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
}

const MenuSelect: React.FC<MenuSelectProps> = ({ 
  options, 
  value, 
  onChange, 
  placeholder 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  // Format the display with inline parentheses and proper styling based on status
  const renderDisplayText = (option: typeof selectedOption, isCompact = false) => {
    if (!option) return <span style={{ fontFamily: typography.fontFamily.primary }}>{placeholder}</span>;
    if (!option.timeInfo) return <span style={{ fontFamily: typography.fontFamily.primary }}>{option.label}</span>;
    
    // Determine colors based on status
    const getStatusColor = (status?: string) => {
      switch (status) {
        case 'available-now':
          return '#008040'; // Green color from Figma
        case 'available-later-today':
        case 'not-available-today':
          return colors.black4; // Gray color
        default:
          return colors.black4;
      }
    };
    
    return (
      <span 
        style={{ 
          fontFamily: typography.fontFamily.primary,
          fontSize: isCompact ? typography.fontSize.body : typography.fontSize.subtitle,
          lineHeight: isCompact ? typography.lineHeight.body : typography.lineHeight.subtitle,
        }}
        className="truncate"
      >
        {option.label}
        <span 
          style={{
            fontWeight: typography.fontWeight.regular,
            color: getStatusColor(option.status),
            fontSize: isCompact ? typography.fontSize.body : typography.fontSize.subtitle // Match menu name size
          }}
        >
          {` (${option.timeInfo})`}
        </span>
      </span>
    );
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          borderColor: colors.neutral200,
          borderRadius: borderRadius.default,
          backgroundColor: colors.white,
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize.subtitle,
          padding: `${spacing[3]} ${spacing[4]}`,
        }}
        className="w-full h-12 border text-left flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 overflow-hidden"
      >
        <div className="flex-1 min-w-0 pr-2">
          <div className="truncate">{renderDisplayText(selectedOption)}</div>
        </div>
        <div 
          style={{
            position: 'absolute',
            right: spacing[3], // Same as left padding for symmetry
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        >
          <Icon 
            path={mdiChevronDown} 
            size={1} 
            color={colors.black3}
            style={{ flexShrink: 0 }}
          />
        </div>
      </button>
      
      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div 
            style={{
              backgroundColor: colors.white,
              borderColor: colors.neutral200,
              borderRadius: borderRadius.default,
              boxShadow: "0px 8px 24px 0px rgba(0,0,0,0.16)",
            }}
            className="absolute top-full left-0 right-0 mt-1 border z-20 max-h-64 overflow-y-auto"
          >
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const getStatusColor = (status?: string) => {
                switch (status) {
                  case 'available-now':
                    return '#008040'; // Green color from Figma
                  case 'available-later-today':
                  case 'not-available-today':
                    return colors.black4; // Gray color
                  default:
                    return colors.black4;
                }
              };

              return (
                <div
                  key={option.value}
                  onClick={() => {
                    onChange?.({ target: { value: option.value } } as React.ChangeEvent<HTMLSelectElement>);
                    setIsOpen(false);
                  }}
                  style={{
                    padding: spacing[2], // 8px padding to match Figma
                  }}
                  className="cursor-pointer hover:bg-gray-50 flex items-start gap-2"
                >
                  <div className="flex-1 min-w-0">
                    <div className="truncate">
                      <span 
                        style={{ 
                          fontFamily: typography.fontFamily.primary,
                          fontSize: '16px', // Match Figma exactly
                          fontWeight: typography.fontWeight.regular,
                          color: colors.black1,
                          lineHeight: '24px'
                        }}
                      >
                        {option.label}
                      </span>
                      {option.timeInfo && (
                        <span 
                          style={{
                            fontFamily: typography.fontFamily.primary,
                            fontSize: '1rem', // 16px as requested
                            fontWeight: typography.fontWeight.regular,
                            color: getStatusColor(option.status),
                            lineHeight: '22px'
                          }}
                        >
                          {` (${option.timeInfo})`}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Checkmark for currently selected menu */}
                  {isSelected && (
                    <div className="flex items-center justify-center w-6 h-6 shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" 
                          fill="#666666"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

// Tab component
interface TabProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const Tab: React.FC<TabProps> = ({ children, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-1 px-4 py-2 font-roboto text-base font-medium transition-colors border-b-2 ${
      active 
        ? 'text-black border-black' 
        : 'text-gray-600 border-transparent hover:text-black'
    }`}
  >
    {children}
  </button>
);

// Menu Item component
interface MenuItemProps {
  item: SectionItem;
  onAddToCart?: (item: SectionItem) => void;
  quantity?: number;
  onUpdateQuantity?: (item: SectionItem, quantity: number) => void;
  onItemClick?: (item: SectionItem) => void;
  isMenuAvailable?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ 
  item, 
  onAddToCart, 
  quantity = 0, 
  onUpdateQuantity,
  onItemClick,
  isMenuAvailable = true
}) => {
  const handleAdd = () => {
    if (!isMenuAvailable) return;
    if (quantity === 0 && onAddToCart) {
      onAddToCart(item);
    } else if (onUpdateQuantity) {
      onUpdateQuantity(item, quantity + 1);
    }
  };

  const handleRemove = () => {
    if (!isMenuAvailable) return;
    if (onUpdateQuantity && quantity > 0) {
      onUpdateQuantity(item, quantity - 1);
    }
  };

  // Generate a consistent mock price based on item name hash
  const mockPrice = Math.floor((item.name.length * 7 + item.id.length * 3) % 30) + 15;
  
  // Get saved image for this item (check both storage systems)
  const savedItem = getItem(item.id);
  const savedImage = savedItem?.image || getImage(item.id) || item.image;

  return (
    <div className="flex items-center gap-4 p-3">
      {/* Item Image or Placeholder */}
      {savedImage ? (
        <img 
          src={savedImage} 
          alt={item.name}
          className="w-16 h-16 rounded-lg object-cover shrink-0 cursor-pointer"
          onClick={() => onItemClick?.(item)}
        />
      ) : (
        <div 
          className="cursor-pointer"
          onClick={() => onItemClick?.(item)}
        >
          <MenuItemPlaceholder />
        </div>
      )}
      
      {/* Item Info */}
      <div 
        className="flex-1 min-w-0 cursor-pointer" 
        onClick={() => onItemClick?.(item)}
      >
        <h4 className="font-roboto text-sm font-medium text-black mb-0.5 truncate">
          {item.name}
        </h4>
        <p className="font-roboto text-sm font-normal text-black">
          ${mockPrice}
        </p>
      </div>
      
      {/* Add/Counter */}
      <div className="shrink-0">
        {quantity === 0 ? (
          // Default state: Just a "+" button
          <button
            onClick={handleAdd}
            disabled={!isMenuAvailable}
            className={`w-9 h-9 flex items-center justify-center rounded transition-opacity ${
              isMenuAvailable 
                ? 'bg-black text-white hover:opacity-90' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Icon path={mdiPlus} size={0.7} color={isMenuAvailable ? "white" : "#9CA3AF"} />
          </button>
        ) : (
          // Counter state: trash/minus + number + plus
          <div className="flex items-center gap-2 bg-transparent rounded overflow-hidden">
            <button
              onClick={handleRemove}
              disabled={!isMenuAvailable}
              className={`w-9 h-9 flex items-center justify-center rounded transition-opacity ${
                isMenuAvailable 
                  ? 'bg-black text-white hover:opacity-90' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Icon 
                path={quantity === 1 ? mdiDelete : mdiMinus} 
                size={0.7} 
                color={isMenuAvailable ? "white" : "#9CA3AF"} 
              />
            </button>
            <span className="font-roboto font-bold text-base text-black text-center w-8 tracking-wide">
              {quantity}
            </span>
            <button
              onClick={handleAdd}
              disabled={!isMenuAvailable}
              className={`w-9 h-9 flex items-center justify-center rounded transition-opacity ${
                isMenuAvailable 
                  ? 'bg-black text-white hover:opacity-90' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Icon path={mdiPlus} size={0.7} color={isMenuAvailable ? "white" : "#9CA3AF"} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const MobileMenuOrdering: React.FC<MobileMenuOrderingProps> = ({ 
  onBack,
  onViewCart,
  menuName = "Breakfast menu",
  menus = [],
  cart = {},
  onUpdateQuantity,
  onAddItemToCart,
  isPreviewMode = false,
  connectedMenus = []
}) => {
  // Load saved data
  const savedData = loadData();

  // Demo time controls state - initialize from saved data
  const [demoDay, setDemoDay] = useState(savedData.demoTime?.day || 'Monday');
  const [demoHour, setDemoHour] = useState(savedData.demoTime?.hour || 7);
  const [demoMinute, setDemoMinute] = useState(savedData.demoTime?.minute || 30);
  const [demoAmPm, setDemoAmPm] = useState<'AM' | 'PM'>(savedData.demoTime?.ampm || 'AM');
  const [guestName, setGuestName] = useState(getGuestInfo().name);
  const [roomNumber, setRoomNumber] = useState(getGuestInfo().room);
  const [viewMode, setViewMode] = useState<'mobile' | 'desktop'>(getViewMode());

  // Filter menus based on connected menus for food ordering
  const filteredMenus = useMemo(() => {
    if (connectedMenus.length === 0) {
      return menus; // No filtering if no connected menus specified
    }
    return menus.filter(menu => {
      // Map from display names to connected menu IDs (breakfast -> Breakfast menu, etc.)
      const menuId = menu.name.toLowerCase().replace(' menu', '');
      return connectedMenus.includes(menuId);
    });
  }, [menus, connectedMenus]);

  // Initialize with the first available menu or saved menu
  const menuNames = useMemo(() => filteredMenus.map(menu => menu.name), [filteredMenus]);
  const [selectedMenuName, setSelectedMenuName] = useState(() => {
    // For connected menus (food ordering), prioritize availability logic
    if (connectedMenus.length > 0) {
      // Use the first available menu from connected menus
      const defaultFromConnected = getDefaultMenu(menuNames, demoDay, demoHour, demoMinute, demoAmPm);
      if (defaultFromConnected && menuNames.includes(defaultFromConnected)) {
        return defaultFromConnected;
      }
      // Fallback to first connected menu
      return menuNames[0] || menuName;
    }
    
    // Original logic for regular menu browsing
    if (savedData.selectedMenu && menuNames.includes(savedData.selectedMenu)) {
      return savedData.selectedMenu;
    }
    return getDefaultMenu(menuNames, demoDay, demoHour, demoMinute, demoAmPm);
  });
  const [activeSection, setActiveSection] = useState('');
  const [selectedItem, setSelectedItem] = useState<SectionItem | null>(null);
  const [isItemDetailsOpen, setIsItemDetailsOpen] = useState(false);
  const [hasUserSelectedMenu, setHasUserSelectedMenu] = useState(false);
  const [isContentScrollable, setIsContentScrollable] = useState(false);
  const [isOrderingClosedModalVisible, setIsOrderingClosedModalVisible] = useState(false);
  const [closedMenuNames, setClosedMenuNames] = useState<string[]>([]);
  const [previousMenuAvailabilities, setPreviousMenuAvailabilities] = useState<Record<string, boolean>>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  // Convert filtered menus to select options format with availability info
  const menuOptions = filteredMenus.map(menu => {
    const availabilityInfo = getMenuAvailabilityInfo(menu.name, demoDay, demoHour, demoMinute, demoAmPm);
    return {
      label: menu.name,
      value: menu.name,
      timeInfo: availabilityInfo.timeInfo,
      isAvailable: availabilityInfo.isAvailable,
      status: availabilityInfo.status
    };
  });

  // Get current selected menu and its sections
  const currentMenu = filteredMenus.find(menu => menu.name === selectedMenuName);
  const menuSections = currentMenu?.sections || [];

  // Check if current menu is available
  const isCurrentMenuAvailable = isMenuAvailable(selectedMenuName, demoDay, demoHour, demoMinute, demoAmPm, []);

  // Determine if tabs should be shown
  const shouldShowTabs = menuSections.length > 1 && isContentScrollable;

  // Set initial active section
  useEffect(() => {
    if (menuSections.length > 0 && !activeSection) {
      setActiveSection(menuSections[0].id);
    }
  }, [menuSections, activeSection]);

  // Update selected menu when demo time changes to ensure default selection is correct
  // Only auto-select if user hasn't manually selected a menu
  useEffect(() => {
    if (!hasUserSelectedMenu) {
      const newDefaultMenu = getDefaultMenu(menuNames, demoDay, demoHour, demoMinute, demoAmPm);
      if (newDefaultMenu !== selectedMenuName && menuNames.includes(newDefaultMenu)) {
        setSelectedMenuName(newDefaultMenu);
      }
    }
  }, [demoDay, demoHour, demoMinute, demoAmPm, menuNames, hasUserSelectedMenu]);

  // Check if content is scrollable to determine if tabs should be shown
  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        const { scrollHeight, clientHeight } = scrollContainerRef.current;
        setIsContentScrollable(scrollHeight > clientHeight);
      }
    };

    // Check on mount and when menu sections change
    checkScrollable();

    // Use ResizeObserver to check when content size changes
    const resizeObserver = new ResizeObserver(checkScrollable);
    if (scrollContainerRef.current) {
      resizeObserver.observe(scrollContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [menuSections]);

  // Intersection Observer for auto-updating active tab - only when tabs are shown
  useEffect(() => {
    if (!scrollContainerRef.current || menuSections.length === 0 || !shouldShowTabs) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section-id');
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      {
        root: scrollContainerRef.current,
        rootMargin: '-50px 0px -50% 0px',
        threshold: 0
      }
    );

    // Observe all section elements
    Object.values(sectionRefs.current).forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [menuSections, shouldShowTabs]);

  // Monitor all menu availability and show modal when any ordering period closes
  useEffect(() => {
    let hasAnyMenuClosed = false;
    const updatedAvailabilities: Record<string, boolean> = {};
    const currentlyClosedMenus: string[] = [];
    
    // Check availability for all menus
    menus.forEach(menu => {
      const currentAvailability = isMenuAvailable(menu.name, demoDay, demoHour, demoMinute, demoAmPm, []);
      const previousAvailability = previousMenuAvailabilities[menu.name];
      
      updatedAvailabilities[menu.name] = currentAvailability;
      
      // If this menu changed from available to unavailable
      if (previousAvailability === true && currentAvailability === false) {
        hasAnyMenuClosed = true;
        currentlyClosedMenus.push(menu.name);
        
        // Clear only cart items that belong to this menu
        const itemsToRemove: string[] = [];
        
        // Find all cart items that belong to this menu
        Object.keys(cart).forEach(itemId => {
          // Check if this item exists in the closed menu's sections
          const itemExistsInMenu = menu.sections?.some(section =>
            section.items.some(item => item.id === itemId)
          );
          
          if (itemExistsInMenu) {
            itemsToRemove.push(itemId);
          }
        });
        
        // Remove only the items from the unavailable menu
        itemsToRemove.forEach(itemId => {
          const item = { id: itemId } as SectionItem;
          if (onUpdateQuantity) {
            onUpdateQuantity(item, 0);
          }
        });
        
        // Update saved cart by removing items from this menu
        const updatedCart = { ...cart };
        itemsToRemove.forEach(itemId => {
          delete updatedCart[itemId];
        });
        saveCart(updatedCart);
      }
    });
    
    // Show modal if any menu became unavailable
    if (hasAnyMenuClosed) {
      setClosedMenuNames(currentlyClosedMenus);
      setIsOrderingClosedModalVisible(true);
    }
    
    // Update previous availability states
    setPreviousMenuAvailabilities(updatedAvailabilities);
  }, [demoDay, demoHour, demoMinute, demoAmPm, menus, previousMenuAvailabilities, onUpdateQuantity]);

  const handleMenuSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMenuName = event.target.value;
    setSelectedMenuName(newMenuName);
    setHasUserSelectedMenu(true); // Mark that user has manually selected a menu
    saveSelectedMenu(newMenuName); // Save to localStorage
    
    // Reset active section to first section of the new menu
    const newMenu = menus.find(menu => menu.name === newMenuName);
    const newMenuSections = newMenu?.sections || [];
    setActiveSection(newMenuSections.length > 0 ? newMenuSections[0].id : '');
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = sectionRefs.current[sectionId];
    if (sectionElement && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const sectionRect = sectionElement.getBoundingClientRect();
      
      const scrollTop = container.scrollTop + (sectionRect.top - containerRect.top) - 20; // 20px offset for better positioning
      
      container.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };

  const handleAddToCart = (item: SectionItem) => {
    if (onUpdateQuantity) {
      onUpdateQuantity(item, 1);
      // Save cart state after adding
      const newCart = { ...cart, [item.id]: 1 };
      saveCart(newCart);
    }
  };

  const handleUpdateQuantity = (item: SectionItem, quantity: number) => {
    if (onUpdateQuantity) {
      onUpdateQuantity(item, quantity);
      // Save cart state after update
      const newCart = { ...cart, [item.id]: quantity };
      if (quantity === 0) {
        delete newCart[item.id];
      }
      saveCart(newCart);
    }
  };

  const handleItemClick = (item: SectionItem) => {
    setSelectedItem(item);
    setIsItemDetailsOpen(true);
  };

  const handleItemDetailsClose = () => {
    setIsItemDetailsOpen(false);
    setSelectedItem(null);
  };

  const handleAddToCartFromDetails = (item: SectionItem, quantity: number, specialRequests: string) => {
    if (onAddItemToCart) {
      onAddItemToCart(item, quantity, specialRequests);
    }
  };

  const handleOrderingClosedModalReturn = () => {
    setIsOrderingClosedModalVisible(false);
    // Just close the modal and stay on the current menu view
  };

  const totalCartItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className={clsx(
      "min-h-screen bg-gray-100",
      viewMode === 'mobile' 
        ? "flex items-center justify-center p-8"
        : "p-0"
    )}>
      {/* Back to Mobile Landing Button - Only show in mobile mode */}
      {viewMode === 'mobile' && (
        <div className="fixed top-8 left-8 z-50">
          <Button
            onClick={onBack}
            variant="outlined"
            icon={<Icon path={mdiArrowLeft} size={0.8} />}
            iconPosition="left"
          >
            Back to Mobile Landing
          </Button>
        </div>
      )}

      {/* Demo Time Controls */}
      <TimeControls
        day={demoDay}
        hour={demoHour}
        minute={demoMinute}
        ampm={demoAmPm}
        guestName={guestName}
        roomNumber={roomNumber}
        viewMode={viewMode}
        onDayChange={(day) => {
          setDemoDay(day);
          saveDemoTime({ day, hour: demoHour, minute: demoMinute, ampm: demoAmPm });
        }}
        onHourChange={(hour) => {
          setDemoHour(hour);
          saveDemoTime({ day: demoDay, hour, minute: demoMinute, ampm: demoAmPm });
        }}
        onMinuteChange={(minute) => {
          setDemoMinute(minute);
          saveDemoTime({ day: demoDay, hour: demoHour, minute, ampm: demoAmPm });
        }}
        onAmPmChange={(ampm) => {
          setDemoAmPm(ampm);
          saveDemoTime({ day: demoDay, hour: demoHour, minute: demoMinute, ampm });
        }}
        onGuestNameChange={(name) => {
          setGuestName(name);
          saveGuestInfo({ name, room: roomNumber });
        }}
        onRoomNumberChange={(room) => {
          setRoomNumber(room);
          saveGuestInfo({ name: guestName, room });
        }}
        onViewModeChange={(mode) => {
          setViewMode(mode);
          saveViewMode(mode);
        }}
      />

      {/* Responsive Frame */}
      <div 
        className={clsx(
          "relative bg-white overflow-hidden",
          viewMode === 'mobile' 
            ? "shadow-xl" 
            : "min-h-screen"
        )}
        style={viewMode === 'mobile' ? {
          width: '430px',
          height: '932px',
          borderRadius: '44px',
          boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.16)'
        } : {
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto'
        }}
      >
        {/* Preview Mode Banner - Very Top */}
        {isPreviewMode && (
          <div 
            className="text-white text-center py-2 px-4"
            style={{ 
              backgroundColor: colors.red1,
              borderTopLeftRadius: '44px',
              borderTopRightRadius: '44px'
            }}
          >
            <span 
              style={{
                fontFamily: typography.fontFamily.primary,
                fontSize: typography.fontSize.bodySm,
                fontWeight: typography.fontWeight.medium,
                color: colors.white
              }}
            >
              Menu preview mode
            </span>
          </div>
        )}

        {/* Header */}
        <div className={clsx(
          "flex items-center justify-between bg-white",
          viewMode === 'mobile' ? "px-4 py-4" : "px-6 py-6"
        )}>
          {viewMode === 'mobile' ? (
            <Button 
              onClick={onBack}
              variant="icon"
              icon={<Icon path={mdiArrowLeft} size={1} />}
            />
          ) : (
            <Button
              onClick={onBack}
              variant="outlined"
              icon={<Icon path={mdiArrowLeft} size={0.8} />}
              iconPosition="left"
            >
              Back to Menu Management
            </Button>
          )}
          
          <h1 className={clsx(
            "font-roboto font-semibold text-black text-center",
            viewMode === 'mobile' ? "text-2xl" : "text-3xl"
          )}>
            In-room dining
          </h1>
          
          <div className={clsx(
            "opacity-0",
            viewMode === 'mobile' ? "w-10 h-10" : "w-0 h-0"
          )} />
        </div>

        {/* Menu Dropdown - Hidden in preview mode */}
        {!isPreviewMode && (
          <div className={clsx(
            viewMode === 'mobile' ? "px-4" : "px-6"
          )} style={{ paddingTop: spacing[3], paddingBottom: spacing[3] }}>
            <MenuSelect
              options={menuOptions}
              value={selectedMenuName}
              onChange={handleMenuSelect}
              placeholder="Select a menu"
            />
          </div>
        )}

        {/* Menu Title */}
        <div className={clsx(
          viewMode === 'mobile' ? "px-4 py-3" : "px-6 py-4"
        )}>
          <h2 className={clsx(
            "font-roboto font-medium text-black",
            viewMode === 'mobile' 
              ? "text-[32px] leading-[48px]" 
              : "text-[40px] leading-[56px]"
          )}>
            {selectedMenuName}
          </h2>
        </div>

        {/* Menu Unavailable Message - Show when menu is not currently available */}
        {!isCurrentMenuAvailable && (
          <div className={clsx(
            "pb-3",
            viewMode === 'mobile' ? "px-4" : "px-6"
          )}>
            <MenuUnavailableMessage
              menuName={selectedMenuName}
              timeInfo={menuOptions.find(opt => opt.value === selectedMenuName)?.timeInfo || ''}
              status={menuOptions.find(opt => opt.value === selectedMenuName)?.status === 'available-later-today' ? 'available-later-today' : 'not-available-today'}
            />
          </div>
        )}

        {/* Section Tabs - Only show if there are multiple sections AND content is scrollable */}
        {shouldShowTabs && (
          <div className={clsx(
            "border-b border-neutral-200",
            viewMode === 'mobile' ? "px-4" : "px-6"
          )}>
            <div className="flex">
              {menuSections.map((section) => (
                <Tab
                  key={section.id}
                  active={activeSection === section.id}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </Tab>
              ))}
            </div>
          </div>
        )}

        {/* Scrollable Content */}
        <div 
          ref={scrollContainerRef}
          className={clsx(
            "flex-1 overflow-y-auto py-6",
            viewMode === 'mobile' ? "px-4" : "px-6"
          )}
          style={viewMode === 'mobile' ? { height: 'calc(100% - 240px)' } : {}}
        >
          {menuSections.map((section) => (
            <div 
              key={section.id}
              ref={(el) => { sectionRefs.current[section.id] = el; }}
              data-section-id={section.id}
              className="mb-6 last:mb-0"
            >
              {/* Section Header */}
              <h3 className={clsx(
                "font-roboto font-medium text-black mb-3",
                viewMode === 'mobile' ? "text-xl" : "text-2xl"
              )}>
                {section.title}
              </h3>
              
              {/* Section Items - Seamless Stacked List */}
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                {section.items.length === 0 ? (
                  <div className="p-8 text-center">
                    <p className="text-gray-500 font-roboto text-sm">
                      No items in this section yet
                    </p>
                  </div>
                ) : (
                  section.items.map((item, index) => (
                    <div key={item.id} className={index < section.items.length - 1 ? "border-b border-neutral-200" : ""}>
                      <MenuItem
                        item={item}
                        quantity={cart[item.id] || 0}
                        onAddToCart={handleAddToCart}
                        onUpdateQuantity={handleUpdateQuantity}
                        onItemClick={handleItemClick}
                        isMenuAvailable={isCurrentMenuAvailable}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Footer - Cart Button */}
        {totalCartItems > 0 && (
          <div className={clsx(
            "bg-white border-t border-neutral-200",
            viewMode === 'mobile' 
              ? "absolute bottom-0 left-0 right-0 p-4"
              : "sticky bottom-0 p-6"
          )}>
            <Button 
              className={clsx(
                viewMode === 'mobile' ? "w-full" : "w-full max-w-md mx-auto"
              )}
              onClick={onViewCart}
            >
              View cart ({totalCartItems})
            </Button>
          </div>
        )}

        {/* Menu Item Details Modal */}
        <MenuItemDetails
          item={selectedItem}
          isOpen={isItemDetailsOpen}
          onClose={handleItemDetailsClose}
          onAddToCart={handleAddToCartFromDetails}
          initialQuantity={selectedItem ? cart[selectedItem.id] || 1 : 1}
          isMenuAvailable={isCurrentMenuAvailable}
          isPreviewMode={isPreviewMode}
        />

        {/* Ordering Closed Modal */}
        <OrderingClosedModal
          isVisible={isOrderingClosedModalVisible}
          onReturn={handleOrderingClosedModalReturn}
          closedMenuNames={closedMenuNames}
        />
      </div>
    </div>
  );
};