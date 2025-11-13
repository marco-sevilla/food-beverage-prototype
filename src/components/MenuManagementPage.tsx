'use client';

import React, { useState } from 'react';
import Icon from '@mdi/react';
import clsx from 'clsx';
import { colors, spacing } from '@/lib/design-tokens';
import { CreateMenuModal } from './CreateMenuModal';
import { DeleteMenuModal } from './DeleteMenuModal';
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

// Tab component using component library patterns
interface TabProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const Tab: React.FC<TabProps> = ({ children, active = false, onClick }) => (
  <button 
    className="flex flex-col items-start overflow-hidden cursor-pointer bg-transparent border-none outline-none" 
    onClick={onClick}
  >
    <div className="flex items-center justify-center py-1 px-4 gap-2">
      <span className={`font-roboto text-body-sm font-medium ${
        active ? 'text-canary-blue-1' : 'text-canary-black-2'
      }`}>
        {children}
      </span>
    </div>
    <div className={`h-1 w-full ${active ? 'bg-canary-blue-1' : 'bg-transparent'}`} />
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
  isLast?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, entryPoint, onEdit, onDelete, isLast = false }) => (
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
    
    {/* Actions Column - fixed width to match header with 2 buttons */}
    <div className="flex items-center gap-2 w-16 justify-end">
      <Button variant="icon" onClick={onEdit}>
        <Icon path={mdiPencil} size={0.8} />
      </Button>
      <Button variant="icon" onClick={onDelete}>
        <Icon path={mdiDelete} size={0.8} color="#E40046" />
      </Button>
    </div>
  </div>
);

// Navigation Item component
interface NavItemProps {
  children: React.ReactNode;
  icon: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ children, icon, active = false, onClick }) => (
  <div 
    className={`h-10 w-full relative flex items-center cursor-pointer ${
      active ? 'bg-white rounded mx-2' : ''
    }`}
    onClick={onClick}
  >
    <div className="absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center">
      <Icon 
        path={icon} 
        size={1} 
        color={active ? '#000000' : '#ffffff'} 
      />
    </div>
    <span className={`absolute left-12 font-roboto text-sm font-normal ${
      active ? 'text-black' : 'text-white'
    }`}>
      {children}
    </span>
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
      <span className="font-roboto text-body-sm font-medium text-canary-black-1 truncate">
        {name}
      </span>
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
  onEditItem?: (itemId: string) => void;
  initialActiveTab?: 'menus' | 'item-library' | 'settings';
  onGoToOrdering?: () => void;
}

export const MenuManagementPage: React.FC<MenuManagementPageProps> = ({ 
  menus, 
  onEditMenu, 
  onCreateMenu,
  onDeleteMenu,
  onEditItem,
  initialActiveTab = 'menus',
  onGoToOrdering
}) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [deleteModalState, setDeleteModalState] = useState<{
    isOpen: boolean;
    menuName: string;
  }>({ isOpen: false, menuName: '' });
  const [activeTab, setActiveTab] = useState<'menus' | 'item-library' | 'settings'>(initialActiveTab);
  
  const [foodItems, setFoodItems] = useState(FOOD_ITEMS);


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
    console.log('Delete item:', id);
  };

  const handleCreateItem = () => {
    console.log('Create new item');
  };

  return (
    <div className="flex h-screen rounded-xl shadow-canary overflow-hidden">
      {/* Sidebar */}
      <div className="w-45 bg-canary-black-2 flex flex-col">
        {/* Back button */}
        <div className="h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer">
          <div className="absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center">
            <Icon path={mdiArrowLeft} size={1} color="#ffffff" />
          </div>
          <span className="absolute left-12 font-roboto text-sm font-medium text-white">
            Back
          </span>
        </div>

        {/* Navigation */}
        <div className="w-full flex flex-col gap-6 pt-6">
            {/* General Settings */}
            <div className="flex flex-col">
              <div className="px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4">
                General Settings
              </div>
              <div className="flex flex-col gap-4">
                <NavItem icon={mdiHome}>Property Info</NavItem>
                <NavItem icon={mdiBrushVariant}>Branding</NavItem>
                <NavItem icon={mdiAccountMultiple}>Staff Members</NavItem>
                <NavItem icon={mdiSecurity}>Security</NavItem>
                <NavItem icon={mdiCog}>Integrations</NavItem>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white opacity-20"></div>

            {/* Product Settings */}
            <div className="flex flex-col">
              <div className="px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4">
                Product settings
              </div>
              <div className="flex flex-col gap-4">
                <NavItem icon={mdiBook}>Compendium</NavItem>
                <NavItem icon={mdiFoodForkDrink} active>F&B Ordering</NavItem>
                <NavItem icon={mdiTrendingUp}>Upsells</NavItem>
                <NavItem icon={mdiLoginVariant}>Check-in</NavItem>
                <NavItem icon={mdiLogoutVariant}>Checkout</NavItem>
                <NavItem icon={mdiMessage}>Messages</NavItem>
                <NavItem icon={mdiCurrencyUsd}>Digital Tips</NavItem>
                <NavItem icon={mdiShieldCheck}>Authorizations</NavItem>
                <NavItem icon={mdiFileDocument}>Contracts</NavItem>
                <NavItem icon={mdiLink}>Payment Links</NavItem>
              </div>
            </div>
          </div>
        </div>

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
        <div className="bg-white border-b border-neutral-200 py-4 px-6 sm:px-4">
          <h1 className="font-roboto text-subtitle font-medium text-canary-black-1">
            Food and Beverage Ordering
          </h1>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white py-8 px-10 sm:px-4 md:px-6 flex flex-col gap-6 overflow-auto">
          {/* Tabs */}
          <div className="flex items-start overflow-x-auto min-h-[40px]">
            <Tab 
              active={activeTab === 'menus'} 
              onClick={() => setActiveTab('menus')}
            >
              Menus
            </Tab>
            <Tab 
              active={activeTab === 'item-library'} 
              onClick={() => setActiveTab('item-library')}
            >
              Item library
            </Tab>
            <Tab 
              active={activeTab === 'settings'} 
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </Tab>
          </div>

          {/* Tab Content */}
          {activeTab === 'menus' && (
            <>
              {/* Menus Header */}
              <div className="flex items-start justify-between gap-4">
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
                <div className="w-24 opacity-0 text-right">Actions</div>
              </div>

              {/* Menu Items */}
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                {menus.map((item, index) => (
                  <MenuItem
                    key={item.name}
                    name={item.name}
                    entryPoint={item.entryPoint}
                    isLast={index === menus.length - 1}
                    onEdit={() => onEditMenu?.(item.name, item.entryPoint)}
                    onDelete={() => handleDeleteClick(item.name)}
                  />
                ))}
              </div>
              </div>
            </>
          )}

          {activeTab === 'item-library' && (
            <>
              {/* Item Library Header */}
              <div className="flex items-start justify-between gap-4">
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
            </>
          )}

          {activeTab === 'settings' && (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="font-roboto text-body-sm text-canary-black-4">
                Settings tab content coming soon...
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Sticky Go to Ordering Flow Button */}
      <button
        onClick={onGoToOrdering}
        className="fixed bottom-6 right-6 bg-canary-blue-1 text-white px-6 py-3 rounded-lg font-roboto font-medium text-body-sm shadow-lg hover:opacity-90 transition-opacity z-50"
      >
        Go to ordering flow
      </button>

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
    </div>
  );
};