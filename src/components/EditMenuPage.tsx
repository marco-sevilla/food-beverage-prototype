'use client';

import React, { useState } from 'react';
import Icon from '@mdi/react';
import clsx from 'clsx';
import { colors, spacing } from '@/lib/design-tokens';
import { 
  mdiArrowLeft, 
  mdiHome, 
  mdiBrushVariant, 
  mdiAccountMultiple, 
  mdiSecurity, 
  mdiCog,
  mdiBook,
  mdiFoodForkDrink,
  mdiTrendingUp,
  mdiLoginVariant,
  mdiLogoutVariant,
  mdiMessage,
  mdiCurrencyUsd,
  mdiShieldCheck,
  mdiFileDocument,
  mdiLink,
  mdiChevronDown,
  mdiPlus,
  mdiDrag,
  mdiPencil,
  mdiDelete
} from '@mdi/js';
import { CreateSectionModal } from './CreateSectionModal';

// Import the CanarySidebar component
import CanarySidebar, { SidebarVariant, type SidebarSection, type SidebarNavigationItem } from './CanarySidebar';


// Button component
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'icon';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  if (variant === 'icon') {
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center p-1.5 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50"
      >
        {children}
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90"
    >
      {children}
    </button>
  );
};

// Toggle Switch component
interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => (
  <button
    onClick={() => onChange(!checked)}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
      checked ? 'bg-canary-blue-1' : 'bg-gray-300'
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        checked ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);

// Section Item component
interface SectionItemProps {
  title: string;
  subtitle: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  onEdit: () => void;
  onDelete: () => void;
}

const SectionItem: React.FC<SectionItemProps> = ({ 
  title, 
  subtitle, 
  enabled, 
  onToggle, 
  onEdit, 
  onDelete 
}) => (
  <div className="flex items-center justify-between py-4 px-4 bg-white border-b border-neutral-200 last:border-b-0">
    <div className="flex items-center gap-3">
      <div className="cursor-move text-canary-black-4">
        <Icon path={mdiDrag} size={1} />
      </div>
      <div>
        <div className="font-roboto text-body-sm font-medium text-canary-black-1">
          {title}
        </div>
        <div className="font-roboto text-caption text-canary-black-4">
          {subtitle}
        </div>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <ToggleSwitch checked={enabled} onChange={onToggle} />
      <Button variant="icon" onClick={onEdit}>
        <Icon path={mdiPencil} size={0.8} />
      </Button>
      <Button variant="icon" onClick={onDelete}>
        <Icon path={mdiDelete} size={0.8} color="#E40046" />
      </Button>
    </div>
  </div>
);

// Main Edit Menu Page component
interface MenuSection {
  id: string;
  title: string;
  items: Array<{ id: string; name: string; image: string; }>;
}

interface EditMenuPageProps {
  onBack?: () => void;
  menuName?: string;
  internalName?: string;
  externalName?: string;
  isNewMenu?: boolean;
  sections?: MenuSection[];
  onSave?: (externalName: string, internalName: string, isNew: boolean) => boolean;
  onEditSection?: (sectionId: string) => void;
  onAddAvailabilityHours?: () => void;
}

