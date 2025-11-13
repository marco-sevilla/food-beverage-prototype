'use client';

import React from 'react';
import Icon from '@mdi/react';
import { mdiFoodForkDrink } from '@mdi/js';

interface MenuItemPlaceholderProps {
  className?: string;
}

export const MenuItemPlaceholder: React.FC<MenuItemPlaceholderProps> = ({ 
  className = "w-16 h-16 rounded-lg" 
}) => {
  return (
    <div 
      className={`bg-neutral-200 flex items-center justify-center shrink-0 ${className}`}
    >
      <Icon 
        path={mdiFoodForkDrink} 
        size={1.5} 
        color="#666666" 
      />
    </div>
  );
};