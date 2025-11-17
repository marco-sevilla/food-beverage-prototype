// Simple localStorage persistence for the F&B prototype
const STORAGE_KEY = 'canary-fb-prototype';

import { DayAvailability } from './menuAvailability';

export interface PersistedData {
  menus?: any[];
  selectedMenu?: string;
  demoTime?: {
    day: string;
    hour: number;
    minute: number;
    ampm: 'AM' | 'PM';
  };
  guestInfo?: {
    name: string;
    room: string;
  };
  viewMode?: 'mobile' | 'desktop';
  cart?: Record<string, number>;
  images?: Record<string, string>; // itemId -> dataURL mapping
  items?: Record<string, any>; // itemId -> item data mapping
  menuAvailability?: Record<string, DayAvailability[]>; // menuName -> availability settings
  prepTimeMinutes?: number; // average order prep time in minutes
  sectionOrders?: Record<string, string[]>; // menuId -> ordered section IDs
  itemOrders?: Record<string, string[]>; // sectionId -> ordered item IDs
  lastSaved?: number;
}

export const saveData = (data: PersistedData): void => {
  try {
    const dataToSave = {
      ...data,
      lastSaved: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  } catch (error) {
    console.warn('Failed to save data to localStorage:', error);
  }
};

export const loadData = (): PersistedData => {
  try {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') {
      return {};
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.warn('Failed to load data from localStorage:', error);
    return {};
  }
};

export const clearData = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Failed to clear localStorage:', error);
  }
};

// Helper to save specific data types
export const saveMenuData = (menus: any[]) => {
  const existing = loadData();
  saveData({ ...existing, menus });
};

export const saveDemoTime = (demoTime: PersistedData['demoTime']) => {
  const existing = loadData();
  saveData({ ...existing, demoTime });
};

export const saveSelectedMenu = (selectedMenu: string) => {
  const existing = loadData();
  saveData({ ...existing, selectedMenu });
};

export const saveCart = (cart: Record<string, number>) => {
  const existing = loadData();
  saveData({ ...existing, cart });
};

export const saveGuestInfo = (guestInfo: PersistedData['guestInfo']) => {
  const existing = loadData();
  saveData({ ...existing, guestInfo });
};

export const getGuestInfo = (): { name: string; room: string } => {
  const data = loadData();
  return data.guestInfo || { name: 'John Smith', room: '1205' };
};

export const saveViewMode = (viewMode: 'mobile' | 'desktop') => {
  const existing = loadData();
  saveData({ ...existing, viewMode });
};

export const getViewMode = (): 'mobile' | 'desktop' => {
  const data = loadData();
  return data.viewMode || 'mobile';
};

export const saveImage = (itemId: string, imageDataUrl: string) => {
  const existing = loadData();
  const images = existing.images || {};
  saveData({ ...existing, images: { ...images, [itemId]: imageDataUrl } });
};

export const getImage = (itemId: string): string | undefined => {
  const data = loadData();
  return data.images?.[itemId];
};

// Menu availability persistence helpers
export const saveMenuAvailability = (menuName: string, availability: DayAvailability[]) => {
  const existing = loadData();
  const menuAvailability = existing.menuAvailability || {};
  saveData({ 
    ...existing, 
    menuAvailability: { 
      ...menuAvailability, 
      [menuName]: availability 
    } 
  });
};

export const getMenuAvailability = (menuName: string): DayAvailability[] | undefined => {
  const data = loadData();
  return data.menuAvailability?.[menuName];
};

export const getAllMenuAvailability = (): Record<string, DayAvailability[]> => {
  const data = loadData();
  return data.menuAvailability || {};
};

// Prep time persistence helpers
export const savePrepTime = (prepTimeMinutes: number) => {
  const existing = loadData();
  saveData({ ...existing, prepTimeMinutes });
};

export const getPrepTime = (): number => {
  const data = loadData();
  return data.prepTimeMinutes || 30; // default to 30 minutes
};

// Item data persistence helpers
export const saveItem = (itemId: string, itemData: any) => {
  const existing = loadData();
  const items = existing.items || {};
  saveData({ ...existing, items: { ...items, [itemId]: itemData } });
};

export const getItem = (itemId: string): any | undefined => {
  const data = loadData();
  return data.items?.[itemId];
};

export const getAllItems = (): Record<string, any> => {
  const data = loadData();
  return data.items || {};
};

export const deleteItem = (itemId: string) => {
  const existing = loadData();
  const items = existing.items || {};
  const images = existing.images || {};
  
  // Remove from items
  const { [itemId]: removedItem, ...remainingItems } = items;
  // Remove from images
  const { [itemId]: removedImage, ...remainingImages } = images;
  
  saveData({ 
    ...existing, 
    items: remainingItems,
    images: remainingImages 
  });
};

// Section order persistence helpers
export const saveSectionOrder = (menuId: string, sectionIds: string[]) => {
  const existing = loadData();
  const sectionOrders = existing.sectionOrders || {};
  saveData({ 
    ...existing, 
    sectionOrders: { 
      ...sectionOrders, 
      [menuId]: sectionIds 
    } 
  });
};

export const getSectionOrder = (menuId: string): string[] | undefined => {
  const data = loadData();
  return data.sectionOrders?.[menuId];
};

// Item order persistence helpers
export const saveItemOrder = (sectionId: string, itemIds: string[]) => {
  const existing = loadData();
  const itemOrders = existing.itemOrders || {};
  saveData({ 
    ...existing, 
    itemOrders: { 
      ...itemOrders, 
      [sectionId]: itemIds 
    } 
  });
};

export const getItemOrder = (sectionId: string): string[] | undefined => {
  const data = loadData();
  return data.itemOrders?.[sectionId];
};

// Helper functions to apply ordering to arrays
export const applySectionOrder = <T extends { id: string }>(sections: T[], menuId: string): T[] => {
  const order = getSectionOrder(menuId);
  if (!order) return sections;
  
  // Create a map for quick lookup
  const sectionMap = new Map(sections.map(section => [section.id, section]));
  
  // Return sections in saved order, adding any new sections at the end
  const orderedSections: T[] = [];
  for (const id of order) {
    const section = sectionMap.get(id);
    if (section) {
      orderedSections.push(section);
      sectionMap.delete(id);
    }
  }
  
  // Add any remaining sections that weren't in the saved order
  orderedSections.push(...Array.from(sectionMap.values()));
  
  return orderedSections;
};

export const applyItemOrder = <T extends { id: string }>(items: T[], sectionId: string): T[] => {
  const order = getItemOrder(sectionId);
  if (!order) return items;
  
  // Create a map for quick lookup
  const itemMap = new Map(items.map(item => [item.id, item]));
  
  // Return items in saved order, adding any new items at the end
  const orderedItems: T[] = [];
  for (const id of order) {
    const item = itemMap.get(id);
    if (item) {
      orderedItems.push(item);
      itemMap.delete(id);
    }
  }
  
  // Add any remaining items that weren't in the saved order
  orderedItems.push(...Array.from(itemMap.values()));
  
  return orderedItems;
};