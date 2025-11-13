'use client';

import React, { useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiCheck, mdiAlert, mdiClose } from '@mdi/js';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ 
  message, 
  type, 
  isVisible, 
  onClose, 
  duration = 3000 
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const typeStyles = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-600',
      text: 'text-green-800',
      iconPath: mdiCheck
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: 'text-red-600',
      text: 'text-red-800',
      iconPath: mdiAlert
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: 'text-yellow-600',
      text: 'text-yellow-800',
      iconPath: mdiAlert
    }
  };

  const style = typeStyles[type];

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
      <div className={`
        flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg max-w-md
        ${style.bg} ${style.border}
      `}>
        <Icon 
          path={style.iconPath} 
          size={1} 
          className={style.icon}
        />
        <span className={`font-roboto text-body-sm font-medium ${style.text} flex-1`}>
          {message}
        </span>
        <button
          onClick={onClose}
          className={`p-1 hover:bg-black/5 rounded ${style.icon}`}
        >
          <Icon path={mdiClose} size={0.8} />
        </button>
      </div>
    </div>
  );
};