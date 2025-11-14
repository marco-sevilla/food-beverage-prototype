'use client';

import React, { useState } from 'react';
import { MenuManagementPage } from './MenuManagementPage';
import { OrderManagementPage } from './OrderManagementPage';

// Types for the app state
type AppPage = 'menu-management' | 'order-management';

// Sample menu data 
const SAMPLE_MENUS = [
  { name: 'Breakfast Menu', entryPoint: 'Breakfast, Room Service', isNew: true },
  { name: 'Lunch Menu', entryPoint: 'Lunch, Room Service' },
  { name: 'Dinner Menu', entryPoint: 'Dinner, Room Service' },
  { name: 'Bar Menu', entryPoint: 'Bar, Room Service' },
];

export const FoodBeverageApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<AppPage>('order-management');

  const handleBackToOrders = () => {
    setCurrentPage('order-management');
  };

  const handleManageMenus = () => {
    setCurrentPage('menu-management');
  };

  const handleGoToOrdering = () => {
    console.log('Navigate to ordering flow');
  };

  // Menu management handlers
  const handleEditMenu = (menuName: string, entryPoint: string) => {
    console.log('Edit menu:', { menuName, entryPoint });
  };

  const handleCreateMenu = (menuName: string) => {
    console.log('Create menu:', menuName);
  };

  const handleDeleteMenu = (menuName: string) => {
    console.log('Delete menu:', menuName);
  };

  const handlePreviewMenu = (menuName: string) => {
    console.log('Preview menu:', menuName);
  };

  const handleEditItem = (itemId: string) => {
    console.log('Edit item:', itemId);
  };

  if (currentPage === 'order-management') {
    return (
      <OrderManagementPage 
        onManageMenus={handleManageMenus}
      />
    );
  }

  if (currentPage === 'menu-management') {
    return (
      <MenuManagementPage
        menus={SAMPLE_MENUS}
        onEditMenu={handleEditMenu}
        onCreateMenu={handleCreateMenu}
        onDeleteMenu={handleDeleteMenu}
        onPreviewMenu={handlePreviewMenu}
        onEditItem={handleEditItem}
        onGoToOrdering={handleGoToOrdering}
        onBackToOrders={handleBackToOrders}
      />
    );
  }

  return null;
};