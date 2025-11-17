'use client';

import React from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { AnimatedModal } from './AnimatedModal';

interface DeleteItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDeleteItem: () => void;
  itemName: string;
}

export const DeleteItemModal: React.FC<DeleteItemModalProps> = ({
  isOpen,
  onClose,
  onDeleteItem,
  itemName,
}) => {
  const handleDelete = () => {
    onDeleteItem();
    onClose();
  };

  return (
    <AnimatedModal isOpen={isOpen} onClose={onClose}>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
        <h2 className="font-roboto text-subtitle font-semibold text-canary-black-1">
          Delete item
        </h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <Icon path={mdiClose} size={1} color="#666666" />
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-4">
        <p className="font-roboto text-body-sm font-normal text-canary-black-1 leading-[22px]">
          Are you sure you want to delete {itemName}? This action cannot be undone.
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-2 px-6 py-4 pt-4">
        <button
          onClick={onClose}
          className="flex items-center justify-center h-10 px-4 border border-canary-blue-1 text-canary-blue-1 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          className="flex items-center justify-center h-10 px-4 bg-red-600 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90"
          style={{ backgroundColor: '#E40046' }}
        >
          Delete item
        </button>
      </div>
    </AnimatedModal>
  );
};