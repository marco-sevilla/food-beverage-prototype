'use client';

import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { AnimatedModal } from './AnimatedModal';

interface CreateItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateItem: (itemName: string) => void;
}

export const CreateItemModal: React.FC<CreateItemModalProps> = ({
  isOpen,
  onClose,
  onCreateItem,
}) => {
  const [itemName, setItemName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!itemName.trim()) {
      setError('Item name is required');
      return;
    }

    onCreateItem(itemName.trim());
    setItemName('');
    setError('');
    onClose();
  };

  const handleClose = () => {
    setItemName('');
    setError('');
    onClose();
  };

  return (
    <AnimatedModal isOpen={isOpen} onClose={handleClose}>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
        <h2 className="font-roboto text-subtitle font-semibold text-canary-black-1">
          Create new item
        </h2>
        <button
          onClick={handleClose}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <Icon path={mdiClose} size={1} color="#666666" />
        </button>
      </div>

      {/* Content */}
      <form onSubmit={handleSubmit} className="px-6 py-4">
        <div className="mb-4">
          <label className="block font-roboto text-body-sm font-medium text-canary-black-1 mb-2">
            Item name
          </label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => {
              setItemName(e.target.value);
              if (error) setError('');
            }}
            placeholder="Margherita Pizza, Caesar Salad, Chocolate Cake"
            className={`w-full h-12 px-4 border rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 ${
              error ? 'border-red-400' : 'border-neutral-200'
            }`}
            autoFocus
          />
          {error && (
            <p className="mt-1 font-roboto text-caption text-red-600">
              {error}
            </p>
          )}
          <p className="mt-2 font-roboto text-caption text-canary-black-4">
            This name will be used for both guest-facing and internal staff views. You can set a separate internal name once you create the item.
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={handleClose}
            className="flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90"
          >
            Create item
          </button>
        </div>
      </form>
    </AnimatedModal>
  );
};