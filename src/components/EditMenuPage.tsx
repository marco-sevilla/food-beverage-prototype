'use client';

import React, { useState, useMemo, useEffect } from 'react';
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
import { MobileMenuOrdering } from './MobileMenuOrdering';
import { FOOD_ITEMS, convertToSectionItem } from '@/data/foodItems';
import { AnimatedSection } from './PageTransition';

// Import drag and drop components
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
  type Modifier,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { motion } from 'framer-motion';

// Custom modifier to position drag overlay under cursor
const snapCursorToDragOverlay: Modifier = ({ activatorEvent, draggingNodeRect, transform }) => {
  if (activatorEvent && draggingNodeRect) {
    const activatorCoordinates = {
      x: 'clientX' in activatorEvent ? activatorEvent.clientX : 0,
      y: 'clientY' in activatorEvent ? activatorEvent.clientY : 0,
    };

    const offsetX = activatorCoordinates.x - draggingNodeRect.left;
    const offsetY = activatorCoordinates.y - draggingNodeRect.top;

    return {
      ...transform,
      x: transform.x + offsetX - draggingNodeRect.width / 2,
      y: transform.y + offsetY - draggingNodeRect.height / 2,
    };
  }

  return transform;
};

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

// Sortable Section Item component
interface SectionItemProps {
  id: string;
  title: string;
  subtitle: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  onEdit: () => void;
  onDelete: () => void;
  isDragging?: boolean;
}

const SortableSectionItem: React.FC<SectionItemProps> = ({ 
  id,
  title, 
  subtitle, 
  enabled, 
  onToggle, 
  onEdit, 
  onDelete,
  isDragging = false
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || 'transform 200ms cubic-bezier(0.25, 1, 0.5, 1)',
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      className={clsx(
        "flex items-center justify-between py-4 px-4 bg-white border-b border-neutral-200 last:border-b-0 relative",
        isSortableDragging && "opacity-50 z-50",
        isDragging && "shadow-xl scale-105"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isSortableDragging ? 0.5 : 1, 
        y: 0,
        scale: isDragging ? 1.02 : 1
      }}
      exit={{ opacity: 0, y: -20 }}
      whileDrag={{
        scale: 1.02,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
        zIndex: 1000
      }}
    >
      <div className="flex items-center gap-3">
        <div 
          className={clsx(
            "cursor-grab text-canary-black-4 transition-colors duration-200 hover:text-canary-black-2 p-1 rounded active:cursor-grabbing",
            isSortableDragging && "text-canary-blue-1 cursor-grabbing"
          )}
          {...attributes}
          {...listeners}
        >
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
    </motion.div>
  );
};