export const EditMenuPage: React.FC<EditMenuPageProps> = ({ 
  onBack, 
  menuName = "Lunch menu",
  internalName,
  externalName,
  isNewMenu = false,
  sections,
  onSave,
  onEditSection,
  onAddAvailabilityHours
}) => {
  const [internalMenuName, setInternalMenuName] = useState(internalName || menuName);
  const [externalMenuName, setExternalMenuName] = useState(externalName || menuName);
  const [localSections, setLocalSections] = useState(
    isNewMenu ? [] : (sections || []).map(section => ({
      id: section.id,
      title: section.title,
      subtitle: `${section.items.length} item${section.items.length !== 1 ? 's' : ''}`,
      enabled: true
    }))
  );
  const [isCreateSectionModalOpen, setIsCreateSectionModalOpen] = useState(false);

  const handleSectionToggle = (id: string, enabled: boolean) => {
    setLocalSections(localSections.map(section => 
      section.id === id ? { ...section, enabled } : section
    ));
  };

  const handleSave = () => {
    const success = onSave?.(externalMenuName, internalMenuName, isNewMenu || false);
    // onSave handles showing toast messages
  };

  const handleCreateSection = (sectionName: string) => {
    const newSection = {
      id: sectionName.toLowerCase().replace(/\s+/g, '-'),
      title: sectionName,
      subtitle: '0 items',
      enabled: true
    };
    setLocalSections([...localSections, newSection]);
    setIsCreateSectionModalOpen(false);
  };

  const handleDeleteSection = (id: string) => {
    setLocalSections(localSections.filter(section => section.id !== id));
  };

  // Create sidebar sections
  const sidebarSections: SidebarSection[] = [
    {
      id: 'general',
      title: 'General Settings',
      items: [
        { 
          id: 'property-info', 
          label: 'Property Info', 
          icon: <Icon path={mdiHome} size="24px" />
        },
        { 
          id: 'branding', 
          label: 'Branding', 
          icon: <Icon path={mdiBrushVariant} size="24px" />
        },
        { 
          id: 'staff-members', 
          label: 'Staff Members', 
          icon: <Icon path={mdiAccountMultiple} size="24px" />
        },
        { 
          id: 'security', 
          label: 'Security', 
          icon: <Icon path={mdiSecurity} size="24px" />
        },
        { 
          id: 'integrations', 
          label: 'Integrations', 
          icon: <Icon path={mdiCog} size="24px" />
        }
      ]
    },
    {
      id: 'product',
      title: 'Product settings',
      items: [
        { 
          id: 'compendium', 
          label: 'Compendium', 
          icon: <Icon path={mdiBook} size="24px" />
        },
        { 
          id: 'fb-ordering', 
          label: 'F&B Ordering', 
          icon: <Icon path={mdiFoodForkDrink} size="24px" />
        },
        { 
          id: 'upsells', 
          label: 'Upsells', 
          icon: <Icon path={mdiTrendingUp} size="24px" />
        },
        { 
          id: 'check-in', 
          label: 'Check-in', 
          icon: <Icon path={mdiLoginVariant} size="24px" />
        },
        { 
          id: 'checkout', 
          label: 'Checkout', 
          icon: <Icon path={mdiLogoutVariant} size="24px" />
        },
        { 
          id: 'messages', 
          label: 'Messages', 
          icon: <Icon path={mdiMessage} size="24px" />
        },
        { 
          id: 'digital-tips', 
          label: 'Digital Tips', 
          icon: <Icon path={mdiCurrencyUsd} size="24px" />
        },
        { 
          id: 'authorizations', 
          label: 'Authorizations', 
          icon: <Icon path={mdiShieldCheck} size="24px" />
        },
        { 
          id: 'contracts', 
          label: 'Contracts', 
          icon: <Icon path={mdiFileDocument} size="24px" />
        },
        { 
          id: 'payment-links', 
          label: 'Payment Links', 
          icon: <Icon path={mdiLink} size="24px" />
        }
      ]
    }
  ];

  // Canary logo component
  const canaryLogo = (
    <img 
      src="/canary-logo.png" 
      alt="Canary" 
      style={{ width: '140px', height: '24px', objectFit: 'contain' }}
    />
  );

  // Back button component for the sidebar  
  const backButton = (
    <button 
      className="h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer text-white hover:opacity-90 transition-opacity"
      onClick={() => onBack?.()}
    >
      <div className="absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center">
        <Icon path={mdiArrowLeft} size={1} color="#ffffff" />
      </div>
      <span className="absolute left-12 font-roboto text-sm font-medium text-white">
        Back
      </span>
    </button>
  );

  return (
    <div className="flex h-screen rounded-xl shadow-canary overflow-hidden">
      {/* CanarySidebar */}
      <CanarySidebar 
        variant={SidebarVariant.SETTINGS}
        sections={sidebarSections}
        logo={canaryLogo}
        selectedItemId="fb-ordering"
        backButton={backButton}
        onItemClick={(itemId) => {
          console.log('Clicked item:', itemId);
        }}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full min-w-0">
        {/* Top Header */}
        <div className="bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="font-roboto text-body-sm font-medium text-canary-black-1 truncate">
              Statler New York
            </span>
            <Icon path={mdiChevronDown} size={0.8} />
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-canary-black-5 shrink-0" />
            <div className="flex flex-col sm:hidden">
              <span className="font-roboto text-caption font-medium text-canary-black-1">
                Theresa Webb
              </span>
              <span className="font-roboto text-caption-sm font-normal text-canary-black-4 uppercase">
                Operations manager
              </span>
            </div>
            <Icon path={mdiChevronDown} size={0.8} />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex bg-white overflow-hidden">
          {/* Left Configuration Panel */}
          <div className="flex-1 max-w-lg border-r border-neutral-200 flex flex-col">
            {/* Page Header */}
            <div className="border-b border-neutral-200 py-4 px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={onBack}
                  className="flex items-center justify-center p-2 hover:bg-gray-50 rounded"
                >
                  <Icon path={mdiArrowLeft} size={1} />
                </button>
                <h1 className="font-roboto text-subtitle font-medium text-canary-black-1">
                  {isNewMenu ? (externalMenuName || 'New Menu') : externalMenuName}
                </h1>
              </div>
              <Button onClick={handleSave}>Save</Button>
            </div>

            {/* Configuration Content */}
            <div className="flex-1 overflow-auto py-8 px-6 space-y-6">
              {/* Basic Info Section */}
              <div className="border border-neutral-200 rounded-lg p-6 bg-white">
                <h2 className="font-roboto text-subtitle font-semibold text-canary-black-1 mb-6">
                  Basic info
                </h2>
                
                <div className="space-y-4">
                  {/* External Menu Name */}
                  <div>
                    <label className="block font-roboto text-body-sm font-medium text-canary-black-1 mb-2">
                      External menu name*
                    </label>
                    <input
                      type="text"
                      value={externalMenuName}
                      onChange={(e) => setExternalMenuName(e.target.value)}
                      className="w-full h-12 px-4 border border-neutral-200 rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 focus:border-canary-blue-1"
                      placeholder="Enter external menu name"
                    />
                    <p className="mt-1 font-roboto text-caption text-canary-black-4">
                      This name will be displayed to guests and the public.
                    </p>
                  </div>

                  {/* Internal Menu Name */}
                  <div>
                    <label className="block font-roboto text-body-sm font-medium text-canary-black-1 mb-2">
                      Internal menu name*
                    </label>
                    <input
                      type="text"
                      value={internalMenuName}
                      onChange={(e) => setInternalMenuName(e.target.value)}
                      className="w-full h-12 px-4 border border-neutral-200 rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 focus:border-canary-blue-1"
                      placeholder="Enter internal menu name"
                    />
                    <p className="mt-1 font-roboto text-caption text-canary-black-4">
                      This name will be used for internal staff views and operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sections */}
              <div className="border border-neutral-200 rounded-lg p-6 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-roboto text-subtitle font-semibold text-canary-black-1">
                    Sections
                  </h2>
                  <Button variant="icon" onClick={() => setIsCreateSectionModalOpen(true)}>
                    <Icon path={mdiPlus} size={1} />
                  </Button>
                </div>
                <div className="border border-neutral-200 rounded-lg overflow-hidden">
                  {localSections.length === 0 ? (
                    <div className="py-8 px-4 text-center">
                      <p className="text-canary-black-4 font-roboto text-body-sm">
                        No sections yet. Click the + button to add your first section.
                      </p>
                    </div>
                  ) : (
                    localSections.map((section) => (
                      <SectionItem
                        key={section.id}
                        title={section.title}
                        subtitle={section.subtitle}
                        enabled={section.enabled}
                        onToggle={(enabled) => handleSectionToggle(section.id, enabled)}
                        onEdit={() => onEditSection?.(section.id)}
                        onDelete={() => handleDeleteSection(section.id)}
                      />
                    ))
                  )}
                </div>
              </div>

              {/* Availability */}
              <div className="border border-neutral-200 rounded-lg p-6 bg-white">
                <div className="flex items-center justify-between">
                  <h2 className="font-roboto text-subtitle font-semibold text-canary-black-1">
                    Availability
                  </h2>
                  <button 
                    onClick={onAddAvailabilityHours}
                    className="font-roboto text-body-sm text-canary-blue-1 hover:underline"
                  >
                    Add hours
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Mobile Preview Placeholder */}
          <div className="flex-1 bg-canary-black-6 flex items-center justify-center">
            {/* Grey background placeholder - will add mobile preview later */}
          </div>
        </div>
      </div>

      {/* Create Section Modal */}
      <CreateSectionModal
        isOpen={isCreateSectionModalOpen}
        onClose={() => setIsCreateSectionModalOpen(false)}
        onCreateSection={handleCreateSection}
      />
    </div>
  );
};