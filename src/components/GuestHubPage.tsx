'use client';

import React, { useState, useEffect } from 'react';
import { colors } from '@/lib/design-tokens';
import { CompendiumSection, CompendiumItem, getCompendiumSections, getCompendiumSection } from '../utils/persistence';
import { GuestItemDetailsPage } from './GuestItemDetailsPage';

interface GuestHubPageProps {
  onBack?: () => void;
  onNavigateToFoodOrdering?: (connectedMenus: string[], sourceItem?: CompendiumItem) => void;
  initialSelectedItem?: CompendiumItem;
  onClearSourceItem?: () => void;
}

// Card component for carousel items
interface CompendiumCardProps {
  item: CompendiumItem;
  onClick?: (item: CompendiumItem) => void;
}

const CompendiumCard: React.FC<CompendiumCardProps> = ({ item, onClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className="flex flex-col overflow-hidden rounded-lg shrink-0 w-[300px] max-w-[300px] cursor-pointer hover:opacity-90 transition-opacity"
      onClick={() => onClick?.(item)}
    >
      {/* Header Image */}
      <div className="relative h-[200px] rounded-lg overflow-hidden">
        {item.image && !imageError ? (
          <img 
            src={item.image} 
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No image</span>
          </div>
        )}
      </div>
      
      {/* Card Body */}
      <div className="py-2 w-full">
        {/* Item Title */}
        <h3 className="font-roboto text-[16px] font-medium text-black leading-[24px] mb-1">
          {item.name}
        </h3>
        {/* Item Type - using a default type for now */}
        <p className="font-roboto text-[16px] font-normal text-gray-600 leading-[24px]">
          Content item
        </p>
      </div>
    </div>
  );
};