// Static Section Item component for drag overlay
const SectionItem: React.FC<SectionItemProps> = ({ 
  title, 
  subtitle, 
  enabled, 
  onToggle, 
  onEdit, 
  onDelete 
}) => (
  <div className="flex items-center justify-between py-4 px-4 bg-white border border-neutral-200 rounded-lg shadow-xl">
    <div className="flex items-center gap-3">
      <div className="cursor-move text-canary-blue-1">
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
      <ToggleSwitch checked={enabled} onChange={() => {}} />
      <Button variant="icon" onClick={() => {}}>
        <Icon path={mdiPencil} size={0.8} />
      </Button>
      <Button variant="icon" onClick={() => {}}>
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

interface MenuWithSections {
  name: string;
  entryPoint: string;
  sections?: {
    id: string;
    title: string;
    items: Array<{ id: string; name: string; image: string; }>;
  }[];
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
  onCreateSection?: (sectionName: string) => void;
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
  onCreateSection,
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
  
  // Drag and drop state
  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Find the active section for drag overlay
  const activeSection = useMemo(() => {
    return activeId ? localSections.find(section => section.id === activeId) : null;
  }, [activeId, localSections]);

  // Drag handlers
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      setLocalSections((sections) => {
        const oldIndex = sections.findIndex(section => section.id === active.id);
        const newIndex = sections.findIndex(section => section.id === over.id);
        
        const reorderedSections = arrayMove(sections, oldIndex, newIndex);
        
        // Save the new order to persistence
        import('@/utils/persistence').then(({ saveSectionOrder }) => {
          const menuId = internalMenuName || externalMenuName || 'default-menu';
          saveSectionOrder(menuId, reorderedSections.map(s => s.id));
        });
        
        return reorderedSections;
      });
    }
    
    setActiveId(null);
  };

  // Helper function to get sample items for a section
  const getSampleItemsForSection = (sectionTitle: string) => {
    const lowerTitle = sectionTitle.toLowerCase();
    
    if (lowerTitle.includes('cold') || lowerTitle.includes('appetizer')) {
      return FOOD_ITEMS.filter(item => ['Salad', 'Sushi', 'Fresh Oysters (3pc)', 'Yellowtail Sashimi Jalapeno'].includes(item.name)).slice(0, 4);
    } else if (lowerTitle.includes('main') || lowerTitle.includes('entree')) {
      return FOOD_ITEMS.filter(item => ['Pizza', 'Pasta', 'Burrito', 'Club Sandwich'].includes(item.name)).slice(0, 4);
    } else if (lowerTitle.includes('side')) {
      return FOOD_ITEMS.filter(item => ['French Fries', 'Side Salad'].includes(item.name)).slice(0, 3);
    } else if (lowerTitle.includes('dessert') || lowerTitle.includes('sweet')) {
      return FOOD_ITEMS.filter(item => ['Brownie'].includes(item.name)).slice(0, 2);
    } else {
      // Default mixed items
      return FOOD_ITEMS.slice(0, 3);
    }
  };

  // Create preview menu data that syncs with configuration
  const previewMenus: MenuWithSections[] = useMemo(() => {
    if (!externalMenuName) return [];
    
    // Convert localSections to menu sections format for preview
    let menuSections = localSections
      .filter(section => section.enabled) // Only show enabled sections
      .map(section => {
        // Get items for this section from the original sections data or create sample items
        const originalSection = sections?.find(s => s.id === section.id);
        let sectionItems = [];
        
        if (originalSection && originalSection.items.length > 0) {
          // Use real items if available
          sectionItems = originalSection.items.map(item => convertToSectionItem({
            id: item.id,
            name: item.name,
            description: '',
            price: 0,
            image: item.image,
            menus: [],
            available: true
          }));
        } else {
          // Create sample items based on section name for preview
          const sampleItems = getSampleItemsForSection(section.title);
          sectionItems = sampleItems.map(item => convertToSectionItem(item));
        }
        
        return {
          id: section.id,
          title: section.title,
          items: sectionItems
        };
      });
    
    // If no sections exist, show a sample section to demonstrate the preview
    if (menuSections.length === 0) {
      const sampleItems = FOOD_ITEMS.slice(0, 3).map(item => convertToSectionItem(item));
      menuSections = [{
        id: 'sample-section',
        title: 'Sample Items',
        items: sampleItems
      }];
    }
    
    return [{
      name: externalMenuName,
      entryPoint: 'mobile',
      sections: menuSections
    }];
  }, [externalMenuName, localSections, sections, getSampleItemsForSection]);

  const handleSectionToggle = (id: string, enabled: boolean) => {
    setLocalSections(localSections.map(section => 
      section.id === id ? { ...section, enabled } : section
    ));
  };

  const handleDeleteSection = (id: string) => {
    setLocalSections(localSections.filter(section => section.id !== id));
  };

  const handleSave = () => {
    const success = onSave?.(externalMenuName, internalMenuName, isNewMenu || false);
    // onSave handles showing toast messages
  };

  const handleCreateSection = (sectionName: string) => {
    // Route to EditSection page for new section instead of immediately adding it
    setIsCreateSectionModalOpen(false);
    if (onCreateSection) {
      onCreateSection(sectionName);
    }
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
          <div className="flex-1 border-r border-neutral-200 flex flex-col">
            {/* Page Header */}
            <AnimatedSection delay={0}>
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
            </AnimatedSection>

            {/* Configuration Content */}
            <div className="flex-1 overflow-auto py-8 px-6 space-y-6">
              {/* Basic Info Section */}
              <AnimatedSection delay={80}>
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
              </AnimatedSection>

              {/* Sections */}
              <AnimatedSection delay={160}>
                <div className="border border-neutral-200 rounded-lg p-6 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-roboto text-subtitle font-semibold text-canary-black-1">
                    Sections
                  </h2>
                  <Button variant="icon" onClick={() => setIsCreateSectionModalOpen(true)}>
                    <Icon path={mdiPlus} size={1} />
                  </Button>
                </div>
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                >
                  <div className="border border-neutral-200 rounded-lg overflow-hidden">
                    {localSections.length === 0 ? (
                      <div className="py-8 px-4 text-center">
                        <p className="text-canary-black-4 font-roboto text-body-sm">
                          No sections yet. Click the + button to add your first section.
                        </p>
                      </div>
                    ) : (
                      <SortableContext items={localSections.map(s => s.id)} strategy={verticalListSortingStrategy}>
                        {localSections.map((section) => (
                          <SortableSectionItem
                            key={section.id}
                            id={section.id}
                            title={section.title}
                            subtitle={section.subtitle}
                            enabled={section.enabled}
                            onToggle={(enabled) => handleSectionToggle(section.id, enabled)}
                            onEdit={() => onEditSection?.(section.id)}
                            onDelete={() => handleDeleteSection(section.id)}
                          />
                        ))}
                      </SortableContext>
                    )}
                  </div>
                  
                  {/* Drag Overlay */}
                  <DragOverlay
                    dropAnimation={{
                      duration: 200,
                      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
                    }}
                    modifiers={[snapCursorToDragOverlay]}
                    zIndex={9999}
                  >
                    {activeSection ? (
                      <div style={{ 
                        transform: 'rotate(3deg)',
                        cursor: 'grabbing',
                        pointerEvents: 'none',
                        opacity: 0.95,
                      }}>
                        <SectionItem
                          id={activeSection.id}
                          title={activeSection.title}
                          subtitle={activeSection.subtitle}
                          enabled={activeSection.enabled}
                          onToggle={() => {}}
                          onEdit={() => {}}
                          onDelete={() => {}}
                          isDragging={true}
                        />
                      </div>
                    ) : null}
                  </DragOverlay>
                </DndContext>
              </div>
              </AnimatedSection>

              {/* Availability */}
              <AnimatedSection delay={240}>
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
              </AnimatedSection>
            </div>
          </div>

          {/* Right Mobile Preview Panel */}
          <AnimatedSection delay={320} className="flex-1">
            <div className="h-full bg-gray-100 flex flex-col items-center py-8 px-6">
              
              {/* Mobile Preview Container */}
            <div className="flex-1 w-full max-w-md flex items-center justify-center">
              <div 
                className="relative bg-white overflow-hidden shadow-xl"
                style={{
                  width: '320px',  // Increased from 280px
                  height: '640px', // Increased from 607px 
                  borderRadius: '28px', // Scaled down from 44px
                  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.16)'
                }}
              >
                {/* Mobile Preview Content - Clean preview without demo elements */}
                <div className="h-full flex flex-col relative">

                  {/* Header */}
                  <div className="flex items-center justify-center px-4 py-4 bg-white shrink-0" style={{
                    borderTopLeftRadius: '28px',
                    borderTopRightRadius: '28px'
                  }}>
                    <h1 className="font-roboto text-2xl font-semibold text-black text-center">
                      In-room dining
                    </h1>
                  </div>

                  {/* Menu Title */}
                  <div className="px-4 py-3 bg-white shrink-0">
                    <h2 className="font-roboto text-[32px] font-medium text-black leading-[48px]">
                      {externalMenuName || 'Menu Preview'}
                    </h2>
                  </div>

                  {/* Scrollable Content */}
                  <div 
                    className="flex-1 overflow-y-scroll bg-white px-4 py-6" 
                    style={{ 
                      minHeight: 0,
                      maxHeight: '100%',
                      WebkitOverflowScrolling: 'touch'
                    }}
                  >
                    <div style={{ pointerEvents: 'none' }}>
                      {previewMenus[0]?.sections?.map((section) => (
                        <div key={section.id} className="mb-6 last:mb-0">
                          {/* Section Header */}
                          <h3 className="font-roboto text-xl font-medium text-black mb-3">
                            {section.title}
                          </h3>
                          
                          {/* Section Items */}
                          <div className="border border-neutral-200 rounded-lg overflow-hidden">
                            {section.items.length === 0 ? (
                              <div className="p-8 text-center">
                                <p className="text-gray-500 font-roboto text-sm">
                                  No items in this section yet
                                </p>
                              </div>
                            ) : (
                              section.items.map((item, index) => (
                                <div key={item.id} className={index < section.items.length - 1 ? "border-b border-neutral-200" : ""}>
                                  <div className="flex items-center gap-4 p-3">
                                    {/* Item Image or Placeholder */}
                                    {item.image ? (
                                      <img 
                                        src={item.image} 
                                        alt={item.name}
                                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                                      />
                                    ) : (
                                      <div className="w-16 h-16 rounded-lg bg-gray-200 shrink-0 flex items-center justify-center">
                                        <span className="text-gray-400 text-xs">No image</span>
                                      </div>
                                    )}
                                    
                                    {/* Item Info */}
                                    <div className="flex-1 min-w-0">
                                      <h4 className="font-roboto text-sm font-medium text-black mb-0.5 truncate">
                                        {item.name}
                                      </h4>
                                      <p className="font-roboto text-sm font-normal text-black">
                                        ${Math.floor((item.name.length * 7 + item.id.length * 3) % 30) + 15}
                                      </p>
                                    </div>
                                    
                                    {/* Add Button (disabled for preview) */}
                                    <div className="shrink-0">
                                      <button
                                        disabled
                                        className="w-9 h-9 flex items-center justify-center rounded bg-black text-white opacity-50 cursor-not-allowed"
                                      >
                                        <span className="text-white text-lg">+</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      )) || (
                        <div className="p-8 text-center">
                          <p className="text-gray-500 font-roboto text-sm">
                            Add sections to see preview content
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </AnimatedSection>
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