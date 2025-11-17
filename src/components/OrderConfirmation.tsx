'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { 
  mdiClose,
  mdiViewList
} from '@mdi/js';
import { MenuItemPlaceholder } from './MenuItemPlaceholder';
import { saveNewOrder } from '@/utils/orderStorage';
import { getGuestInfo } from '@/utils/persistence';

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

interface OrderConfirmationProps {
  onClose: () => void;
  cartEntries: CartEntry[];
  onGoToOrderManagement?: () => void;
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

// Order Item component (read-only)
interface OrderItemRowProps {
  item: CartItem;
}

const OrderItemRow: React.FC<OrderItemRowProps> = ({ item }) => {
  const totalPrice = item.price * item.quantity;
  
  return (
    <div className="flex items-start gap-4 p-3 border-b border-neutral-200 last:border-b-0">
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
        <h4 className="font-roboto text-sm font-medium text-black mb-0.5">
          {item.quantity}x {item.name}
        </h4>
        {item.specialRequests && (
          <p className="font-roboto text-xs text-gray-600 mb-1 leading-[18px]">
            Special request: {item.specialRequests}
          </p>
        )}
        <p className="font-roboto text-sm font-normal text-black">
          ${totalPrice}
        </p>
      </div>
    </div>
  );
};

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ 
  onClose,
  cartEntries,
  onGoToOrderManagement
}) => {
  const [localCartItems, setLocalCartItems] = useState<CartItem[]>([]);
  const [orderSaved, setOrderSaved] = useState(false);
  
  // Get guest information
  const guestInfo = getGuestInfo();

  // Convert cart entries to local cart items with prices and save order
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
    
    // Save order to shared storage when component mounts (order is confirmed)
    if (cartEntries.length > 0 && !orderSaved) {
      try {
        saveNewOrder(cartEntries);
        setOrderSaved(true);
        console.log('Order saved to shared storage');
      } catch (error) {
        console.error('Error saving order:', error);
      }
    }
  }, [cartEntries, orderSaved]);

  // Calculate total
  const estimatedTotal = localCartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Generate estimated delivery time (30 minutes from now)
  const getEstimatedDeliveryTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 30);
    return now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };

  // Header image URL
  const headerImageUrl = "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=430&h=230&fit=crop&crop=center";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* Action Buttons Outside Mobile Frame */}
      <div className="fixed top-8 left-8 z-50 flex gap-3">
        <Button
          onClick={onClose}
          variant="outlined"
          icon={<Icon path={mdiClose} size={0.8} />}
          iconPosition="left"
        >
          Close Confirmation
        </Button>
        {onGoToOrderManagement && (
          <Button
            onClick={onGoToOrderManagement}
            variant="primary"
            icon={<Icon path={mdiViewList} size={0.8} />}
            iconPosition="left"
          >
            View in Order Management
          </Button>
        )}
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
        {/* Header Image Section */}
        <div className="relative w-full h-[230px] overflow-hidden">
          <img 
            src={headerImageUrl}
            alt="Order confirmation header"
            className="w-full h-full object-cover"
          />
          
          {/* Progress Indicators */}
          <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
          </div>

          {/* Close Button Overlay */}
          <div className="absolute top-4 left-4">
            <button 
              onClick={onClose}
              className="flex items-center justify-center w-12 h-12 bg-white rounded shadow-md hover:bg-gray-50 transition-colors"
            >
              <Icon path={mdiClose} size={1} color="#000" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          {/* Page Title and Delivery Time */}
          <div className="mb-4">
            <h1 className="font-roboto text-[28px] font-medium text-black leading-[42px] mb-1">
              Order confirmation
            </h1>
            <p className="font-roboto text-base font-normal text-black">
              Estimated delivery {getEstimatedDeliveryTime()}
            </p>
          </div>

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

          {/* Order Items */}
          <div className="border border-neutral-200 rounded-lg overflow-hidden mb-6">
            {localCartItems.map((item) => (
              <OrderItemRow
                key={item.id}
                item={item}
              />
            ))}
          </div>

          {/* Estimated Total */}
          <div className="flex items-center justify-between mb-8">
            <span className="font-roboto text-base font-normal text-black">Estimated total</span>
            <span className="font-roboto text-base font-medium text-black">${estimatedTotal}</span>
          </div>

          {/* What Happens Next Section */}
          <div className="mb-6">
            <h3 className="font-roboto text-base font-medium text-black mb-1">
              What happens next?
            </h3>
            <p className="font-roboto text-sm font-normal text-black leading-[22px]">
              Our kitchen team will start preparing your order right away. You'll get updates on your order status through the hotel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};