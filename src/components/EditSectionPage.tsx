'use client';

import React, { useState } from 'react';
import Icon from '@mdi/react';
import clsx from 'clsx';
import { colors, spacing } from '@/lib/design-tokens';
import { FOOD_ITEMS, formatMenuDisplay, type FoodItem as CentralizedFoodItem } from '@/data/foodItems';
import { getImage } from '@/utils/persistence';
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
  mdiPlus,
  mdiDrag,
  mdiPencil,
  mdiDelete
} from '@mdi/js';
import { AddItemsModal } from './AddItemsModal';

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

// Button component
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'icon';
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, type = 'button' }) => {
  if (variant === 'icon') {
    return (
      <button
        type={type}
        onClick={onClick}
        className="flex items-center justify-center p-1.5 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50"
      >
        {children}
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button
        type={type}
        onClick={onClick}
        className="flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90"
    >
      {children}
    </button>
  );
};

// Input component
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  required = false
}) => (
  <div className="flex flex-col gap-2">
    <label className="font-roboto text-body-sm font-medium text-canary-black-1">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full h-12 px-4 border border-neutral-200 rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 focus:border-canary-blue-1"
    />
  </div>
);

// Section Item component
interface SectionItemProps {
  id: string;
  name: string;
  image: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const SectionItem: React.FC<SectionItemProps> = ({ 
  id, 
  name, 
  image, 
  onEdit, 
  onDelete 
}) => {
  // Get saved image for this item
  const savedImage = getImage(id) || image;
  
  return (
    <div className="flex items-center gap-3 py-3 px-3 bg-white">
      {/* Drag Handle */}
      <div className="cursor-move text-canary-black-4">
        <Icon path={mdiDrag} size={1} />
      </div>
      
      {/* Item Image */}
      <img 
        src={savedImage} 
        alt={name}
        className="w-10 h-10 rounded object-cover"
      />
    
    {/* Item Name */}
    <span className="flex-1 font-roboto text-body-sm font-medium text-canary-black-1">
      {name}
    </span>
    
    {/* Actions */}
    <div className="flex items-center gap-2">
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

// Section and Item interfaces
interface SectionItem {
  id: string;
  name: string;
  image: string;
}

interface MenuSection {
  id: string;
  title: string;
  items: SectionItem[];
}

interface FoodItem {
  id: string;
  name: string;
  image: string;
  menus: string[];
  price: number;
  available: boolean;
}

// Sample items data
const sampleItems: SectionItem[] = [
  {
    id: '1',
    name: 'Croissant',
    image: 'https://images.unsplash.com/photo-1555507036-ab794f4eeecb?w=40&h=40&fit=crop&crop=center'
  },
  {
    id: '2',
    name: 'Frittata',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=40&h=40&fit=crop&crop=center'
  }
];


// Main component
interface EditSectionPageProps {
  section?: MenuSection;
  onBack?: () => void;
  onSave?: (section: MenuSection) => void;
}

export const EditSectionPage: React.FC<EditSectionPageProps> = ({ 
  section,
  onBack,
  onSave
}) => {
  const [sectionData, setSectionData] = useState<MenuSection>({
    id: section?.id || '',
    title: section?.title || 'Mains',
    items: section?.items || sampleItems
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isAddItemsModalOpen, setIsAddItemsModalOpen] = useState(false);

  const handleSave = () => {
    // Validation
    const newErrors: { [key: string]: string } = {};
    
    if (!sectionData.title.trim()) {
      newErrors.title = 'Section title is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSave?.(sectionData);
  };

  const updateTitle = (title: string) => {
    setSectionData(prev => ({
      ...prev,
      title
    }));
    
    // Clear error when user starts typing
    if (errors.title) {
      setErrors(prev => ({
        ...prev,
        title: ''
      }));
    }
  };

  const handleAddItem = () => {
    setIsAddItemsModalOpen(true);
  };

  const handleEditItem = (itemId: string) => {
    console.log('Edit item:', itemId);
  };

  const handleDeleteItem = (itemId: string) => {
    setSectionData(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== itemId)
    }));
  };

  const handleAddItemsFromLibrary = (selectedItems: CentralizedFoodItem[]) => {
    // Convert FoodItems to SectionItems and add to section
    const newSectionItems: SectionItem[] = selectedItems.map(item => ({
      id: item.id,
      name: item.name,
      image: item.image
    }));

    setSectionData(prev => ({
      ...prev,
      items: [...prev.items, ...newSectionItems]
    }));
  };

  const handleGoToItemLibrary = () => {
    // In a real app, this would navigate to the Item Library
    console.log('Navigate to Item Library');
  };

  // Get existing item IDs to disable in modal
  const existingItemIds = sectionData.items.map(item => item.id);

  const isNewSection = !section || !section.id;

  return (
    <div className="flex h-screen rounded-xl shadow-canary overflow-hidden">
      {/* Sidebar */}
      <div className="w-45 bg-canary-black-2 flex flex-col">
        {/* Back button */}
        <div className="h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer" onClick={onBack}>
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

        {/* Content Area */}
        <div className="flex-1 flex bg-white overflow-hidden">
          {/* Left Configuration Panel */}
          <div className="flex-1 max-w-lg border-r border-neutral-200 flex flex-col">
            {/* Page Header */}
            <div className="border-b border-neutral-200 py-4 px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={onBack}
                  className="flex items-center justify-center p-2 hover:bg-gray-50 rounded"
                >
                  <Icon path={mdiArrowLeft} size={1} />
                </button>
                <h1 className="font-roboto text-subtitle font-medium text-canary-black-1">
                  Section details
                </h1>
              </div>
              <Button onClick={handleSave}>Save</Button>
            </div>

            {/* Configuration Content */}
            <div className="flex-1 overflow-auto py-8 px-6 space-y-6">
              {/* Basic Info Section */}
              <div className="border border-neutral-200 rounded-lg p-6 bg-white">
                <h2 className="font-roboto text-subtitle font-semibold text-canary-black-1 mb-6">
                  Basic info
                </h2>
                
                <div>
                  <Input
                    label="Title"
                    value={sectionData.title}
                    onChange={updateTitle}
                    placeholder="Enter section title"
                    required
                  />
                  {errors.title && (
                    <p className="mt-1 text-sm text-red-500">{errors.title}</p>
                  )}
                </div>
              </div>

              {/* Items Section */}
              <div className="border border-neutral-200 rounded-lg p-6 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-roboto text-subtitle font-semibold text-canary-black-1">
                    Items
                  </h2>
                  <Button variant="icon" onClick={handleAddItem}>
                    <Icon path={mdiPlus} size={1} />
                  </Button>
                </div>

                {/* Items List */}
                {sectionData.items.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-canary-black-4 font-roboto text-body-sm mb-4">
                      No items in this section yet
                    </p>
                    <Button variant="secondary" onClick={handleAddItem}>
                      <Icon path={mdiPlus} size={0.8} />
                      Add first item
                    </Button>
                  </div>
                ) : (
                  <div className="border border-neutral-200 rounded-lg overflow-hidden">
                    {sectionData.items.map((item, index) => (
                      <div key={item.id} className={index < sectionData.items.length - 1 ? "border-b border-neutral-200" : ""}>
                        <SectionItem
                          id={item.id}
                          name={item.name}
                          image={item.image}
                          onEdit={handleEditItem}
                          onDelete={handleDeleteItem}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Mobile Preview Placeholder */}
          <div className="flex-1 bg-canary-black-6 flex items-center justify-center">
            <span className="text-canary-black-4 font-roboto text-body-sm">
              Mobile preview (coming soon)
            </span>
          </div>
        </div>
      </div>

      {/* Add Items Modal */}
      <AddItemsModal
        isOpen={isAddItemsModalOpen}
        onClose={() => setIsAddItemsModalOpen(false)}
        onAddItems={handleAddItemsFromLibrary}
        onGoToItemLibrary={handleGoToItemLibrary}
        availableItems={FOOD_ITEMS}
        existingItemIds={existingItemIds}
      />
    </div>
  );
};