'use client';

import React, { useState } from 'react';
import { MenuManagementPage } from './MenuManagementPage';
import { OrderManagementPage } from './OrderManagementPage';
import { runMenuParserTest } from '../utils/menuParser';

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
  
  console.log('FoodBeverageApp rendered, currentPage:', currentPage);

  const handleTestMenuParser = () => {
    try {
      runMenuParserTest();
    } catch (error) {
      console.error('Test failed:', error);
    }
  };

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
      <div>
        {/* Temporary test button */}
        <div className="p-4 bg-yellow-100 border-b">
          <button 
            onClick={handleTestMenuParser}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            🧪 Test Menu Parser (Check Console)
          </button>
          <span className="ml-3 text-sm text-gray-600">Temporary test button - will be removed</span>
        </div>
        <OrderManagementPage 
          onManageMenus={handleManageMenus}
        />
      </div>
    );
  }

  if (currentPage === 'menu-management') {
    return (
      <div>
        {/* Temporary test button */}
        <div className="p-4 bg-yellow-100 border-b">
          <button 
            onClick={handleTestMenuParser}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            🧪 Test Menu Parser (Check Console)
          </button>
          <span className="ml-3 text-sm text-gray-600">Temporary test button - will be removed</span>
        </div>
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
      </div>
    );
  }

  return null;
};