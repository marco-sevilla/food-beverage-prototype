'use client';

import React, { useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

interface ChangelogModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  linearLinks?: Array<{
    url: string;
    title: string;
  }>;
}

export const ChangelogModal: React.FC<ChangelogModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  linearLinks = []
}) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4 z-[9999] pointer-events-none">
        <div 
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col pointer-events-auto transform transition-all duration-300 scale-100 opacity-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-8 py-6 border-b border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {title}
                </h2>
                {linearLinks && linearLinks.length > 0 && (
                  <div className="flex flex-col gap-1">
                    {linearLinks.map((link, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Linear:</span>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
                        >
                          {link.title}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Icon path={mdiClose} size={1} color="#6B7280" />
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 overflow-y-auto px-8 py-6">
            <div className="prose prose-gray max-w-none">
              {content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};