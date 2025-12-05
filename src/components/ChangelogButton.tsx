'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiBookOpenPageVariant, mdiChevronUp } from '@mdi/js';
import CanaryButton from './temp-components/CanaryButton';
import { ButtonType, ButtonSize, IconPosition } from './temp-components/button-types';
import { ChangelogModal } from './ChangelogModal';
import { SupplementalFeesAndTaxesChangelog } from './changelogs/SupplementalFeesAndTaxes';

interface ChangelogItem {
  id: string;
  title: string;
  content: React.ReactNode;
  linearLinks?: Array<{
    url: string;
    title: string;
  }>;
}

const CHANGELOG_ITEMS: ChangelogItem[] = [
  {
    id: 'supplemental-fees-taxes',
    title: 'Supplemental fees and Taxes - F&B Settings',
    content: <SupplementalFeesAndTaxesChangelog />,
    linearLinks: [
      {
        url: 'https://linear.app/canary-technologies/issue/STAY-2044/fandb-ability-to-add-and-show-tax-to-orders',
        title: 'STAY-2044: [F&B] Ability to add and show tax to orders'
      },
      {
        url: 'https://linear.app/canary-technologies/issue/STAY-2045/fandb-ability-to-add-a-supplement-to-all-fandb-orders',
        title: 'STAY-2045: [F&B] Ability to add a supplement to all F&B orders'
      }
    ]
  }
];

export const ChangelogButton: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedChangelog, setSelectedChangelog] = useState<ChangelogItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = (item: ChangelogItem) => {
    setSelectedChangelog(item);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Floating Button Container */}
      <div 
        ref={buttonRef}
        className="fixed bottom-6 right-[185px] z-50"
      >
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div 
            ref={dropdownRef}
            className="absolute bottom-full mb-2 right-0 bg-white border border-neutral-200 rounded-lg shadow-lg py-2 min-w-[280px] animate-in slide-in-from-bottom-2 fade-in duration-200"
          >
            <div className="px-3 py-2 border-b border-neutral-200">
              <h3 className="font-roboto text-sm font-medium text-canary-black-1">
                Development Changelogs
              </h3>
            </div>
            <div className="py-1">
              {CHANGELOG_ITEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="w-full text-left px-3 py-2 font-roboto text-sm text-canary-black-1 hover:bg-gray-50 transition-colors"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Changelog Button */}
        <div className="relative">
          <CanaryButton
            type={ButtonType.SHADED}
            size={ButtonSize.NORMAL}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            icon={
              <Icon 
                path={isDropdownOpen ? mdiChevronUp : mdiBookOpenPageVariant} 
                size={0.8} 
              />
            }
            iconPosition={IconPosition.LEFT}
          >
            Changelogs
          </CanaryButton>
        </div>
      </div>

      {/* Changelog Modal */}
      {selectedChangelog && (
        <ChangelogModal
          isOpen={!!selectedChangelog}
          onClose={() => setSelectedChangelog(null)}
          title={selectedChangelog.title}
          content={selectedChangelog.content}
          linearLinks={selectedChangelog.linearLinks}
        />
      )}
    </>
  );
};