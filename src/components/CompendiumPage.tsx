'use client';

import React, { useState, useEffect } from 'react';
import { AnimatedModal } from './AnimatedModal';
import { CompendiumSection, CompendiumItem, getCompendiumSections, getCompendiumSection, createCompendiumSection } from '../utils/persistence';
import { GuestHubMobilePreview } from './GuestHubMobilePreview';

interface CompendiumPageProps {
  onBack?: () => void;
  onNavigateToMenuManagement?: () => void;
  onEditSection?: (sectionName: string) => void;
  onNavigateToGuestHub?: () => void;
}

export const CompendiumPage: React.FC<CompendiumPageProps> = ({ onBack, onNavigateToMenuManagement, onEditSection, onNavigateToGuestHub }) => {
  const [isAddSectionModalOpen, setIsAddSectionModalOpen] = useState(false);
  const [newSectionName, setNewSectionName] = useState('');
  const [sections, setSections] = useState<CompendiumSection[]>([]);
  const [sectionItems, setSectionItems] = useState<Record<string, CompendiumItem[]>>({});

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

  const handleCreateSection = () => {
    if (newSectionName.trim()) {
      // Create and save the section
      const newSection = createCompendiumSection(newSectionName.trim());
      
      // Update local state
      setSections(prev => [...prev, newSection]);
      setSectionItems(prev => ({ ...prev, [newSection.id]: [] }));
      
      // Navigate to edit the new section
      if (onEditSection) {
        onEditSection(newSectionName.trim());
      }
      
      // Close modal and reset form
      setIsAddSectionModalOpen(false);
      setNewSectionName('');
    }
  };

  const handleEditSection = (sectionName: string) => {
    if (onEditSection) {
      onEditSection(sectionName);
    }
  };

  // Function to refresh sections and items data
  const refreshSectionsData = () => {
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
  };

  // Refresh data when the component becomes visible (when navigating back from edit pages)
  useEffect(() => {
    const handleFocus = () => {
      refreshSectionsData();
    };
    
    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleFocus);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleFocus);
    };
  }, []);
  return (
    <div className="h-screen flex bg-gray-50">
        {/* Sidebar Navigation - Copy of the exact HTML provided */}
        <aside className="flex flex-col shrink-0 w-[180px] h-full" style={{backgroundColor: 'rgb(51, 51, 51)'}}>
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

                {/* Other menu items */}
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
        <main className="flex-1 flex flex-col bg-white">
          {/* Property-level Top Bar */}
          <div className="bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6">
            <div className="flex items-center gap-2">
              <span className="font-roboto text-body-sm font-medium text-canary-black-1 truncate">
                Statler New York
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6z" fill="currentColor" />
              </svg>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-canary-black-5 shrink-0" />
              <div className="flex flex-col">
                <span className="font-roboto text-caption font-medium text-canary-black-1">
                  Theresa Webb
                </span>
                <span className="font-roboto text-caption-sm font-normal text-canary-black-4 uppercase">
                  Operations manager
                </span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6z" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Product-level Header */}
          <div id="teleport-compendium-header" className="bg-white border-b border-neutral-200 py-4 px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="font-roboto text-[20px] font-medium text-canary-black-1">
                  Compendium Builder
                </h1>
              </div>
              <div className="flex items-center gap-2">
                {/* Print QR Code Button */}
                <button 
                  className="flex items-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: 'rgb(40, 88, 196)' }}
                >
                  <span>Print QR Code</span>
                </button>
                
                {/* Activity Log Button */}
                <button 
                  className="flex items-center justify-center p-2 rounded bg-transparent border border-canary-black-3 cursor-pointer hover:bg-gray-50 transition-colors"
                  data-dd-action-name="compendiumShowActivityLog"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(65, 65, 65)">
                    <path d="M13.5 8H12v5l4.28 2.54.72-1.21-3.5-2.08zM13 3a9 9 0 0 0-9 9H1l3.96 4.03L9 12H6a7 7 0 0 1 7-7 7 7 0 0 1 7 7 7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.9 8.9 0 0 0 13 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area - Two Column Layout */}
          <div className="flex-1 flex overflow-hidden">
            {/* Left Column - Settings/Management Panel */}
            <div className="flex-1 bg-white border-r border-neutral-200 overflow-y-auto p-6">
              {/* General Information Container */}
              <div className="bg-white border border-neutral-200 rounded-lg shadow-sm">
                {/* Container Header */}
                <div className="px-6 py-4 border-b border-neutral-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <h2 className="font-roboto text-[16px] font-medium text-canary-black-1">
                        General Information
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Container Content */}
                <div className="p-0">
                  <div className="border border-neutral-200 rounded-md mx-6 my-4">
                    <ul className="divide-y divide-neutral-200">
                      <li 
                        role="button" 
                        tabIndex={0} 
                        className="flex items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        {/* Icon */}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          width="24" 
                          height="24" 
                          className="mr-3 flex-shrink-0"
                          style={{ color: '#414141' }}
                          fill="currentColor"
                        >
                          <path d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z"></path>
                        </svg>

                        {/* Title */}
                        <div className="flex-1">
                          <div 
                            className="font-roboto text-[14px] font-normal text-canary-black-1"
                            style={{ color: '#414141' }}
                          >
                            Property information
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sections Container */}
              <div className="bg-white border border-neutral-200 rounded-lg shadow-sm mt-6">
                {/* Container Header */}
                <div className="px-6 py-4 border-b border-neutral-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <h2 className="font-roboto text-[16px] font-medium text-canary-black-1">
                        Sections
                      </h2>
                    </div>
                    <div>
                      {/* Add Section Button */}
                      <button 
                        onClick={() => setIsAddSectionModalOpen(true)}
                        className="flex items-center justify-center w-8 h-8 rounded bg-transparent cursor-pointer hover:bg-gray-50 transition-colors"
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
                </div>

                {/* Container Content */}
                <div className="p-0">
                  <div className="border border-neutral-200 rounded-md mx-6 my-4">
                    {sections.length === 0 ? (
                      /* Empty State */
                      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                        <svg 
                          className="mx-auto h-12 w-12 text-gray-400 mb-4" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={1} 
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                          />
                        </svg>
                        <h3 className="text-sm font-medium text-gray-900 mb-1">No sections yet</h3>
                        <p className="text-sm text-gray-500">
                          Create your first section to start organizing content for guests.
                        </p>
                      </div>
                    ) : (
                      /* Sections List */
                      <ul className="divide-y divide-neutral-200">
                        {sections.map((section) => (
                          <li
                            key={section.id}
                            role="button"
                            tabIndex={0}
                            className="flex items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                          >
                            {/* Drag Handle */}
                            <div className="mr-3 opacity-50">
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                width="24" 
                                height="24" 
                                fill="rgb(65, 65, 65)"
                              >
                                <path d="M7 19v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4V9h2v2zm4 0V9h2v2zm4 0V9h2v2zM7 7V5h2v2zm4 0V5h2v2zm4 0V5h2v2z"></path>
                              </svg>
                            </div>

                            {/* Section Title */}
                            <div className="flex-1">
                              <div className="font-roboto text-[14px] font-normal text-canary-black-1">
                                {section.name}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2">
                              {/* Edit Button */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditSection(section.name);
                                }}
                                className="flex items-center justify-center w-8 h-8 rounded bg-transparent border-none cursor-pointer hover:bg-gray-200 transition-colors"
                                style={{ borderRadius: '4px' }}
                              >
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  viewBox="0 0 24 24" 
                                  width="24" 
                                  height="24" 
                                  fill="rgb(65, 65, 65)"
                                >
                                  <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"></path>
                                </svg>
                              </button>

                              {/* More Actions Button */}
                              <button
                                className="flex items-center justify-center w-8 h-8 rounded bg-transparent border-none cursor-pointer hover:bg-gray-200 transition-colors"
                                style={{ borderRadius: '4px' }}
                              >
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  viewBox="0 0 24 24" 
                                  width="24" 
                                  height="24" 
                                  fill="rgb(65, 65, 65)"
                                >
                                  <path d="M16 12a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2"></path>
                                </svg>
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Mobile Preview Panel */}
            <div className="flex-1 bg-gray-50 overflow-y-auto">
              <GuestHubMobilePreview 
                sections={sections}
                sectionItems={sectionItems}
              />
            </div>
          </div>
        </main>

        {/* Add Section Modal */}
        <AnimatedModal 
          isOpen={isAddSectionModalOpen} 
          onClose={() => {
            setIsAddSectionModalOpen(false);
            setNewSectionName('');
          }}
          maxWidth="max-w-md"
        >
          {/* Modal Header */}
          <div className="px-6 py-4 border-b border-neutral-200">
            <h2 className="font-roboto text-[18px] font-medium text-canary-black-1">
              Add new section
            </h2>
          </div>

          {/* Modal Content */}
          <form className="p-6">
            <div className="mb-6">
              <p className="text-sm text-gray-700 mb-4">
                Create a new section for your compendium.
              </p>
              
              <div className="space-y-2">
                <label 
                  htmlFor="section-name-input" 
                  className="block text-sm font-medium text-gray-700"
                  style={{ color: 'rgb(65, 65, 65)' }}
                >
                  Section name
                </label>
                <div className="relative">
                  <input
                    id="section-name-input"
                    type="text"
                    required
                    value={newSectionName}
                    onChange={(e) => setNewSectionName(e.target.value)}
                    placeholder="e.g., Local Attractions"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ 
                      borderColor: 'rgb(159, 159, 159)',
                      borderRadius: '4px'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsAddSectionModalOpen(false);
                  setNewSectionName('');
                }}
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded font-roboto text-sm font-medium hover:bg-blue-50 transition-colors"
                style={{ 
                  borderColor: 'rgb(40, 88, 196)',
                  color: 'rgb(40, 88, 196)',
                  borderRadius: '4px'
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleCreateSection}
                disabled={!newSectionName.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded font-roboto text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  backgroundColor: 'rgb(40, 88, 196)',
                  borderRadius: '4px'
                }}
              >
                Create section
              </button>
            </div>
          </form>
        </AnimatedModal>

        {/* Go to Guest Hub Button */}
        <button
          onClick={onNavigateToGuestHub}
          className="fixed bottom-6 right-6 bg-canary-blue-1 text-white px-4 py-0 h-10 rounded font-roboto font-medium text-sm shadow-lg hover:opacity-90 transition-opacity z-50 whitespace-nowrap flex items-center justify-center"
        >
          Go to Guest Hub
        </button>
    </div>
  );
};