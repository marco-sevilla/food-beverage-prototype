'use client';

import React, { useState, useEffect } from 'react';

interface AnimatedModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
  className?: string;
}

export const AnimatedModal: React.FC<AnimatedModalProps> = ({
  isOpen,
  onClose,
  children,
  maxWidth = 'max-w-md',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Modal is opening
      setIsVisible(true);
      setTimeout(() => {
        setIsAnimating(true);
      }, 10); // Small delay to trigger animation
    } else {
      // Modal is closing - twice as fast
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 150); // Half the original time for snappier exit
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
      style={{
        backgroundColor: isAnimating ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: isAnimating ? 'blur(4px)' : 'blur(0px)',
        transition: isAnimating 
          ? 'background-color 300ms ease-out, backdrop-filter 300ms ease-out'
          : 'background-color 150ms ease-out, backdrop-filter 150ms ease-out'
      }}
    >
      <div
        className={`bg-white rounded-lg shadow-xl w-full mx-4 ${maxWidth} ${className}`}
        style={{
          opacity: isAnimating ? 1 : 0.5,
          transform: isAnimating ? 'scale(1)' : 'scale(0.95)',
          filter: isAnimating ? 'blur(0px)' : 'blur(2px)',
          transition: isAnimating
            ? 'opacity 300ms ease-out, transform 300ms ease-out, filter 300ms ease-out'
            : 'opacity 150ms ease-out, transform 150ms ease-out, filter 150ms ease-out'
        }}
      >
        {children}
      </div>
    </div>
  );
};