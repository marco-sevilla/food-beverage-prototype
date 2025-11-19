'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import clsx from 'clsx';
import { colors, spacing } from '@/lib/design-tokens';
import { saveImage, getImage, saveItem, getItem } from '@/utils/persistence';
import { AnimatedSection } from './PageTransition';
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
  mdiPencil,
  mdiMinus,
  mdiPlus
} from '@mdi/js';

// Import the CanarySidebar component
import CanarySidebar, { SidebarVariant, type SidebarSection, type SidebarNavigationItem } from './CanarySidebar';
import CanaryInput from '../../temp-components/CanaryInput';
import { InputType, InputSize } from '../../temp-components/types';


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
  isAIFilled?: boolean;
  onAIFilledChange?: (isAIFilled: boolean) => void;
}

const Textarea: React.FC<TextareaProps> = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  rows = 4,
  isAIFilled = false,
  onAIFilledChange
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Remove AI filled state when user modifies the text
    if (isAIFilled && onAIFilledChange) {
      onAIFilledChange(false);
    }
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-roboto text-body-sm font-medium text-canary-black-1">
        {label}
      </label>
      <div className="relative">
        <textarea
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows}
          className={`w-full px-4 py-3 border border-neutral-200 rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 focus:border-canary-blue-1 resize-vertical ${isAIFilled ? 'pr-12' : ''}`}
        />
        {isAIFilled && (
          <div className="absolute right-2 top-2 flex items-center pointer-events-none z-20">
            <img 
              src="/AI star.svg" 
              alt="AI filled" 
              width="20" 
              height="20"
              className="w-5 h-5"
            />
          </div>
        )}
      </div>
    </div>
  );
};

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
  internalName?: string;
  description: string;
  price: number;
  image?: string;
  menus?: string[];
  available?: boolean;
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
    id: item?.id || `item-${Date.now()}`, // Generate ID if not provided
    name: item?.name || '',
    internalName: item?.internalName || item?.name || '',
    description: item?.description || '',
    price: item?.price || 0,
    image: item?.image || '',
    menus: item?.menus || [],
    available: item?.available !== undefined ? item?.available : true
  });
  
  // Track AI-filled fields - detect based on item ID starting with "parsed-"
  const isAIParsedItem = item?.id?.startsWith('parsed-') || false;
  const [aiFilledFields, setAiFilledFields] = useState<{[key: string]: boolean}>({
    name: isAIParsedItem && !!item?.name,
    internalName: isAIParsedItem && !!item?.internalName,
    description: isAIParsedItem && !!item?.description,
    price: isAIParsedItem && !!item?.price
  });

  // Load saved data when component mounts
  useEffect(() => {
    if (item?.id) {
      const savedItem = getItem(item.id);
      const savedImage = getImage(item.id);
      
      if (savedItem) {
        // Load all saved item data, prioritizing saved data
        // For images, check both the item data and separate image storage
        const imageToUse = savedItem.image || savedImage || item.image;
        setFormData({
          id: item.id,
          name: savedItem.name || item.name || '',
          internalName: savedItem.internalName || item.internalName || savedItem.name || item.name || '',
          description: savedItem.description || item.description || '', 
          price: savedItem.price || item.price || 0,
          image: imageToUse
        });
      } else {
        // Use original item data if no saved data exists, but check for saved images
        setFormData({
          id: item.id,
          name: item.name || '',
          internalName: item.internalName || item.name || '',
          description: item.description || '',
          price: item.price || 0,
          image: savedImage || item.image
        });
      }
    }
  }, [item?.id]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});


  const handleSave = () => {
    // Validation
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'External item name is required';
    }
    
    if (!formData.internalName?.trim()) {
      newErrors.internalName = 'Internal item name is required';
    }
    
    if (formData.price <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    
    // Always save to localStorage for persistence across sessions
    if (formData.id) {
      saveItem(formData.id, formData);
    }
    
    // Always call the onSave callback to update the parent component state
    onSave?.(formData);
  };

  const updateFormData = (field: keyof FoodItem, value: any) => {
    // Clear AI-filled state for this field when modified
    setAiFilledFields(prev => ({
      ...prev,
      [field]: false,
      // Also clear internalName AI state when name is changed if they're synced
      ...(field === 'name' && formData.name === formData.internalName ? { internalName: false } : {})
    }));
    
    setFormData(prev => {
      const updatedData = {
        ...prev,
        [field]: value
      };
      
      // Auto-sync internal name when external name changes (only if they were the same)
      if (field === 'name' && prev.name === prev.internalName) {
        updatedData.internalName = value;
      }
      
      // Save image to both localStorage systems when image changes
      if (field === 'image' && formData.id) {
        if (value) {
          // Save image separately and also update the complete item data
          saveImage(formData.id, value);
          saveItem(formData.id, updatedData);
        } else {
          // If image is being removed, update both storage systems
          saveItem(formData.id, updatedData);
        }
      }
      
      return updatedData;
    });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const isNewItem = !item || !item.id;

  // Create sidebar sections
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
      onClick={() => onBack?.()}
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
      {/* CanarySidebar */}
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

        {/* Content Area */}
        <div className="flex-1 flex bg-white overflow-hidden">
          {/* Left Configuration Panel */}
          <div className="flex-1 border-r border-neutral-200 flex flex-col">
            {/* Page Header */}
            <AnimatedSection delay={0}>
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
            </AnimatedSection>

            {/* Configuration Content */}
            <div className="flex-1 overflow-auto py-8 px-6 space-y-6">
              {/* Basic Info Section */}
              <AnimatedSection delay={80}>
                <div className="border border-neutral-200 rounded-lg p-6 bg-white">
                <h2 className="font-roboto text-subtitle font-semibold text-canary-black-1 mb-6">
                  Basic info
                </h2>
                
                <div className="space-y-4">
                  {/* External Item Name */}
                  <div>
                    <CanaryInput
                      label="External item name"
                      type={InputType.TEXT}
                      size={InputSize.LARGE}
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      placeholder="Enter external item name"
                      isRequired={true}
                      isAIFilled={aiFilledFields.name}
                      onAIFilledChange={(isAIFilled) => setAiFilledFields(prev => ({ ...prev, name: isAIFilled }))}
                      error={errors.name}
                      helperText="This name will be displayed to guests and the public."
                    />
                  </div>

                  {/* Internal Item Name */}
                  <div>
                    <CanaryInput
                      label="Internal item name"
                      type={InputType.TEXT}
                      size={InputSize.LARGE}
                      value={formData.internalName || ''}
                      onChange={(e) => updateFormData('internalName', e.target.value)}
                      placeholder="Enter internal item name"
                      isRequired={true}
                      isAIFilled={aiFilledFields.internalName}
                      onAIFilledChange={(isAIFilled) => setAiFilledFields(prev => ({ ...prev, internalName: isAIFilled }))}
                      error={errors.internalName}
                      helperText="This name will be used for internal staff views and operations."
                    />
                  </div>

                  {/* Description Field */}
                  <Textarea
                    label="Description"
                    value={formData.description}
                    onChange={(value) => updateFormData('description', value)}
                    placeholder="Enter item description"
                    rows={3}
                    isAIFilled={aiFilledFields.description}
                    onAIFilledChange={(isAIFilled) => setAiFilledFields(prev => ({ ...prev, description: isAIFilled }))}
                  />

                  {/* Price Field */}
                  <div>
                    <CanaryInput
                      label="Price"
                      type={InputType.NUMBER}
                      size={InputSize.LARGE}
                      value={formData.price.toString()}
                      onChange={(e) => updateFormData('price', parseFloat(e.target.value) || 0)}
                      placeholder="0.00"
                      isAIFilled={aiFilledFields.price}
                      onAIFilledChange={(isAIFilled) => setAiFilledFields(prev => ({ ...prev, price: isAIFilled }))}
                      error={errors.price}
                    />
                  </div>
                </div>
              </div>
              </AnimatedSection>

              {/* Image Section */}
              <AnimatedSection delay={160}>
                <div className="border border-neutral-200 rounded-lg p-6 bg-white">
                  <ImageUpload
                    label="Image"
                    image={formData.image}
                    onImageChange={(image) => updateFormData('image', image)}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Right Mobile Preview Panel */}
          <AnimatedSection delay={240} className="flex-1">
            <div className="h-full bg-gray-100 flex flex-col items-center py-8 px-6">
              
              {/* Mobile Preview Container */}
              <div className="flex-1 w-full max-w-md flex items-center justify-center">
                <div 
                  className="relative bg-white overflow-hidden shadow-xl"
                  style={{
                    width: '320px',
                    height: '640px', 
                    borderRadius: '28px',
                    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.16)'
                  }}
                >
                  {/* Mobile Preview Content - Item Details Modal */}
                  <div className="h-full flex flex-col relative bg-white">

                    {/* Item Image */}
                    <div className="relative w-full h-56 bg-gray-200 flex items-center justify-center" style={{
                      borderTopLeftRadius: '28px',
                      borderTopRightRadius: '28px'
                    }}>
                      {formData.image ? (
                        <img 
                          src={formData.image} 
                          alt={formData.name}
                          className="w-full h-full object-cover"
                          style={{
                            borderTopLeftRadius: '28px',
                            borderTopRightRadius: '28px'
                          }}
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-gray-400">
                          <Icon path={mdiUpload} size={2} />
                          <span className="mt-2 font-roboto text-sm">No image</span>
                        </div>
                      )}
                      
                      {/* Close Button */}
                      <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-md shadow-lg flex items-center justify-center opacity-50">
                        <Icon path={mdiArrowLeft} size={1} />
                      </button>
                    </div>

                    {/* Scrollable Content */}
                    <div 
                      className="flex-1 overflow-y-scroll bg-white px-4" 
                      style={{ 
                        minHeight: 0,
                        maxHeight: '100%',
                        WebkitOverflowScrolling: 'touch'
                      }}
                    >
                      <div style={{ pointerEvents: 'none' }} className="pb-20">
                        {/* Item Content */}
                        <div className="py-4">
                          {/* Item Title */}
                          <h2 className="font-roboto text-[28px] font-medium text-black leading-[42px] mb-3">
                            {formData.name || 'Item Name'}
                          </h2>

                          {/* Description */}
                          {formData.description && (
                            <p className="font-roboto text-base text-black leading-[24px] mb-3">
                              {formData.description}
                            </p>
                          )}

                          {/* Price */}
                          <div className="mb-6">
                            <span className="font-roboto text-base text-black">
                              ${formData.price.toFixed(2)}
                            </span>
                          </div>

                          {/* Quantity Selector */}
                          <div className="flex items-center gap-2 pt-4 mb-6">
                            <button className="w-12 h-12 bg-black rounded flex items-center justify-center opacity-50">
                              <Icon path={mdiMinus} size={1} color="white" />
                            </button>
                            <span className="font-roboto text-lg font-bold text-black w-8 text-center tracking-wide">
                              1
                            </span>
                            <button className="w-12 h-12 bg-black rounded flex items-center justify-center">
                              <Icon path={mdiPlus} size={1} color="white" />
                            </button>
                          </div>

                          {/* Special Requests */}
                          <div className="mb-6">
                            <label className="block font-roboto text-sm text-black mb-1">
                              Special requests
                            </label>
                            <textarea
                              className="w-full h-20 px-2 py-3 border border-gray-400 rounded text-gray-600 font-roboto text-lg resize-none"
                              placeholder="Special requests"
                              style={{ pointerEvents: 'none' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sticky Add to Cart Button */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
                      <button 
                        className="w-full h-12 bg-black text-white rounded font-roboto text-lg font-medium opacity-50 cursor-not-allowed"
                        disabled
                      >
                        Add to cart ${formData.price.toFixed(2)}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};