'use client';

import React, { useState } from 'react';
import CanaryModal from './temp-components/CanaryModal';
import CanaryButton from './temp-components/CanaryButton';
import { ButtonType, ButtonSize } from './temp-components/button-types';

interface CreateMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateMenu: (menuName: string) => void;
}

export const CreateMenuModal: React.FC<CreateMenuModalProps> = ({
  isOpen,
  onClose,
  onCreateMenu,
}) => {
  const [menuName, setMenuName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!menuName.trim()) {
      setError('Menu name is required');
      return;
    }

    onCreateMenu(menuName.trim());
    setMenuName('');
    setError('');
    onClose();
  };

  const handleClose = () => {
    setMenuName('');
    setError('');
    onClose();
  };

  return (
    <CanaryModal
      isOpen={isOpen}
      onClose={handleClose}
      title="Create new menu"
      size="medium"
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-roboto text-body-sm font-medium text-canary-black-1 mb-2">
            Menu name
          </label>
          <input
            type="text"
            value={menuName}
            onChange={(e) => {
              setMenuName(e.target.value);
              if (error) setError('');
            }}
            placeholder="Breakfast menu, Lunch menu, Happy hour"
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
            This name will be used for both guest-facing and internal staff views. You can set a separate internal name once you create the menu.
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4">
          <CanaryButton
            type={ButtonType.OUTLINED}
            onClick={handleClose}
          >
            Cancel
          </CanaryButton>
          <CanaryButton
            type={ButtonType.PRIMARY}
            nativeType="submit"
          >
            Create menu
          </CanaryButton>
        </div>
      </form>
    </CanaryModal>
  );
};