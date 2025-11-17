'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { 
  mdiArrowLeft, 
  mdiPlus,
  mdiMinus,
  mdiDelete
} from '@mdi/js';
import { colors, typography } from '@/lib/design-tokens';
import { MenuItemPlaceholder } from './MenuItemPlaceholder';
import { getGuestInfo, loadData } from '@/utils/persistence';

interface SectionItem {
  id: string;
  name: string;
  image: string;
  specialRequests?: string;
}

interface CartItem extends SectionItem {
  quantity: number;
  price: number;
}

interface CartEntry {
  item: SectionItem;
  quantity: number;
  specialRequests: string;
}

interface OrderSummaryProps {
  onBack: () => void;
  onAddMoreItems: () => void;
  onSubmitOrder?: () => void;
  cartEntries: CartEntry[];
  onUpdateQuantity: (item: SectionItem, quantity: number) => void;
  isPreviewMode?: boolean;
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
    outlined: "bg-white border border-gray-600 text-gray-900 hover:bg-gray-50 h-10 px-4 rounded",
    text: "bg-transparent text-gray-700 hover:text-black h-10 px-4",
    icon: "bg-transparent text-gray-700 hover:text-black w-10 h-10 rounded-full hover:bg-gray-100"
  };
  
  const iconClasses = variant === 'icon' ? "w-6 h-6" : "w-4 h-4";
  const spacing = variant === 'icon' ? "" : (iconPosition === 'left' ? "mr-2" : "ml-2");
  
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {icon && iconPosition === 'left' && (
        <span className={`${iconClasses} ${spacing}`}>{icon}</span>
      )}
      {variant !== 'icon' && children}
      {icon && iconPosition === 'right' && (
        <span className={`${iconClasses} ${spacing}`}>{icon}</span>
      )}
    </button>
  );
};

// Cart Item component
interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (item: SectionItem, quantity: number) => void;
}

