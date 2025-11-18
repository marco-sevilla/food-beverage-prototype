'use client';

import React, { useState } from 'react';
import CanaryButton from './temp-components/CanaryButton';
import { ButtonType } from './temp-components/button-types';

interface GuestItemDetailsMobilePreviewProps {
  // Live form data passed from EditCompendiumItemPage
  itemName: string;
  itemType?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  image?: string;
  actionButton?: {
    enabled: boolean;
    label?: string;
    type?: string;
    url?: string;
  };
  roomNumber?: string; // Dynamic room number for delivery location
}

export const GuestItemDetailsMobilePreview: React.FC<GuestItemDetailsMobilePreviewProps> = ({
  itemName,
  itemType,
  description,
  address,
  phone,
  email,
  website,
  image,
  actionButton,
  roomNumber = '365' // Default fallback room number
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="h-full bg-gray-100 flex flex-col items-center py-8 px-6">
      {/* Mobile Preview Container */}
      <div className="flex-1 w-full max-w-md flex items-center justify-center">
        <div 
          className="relative bg-white overflow-hidden shadow-xl"
          style={{
            width: '370px',
            height: '740px',
            borderRadius: '28px',
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.16)',
            pointerEvents: 'none' // Make entire preview non-clickable
          }}
        >
          {/* Mobile Preview Content - Scrollable */}
          <div 
            className="h-full overflow-y-auto"
            style={{ 
              borderRadius: '28px',
              pointerEvents: 'auto' // Allow scrolling
            }}
          >
            
            {/* Header with Image and Back Button */}
            <div className="relative h-[180px] overflow-hidden">
              {/* Header Image */}
              {image && !imageError ? (
                <img 
                  src={image} 
                  alt={itemName}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={() => setImageError(true)}
                  style={{ pointerEvents: 'none' }}
                />
              ) : (
                <div className="absolute inset-0 w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">No image available</span>
                </div>
              )}
              
              {/* Back Button Overlay */}
              <div className="absolute top-3 left-3 z-10">
                <div
                  className="bg-white p-2 rounded shadow-md flex items-center justify-center"
                  style={{ 
                    width: '36px', 
                    height: '36px',
                    pointerEvents: 'none'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M19 12H5M12 19l-7-7 7-7" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Item Title */}
            <div className="px-3 py-3 bg-white">
              <h1 className="font-roboto text-[24px] font-medium text-black leading-[36px]">
                {itemName || 'Item Name'}
              </h1>
              {/* Location info - Only show for food ordering */}
              {actionButton?.enabled && actionButton?.type === 'Enable food ordering' && (
                <div className="flex items-center gap-2 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="font-roboto text-[12px] font-normal text-gray-600 leading-[18px]">
                    The Statler Hotel New York • Deliver to Room {roomNumber}
                  </span>
                </div>
              )}
            </div>

            {/* Action Button - Only show if enabled and has label */}
            {actionButton?.enabled && actionButton?.label && (
              <div className="px-3 py-3 bg-white">
                <div
                  className="bg-black h-10 rounded flex items-center justify-between px-3"
                  style={{ pointerEvents: 'none' }}
                >
                  <div className="opacity-0 w-4 h-4" />
                  <span className="font-roboto text-[14px] font-medium text-white text-center">
                    {actionButton.label}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M9 18l6-6-6-6" 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}

            {/* Item Description */}
            {description && (
              <div className="px-3 py-3 bg-white">
                <p className="font-roboto text-[14px] font-normal text-black leading-[20px]">
                  {description}
                </p>
              </div>
            )}

            {/* Contact Information Table */}
            {(phone || email || website) && (
              <div className="px-3 py-3 bg-white">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Phone Number */}
                  {phone && (
                    <div 
                      className="flex items-center justify-between p-3 border-b border-gray-200 last:border-b-0"
                      style={{ pointerEvents: 'none' }}
                    >
                      <div className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path 
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="font-roboto text-[14px] font-normal text-black leading-[20px]">
                          {phone}
                        </span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M9 18l6-6-6-6" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Email */}
                  {email && (
                    <div 
                      className="flex items-center justify-between p-3 border-b border-gray-200 last:border-b-0"
                      style={{ pointerEvents: 'none' }}
                    >
                      <div className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path 
                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="font-roboto text-[14px] font-normal text-black leading-[20px]">
                          {email}
                        </span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M9 18l6-6-6-6" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Website */}
                  {website && (
                    <div 
                      className="flex items-center justify-between p-3 border-b border-gray-200 last:border-b-0"
                      style={{ pointerEvents: 'none' }}
                    >
                      <div className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span className="font-roboto text-[14px] font-normal text-black leading-[20px]">
                          Visit website
                        </span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M9 18l6-6-6-6" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="px-3 py-4 bg-white flex flex-col items-center gap-4">
              {/* Language Selector */}
              <div className="w-20">
                <div 
                  className="bg-white border border-gray-300 rounded px-2 py-1 flex items-center justify-between" 
                  style={{ pointerEvents: 'none' }}
                >
                  <span className="font-roboto text-[10px] font-normal text-black">English</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Footer Links */}
              <div className="flex flex-col items-center gap-1">
                <p className="font-roboto text-[8px] font-medium text-gray-600 text-center leading-[12px]">
                  Privacy Policy • Terms & Conditions
                </p>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-2 bg-gray-300 rounded"></div>
                  <p className="font-roboto text-[8px] font-normal text-gray-400 leading-[12px]">
                    Powered by Canary Technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};