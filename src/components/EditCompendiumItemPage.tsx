'use client';

import React from 'react';
import CanarySwitch from './temp-components/CanarySwitch';
import CanaryDropdown from './temp-components/CanaryDropdown';
import CanaryButton from './temp-components/CanaryButton';
import { ButtonType } from './temp-components/button-types';
import { CompendiumItem, saveCompendiumItem, getCompendiumItems, getGuestInfo } from '../utils/persistence';
import { GuestItemDetailsMobilePreview } from './GuestItemDetailsMobilePreview';
import { ConnectMenusModal } from './ConnectMenusModal';

interface EditCompendiumItemPageProps {
  itemName: string;
  sectionName: string;
  sectionId: string;
  itemId?: string;
  onBack: () => void;
  onNavigateToMenuManagement?: () => void;
  onSave?: (item: CompendiumItem) => void;
  onNavigateToGuestHub?: () => void;
}

export const EditCompendiumItemPage: React.FC<EditCompendiumItemPageProps> = ({ 
  itemName,
  sectionName,
  sectionId,
  itemId,
  onBack,
  onNavigateToMenuManagement,
  onSave,
  onNavigateToGuestHub
}) => {
  // Basic info state
  const [currentItemName, setCurrentItemName] = React.useState(itemName);
  const [itemType, setItemType] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [website, setWebsite] = React.useState('');
  
  // Action button state
  const [actionButtonEnabled, setActionButtonEnabled] = React.useState(false);
  const [buttonLabel, setButtonLabel] = React.useState('');
  const [buttonType, setButtonType] = React.useState('Link');
  const [buttonUrl, setButtonUrl] = React.useState('');
  
  // Connect menus modal state
  const [isConnectMenusModalOpen, setIsConnectMenusModalOpen] = React.useState(false);
  const [connectedMenus, setConnectedMenus] = React.useState<string[]>([]);
  
  // Image state
  const [itemImage, setItemImage] = React.useState<string>('');
  const [imageError, setImageError] = React.useState(false);
  
  // Room number for delivery location (from guest info)
  const [roomNumber, setRoomNumber] = React.useState(getGuestInfo().room);

  // Load existing item data when editing
  React.useEffect(() => {
    if (itemId && sectionId) {
      // Load existing item data
      const items = getCompendiumItems(sectionId);
      const existingItem = items.find(item => item.id === itemId);
      
      if (existingItem) {
        // Log successful load (can be removed in production)
        if (existingItem.image) {
          console.log('Loaded item with image, size:', existingItem.image.length, 'bytes');
        }
        
        setCurrentItemName(existingItem.name);
        setItemType(existingItem.type || '');
        setDescription(existingItem.description || '');
        setAddress(existingItem.address || '');
        setPhone(existingItem.phone || '');
        setEmail(existingItem.email || '');
        setWebsite(existingItem.website || '');
        setItemImage(existingItem.image || '');
        
        // Load action button data
        if (existingItem.actionButton) {
          setActionButtonEnabled(existingItem.actionButton.enabled || false);
          setButtonLabel(existingItem.actionButton.label || '');
          setButtonType(existingItem.actionButton.type || 'Link');
          setButtonUrl(existingItem.actionButton.url || '');
          setConnectedMenus(existingItem.actionButton.connectedMenus || []);
        }
      }
    }
  }, [itemId, sectionId]);

  // Phone number formatting function
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const truncated = numbers.slice(0, 10);
    
    // Format as (XXX) XXX-XXXX
    if (truncated.length <= 3) {
      return truncated;
    } else if (truncated.length <= 6) {
      return `(${truncated.slice(0, 3)}) ${truncated.slice(3)}`;
    } else {
      return `(${truncated.slice(0, 3)}) ${truncated.slice(3, 6)}-${truncated.slice(6)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  // Email validation
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Website URL validation and formatting
  const handleWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // If user is typing a URL but hasn't included protocol, don't auto-add it yet
    if (value && !value.startsWith('http://') && !value.startsWith('https://') && !value.includes('://')) {
      // Only auto-add https:// if it looks like a complete domain
      if (value.includes('.') && !value.includes(' ') && value.length > 3) {
        // Don't auto-add protocol while user is still typing
      }
    }
    
    setWebsite(value);
  };

  // Connect menus modal handlers
  const handleConnectMenusClick = () => {
    setIsConnectMenusModalOpen(true);
  };

  const handleConnectMenusModalClose = () => {
    setIsConnectMenusModalOpen(false);
  };

  const handleConnectMenusSave = (selectedMenus: string[]) => {
    setConnectedMenus(selectedMenus);
    setIsConnectMenusModalOpen(false);
  };

  // Image upload handlers with compression
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      // Create an image element to compress
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Calculate new dimensions (max width/height of 800px)
        const maxSize = 800;
        let { width, height } = img;
        
        if (width > height && width > maxSize) {
          height = (height * maxSize) / width;
          width = maxSize;
        } else if (height > maxSize) {
          width = (width * maxSize) / height;
          height = maxSize;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        // Draw compressed image
        ctx?.drawImage(img, 0, 0, width, height);
        
        // Convert to base64 with compression
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.8);
        console.log('Image compressed:', {
          originalSize: file.size,
          compressedSize: compressedBase64.length,
          dimensions: `${width}x${height}`
        });
        
        setItemImage(compressedBase64);
        setImageError(false);
      };
      
      img.onerror = () => {
        alert('Failed to load image');
      };
      
      // Create object URL for the image
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setItemImage('');
    setImageError(false);
  };

  const handleSave = () => {
    if (onSave) {
      // Create the full item object
      const item: CompendiumItem = {
        id: itemId || `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name: currentItemName,
        sectionId: sectionId,
        createdAt: itemId ? (getCompendiumItems(sectionId).find(i => i.id === itemId)?.createdAt || Date.now()) : Date.now(),
        updatedAt: Date.now(),
        type: itemType || undefined,
        description: description || undefined,
        address: address || undefined,
        phone: phone || undefined,
        email: email || undefined,
        website: website || undefined,
        image: itemImage || undefined,
        actionButton: actionButtonEnabled ? {
          enabled: true,
          label: buttonLabel || undefined,
          type: buttonType,
          url: buttonUrl || undefined,
          connectedMenus: buttonType === 'Enable food ordering' ? connectedMenus : undefined
        } : undefined
      };
      
      // Log save attempt (can be removed in production)
      if (item.image) {
        console.log('Saving item with image, size:', item.image.length, 'bytes');
      }
      
      onSave(item);
    }
  };

  return (
    <div className="h-screen flex bg-gray-50 overflow-hidden" style={{overscrollBehavior: 'none'}}>
      {/* Sidebar Navigation - Same as CompendiumPage */}
      <aside className="flex flex-col shrink-0 w-[180px] h-full overflow-hidden" style={{backgroundColor: 'rgb(51, 51, 51)'}}>
        <div className="flex items-center justify-center pt-6 pb-6 shrink-0">
          <div style={{opacity: 0.35, width: '140px', height: '24px'}}>
            <img alt="Canary" src="/canary-logo.png" style={{width: '140px', height: '24px', objectFit: 'contain'}} />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto flex flex-col gap-4 w-[180px] mx-auto">
          <div>
            <div className="px-4 pb-4 text-[12px] font-normal uppercase opacity-30" style={{color: 'white', fontFamily: 'Roboto, sans-serif', lineHeight: '16px', letterSpacing: '0.4px'}}>
              General Settings
            </div>
            <div className="flex flex-col">
              <button className="relative h-10 w-full flex items-center focus:outline-none" style={{color: 'rgb(255, 255, 255)', cursor: 'pointer'}}>
                <span className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none" style={{width: '24px', height: '24px', opacity: 0.5, zIndex: 1, color: 'white', filter: 'none'}}>
                  <svg viewBox="0 0 24 24" role="presentation" style={{width: '24px', height: '24px'}}>
                    <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" style={{fill: 'currentcolor'}} />
                  </svg>
                </span>
                <span className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none" style={{fontFamily: 'Roboto, sans-serif', lineHeight: '22px', zIndex: 1}}>
                  Property Info
                </span>
              </button>
              <button className="relative h-10 w-full flex items-center focus:outline-none" style={{color: 'rgb(255, 255, 255)', cursor: 'pointer'}}>
                <span className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none" style={{width: '24px', height: '24px', opacity: 0.5, zIndex: 1, color: 'white', filter: 'none'}}>
                  <svg viewBox="0 0 24 24" role="presentation" style={{width: '24px', height: '24px'}}>
                    <path d="M8 3C5.79 3 4 4.79 4 7V14C4 15.1 4.9 16 6 16H9V20C9 21.1 9.9 22 11 22H13C14.1 22 15 21.1 15 20V16H18C19.1 16 20 15.1 20 14V3H8M8 5H12V7H14V5H15V9H17V5H18V10H6V7C6 5.9 6.9 5 8 5M6 14V12H18V14H6Z" style={{fill: 'currentcolor'}} />
                  </svg>
                </span>
                <span className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none" style={{fontFamily: 'Roboto, sans-serif', lineHeight: '22px', zIndex: 1}}>
                  Branding
                </span>
              </button>
              <button className="relative h-10 w-full flex items-center focus:outline-none" style={{color: 'rgb(255, 255, 255)', cursor: 'pointer'}}>
                <span className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none" style={{width: '24px', height: '24px', opacity: 0.5, zIndex: 1, color: 'white', filter: 'none'}}>
                  <svg viewBox="0 0 24 24" role="presentation" style={{width: '24px', height: '24px'}}>
                    <path d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z" style={{fill: 'currentcolor'}} />
                  </svg>
                </span>
                <span className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none" style={{fontFamily: 'Roboto, sans-serif', lineHeight: '22px', zIndex: 1}}>
                  Staff Members
                </span>
              </button>
              <button className="relative h-10 w-full flex items-center focus:outline-none" style={{color: 'rgb(255, 255, 255)', cursor: 'pointer'}}>
                <span className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none" style={{width: '24px', height: '24px', opacity: 0.5, zIndex: 1, color: 'white', filter: 'none'}}>
                  <svg viewBox="0 0 24 24" role="presentation" style={{width: '24px', height: '24px'}}>
                    <path d="M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z" style={{fill: 'currentcolor'}} />
                  </svg>
                </span>
                <span className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none" style={{fontFamily: 'Roboto, sans-serif', lineHeight: '22px', zIndex: 1}}>
                  Security
                </span>
              </button>
              <button className="relative h-10 w-full flex items-center focus:outline-none" style={{color: 'rgb(255, 255, 255)', cursor: 'pointer'}}>
                <span className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none" style={{width: '24px', height: '24px', opacity: 0.5, zIndex: 1, color: 'white', filter: 'none'}}>
                  <svg viewBox="0 0 24 24" role="presentation" style={{width: '24px', height: '24px'}}>
                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" style={{fill: 'currentcolor'}} />
                  </svg>
                </span>
                <span className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none" style={{fontFamily: 'Roboto, sans-serif', lineHeight: '22px', zIndex: 1}}>
                  Integrations
                </span>
              </button>
            </div>
          </div>

          <div>
            <div className="h-[1px] mb-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}} />
            <div className="px-4 pb-4 text-[12px] font-normal uppercase opacity-30" style={{color: 'white', fontFamily: 'Roboto, sans-serif', lineHeight: '16px', letterSpacing: '0.4px'}}>
              Product settings
            </div>
            <div className="flex flex-col">
              {/* Compendium - Active State */}
              <button className="relative h-10 w-full flex items-center focus:outline-none" style={{color: 'rgb(51, 51, 51)', cursor: 'pointer'}}>
                <div className="absolute rounded-[4px] pointer-events-none" style={{backgroundColor: 'rgb(255, 255, 255)', inset: '4px 8px'}} />
                <span className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none" style={{width: '24px', height: '24px', opacity: 1, zIndex: 1, color: 'rgb(51, 51, 51)', filter: 'brightness(0) saturate(100%) invert(20%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)'}}>
                  <svg viewBox="0 0 24 24" role="presentation" style={{width: '24px', height: '24px'}}>
                    <path d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z" style={{fill: 'currentcolor'}} />
                  </svg>
                </span>
                <span className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none" style={{fontFamily: 'Roboto, sans-serif', lineHeight: '22px', zIndex: 1}}>
                  Compendium
                </span>
              </button>

              {/* F&B Ordering */}
              <button 
                onClick={onNavigateToMenuManagement}
                className="relative h-10 w-full flex items-center focus:outline-none" 
                style={{color: 'rgb(255, 255, 255)', cursor: 'pointer'}}
              >
                <span className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none" style={{width: '24px', height: '24px', opacity: 0.5, zIndex: 1, color: 'white', filter: 'none'}}>
                  <svg viewBox="0 0 24 24" role="presentation" style={{width: '24px', height: '24px'}}>
                    <path d="M3,3A1,1 0 0,0 2,4V8L2,9.5C2,11.19 3.03,12.63 4.5,13.22V19.5A1.5,1.5 0 0,0 6,21A1.5,1.5 0 0,0 7.5,19.5V13.22C8.97,12.63 10,11.19 10,9.5V8L10,4A1,1 0 0,0 9,3A1,1 0 0,0 8,4V8A0.5,0.5 0 0,1 7.5,8.5A0.5,0.5 0 0,1 7,8V4A1,1 0 0,0 6,3A1,1 0 0,0 5,4V8A0.5,0.5 0 0,1 4.5,8.5A0.5,0.5 0 0,1 4,8V4A1,1 0 0,0 3,3M19.88,3C19.75,3 19.62,3.09 19.5,3.16L16,5.25V9H12V11H13L14,21H20L21,11H22V9H18V6.34L20.5,4.84C21,4.56 21.13,4 20.84,3.5C20.63,3.14 20.26,2.95 19.88,3Z" style={{fill: 'currentcolor'}} />
                  </svg>
                </span>
                <span className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none" style={{fontFamily: 'Roboto, sans-serif', lineHeight: '22px', zIndex: 1}}>
                  F&B Ordering
                </span>
              </button>

              <button className="relative h-10 w-full flex items-center focus:outline-none" style={{color: 'rgb(255, 255, 255)', cursor: 'pointer'}}>
                <span className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none" style={{width: '24px', height: '24px', opacity: 0.5, zIndex: 1, color: 'white', filter: 'none'}}>
                  <svg viewBox="0 0 24 24" role="presentation" style={{width: '24px', height: '24px'}}>
                    <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" style={{fill: 'currentcolor'}} />
                  </svg>
                </span>
                <span className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none" style={{fontFamily: 'Roboto, sans-serif', lineHeight: '22px', zIndex: 1}}>
                  Upsells
                </span>
              </button>
              <button className="relative h-10 w-full flex items-center focus:outline-none" style={{color: 'rgb(255, 255, 255)', cursor: 'pointer'}}>
                <span className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none" style={{width: '24px', height: '24px', opacity: 0.5, zIndex: 1, color: 'white', filter: 'none'}}>
                  <svg viewBox="0 0 24 24" role="presentation" style={{width: '24px', height: '24px'}}>
                    <path d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z" style={{fill: 'currentcolor'}} />
                  </svg>
                </span>
                <span className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none" style={{fontFamily: 'Roboto, sans-serif', lineHeight: '22px', zIndex: 1}}>
                  Check-in
                </span>
              </button>
              <button className="relative h-10 w-full flex items-center focus:outline-none" style={{color: 'rgb(255, 255, 255)', cursor: 'pointer'}}>
                <span className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none" style={{width: '24px', height: '24px', opacity: 0.5, zIndex: 1, color: 'white', filter: 'none'}}>
                  <svg viewBox="0 0 24 24" role="presentation" style={{width: '24px', height: '24px'}}>
                    <path d="M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3A2,2 0 0,1 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z" style={{fill: 'currentcolor'}} />
                  </svg>
                </span>
                <span className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none" style={{fontFamily: 'Roboto, sans-serif', lineHeight: '22px', zIndex: 1}}>
                  Checkout
                </span>
              </button>
              <button className="relative h-10 w-full flex items-center focus:outline-none" style={{color: 'rgb(255, 255, 255)', cursor: 'pointer'}}>
                <span className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none" style={{width: '24px', height: '24px', opacity: 0.5, zIndex: 1, color: 'white', filter: 'none'}}>
                  <svg viewBox="0 0 24 24" role="presentation" style={{width: '24px', height: '24px'}}>
                    <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" style={{fill: 'currentcolor'}} />
                  </svg>
                </span>
                <span className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none" style={{fontFamily: 'Roboto, sans-serif', lineHeight: '22px', zIndex: 1}}>
                  Messages
                </span>
              </button>
              <button className="relative h-10 w-full flex items-center focus:outline-none" style={{color: 'rgb(255, 255, 255)', cursor: 'pointer'}}>
                <span className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none" style={{width: '24px', height: '24px', opacity: 0.5, zIndex: 1, color: 'white', filter: 'none'}}>
                  <svg viewBox="0 0 24 24" role="presentation" style={{width: '24px', height: '24px'}}>
                    <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z" style={{fill: 'currentcolor'}} />
                  </svg>
                </span>
                <span className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none" style={{fontFamily: 'Roboto, sans-serif', lineHeight: '22px', zIndex: 1}}>
                  Digital Tips
                </span>
              </button>
              <button className="relative h-10 w-full flex items-center focus:outline-none" style={{color: 'rgb(255, 255, 255)', cursor: 'pointer'}}>
                <span className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none" style={{width: '24px', height: '24px', opacity: 0.5, zIndex: 1, color: 'white', filter: 'none'}}>
                  <svg viewBox="0 0 24 24" role="presentation" style={{width: '24px', height: '24px'}}>
                    <path d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" style={{fill: 'currentcolor'}} />
                  </svg>
                </span>
                <span className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none" style={{fontFamily: 'Roboto, sans-serif', lineHeight: '22px', zIndex: 1}}>
                  Authorizations
                </span>
              </button>
              <button className="relative h-10 w-full flex items-center focus:outline-none" style={{color: 'rgb(255, 255, 255)', cursor: 'pointer'}}>
                <span className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none" style={{width: '24px', height: '24px', opacity: 0.5, zIndex: 1, color: 'white', filter: 'none'}}>
                  <svg viewBox="0 0 24 24" role="presentation" style={{width: '24px', height: '24px'}}>
                    <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" style={{fill: 'currentcolor'}} />
                  </svg>
                </span>
                <span className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none" style={{fontFamily: 'Roboto, sans-serif', lineHeight: '22px', zIndex: 1}}>
                  Contracts
                </span>
              </button>
              <button className="relative h-10 w-full flex items-center focus:outline-none" style={{color: 'rgb(255, 255, 255)', cursor: 'pointer'}}>
                <span className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none" style={{width: '24px', height: '24px', opacity: 0.5, zIndex: 1, color: 'white', filter: 'none'}}>
                  <svg viewBox="0 0 24 24" role="presentation" style={{width: '24px', height: '24px'}}>
                    <path d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" style={{fill: 'currentcolor'}} />
                  </svg>
                </span>
                <span className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none" style={{fontFamily: 'Roboto, sans-serif', lineHeight: '22px', zIndex: 1}}>
                  Payment Links
                </span>
              </button>
            </div>
          </div>
        </nav>

        <div className="mt-auto shrink-0">
          <button 
            onClick={onBack}
            className="h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer text-white hover:opacity-90 transition-opacity"
          >
            <div className="absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center">
              <svg viewBox="0 0 24 24" role="presentation" style={{width: '1.5rem', height: '1.5rem'}}>
                <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" style={{fill: 'rgb(255, 255, 255)'}} />
              </svg>
            </div>
            <span className="absolute left-12 font-roboto text-sm font-medium text-white">Back</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col bg-white min-h-0 overflow-hidden">
        {/* Property-level Top Bar */}
        <div className="bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-roboto text-body-sm font-medium text-canary-black-1 truncate">
              Canary Test Hotel (Demo)
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6z" fill="currentColor" />
            </svg>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-canary-black-5 shrink-0">
              <img 
                src="https://static.cdn.canarytechnologies.com/dist/assets/ninja-WWFuJGuv.png" 
                alt="" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-roboto text-caption font-medium text-canary-black-1">
                Marco Sevilla
              </span>
              <span className="font-roboto text-caption-sm font-normal text-canary-black-4">
                CC Permissions, Can view credit card + 4 more
              </span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-white border-b border-neutral-200 py-4 px-6 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Back Button */}
              <button 
                onClick={onBack}
                className="flex items-center justify-center w-8 h-8 rounded bg-transparent cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  width="24" 
                  height="24" 
                  fill="rgb(65, 65, 65)"
                >
                  <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11z"></path>
                </svg>
              </button>

              {/* Item Title */}
              <h1 className="font-roboto text-[20px] font-medium text-canary-black-1">
                {currentItemName}
              </h1>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className="flex items-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'rgb(40, 88, 196)' }}
            >
              Save
            </button>
          </div>
        </div>

        {/* Main Content Area - Two Column Layout */}
        <div className="flex-1 flex min-h-0 overflow-hidden">
          {/* Left Column - Item Configuration Panel */}
          <div className="flex-1 bg-white border-r border-neutral-200 overflow-y-auto" style={{maxHeight: '100vh', overscrollBehavior: 'none'}}>
            <div className="p-6 space-y-6">
            
            {/* Translations Section */}
            <div className="bg-white border border-neutral-200 rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <h2 className="font-roboto text-[16px] font-medium text-canary-black-1">
                    Translations
                  </h2>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    width="20" 
                    height="20" 
                    className="text-canary-black-3"
                    fill="rgb(65, 65, 65)"
                  >
                    <path d="M11 18h2v-2h-2zm1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2 2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4"></path>
                  </svg>
                </div>
                {/* Language Selector */}
                <div className="mt-3">
                  <button 
                    className="flex items-center justify-between w-32 px-3 py-2 border border-neutral-200 rounded text-sm font-medium text-canary-black-1 bg-white hover:bg-gray-50 transition-colors"
                    style={{ borderColor: 'rgb(159, 159, 159)', borderRadius: '4px' }}
                  >
                    <span>English</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      width="16" 
                      height="16" 
                      fill="currentColor"
                    >
                      <path d="M12 18.17 8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* General Information */}
            <div className="bg-white border border-neutral-200 rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-neutral-200">
                <h2 className="font-roboto text-[16px] font-medium text-canary-black-1">
                  General information
                </h2>
              </div>
              <div className="p-6 space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label 
                    htmlFor="item-name-field" 
                    className="block text-sm font-medium text-canary-black-1"
                    style={{ color: 'rgb(65, 65, 65)' }}
                  >
                    Name (English)
                  </label>
                  <input
                    id="item-name-field"
                    type="text"
                    required
                    placeholder="Enter Name (required)"
                    value={currentItemName}
                    onChange={(e) => setCurrentItemName(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-200 rounded text-sm font-roboto text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ 
                      borderColor: 'rgb(159, 159, 159)',
                      borderRadius: '4px'
                    }}
                  />
                </div>

                {/* Type */}
                <div className="space-y-2">
                  <label 
                    htmlFor="item-type-field" 
                    className="block text-sm font-medium text-canary-black-1"
                    style={{ color: 'rgb(65, 65, 65)' }}
                  >
                    Type (English)
                  </label>
                  <input
                    id="item-type-field"
                    type="text"
                    placeholder="Enter type (e.g. Italian Cuisine, Outdoor Activity, etc.)"
                    value={itemType}
                    onChange={(e) => setItemType(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-200 rounded text-sm font-roboto text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ 
                      borderColor: 'rgb(159, 159, 159)',
                      borderRadius: '4px'
                    }}
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label 
                      htmlFor="item-description-field" 
                      className="block text-sm font-medium text-canary-black-1"
                      style={{ color: 'rgb(65, 65, 65)' }}
                    >
                      Description (English)
                    </label>
                    <span className="text-xs text-gray-500">
                      {description.length}/500
                    </span>
                  </div>
                  <textarea
                    id="item-description-field"
                    rows={5}
                    maxLength={500}
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-200 rounded text-sm font-roboto text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    style={{ 
                      borderColor: 'rgb(159, 159, 159)',
                      borderRadius: '4px'
                    }}
                  />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label 
                    htmlFor="item-address-field" 
                    className="block text-sm font-medium text-canary-black-1"
                    style={{ color: 'rgb(65, 65, 65)' }}
                  >
                    Address (English)
                  </label>
                  <input
                    id="item-address-field"
                    type="text"
                    placeholder="Enter address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-200 rounded text-sm font-roboto text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ 
                      borderColor: 'rgb(159, 159, 159)',
                      borderRadius: '4px'
                    }}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label 
                    htmlFor="item-phone-field" 
                    className="block text-sm font-medium text-canary-black-1"
                    style={{ color: 'rgb(65, 65, 65)' }}
                  >
                    Phone
                  </label>
                  <div className="flex">
                    <div className="flex items-center px-3 py-2 border border-r-0 border-neutral-200 rounded-l bg-gray-50" style={{ borderColor: 'rgb(159, 159, 159)' }}>
                      <div className="w-4 h-3 mr-2 bg-blue-500 relative">
                        <div className="absolute inset-0 flex">
                          <div className="w-1/3 bg-blue-500"></div>
                          <div className="w-1/3 bg-white"></div>
                          <div className="w-1/3 bg-red-500"></div>
                        </div>
                      </div>
                      <span className="text-sm text-canary-black-1">+1</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        width="12" 
                        height="12" 
                        fill="currentColor"
                        className="ml-1"
                      >
                        <path d="M7 10l5 5 5-5z"/>
                      </svg>
                    </div>
                    <input
                      id="item-phone-field"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={phone}
                      onChange={handlePhoneChange}
                      className="flex-1 px-3 py-2 border border-neutral-200 rounded text-sm font-roboto text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      style={{ 
                        borderColor: 'rgb(159, 159, 159)',
                        borderRadius: '0 4px 4px 0'
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label 
                    htmlFor="item-email-field" 
                    className="block text-sm font-medium text-canary-black-1"
                    style={{ color: 'rgb(65, 65, 65)' }}
                  >
                    Email
                  </label>
                  <input
                    id="item-email-field"
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-3 py-2 border rounded text-sm font-roboto text-canary-black-1 focus:outline-none focus:ring-2 focus:border-transparent ${
                      email && !isValidEmail(email) 
                        ? 'border-red-500 focus:ring-red-500' 
                        : email && isValidEmail(email)
                        ? 'border-green-500 focus:ring-green-500'
                        : 'border-neutral-200 focus:ring-blue-500'
                    }`}
                    style={{ 
                      borderRadius: '4px'
                    }}
                  />
                  {email && !isValidEmail(email) && (
                    <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
                  )}
                </div>

                {/* Website */}
                <div className="space-y-2">
                  <label 
                    htmlFor="item-website-field" 
                    className="block text-sm font-medium text-canary-black-1"
                    style={{ color: 'rgb(65, 65, 65)' }}
                  >
                    Website
                  </label>
                  <input
                    id="item-website-field"
                    type="url"
                    placeholder="https://example.com"
                    value={website}
                    onChange={handleWebsiteChange}
                    className="w-full px-3 py-2 border border-neutral-200 rounded text-sm font-roboto text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ 
                      borderColor: 'rgb(159, 159, 159)',
                      borderRadius: '4px'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="bg-white border border-neutral-200 rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-neutral-200">
                <div className="flex items-center justify-between w-full">
                  <h2 className="font-roboto text-[16px] font-medium text-canary-black-1 flex-shrink-0">
                    Action button
                  </h2>
                  <div className="flex-shrink-0">
                    <CanarySwitch 
                      checked={actionButtonEnabled} 
                      onChange={setActionButtonEnabled} 
                      size="normal" 
                    />
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                {/* Button Label */}
                <div className="space-y-2">
                  <label 
                    htmlFor="button-label-field" 
                    className="block text-sm font-medium text-canary-black-1"
                    style={{ color: 'rgb(65, 65, 65)' }}
                  >
                    Button label (English)
                  </label>
                  <input
                    id="button-label-field"
                    type="text"
                    placeholder="Enter button label"
                    value={buttonLabel}
                    onChange={(e) => setButtonLabel(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-200 rounded text-sm font-roboto text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ 
                      borderColor: 'rgb(159, 159, 159)',
                      borderRadius: '4px'
                    }}
                  />
                </div>

                {/* Type Dropdown */}
                <div className="space-y-2">
                  <label 
                    className="block text-sm font-medium text-canary-black-1"
                    style={{ color: 'rgb(65, 65, 65)' }}
                  >
                    Type
                  </label>
                  <CanaryDropdown
                    align="left"
                    className="w-full"
                    trigger={
                      <button 
                        className="flex items-center justify-between w-full px-3 py-2 border border-neutral-200 rounded text-sm font-medium text-canary-black-1 bg-white hover:bg-gray-50 transition-colors"
                        style={{ borderColor: 'rgb(159, 159, 159)', borderRadius: '4px' }}
                      >
                        <span>{buttonType}</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          width="16" 
                          height="16" 
                          fill="currentColor"
                        >
                          <path d="M12 18.17 8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9z"></path>
                        </svg>
                      </button>
                    }
                    items={[
                      {
                        id: 'enable-food-ordering',
                        label: 'Enable food ordering',
                        onClick: () => setButtonType('Enable food ordering')
                      },
                      {
                        id: 'email',
                        label: 'Email',
                        onClick: () => setButtonType('Email')
                      },
                      {
                        id: 'call',
                        label: 'Call',
                        onClick: () => setButtonType('Call')
                      },
                      {
                        id: 'link',
                        label: 'Link',
                        onClick: () => setButtonType('Link')
                      }
                    ]}
                  />
                </div>

                {/* URL or Connect Menus - Conditional */}
                {buttonType === 'Enable food ordering' ? (
                  /* Connect Menus Component */
                  <div className="space-y-2">
                    <div 
                      className="border border-neutral-200 rounded-lg overflow-hidden"
                      style={{ borderColor: 'rgb(229, 229, 229)', borderRadius: '8px' }}
                    >
                      <div className="bg-white p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-roboto text-[14px] font-medium text-black leading-[22px] mb-1">
                              Connect menus
                            </h3>
                            <p className="font-roboto text-[12px] font-normal text-gray-600 leading-[18px]">
                              Once you connect a menu, guests can order food from this item.
                            </p>
                          </div>
                          <CanaryButton
                            type={ButtonType.SHADED}
                            onClick={handleConnectMenusClick}
                          >
                            Connect
                          </CanaryButton>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* URL Field */
                  <div className="space-y-2">
                    <label 
                      htmlFor="button-url-field" 
                      className="block text-sm font-medium text-canary-black-1"
                      style={{ color: 'rgb(65, 65, 65)' }}
                    >
                      URL
                    </label>
                    <input
                      id="button-url-field"
                      type="text"
                      placeholder="Enter URL"
                      value={buttonUrl}
                      onChange={(e) => setButtonUrl(e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-200 rounded text-sm font-roboto text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      style={{ 
                        borderColor: 'rgb(159, 159, 159)',
                        borderRadius: '4px'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Manage Hours */}
            <div className="bg-white border border-neutral-200 rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-neutral-200">
                <div className="flex items-center justify-between">
                  <h2 className="font-roboto text-[16px] font-medium text-canary-black-1">
                    Manage Hours
                  </h2>
                  <button 
                    className="text-sm font-medium text-blue-600 hover:underline"
                    style={{ color: 'rgb(40, 88, 196)' }}
                  >
                    Add Hours
                  </button>
                </div>
              </div>
            </div>

            {/* Photos */}
            <div className="bg-white border border-neutral-200 rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-neutral-200">
                <h2 className="font-roboto text-[16px] font-medium text-canary-black-1">
                  Photos
                </h2>
              </div>
              <div className="p-6">
                {itemImage ? (
                  <div className="space-y-4">
                    {/* Preview of uploaded image */}
                    <div className="relative">
                      {!imageError ? (
                        <img 
                          src={itemImage} 
                          alt="Uploaded item image"
                          className="w-full h-48 object-cover rounded-lg border"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="w-full h-48 bg-gray-200 rounded-lg border flex items-center justify-center">
                          <p className="text-gray-500">Image failed to load</p>
                        </div>
                      )}
                      {/* Remove button */}
                      <button
                        onClick={handleImageRemove}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        title="Remove image"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 13H5v-2h14v2z"/>
                        </svg>
                      </button>
                    </div>
                    {/* Upload new image button */}
                    <div>
                      <label className="inline-block">
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 11h-3v3h-2v-3h-3V9h3V6h2v3h3m2-5v12H8V4zm0-2H8c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2M4 6H2v14a2 2 0 0 0 2 2h14v-2H4z"/>
                          </svg>
                          Replace image
                        </span>
                      </label>
                    </div>
                  </div>
                ) : (
                  /* Upload area when no image */
                  <label className="block cursor-pointer">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        width="48" 
                        height="48" 
                        className="mx-auto mb-4 text-gray-400"
                        fill="currentColor"
                      >
                        <path d="M18 11h-3v3h-2v-3h-3V9h3V6h2v3h3m2-5v12H8V4zm0-2H8c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2M4 6H2v14a2 2 0 0 0 2 2h14v-2H4z"/>
                      </svg>
                      <p className="text-sm text-gray-600">Click to upload photos</p>
                      <p className="text-xs text-gray-400 mt-2">PNG, JPG up to 5MB</p>
                    </div>
                  </label>
                )}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white border border-neutral-200 rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-neutral-200">
                <div className="flex items-center justify-between">
                  <h2 className="font-roboto text-[16px] font-medium text-canary-black-1">
                    Resources
                  </h2>
                  <button 
                    className="flex items-center justify-center w-8 h-8 rounded bg-transparent cursor-pointer hover:bg-gray-50 transition-colors"
                    style={{ borderRadius: '4px' }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      width="24" 
                      height="24" 
                      fill="rgb(65, 65, 65)"
                    >
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <label 
                    htmlFor="display-title-field" 
                    className="block text-sm font-medium text-canary-black-1"
                    style={{ color: 'rgb(65, 65, 65)' }}
                  >
                    Display title (English)
                  </label>
                  <input
                    id="display-title-field"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-neutral-200 rounded text-sm font-roboto text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ 
                      borderColor: 'rgb(159, 159, 159)',
                      borderRadius: '4px'
                    }}
                  />
                </div>
                {/* Empty resources list */}
                <div className="border border-neutral-200 rounded-md">
                  <div className="p-4 text-center text-gray-500 text-sm">
                    No resources added yet
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Right Column - Mobile Preview Panel */}
          <div className="w-1/2 bg-gray-50 overflow-y-auto" style={{maxHeight: '100vh', overscrollBehavior: 'none'}}>
            <GuestItemDetailsMobilePreview
              itemName={currentItemName}
              itemType={itemType}
              description={description}
              address={address}
              phone={phone}
              email={email}
              website={website}
              image={itemImage}
              actionButton={actionButtonEnabled ? {
                enabled: actionButtonEnabled,
                label: buttonLabel,
                type: buttonType,
                url: buttonUrl
              } : undefined}
              roomNumber={roomNumber}
            />
          </div>
        </div>
      </main>

      {/* Go to Guest Hub Button */}
      <button
        onClick={onNavigateToGuestHub}
        className="fixed bottom-6 right-6 bg-canary-blue-1 text-white px-4 py-0 h-10 rounded font-roboto font-medium text-sm shadow-lg hover:opacity-90 transition-opacity z-50 whitespace-nowrap flex items-center justify-center"
      >
        Go to Guest Hub
      </button>

      {/* Connect Menus Modal */}
      <ConnectMenusModal
        isOpen={isConnectMenusModalOpen}
        onClose={handleConnectMenusModalClose}
        onSave={handleConnectMenusSave}
        initialSelectedMenus={connectedMenus}
      />
    </div>
  );
};