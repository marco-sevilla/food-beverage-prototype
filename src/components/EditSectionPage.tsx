'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Icon from '@mdi/react';
import clsx from 'clsx';
import { colors, spacing } from '@/lib/design-tokens';
import { FOOD_ITEMS, formatMenuDisplay, type FoodItem as CentralizedFoodItem } from '@/data/foodItems';
import { getImage, getItem } from '@/utils/persistence';
import { AnimatedSection } from './PageTransition';
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
import { AddItemsModal } from './AddItemsModal';

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
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, type = 'button' }) => {
  if (variant === 'icon') {
    return (
      <button
        type={type}
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
        type={type}
        onClick={onClick}
        className="flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90"
    >
      {children}
    </button>
  );
};

// Input component
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  required = false
}) => (
  <div className="flex flex-col gap-2">
    <label className="font-roboto text-body-sm font-medium text-canary-black-1">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full h-12 px-4 border border-neutral-200 rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 focus:border-canary-blue-1"
    />
  </div>
);

// Sortable Section Item component
interface SectionItemProps {
  id: string;
  name: string;
  image: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  isDragging?: boolean;
}

const SortableSectionItem: React.FC<SectionItemProps> = ({ 
  id, 
  name, 
  image, 
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

  // Get saved image for this item (check both storage systems)
  const savedItem = getItem(id);
  const savedImage = savedItem?.image || getImage(id) || image;
  
  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      className={clsx(
        "flex items-center gap-3 py-3 px-3 bg-white border-b border-neutral-200 last:border-b-0 relative",
        isSortableDragging && "opacity-50 z-50",
        isDragging && "shadow-xl"
      )}
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: isSortableDragging ? 0.5 : 1, 
        x: 0,
        scale: isDragging ? 1.02 : 1
      }}
      exit={{ opacity: 0, x: 20 }}
      whileDrag={{
        scale: 1.02,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
        zIndex: 1000
      }}
    >
      {/* Drag Handle */}
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
      
      {/* Item Image */}
      {savedImage ? (
        <img 
          src={savedImage} 
          alt={name}
          className="w-10 h-10 rounded object-cover"
        />
      ) : (
        <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-xs">No image</span>
        </div>
      )}
    
      {/* Item Name */}
      <span className="flex-1 font-roboto text-body-sm font-medium text-canary-black-1">
        {name}
      </span>
      
      {/* Actions */}
      <div className="flex items-center gap-2">
        <Button variant="icon" onClick={() => onEdit(id)}>
          <Icon path={mdiPencil} size={0.8} />
        </Button>
        <Button variant="icon" onClick={() => onDelete(id)}>
          <Icon path={mdiDelete} size={0.8} color="#E40046" />
        </Button>
      </div>
    </motion.div>
  );
};

// Static Section Item component for drag overlay
const SectionItem: React.FC<SectionItemProps> = ({ 
  id, 
  name, 
  image, 
  onEdit, 
  onDelete 
}) => {
  // Get saved image for this item (check both storage systems)
  const savedItem = getItem(id);
  const savedImage = savedItem?.image || getImage(id) || image;
  
  return (
    <div className="flex items-center gap-3 py-3 px-3 bg-white border border-neutral-200 rounded-lg shadow-xl">
      {/* Drag Handle */}
      <div className="cursor-move text-canary-blue-1">
        <Icon path={mdiDrag} size={1} />
      </div>
      
      {/* Item Image */}
      {savedImage ? (
        <img 
          src={savedImage} 
          alt={name}
          className="w-10 h-10 rounded object-cover"
        />
      ) : (
        <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-xs">No image</span>
        </div>
      )}
    
      {/* Item Name */}
      <span className="flex-1 font-roboto text-body-sm font-medium text-canary-black-1">
        {name}
      </span>
      
      {/* Actions */}
      <div className="flex items-center gap-2">
        <Button variant="icon" onClick={() => {}}>
          <Icon path={mdiPencil} size={0.8} />
        </Button>
        <Button variant="icon" onClick={() => {}}>
          <Icon path={mdiDelete} size={0.8} color="#E40046" />
        </Button>
      </div>
    </div>
  );
};

// Section and Item interfaces
interface SectionItem {
  id: string;
  name: string;
  image: string;
}

interface MenuSection {
  id: string;
  title: string;
  items: SectionItem[];
}

interface FoodItem {
  id: string;
  name: string;
  image: string;
  menus: string[];
  price: number;
  available: boolean;
}

