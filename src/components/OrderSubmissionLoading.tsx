'use client';

import React from 'react';
import Icon from '@mdi/react';
import { mdiClose, mdiLoading } from '@mdi/js';

interface OrderSubmissionLoadingProps {
  onClose?: () => void;
}

export const OrderSubmissionLoading: React.FC<OrderSubmissionLoadingProps> = ({ 
  onClose 
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* Back to Menu Management Button */}
      <div className="fixed top-8 left-8 z-50">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded font-roboto text-sm font-medium hover:bg-gray-50 shadow-md"
        >
          <Icon path={mdiClose} size={0.8} />
          Close
        </button>
      </div>

      {/* Mobile Frame */}
      <div 
        className="relative bg-white overflow-hidden shadow-xl flex flex-col items-center justify-center"
        style={{
          width: '430px',
          height: '932px',
          borderRadius: '44px',
          boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.16)'
        }}
      >
        {/* Close Button Overlay */}
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 bg-white rounded shadow-md hover:bg-gray-50 transition-colors z-10"
        >
          <Icon path={mdiClose} size={1} color="#000" />
        </button>

        {/* Loading Content */}
        <div className="flex flex-col items-center justify-center px-4 py-6">
          {/* Spinner */}
          <div className="mb-6">
            <Icon 
              path={mdiLoading} 
              size={2.5} 
              color="#000" 
              className="animate-spin" 
            />
          </div>
          
          {/* Loading Text */}
          <h1 className="font-roboto text-[28px] font-medium text-black leading-[42px] text-center">
            Submitting order...
          </h1>
        </div>
      </div>
    </div>
  );
};