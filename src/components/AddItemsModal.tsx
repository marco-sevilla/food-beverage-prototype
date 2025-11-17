'use client';

import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiClose, mdiCheck } from '@mdi/js';
import { formatMenuDisplay, type FoodItem } from '@/data/foodItems';
import { AnimatedModal } from './AnimatedModal';


// Button component
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, disabled = false }) => {
  if (variant === 'secondary') {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-blue-1 border border-canary-blue-1 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};

// Checkbox component
interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, disabled = false }) => (
  <button
    onClick={() => !disabled && onChange(!checked)}
    disabled={disabled}
    className={`flex items-center justify-center w-6 h-6 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${
      checked 
        ? 'bg-canary-blue-1 border-canary-blue-1' 
        : disabled 
          ? 'border-gray-300' 
          : 'border-gray-400'
    } border-2 rounded`}
  >
    {checked && (
      <Icon 
        path={mdiCheck} 
        size={0.75} 
        color="white"
      />
    )}
  </button>
);

// Item Row component
interface ItemRowProps {
  item: FoodItem;
  isSelected: boolean;
  isDisabled: boolean;
  onSelectionChange: (itemId: string, selected: boolean) => void;
  isLast?: boolean;
}

const ItemRow: React.FC<ItemRowProps> = ({ 
  item, 
  isSelected, 
  isDisabled, 
  onSelectionChange,
  isLast = false 
}) => (
  <div className={`flex items-center justify-between py-4 px-4 bg-white ${
    isLast ? '' : 'border-b border-neutral-200'
  } ${isDisabled ? 'opacity-50' : ''}`}>
    {/* Item Column */}
    <div className="flex items-center gap-4 w-36">
      {item.image ? (
        <img 
          src={item.image} 
          alt={item.name}
          className="w-8 h-8 rounded object-cover"
        />
      ) : (
        <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-xs">?</span>
        </div>
      )}
      <span className="font-roboto text-body-sm font-medium text-canary-black-1 truncate">
        {item.name}
      </span>
    </div>
    
    {/* Menus Column */}
    <div className="w-36 font-roboto text-body-sm font-normal text-canary-black-1 truncate">
      {formatMenuDisplay(item.menus)}
    </div>
    
    {/* Price Column */}
    <div className="w-16 font-roboto text-body-sm font-normal text-canary-black-1">
      ${item.price.toFixed(2)}
    </div>
    
    {/* Checkbox Column */}
    <div className="w-6 flex justify-center">
      <Checkbox 
        checked={isSelected}
        onChange={(checked) => onSelectionChange(item.id, checked)}
        disabled={isDisabled}
      />
    </div>
  </div>
);

// Main Modal component
interface AddItemsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddItems: (selectedItems: FoodItem[]) => void;
  onGoToItemLibrary?: () => void;
  availableItems: FoodItem[];
  existingItemIds: string[]; // Items already in the section
}

export const AddItemsModal: React.FC<AddItemsModalProps> = ({
  isOpen,
  onClose,
  onAddItems,
  onGoToItemLibrary,
  availableItems,
  existingItemIds
}) => {
  const [selectedItemIds, setSelectedItemIds] = useState<Set<string>>(new Set());

  const handleSelectionChange = (itemId: string, selected: boolean) => {
    const newSelection = new Set(selectedItemIds);
    if (selected) {
      newSelection.add(itemId);
    } else {
      newSelection.delete(itemId);
    }
    setSelectedItemIds(newSelection);
  };

  const handleAddItems = () => {
    const selectedItems = availableItems.filter(item => selectedItemIds.has(item.id));
    onAddItems(selectedItems);
    setSelectedItemIds(new Set()); // Reset selection
    onClose();
  };

  const handleCancel = () => {
    setSelectedItemIds(new Set()); // Reset selection
    onClose();
  };

  const selectedCount = selectedItemIds.size;
  const addButtonText = selectedCount === 0 
    ? 'Add items' 
    : `Add ${selectedCount} item${selectedCount > 1 ? 's' : ''}`;

  return (
    <AnimatedModal 
      isOpen={isOpen} 
      onClose={handleCancel}
      maxWidth="max-w-2xl"
      className="max-h-[90vh] flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between py-6 px-6 border-b border-neutral-200">
        <h2 className="font-roboto text-subtitle font-medium text-canary-black-1">
          Add items
        </h2>
        <button
          onClick={handleCancel}
          className="flex items-center justify-center p-2.5 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50"
        >
          <Icon path={mdiClose} size={0.67} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden px-6 pt-6 pb-4">
        {/* Column Headers */}
        <div className="flex items-center justify-between px-4 pb-1 font-roboto text-caption-sm font-medium text-canary-black-3 uppercase">
          <div className="w-36">Item</div>
          <div className="w-36">Menus</div>
          <div className="w-16">Price</div>
          <div className="w-6"></div>
        </div>

        {/* Items List */}
        <div className="border border-neutral-200 rounded-lg overflow-hidden">
          <div className="max-h-[600px] overflow-y-auto">
            {availableItems.map((item, index) => {
              const isDisabled = existingItemIds.includes(item.id);
              const isSelected = selectedItemIds.has(item.id);
              const isLast = index === availableItems.length - 1;

              return (
                <ItemRow
                  key={item.id}
                  item={item}
                  isSelected={isSelected}
                  isDisabled={isDisabled}
                  onSelectionChange={handleSelectionChange}
                  isLast={isLast}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 py-6 border-t border-neutral-200">
        <Button variant="secondary" onClick={onGoToItemLibrary}>
          Go to Item Library
        </Button>
        
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleAddItems} disabled={selectedCount === 0}>
            {addButtonText}
          </Button>
        </div>
      </div>
    </AnimatedModal>
  );
};