import React, { useState, useRef, useEffect } from 'react';
import { colors } from './design-tokens';

interface DropdownItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  variant?: 'default' | 'success' | 'danger';
}

interface CanaryDropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: 'left' | 'right';
  className?: string;
}

export default function CanaryDropdown({
  trigger,
  items,
  align = 'right',
  className = '',
}: CanaryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const getItemTextColor = (variant?: string) => {
    switch (variant) {
      case 'success':
        return colors.success;
      case 'danger':
        return colors.danger;
      default:
        return colors.colorBlack1;
    }
  };

  return (
    <div className={`relative ${className || 'inline-block'}`} ref={dropdownRef}>
      {/* Trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute top-full mt-1 bg-white rounded overflow-hidden z-50 ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
          style={{
            width: '100%',
            minWidth: '200px',
            borderRadius: '4px',
            boxShadow: '0px 8px 24px 0px rgba(0,0,0,0.16)'
          }}
        >
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              className="w-full px-2 py-2 text-left flex items-center gap-2.5 hover:bg-gray-50 transition-colors font-roboto text-[14px] font-normal bg-white"
              style={{ 
                color: getItemTextColor(item.variant),
                lineHeight: '22px'
              }}
            >
              {item.icon && (
                <span className="w-4 h-4 flex items-center justify-center">
                  {item.icon}
                </span>
              )}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}