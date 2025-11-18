'use client';

import React from 'react';
import { CompendiumSection, CompendiumItem } from '../utils/persistence';

interface GuestHubMobilePreviewProps {
  sections: CompendiumSection[];
  sectionItems: Record<string, CompendiumItem[]>;
}

export const GuestHubMobilePreview: React.FC<GuestHubMobilePreviewProps> = ({ 
  sections, 
  sectionItems 
}) => {
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
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.16)'
          }}
        >
          {/* Mobile Preview Content - Scrollable but not clickable */}
          <div 
            className="h-full overflow-y-auto"
            style={{ 
              borderRadius: '28px'
            }}
          >
            
            {/* Header Image */}
            <div className="relative h-[120px] overflow-hidden">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=320&h=120&fit=crop&crop=center')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              {/* Gradient overlay at bottom */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-[30px]"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
                }}
              />
            </div>

            {/* Hotel Logo Section */}
            <div className="flex items-center justify-center px-3 py-3 bg-white">
              <div className="w-[70px] h-[30px] flex items-center justify-center">
                <div 
                  className="w-full h-full bg-gray-200 rounded flex items-center justify-center"
                  style={{ fontFamily: 'serif' }}
                >
                  <span className="text-xs font-bold text-gray-600">The Statler</span>
                </div>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="px-3 py-3 bg-white">
              <h1 className="font-roboto text-[20px] font-medium text-black leading-[30px] mb-1">
                Hello, Emily Smith
              </h1>
              <p className="font-roboto text-[12px] font-normal text-black leading-[18px]">
                We hope you enjoy your stay with us.
              </p>
            </div>

            {/* Button Grid */}
            <div className="px-3 py-4 bg-white">
              <div className="flex flex-col gap-2">
                {/* First Row */}
                <div className="flex gap-2">
                  <div className="flex-1 bg-black rounded-lg px-2 py-2 flex flex-col items-center justify-center h-[50px]" style={{ pointerEvents: 'none' }}>
                    <div className="w-4 h-4 mb-1">
                      <svg viewBox="0 0 24 24" fill="white">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <span className="font-roboto text-[10px] font-medium text-white text-center leading-[14px]">
                      My reservation
                    </span>
                  </div>
                  <div className="flex-1 bg-black rounded-lg px-2 py-2 flex flex-col items-center justify-center h-[50px]" style={{ pointerEvents: 'none' }}>
                    <div className="w-4 h-4 mb-1">
                      <svg viewBox="0 0 24 24" fill="white">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                      </svg>
                    </div>
                    <span className="font-roboto text-[10px] font-medium text-white text-center leading-[14px]">
                      Property info
                    </span>
                  </div>
                </div>

                {/* Second Row */}
                <div className="flex gap-2">
                  <div className="flex-1 bg-black rounded-lg px-2 py-2 flex flex-col items-center justify-center h-[50px]" style={{ pointerEvents: 'none' }}>
                    <div className="w-4 h-4 mb-1">
                      <svg viewBox="0 0 24 24" fill="white">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <span className="font-roboto text-[10px] font-medium text-white text-center leading-[14px]">
                      Message us
                    </span>
                  </div>
                  <div className="flex-1 bg-black rounded-lg px-2 py-2 flex flex-col items-center justify-center h-[50px]" style={{ pointerEvents: 'none' }}>
                    <div className="w-4 h-4 mb-1">
                      <svg viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="font-roboto text-[10px] font-medium text-white text-center leading-[14px]">
                      Tip staff
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Sections from Compendium Builder */}
            {sections.length === 0 ? (
              /* No Sections State */
              <div className="px-3 py-6 bg-white">
                <div className="text-center">
                  <h2 className="font-roboto text-[16px] font-semibold text-black leading-[24px] mb-2">
                    No content yet
                  </h2>
                  <p className="font-roboto text-[12px] font-normal text-gray-500 leading-[18px]">
                    Add sections in the Compendium Builder to see content here
                  </p>
                </div>
              </div>
            ) : (
              /* Dynamic Sections */
              sections.map((section) => {
                const items = sectionItems[section.id] || [];
                
                return (
                  <div key={section.id} className="px-3 py-3 bg-white border-t border-gray-100">
                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="font-roboto text-[16px] font-semibold text-black leading-[24px]">
                        {section.name}
                      </h2>
                      <button className="font-roboto text-[12px] font-normal text-black leading-[18px]" style={{ pointerEvents: 'none' }}>
                        View All
                      </button>
                    </div>
                    
                    {/* Carousel Container */}
                    {items.length === 0 ? (
                      /* Empty State */
                      <div className="h-20 border border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                        <p className="font-roboto text-[10px] font-normal text-gray-500 text-center">
                          No items in {section.name} yet
                        </p>
                      </div>
                    ) : (
                      /* Horizontal Scrollable Carousel */
                      <div className="overflow-x-auto overflow-y-visible pb-1">
                        <div className="flex gap-2 w-max">
                          {items.map((item) => (
                            <div 
                              key={item.id}
                              className="flex flex-col overflow-hidden rounded-lg shrink-0 w-[150px] max-w-[150px]"
                              style={{ pointerEvents: 'none' }}
                            >
                              {/* Header Image */}
                              <div className="relative h-[100px] rounded-lg overflow-hidden">
                                {item.image ? (
                                  <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-400 text-[8px]">No image</span>
                                  </div>
                                )}
                              </div>
                              
                              {/* Card Body */}
                              <div className="py-1 w-full">
                                {/* Item Title */}
                                <h3 className="font-roboto text-[12px] font-medium text-black leading-[16px] mb-0.5 truncate">
                                  {item.name}
                                </h3>
                                {/* Item Type */}
                                <p className="font-roboto text-[10px] font-normal text-gray-600 leading-[14px] truncate">
                                  {item.type || 'Content item'}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}

            {/* Footer */}
            <div className="px-3 py-4 bg-white flex flex-col items-center gap-4 border-t border-gray-100">
              {/* Language Selector */}
              <div className="w-20">
                <div className="bg-white border border-gray-300 rounded px-2 py-2 flex items-center justify-between" style={{ pointerEvents: 'none' }}>
                  <span className="font-roboto text-[10px] font-normal text-black">English</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Footer Links */}
              <div className="flex flex-col items-center gap-1">
                <p className="font-roboto text-[8px] font-medium text-[#414141] text-center leading-[12px]">
                  Privacy Policy • Terms & Conditions
                </p>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-2">
                    <div className="w-full h-full bg-gray-300 rounded"></div>
                  </div>
                  <p className="font-roboto text-[8px] font-normal text-[#9f9f9f] leading-[12px]">
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