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
  cart?: Record<string, number>;
  images?: Record<string, string>; // itemId -> dataURL mapping
  items?: Record<string, any>; // itemId -> item data mapping
  menuAvailability?: Record<string, DayAvailability[]>; // menuName -> availability settings
  prepTimeMinutes?: number; // average order prep time in minutes
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