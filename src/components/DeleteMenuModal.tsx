'use client';

import React from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

interface DeleteMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDeleteMenu: () => void;
  menuName: string;
}

export const DeleteMenuModal: React.FC<DeleteMenuModalProps> = ({
  isOpen,
  onClose,
  onDeleteMenu,
  menuName,
}) => {
  const handleDelete = () => {
    onDeleteMenu();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
          <h2 className="font-roboto text-subtitle font-semibold text-canary-black-1">
            Delete menu
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
          <p className="font-roboto text-body-sm text-canary-black-1">
            Are you sure you want to delete {menuName}? This action cannot be undone.
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4">
          <button
            onClick={onClose}
            className="flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center justify-center gap-2 h-10 px-4 bg-canary-red-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90"
          >
            Delete menu
          </button>
        </div>
      </div>
    </div>
  );
};