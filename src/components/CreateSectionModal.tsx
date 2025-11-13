'use client';

import React, { useState } from 'react';
import { colors, typography } from '@/lib/design-tokens';

interface CreateSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateSection: (sectionName: string) => void;
}

export const CreateSectionModal: React.FC<CreateSectionModalProps> = ({
  isOpen,
  onClose,
  onCreateSection,
}) => {
  const [sectionName, setSectionName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!sectionName.trim()) {
      setError('Menu section name is required');
      return;
    }

    onCreateSection(sectionName.trim());
    setSectionName('');
    setError('');
    onClose();
  };

  const handleClose = () => {
    setSectionName('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div 
        className="bg-white rounded-lg w-full max-w-md flex flex-col max-h-[90vh]"
        style={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between px-6 py-4 border-b shrink-0"
          style={{ borderColor: colors.black6 }}
        >
          <h2 
            className="text-[18px] font-semibold"
            style={{ color: colors.black1 }}
          >
            Create new menu section
          </h2>
          <button
            onClick={handleClose}
            className="p-1 rounded hover:bg-gray-100"
            style={{ color: colors.black4 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="px-6 py-4 overflow-y-auto flex-1">
          <div className="mb-4">
            <label 
              className="block text-[14px] font-medium mb-2"
              style={{ color: colors.black1 }}
            >
              Menu section name*
            </label>
            <input
              type="text"
              value={sectionName}
              onChange={(e) => {
                setSectionName(e.target.value);
                if (error) setError('');
              }}
              placeholder="Mains"
              className={`w-full h-12 px-4 rounded text-[14px] focus:outline-none focus:ring-2 ${
                error ? 'border-2 border-red-400' : 'border-2'
              }`}
              style={{
                color: colors.black1,
                borderColor: error ? '#E40046' : colors.black6
              }}
              autoFocus
            />
            {error && (
              <p 
                className="mt-1 text-[12px]"
                style={{ color: '#E40046' }}
              >
                {error}
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex items-center justify-center h-10 px-4 rounded text-[14px] font-medium cursor-pointer border hover:bg-gray-50 transition-colors"
              style={{ 
                color: colors.black1,
                borderColor: colors.black6,
                backgroundColor: 'transparent'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center justify-center h-10 px-4 rounded text-[14px] font-medium cursor-pointer border-0 text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: colors.blueDark1 }}
            >
              Create section
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};