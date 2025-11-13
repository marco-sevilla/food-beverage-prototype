'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import clsx from 'clsx';
import { colors, spacing } from '@/lib/design-tokens';
import { saveImage, getImage } from '@/utils/persistence';
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
  mdiUpload,
  mdiDelete,
  mdiPencil
} from '@mdi/js';

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
        className="flex items-center justify-center p-2 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50"
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
  type?: 'text' | 'number';
}

const Input: React.FC<InputProps> = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  required = false,
  type = 'text'
}) => (
  <div className="flex flex-col gap-2">
    <label className="font-roboto text-body-sm font-medium text-canary-black-1">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full h-12 px-4 border border-neutral-200 rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 focus:border-canary-blue-1"
    />
  </div>
);

// Textarea component
interface TextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  rows = 4 
}) => (
  <div className="flex flex-col gap-2">
    <label className="font-roboto text-body-sm font-medium text-canary-black-1">
      {label}
    </label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-3 border border-neutral-200 rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 focus:border-canary-blue-1 resize-vertical"
    />
  </div>
);

// Image Upload component
interface ImageUploadProps {
  label: string;
  image?: string;
  onImageChange: (image: string | undefined) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ label, image, onImageChange }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Convert to data URL for persistence
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        onImageChange(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    onImageChange(undefined);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-roboto text-body-sm font-medium text-canary-black-1">
        {label}
      </label>
      
      {image ? (
        <div className="relative">
          <img 
            src={image} 
            alt="Item"
            className="w-full h-48 object-cover rounded border border-neutral-200"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <Button variant="icon" onClick={handleRemoveImage}>
              <Icon path={mdiDelete} size={0.8} color="#E40046" />
            </Button>
            <Button variant="icon" onClick={() => document.getElementById('image-upload')?.click()}>
              <Icon path={mdiPencil} size={0.8} />
            </Button>
          </div>
        </div>
      ) : (
        <div 
          className="w-full h-48 border-2 border-dashed border-neutral-300 rounded flex flex-col items-center justify-center cursor-pointer hover:border-canary-blue-1 transition-colors"
          onClick={() => document.getElementById('image-upload')?.click()}
        >
          <Icon path={mdiUpload} size={2} color={colors.black4} />
          <span className="mt-2 font-roboto text-body-sm text-canary-black-4">
            Click to upload image
          </span>
          <span className="mt-1 font-roboto text-caption text-canary-black-4">
            PNG, JPG, GIF up to 10MB
          </span>
        </div>
      )}
      
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

// Food Item interface
interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

// Main component
interface EditItemPageProps {
  item?: FoodItem;
  onBack?: () => void;
  onSave?: (item: FoodItem) => void;
}

export const EditItemPage: React.FC<EditItemPageProps> = ({ 
  item,
  onBack,
  onSave
}) => {
  const [formData, setFormData] = useState<FoodItem>({
    id: item?.id || '',
    name: item?.name || '',
    description: item?.description || '',
    price: item?.price || 0,
    image: item?.image
  });

  // Load saved image when component mounts
  useEffect(() => {
    if (item?.id) {
      const savedImage = getImage(item.id);
      if (savedImage) {
        setFormData(prev => ({
          ...prev,
          image: savedImage
        }));
      }
    }
  }, [item?.id]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSave = () => {
    // Validation
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Title is required';
    }
    
    if (formData.price <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSave?.(formData);
  };

  const updateFormData = (field: keyof FoodItem, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Save image to localStorage when image changes
    if (field === 'image' && value && formData.id) {
      saveImage(formData.id, value);
    }
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const isNewItem = !item || !item.id;

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
                  {isNewItem ? 'Create item' : 'Edit item'}
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
                
                <div className="space-y-4">
                  {/* Title Field */}
                  <div>
                    <Input
                      label="Title"
                      value={formData.name}
                      onChange={(value) => updateFormData('name', value)}
                      placeholder="Enter item title"
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Description Field */}
                  <Textarea
                    label="Description"
                    value={formData.description}
                    onChange={(value) => updateFormData('description', value)}
                    placeholder="Enter item description"
                    rows={3}
                  />

                  {/* Price Field */}
                  <div>
                    <Input
                      label="Price"
                      value={formData.price.toString()}
                      onChange={(value) => updateFormData('price', parseFloat(value) || 0)}
                      placeholder="0.00"
                      type="number"
                    />
                    {errors.price && (
                      <p className="mt-1 text-sm text-red-500">{errors.price}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="border border-neutral-200 rounded-lg p-6 bg-white">
                <ImageUpload
                  label="Image"
                  image={formData.image}
                  onImageChange={(image) => updateFormData('image', image)}
                />
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
    </div>
  );
};