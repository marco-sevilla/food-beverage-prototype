'use client';

import React, { useState, useEffect } from 'react';
import CanaryButton from './temp-components/CanaryButton';
import { ButtonType } from './temp-components/button-types';

export interface ConnectMenusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (selectedMenus: string[]) => void;
  initialSelectedMenus?: string[];
}

// Mock menu data based on Figma design
const MENU_OPTIONS = [
  { id: 'breakfast', name: 'Breakfast menu', defaultChecked: false, linkedLocations: 'None' },
  { id: 'lunch', name: 'Lunch menu', defaultChecked: false, linkedLocations: 'None' },
  { id: 'dinner', name: 'Dinner menu', defaultChecked: true, linkedLocations: 'None' },
  { id: 'happy-hour', name: 'Happy hour menu', defaultChecked: false, linkedLocations: 'None' },
  { id: 'dessert', name: 'Dessert menu', defaultChecked: true, linkedLocations: 'None' }
];

export const ConnectMenusModal: React.FC<ConnectMenusModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialSelectedMenus = []
}) => {
  const [selectedMenus, setSelectedMenus] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize selected menus when modal opens
  useEffect(() => {
    if (isOpen) {
      // Use initialSelectedMenus if provided, otherwise fall back to defaultChecked
      if (initialSelectedMenus.length > 0) {
        setSelectedMenus(initialSelectedMenus);
      } else {
        const defaultSelected = MENU_OPTIONS
          .filter(menu => menu.defaultChecked)
          .map(menu => menu.id);
        setSelectedMenus(defaultSelected);
      }
    }
  }, [isOpen, initialSelectedMenus]);

  // Handle modal visibility and animation with the same pattern as AnimatedModal
  useEffect(() => {
    if (isOpen) {
      // Modal is opening
      setIsVisible(true);
      setTimeout(() => {
        setIsAnimating(true);
      }, 10); // Small delay to trigger animation
      
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Modal is closing - twice as fast
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 150); // Half the original time for snappier exit
      
      // Restore body scroll when modal closes
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        handleCancel();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  const handleMenuToggle = (menuId: string) => {
    setSelectedMenus(prev => {
      if (prev.includes(menuId)) {
        return prev.filter(id => id !== menuId);
      } else {
        return [...prev, menuId];
      }
    });
  };

  const handleCancel = () => {
    onClose();
  };

  const handleSave = () => {
    if (onSave) {
      onSave(selectedMenus);
    }
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
      style={{
        backgroundColor: isAnimating ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: isAnimating ? 'blur(4px)' : 'blur(0px)',
        transition: isAnimating 
          ? 'background-color 300ms ease-out, backdrop-filter 300ms ease-out'
          : 'background-color 150ms ease-out, backdrop-filter 150ms ease-out'
      }}
    >
      {/* Modal Container with Polished Animation */}
      <div
        className="bg-white rounded-lg w-full max-w-2xl flex flex-col"
        style={{
          boxShadow: '0px 8px 24px 0px rgba(0,0,0,0.16)',
          maxHeight: '90vh',
          minWidth: '600px',
          opacity: isAnimating ? 1 : 0.5,
          transform: isAnimating ? 'scale(1)' : 'scale(0.95)',
          filter: isAnimating ? 'blur(0px)' : 'blur(2px)',
          transition: isAnimating
            ? 'opacity 300ms ease-out, transform 300ms ease-out, filter 300ms ease-out'
            : 'opacity 150ms ease-out, transform 150ms ease-out, filter 150ms ease-out'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
          <h2 className="font-roboto text-[20px] font-medium text-black leading-[30px]">
            Connect menus
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path 
                d="M15 5L5 15M5 5L15 15" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4 overflow-y-auto flex-1">
          {/* Table Headers */}
          <div className="flex items-start gap-4 px-4 pb-1 mb-1">
            <p className="font-roboto text-[10px] font-medium text-[#666666] uppercase leading-[16px] w-[200px]">
              Menu name
            </p>
            <p className="font-roboto text-[10px] font-medium text-[#666666] uppercase leading-[16px] w-[200px]">
              Linked locations
            </p>
            <div className="w-[24px] opacity-0">
              {/* Placeholder for checkbox alignment */}
            </div>
          </div>

          {/* Menu List Table */}
          <div className="border border-neutral-200 rounded-lg overflow-hidden">
            {MENU_OPTIONS.map((menu, index) => {
              const isChecked = selectedMenus.includes(menu.id);
              const isLastItem = index === MENU_OPTIONS.length - 1;
              
              return (
                <div
                  key={menu.id}
                  className={`bg-white ${!isLastItem ? 'border-b border-neutral-200' : ''}`}
                >
                  <div className="flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
                       onClick={() => handleMenuToggle(menu.id)}
                  >
                    <div className="flex items-center w-[200px]">
                      <p className="font-roboto text-[14px] font-medium text-black leading-[22px]">
                        {menu.name}
                      </p>
                    </div>
                    
                    <div className="w-[200px]">
                      <p className="font-roboto text-[14px] font-normal text-[#999999] leading-[22px]">
                        {menu.linkedLocations}
                      </p>
                    </div>
                    
                    {/* Custom Checkbox */}
                    <div className="w-[24px] h-[24px] flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleMenuToggle(menu.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                          isChecked
                            ? 'bg-[#2858C4] border-[#2858C4]'
                            : 'border-neutral-200 bg-white hover:border-gray-400'
                        }`}
                      >
                        {isChecked && (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 shrink-0">
          <div className="flex items-center gap-3 justify-end">
            <CanaryButton
              type={ButtonType.TEXT}
              onClick={handleCancel}
            >
              Cancel
            </CanaryButton>
            <CanaryButton
              type={ButtonType.PRIMARY}
              onClick={handleSave}
            >
              Save
            </CanaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};