const CartItemRow: React.FC<CartItemRowProps> = ({ item, onUpdateQuantity }) => {
  const handleAdd = () => {
    onUpdateQuantity(item, item.quantity + 1);
  };

  const handleRemove = () => {
    if (item.quantity > 0) {
      onUpdateQuantity(item, item.quantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-4 p-3">
        {/* Item Image or Placeholder */}
        {item.image ? (
          <img 
            src={item.image} 
            alt={item.name}
            className="w-16 h-16 rounded-lg object-cover shrink-0"
          />
        ) : (
          <MenuItemPlaceholder />
        )}
        
        {/* Item Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <h4 className="font-roboto text-sm font-medium text-black mb-0.5 truncate">
                {item.name}
              </h4>
              {item.specialRequests && item.specialRequests.trim() && (
                <p className="font-roboto text-xs text-gray-600 mb-1 leading-[18px]">
                  Special request: {item.specialRequests}
                </p>
              )}
              <p className="font-roboto text-sm font-normal text-black">
                ${item.price}
              </p>
            </div>
            
            {/* Quantity Counter */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={handleRemove}
                className="bg-black text-white w-9 h-9 flex items-center justify-center rounded hover:opacity-90 transition-opacity"
              >
                <Icon 
                  path={item.quantity === 1 ? mdiDelete : mdiMinus} 
                  size={0.7} 
                  color="white" 
                />
              </button>
              <span className="font-roboto font-bold text-base text-black text-center w-8 tracking-wide">
                {item.quantity}
              </span>
              <button
                onClick={handleAdd}
                className="bg-black text-white w-9 h-9 flex items-center justify-center rounded hover:opacity-90 transition-opacity"
              >
                <Icon path={mdiPlus} size={0.7} color="white" />
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export const OrderSummary: React.FC<OrderSummaryProps> = ({ 
  onBack, 
  onAddMoreItems,
  onSubmitOrder,
  cartEntries,
  onUpdateQuantity,
  isPreviewMode = false
}) => {
  const [localCartItems, setLocalCartItems] = useState<CartItem[]>([]);
  
  // Get guest information
  const guestInfo = getGuestInfo();
  const savedData = loadData();
  const demoTime = savedData.demoTime || { day: 'Monday', hour: 7, minute: 30, ampm: 'AM' as const };

  // Convert cart entries to local cart items with prices
  useEffect(() => {
    const items: CartItem[] = cartEntries.map(entry => {
      // Generate consistent mock price based on item name hash
      const mockPrice = Math.floor((entry.item.name.length * 7 + entry.item.id.length * 3) % 30) + 15;
      
      return {
        ...entry.item,
        quantity: entry.quantity,
        price: mockPrice,
        specialRequests: entry.specialRequests || undefined
      };
    });
    
    setLocalCartItems(items);
  }, [cartEntries]);

  // Redirect to menu if cart is empty (but wait for initial load)
  useEffect(() => {
    if (localCartItems.length === 0 && cartEntries.length === 0) {
      // Only redirect if both local items and cart entries are empty
      // This prevents redirecting during the initial loading phase
      onBack();
    }
  }, [localCartItems, cartEntries, onBack]);

  // Calculate total
  const estimatedTotal = localCartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Header image URL
  const headerImageUrl = "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=430&h=230&fit=crop&crop=center";

  if (localCartItems.length === 0) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* Back to Mobile Landing Button */}
      <div className="fixed top-8 left-8 z-50">
        <Button
          onClick={onBack}
          variant="outlined"
          icon={<Icon path={mdiArrowLeft} size={0.8} />}
          iconPosition="left"
        >
          Back to Menu
        </Button>
      </div>

      {/* Demo Time Display */}
      <div className="fixed top-24 left-8 z-50 bg-white border border-neutral-200 rounded-lg p-3 shadow-lg max-w-xs">
        <h3 className="font-roboto text-body-sm font-semibold text-canary-black-1 mb-2">
          Demo Time
        </h3>
        <div className="text-sm text-canary-black-4 font-roboto">
          {demoTime.day}, {demoTime.hour}:{demoTime.minute.toString().padStart(2, '0')} {demoTime.ampm}
        </div>
      </div>

      {/* Mobile Frame */}
      <div 
        className="relative bg-white overflow-hidden shadow-xl"
        style={{
          width: '430px',
          height: '932px',
          borderRadius: '44px',
          boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.16)'
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

        {/* Header Image Section */}
        <div className="relative w-full h-[230px] overflow-hidden">
          <img 
            src={headerImageUrl}
            alt="Order summary header"
            className="w-full h-full object-cover"
          />
          
          {/* Progress Indicators */}
          <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
          </div>

          {/* Back Button Overlay */}
          <div className="absolute top-4 left-4">
            <button 
              onClick={onBack}
              className="flex items-center justify-center w-12 h-12 bg-white rounded shadow-md hover:bg-gray-50 transition-colors"
            >
              <Icon path={mdiArrowLeft} size={1} color="#000" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto px-4 py-6 pb-20">
          {/* Page Title */}
          <h1 className="font-roboto text-[28px] font-medium text-black leading-[42px] mb-4">
            Review your cart
          </h1>

          {/* Guest and Room Info */}
          <div className="border border-neutral-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-roboto text-sm font-medium text-black">Guest</span>
              <span className="font-roboto text-sm font-normal text-gray-600">{guestInfo.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-roboto text-sm font-medium text-black">Room</span>
              <span className="font-roboto text-sm font-normal text-gray-600">{guestInfo.room}</span>
            </div>
          </div>

          {/* Cart Items - Seamless Stacked List */}
          <div className="border border-neutral-200 rounded-lg overflow-hidden mb-6">
            {localCartItems.map((item, index) => (
              <div key={item.id} className={index < localCartItems.length - 1 ? "border-b border-neutral-200" : ""}>
                <CartItemRow
                  item={item}
                  onUpdateQuantity={onUpdateQuantity}
                />
              </div>
            ))}
          </div>

          {/* Estimated Total */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-roboto text-base font-normal text-black">Estimated total</span>
            <span className="font-roboto text-base font-medium text-black">${estimatedTotal}</span>
          </div>

          {/* Add More Items Button */}
          <button
            onClick={onAddMoreItems}
            className="w-full h-10 border border-neutral-200 rounded-lg flex items-center justify-center gap-2 mb-6 hover:bg-gray-50 transition-colors"
          >
            <Icon path={mdiPlus} size={0.8} color="#000" />
            <span className="font-roboto text-sm font-medium text-black">Add more items</span>
          </button>

          {/* Please Note Section */}
          <div className="mb-6">
            <h3 className="font-roboto text-base font-medium text-black mb-1">
              Please note
            </h3>
            <ul className="space-y-1 text-sm font-roboto font-normal text-black leading-[22px]">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Your final bill will be delivered with your food order which will include tax and service fees.</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Estimated order time will be 30 minutes.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sticky Footer - Submit Order Button */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4">
          <Button 
            className="w-full h-12 text-lg"
            onClick={isPreviewMode ? onBack : onSubmitOrder}
          >
            {isPreviewMode ? 'End preview' : 'Submit order'}
          </Button>
        </div>
      </div>
    </div>
  );
};