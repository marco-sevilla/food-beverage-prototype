'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { 
  mdiClose,
  mdiPlus,
  mdiMinus
} from '@mdi/js';

interface SectionItem {
  id: string;
  name: string;
  image: string;
  specialRequests?: string;
}

interface MenuItemDetailsProps {
  item: SectionItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: SectionItem, quantity: number, specialRequests: string) => void;
  initialQuantity?: number;
  isMenuAvailable?: boolean;
}

export const MenuItemDetails: React.FC<MenuItemDetailsProps> = ({
  item,
  isOpen,
  onClose,
  onAddToCart,
  initialQuantity = 1,
  isMenuAvailable = true
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [specialRequests, setSpecialRequests] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // Reset state when item changes
  useEffect(() => {
    if (item) {
      setQuantity(initialQuantity);
      setSpecialRequests('');
    }
  }, [item, initialQuantity]);

  // Handle animation timing
  useEffect(() => {
    if (isOpen) {
      // Start in closed position
      setIsAnimating(true);
      // Trigger slide-up animation on next frame
      requestAnimationFrame(() => {
        setIsAnimating(false);
      });
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(true);
    // Trigger slide-down animation
    setTimeout(() => {
      onClose();
      setIsAnimating(false);
    }, 600);
  };

  const handleAddToCart = () => {
    if (item && isMenuAvailable) {
      onAddToCart(item, quantity, specialRequests);
      handleClose();
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && isMenuAvailable) {
      setQuantity(newQuantity);
    }
  };

  if (!isOpen || !item) return null;

  // Generate consistent mock price and description
  const mockPrice = Math.floor((item.name.length * 7 + item.id.length * 3) % 30) + 15;
  const mockDescription = `Indulge in our ${item.name}, a luxurious blend of fresh ingredients crafted with exquisite attention to detail.`;

  return (
    <div 
      className="absolute inset-0 z-50 flex items-end justify-center"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        transition: 'opacity 600ms ease-out',
        opacity: isAnimating ? 0 : 1,
        borderRadius: '44px',
        overflow: 'hidden'
      }}
    >
      {/* Modal Container with slide animation */}
      <div
        className="bg-white rounded-t-xl shadow-xl w-full h-full max-h-[90vh] flex flex-col overflow-hidden"
        style={{
          transform: isAnimating ? 'translateY(100%)' : 'translateY(0%)',
          transition: 'transform 600ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          willChange: 'transform'
        }}
      >
        {/* Header Image (if exists) */}
        {item.image && (
          <div className="relative h-58 w-full">
            <img 
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 left-4 bg-white shadow-md rounded p-3 hover:bg-gray-50 transition-colors"
            >
              <Icon path={mdiClose} size={1} color="#000" />
            </button>
          </div>
        )}
        
        {/* Close Button for no-image items */}
        {!item.image && (
          <div className="absolute top-4 left-4 z-10">
            <button
              onClick={handleClose}
              className="bg-white shadow-md rounded p-3 hover:bg-gray-50 transition-colors"
            >
              <Icon path={mdiClose} size={1} color="#000" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className={`flex-1 flex flex-col px-4 ${item.image ? 'py-4' : 'py-16'}`}>
          {/* Item Info */}
          <div className="mb-6">
            <h1 className="font-roboto text-[28px] font-medium text-black leading-[42px] mb-3">
              {item.name}
            </h1>
            
            <p className="font-roboto text-base font-normal text-black leading-6 mb-3">
              {mockDescription}
            </p>
            
            <p className="font-roboto text-base font-normal text-black leading-6">
              ${mockPrice}
            </p>
          </div>

          {/* Quantity Counter */}
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={!isMenuAvailable || quantity <= 1}
                className={`w-12 h-12 flex items-center justify-center rounded transition-opacity ${
                  !isMenuAvailable || quantity <= 1 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-black hover:opacity-90'
                }`}
              >
                <Icon path={mdiMinus} size={1} color={!isMenuAvailable || quantity <= 1 ? "#9CA3AF" : "white"} />
              </button>
              
              <span className="font-roboto font-bold text-lg text-black text-center w-8">
                {quantity}
              </span>
              
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={!isMenuAvailable}
                className={`w-12 h-12 flex items-center justify-center rounded transition-opacity ${
                  isMenuAvailable 
                    ? 'bg-black text-white hover:opacity-90' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Icon path={mdiPlus} size={1} color={isMenuAvailable ? "white" : "#9CA3AF"} />
              </button>
            </div>
          </div>

          {/* Special Requests */}
          <div className="mb-6 flex-1">
            <label className="block font-roboto text-sm font-normal text-black mb-2">
              Special requests
            </label>
            <textarea
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="Special requests"
              className="w-full h-24 p-3 border border-gray-600 rounded font-roboto text-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              rows={3}
            />
          </div>
        </div>

        {/* Sticky Footer - Add to Cart Button */}
        <div className="bg-white border-t border-gray-200 p-4">
          <button
            onClick={handleAddToCart}
            disabled={!isMenuAvailable}
            className={`w-full h-12 rounded font-roboto text-lg font-medium transition-opacity ${
              isMenuAvailable 
                ? 'bg-black text-white hover:opacity-90' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isMenuAvailable 
              ? `Add to cart $${mockPrice * quantity}` 
              : 'Menu currently unavailable'
            }
          </button>
        </div>
      </div>
    </div>
  );
};