// Sample items data
const sampleItems: SectionItem[] = [
  {
    id: '1',
    name: 'Croissant',
    image: 'https://images.unsplash.com/photo-1555507036-ab794f4eeecb?w=40&h=40&fit=crop&crop=center'
  },
  {
    id: '2',
    name: 'Frittata',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=40&h=40&fit=crop&crop=center'
  }
];


// Main component
interface EditSectionPageProps {
  section?: MenuSection;
  onBack?: () => void;
  onSave?: (section: MenuSection) => void;
  parentMenu?: {
    name: string;
    sections: MenuSection[];
  };
}

export const EditSectionPage: React.FC<EditSectionPageProps> = ({ 
  section,
  onBack,
  onSave,
  parentMenu
}) => {
  const [sectionData, setSectionData] = useState<MenuSection>({
    id: section?.id || '',
    title: section?.title || 'Mains',
    items: section?.items || sampleItems
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isAddItemsModalOpen, setIsAddItemsModalOpen] = useState(false);
  
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

  // Find the active item for drag overlay
  const activeItem = useMemo(() => {
    return activeId ? sectionData.items.find(item => item.id === activeId) : null;
  }, [activeId, sectionData.items]);

  // Drag handlers
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      setSectionData((prevData) => {
        const oldIndex = prevData.items.findIndex(item => item.id === active.id);
        const newIndex = prevData.items.findIndex(item => item.id === over.id);
        
        const reorderedItems = arrayMove(prevData.items, oldIndex, newIndex);
        
        // Save the new order to persistence
        import('@/utils/persistence').then(({ saveItemOrder }) => {
          saveItemOrder(prevData.id, reorderedItems.map(item => item.id));
        });
        
        return {
          ...prevData,
          items: reorderedItems
        };
      });
    }
    
    setActiveId(null);
  };
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const currentSectionRef = useRef<HTMLDivElement>(null);


  // Auto-scroll to the current section being edited
  useEffect(() => {
    if (currentSectionRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const section = currentSectionRef.current;
      
      // Scroll to the top of the highlighted section
      container.scrollTo({
        top: section.offsetTop - 20, // 20px offset from top
        behavior: 'smooth'
      });
    }
  }, [sectionData.title, sectionData.items.length]); // Re-scroll when section data changes

  const handleSave = () => {
    // Validation
    const newErrors: { [key: string]: string } = {};
    
    if (!sectionData.title.trim()) {
      newErrors.title = 'Section title is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSave?.(sectionData);
  };

  const updateTitle = (title: string) => {
    setSectionData(prev => ({
      ...prev,
      title
    }));
    
    // Clear error when user starts typing
    if (errors.title) {
      setErrors(prev => ({
        ...prev,
        title: ''
      }));
    }
  };

  const handleAddItem = () => {
    setIsAddItemsModalOpen(true);
  };

  const handleEditItem = (itemId: string) => {
    console.log('Edit item:', itemId);
  };

  const handleDeleteItem = (itemId: string) => {
    setSectionData(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== itemId)
    }));
  };

  const handleAddItemsFromLibrary = (selectedItems: CentralizedFoodItem[]) => {
    // Convert FoodItems to SectionItems and add to section
    const newSectionItems: SectionItem[] = selectedItems.map(item => ({
      id: item.id,
      name: item.name,
      image: item.image
    }));

    setSectionData(prev => ({
      ...prev,
      items: [...prev.items, ...newSectionItems]
    }));
  };

  const handleGoToItemLibrary = () => {
    // In a real app, this would navigate to the Item Library
    console.log('Navigate to Item Library');
  };

  // Get existing item IDs across ALL sections in the menu to disable in modal
  const existingItemIds = useMemo(() => {
    if (!parentMenu) {
      // If no parent menu context, just use current section items
      return sectionData.items.map(item => item.id);
    }
    
    // Collect all item IDs from all sections in the parent menu
    const allItemIds: string[] = [];
    parentMenu.sections.forEach(section => {
      if (section.id === sectionData.id) {
        // For the current section being edited, use the latest sectionData
        allItemIds.push(...sectionData.items.map(item => item.id));
      } else {
        // For other sections, use the data from parentMenu
        allItemIds.push(...section.items.map(item => item.id));
      }
    });
    
    return allItemIds;
  }, [parentMenu, sectionData.items, sectionData.id]);

  const isNewSection = !section || !section.id;

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
                    Section details
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
                
                <div>
                  <Input
                    label="Title"
                    value={sectionData.title}
                    onChange={updateTitle}
                    placeholder="Enter section title"
                    required
                  />
                  {errors.title && (
                    <p className="mt-1 text-sm text-red-500">{errors.title}</p>
                  )}
                </div>
              </div>
              </AnimatedSection>

              {/* Items Section */}
              <AnimatedSection delay={160}>
                <div className="border border-neutral-200 rounded-lg p-6 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-roboto text-subtitle font-semibold text-canary-black-1">
                    Items
                  </h2>
                  <Button variant="icon" onClick={handleAddItem}>
                    <Icon path={mdiPlus} size={1} />
                  </Button>
                </div>

                {/* Items List */}
                {sectionData.items.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-canary-black-4 font-roboto text-body-sm">
                      No items in this section yet
                    </p>
                  </div>
                ) : (
                  <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                  >
                    <div className="border border-neutral-200 rounded-lg overflow-hidden">
                      <SortableContext items={sectionData.items.map(item => item.id)} strategy={verticalListSortingStrategy}>
                        {sectionData.items.map((item) => (
                          <SortableSectionItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            onEdit={handleEditItem}
                            onDelete={handleDeleteItem}
                          />
                        ))}
                      </SortableContext>
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
                      {activeItem ? (
                        <div style={{ 
                          transform: 'rotate(2deg)',
                          cursor: 'grabbing',
                          pointerEvents: 'none',
                          opacity: 0.95,
                        }}>
                          <SectionItem
                            id={activeItem.id}
                            name={activeItem.name}
                            image={activeItem.image}
                            onEdit={() => {}}
                            onDelete={() => {}}
                            isDragging={true}
                          />
                        </div>
                      ) : null}
                    </DragOverlay>
                  </DndContext>
                )}
              </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Right Mobile Preview Panel */}
          <AnimatedSection delay={240} className="flex-1">
            <div className="h-full bg-gray-100 flex flex-col items-center py-8 px-6">
            {/* Mobile Preview Container */}
            <div className="flex-1 w-full max-w-md flex items-center justify-center">
              <div 
                className="relative bg-white overflow-hidden shadow-xl"
                style={{
                  width: '320px',
                  height: '640px', 
                  borderRadius: '28px',
                  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.16)'
                }}
              >
                {/* Mobile Preview Content */}
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
                      {parentMenu?.name || 'Menu Preview'}
                    </h2>
                  </div>

                  {/* Scrollable Content */}
                  <div 
                    ref={scrollContainerRef}
                    className="flex-1 overflow-y-scroll bg-white px-4 py-6" 
                    style={{ 
                      minHeight: 0,
                      maxHeight: '100%',
                      WebkitOverflowScrolling: 'touch'
                    }}
                  >
                    <div style={{ pointerEvents: 'none' }}>
                      {parentMenu?.sections?.map((menuSection) => (
                        <div 
                          key={menuSection.id} 
                          className="mb-6 last:mb-0"
                          ref={menuSection.id === sectionData.id ? currentSectionRef : null}
                        >
                          {/* Section Header */}
                          <h3 className="font-roboto text-xl font-medium text-black mb-3">
                            {menuSection.id === sectionData.id ? sectionData.title : menuSection.title}
                          </h3>
                          
                          {/* Section Items */}
                          <div className="border border-neutral-200 rounded-lg overflow-hidden">
                            {(menuSection.id === sectionData.id ? sectionData.items : menuSection.items).length === 0 ? (
                              <div className="p-8 text-center">
                                <p className="text-gray-500 font-roboto text-sm">
                                  No items in this section yet
                                </p>
                              </div>
                            ) : (
                              (menuSection.id === sectionData.id ? sectionData.items : menuSection.items).map((item, index, items) => (
                                <div key={item.id} className={index < items.length - 1 ? "border-b border-neutral-200" : ""}>
                                  <div className="flex items-center gap-4 p-3">
                                    {/* Item Image or Placeholder */}
                                    {(() => {
                                      const savedItem = getItem(item.id);
                                      const itemImage = savedItem?.image || getImage(item.id) || item.image;
                                      return itemImage ? (
                                        <img 
                                          src={itemImage} 
                                          alt={item.name}
                                          className="w-16 h-16 rounded-lg object-cover shrink-0"
                                        />
                                      ) : (
                                        <div className="w-16 h-16 rounded-lg bg-gray-200 shrink-0 flex items-center justify-center">
                                          <span className="text-gray-400 text-xs">No image</span>
                                        </div>
                                      );
                                    })()}
                                    
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
                            No menu data available for preview
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

      {/* Add Items Modal */}
      <AddItemsModal
        isOpen={isAddItemsModalOpen}
        onClose={() => setIsAddItemsModalOpen(false)}
        onAddItems={handleAddItemsFromLibrary}
        onGoToItemLibrary={handleGoToItemLibrary}
        availableItems={FOOD_ITEMS}
        existingItemIds={existingItemIds}
      />
    </div>
  );
};