export const GuestHubPage: React.FC<GuestHubPageProps> = ({ onBack, onNavigateToFoodOrdering, initialSelectedItem, onClearSourceItem }) => {
  const [sections, setSections] = useState<CompendiumSection[]>([]);
  const [sectionItems, setSectionItems] = useState<Record<string, CompendiumItem[]>>({});
  const [selectedItem, setSelectedItem] = useState<CompendiumItem | null>(initialSelectedItem || null);

  // Load sections and their items from localStorage on component mount
  useEffect(() => {
    const loadedSections = getCompendiumSections();
    setSections(loadedSections);
    
    // Load items for each section
    const itemsMap: Record<string, CompendiumItem[]> = {};
    loadedSections.forEach(section => {
      const sectionData = getCompendiumSection(section.id);
      if (sectionData && sectionData.items) {
        itemsMap[section.id] = sectionData.items;
      } else {
        itemsMap[section.id] = [];
      }
    });
    setSectionItems(itemsMap);
  }, []);

  // Navigation handlers
  const handleItemClick = (item: CompendiumItem) => {
    setSelectedItem(item);
  };

  const handleBackToHub = () => {
    setSelectedItem(null);
    // Clear the source item from app state when going back to main hub
    if (onClearSourceItem) {
      onClearSourceItem();
    }
  };

  // Show item details page if an item is selected
  if (selectedItem) {
    return (
      <GuestItemDetailsPage
        item={selectedItem}
        onBack={handleBackToHub}
        onNavigateToFoodOrdering={onNavigateToFoodOrdering}
      />
    );
  }

  // Show main guest hub
  return (
    <div className="h-screen flex bg-gray-100">
      {/* Back Button - Outside Mobile Frame */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 bg-canary-blue-1 text-white px-4 py-2 h-10 rounded font-roboto font-medium text-sm shadow-lg hover:opacity-90 transition-opacity z-50 flex items-center gap-2"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to Compendium Builder
      </button>

      {/* Centered Mobile Frame Container */}
      <div className="flex-1 flex items-center justify-center p-8">
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
          {/* Mobile Content - Single Scrollable Container */}
          <div className="h-full overflow-y-auto" style={{ borderRadius: '44px' }}>
            
            {/* Header Image */}
            <div className="relative h-[200px] overflow-hidden">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=430&h=200&fit=crop&crop=center')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              {/* Gradient overlay at bottom */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-[60px]"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
                }}
              />
            </div>

            {/* Hotel Logo Section */}
            <div className="flex items-center justify-center px-4 py-4 bg-white">
              <div className="w-[116px] h-[49.907px] flex items-center justify-center">
                <img 
                  src="/statler logo.png"
                  alt="The Statler"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Welcome Message */}
            <div className="px-4 py-4 bg-white">
              <h1 className="font-roboto text-[32px] font-medium text-black leading-[48px] mb-2">
                Hello, Emily Smith
              </h1>
              <p className="font-roboto text-[16px] font-normal text-black leading-[24px]">
                We hope you enjoy your stay with us.
              </p>
            </div>

            {/* Button Grid */}
            <div className="px-4 py-6 bg-white">
              <div className="flex flex-col gap-2">
                {/* First Row */}
                <div className="flex gap-2">
                  <div className="flex-1 bg-black rounded-lg px-4 py-2 flex flex-col items-center justify-center h-[72px]">
                    <div className="w-6 h-6 mb-1">
                      <svg viewBox="0 0 24 24" fill="white">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <span className="font-roboto text-[14px] font-medium text-white text-center leading-[22px]">
                      My reservation
                    </span>
                  </div>
                  <div className="flex-1 bg-black rounded-lg px-4 py-2 flex flex-col items-center justify-center h-[72px]">
                    <div className="w-6 h-6 mb-1">
                      <svg viewBox="0 0 24 24" fill="white">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                      </svg>
                    </div>
                    <span className="font-roboto text-[14px] font-medium text-white text-center leading-[22px]">
                      Property info
                    </span>
                  </div>
                </div>

                {/* Second Row */}
                <div className="flex gap-2">
                  <div className="flex-1 bg-black rounded-lg px-4 py-2 flex flex-col items-center justify-center h-[72px]">
                    <div className="w-6 h-6 mb-1">
                      <svg viewBox="0 0 24 24" fill="white">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <span className="font-roboto text-[14px] font-medium text-white text-center leading-[22px]">
                      Message us
                    </span>
                  </div>
                  <div className="flex-1 bg-black rounded-lg px-4 py-2 flex flex-col items-center justify-center h-[72px]">
                    <div className="w-6 h-6 mb-1">
                      <svg viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="font-roboto text-[14px] font-medium text-white text-center leading-[22px]">
                      Tip staff
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Sections from Compendium Builder */}
            {sections.length === 0 ? (
              /* No Sections State */
              <div className="px-4 py-8 bg-white">
                <div className="text-center">
                  <h2 className="font-roboto text-[24px] font-semibold text-black leading-[36px] mb-4">
                    No content yet
                  </h2>
                  <p className="font-roboto text-[16px] font-normal text-gray-500 leading-[24px]">
                    Add sections in the Compendium Builder to see content here
                  </p>
                </div>
              </div>
            ) : (
              /* Dynamic Sections */
              sections.map((section) => {
                const items = sectionItems[section.id] || [];
                
                return (
                  <div key={section.id} className="px-4 py-4 bg-white">
                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-roboto text-[24px] font-semibold text-black leading-[36px]">
                        {section.name}
                      </h2>
                      <button className="font-roboto text-[16px] font-normal text-black leading-[24px]">
                        View All
                      </button>
                    </div>
                    
                    {/* Carousel Container */}
                    {items.length === 0 ? (
                      /* Empty State */
                      <div className="h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                        <p className="font-roboto text-[14px] font-normal text-gray-500 text-center">
                          No items in {section.name} yet
                        </p>
                      </div>
                    ) : (
                      /* Horizontal Scrollable Carousel */
                      <div className="overflow-x-auto overflow-y-visible pb-2">
                        <div className="flex gap-4 w-max">
                          {items.map((item) => (
                            <CompendiumCard 
                              key={item.id} 
                              item={item} 
                              onClick={handleItemClick}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}

            {/* Footer */}
            <div className="px-4 py-6 bg-white flex flex-col items-center gap-6">
              {/* Language Selector */}
              <div className="w-32">
                <div className="bg-white border border-gray-300 rounded px-3 py-3 flex items-center justify-between">
                  <span className="font-roboto text-[14px] font-normal text-black">English</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Footer Links */}
              <div className="flex flex-col items-center gap-2">
                <p className="font-roboto text-[12px] font-medium text-[#414141] text-center leading-[18px]">
                  Privacy Policy • Terms & Conditions
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-3">
                    <div className="w-full h-full bg-gray-300 rounded"></div>
                  </div>
                  <p className="font-roboto text-[12px] font-normal text-[#9f9f9f] leading-[18px]">
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