'use client';

import React from 'react';
import { colors, typography } from '@/lib/design-tokens';

interface MenuUnavailableMessageProps {
  menuName: string;
  timeInfo: string;
  status: 'available-later-today' | 'not-available-today';
}

export const MenuUnavailableMessage: React.FC<MenuUnavailableMessageProps> = ({
  menuName,
  timeInfo,
  status
}) => {
  // Generate dynamic message based on status
  const getMessage = () => {
    if (status === 'available-later-today') {
      // Extract time from timeInfo like "Available at 11:00 AM"
      const timeMatch = timeInfo.match(/Available at (.+)/);
      const time = timeMatch ? timeMatch[1] : '11:00 AM';
      return `Ordering for this menu isn't available right now. It opens at ${time}.`;
    } else {
      // not-available-today
      return `Ordering for this menu isn't available today.`;
    }
  };

  return (
    <div 
      style={{
        border: `1px solid ${colors.neutral200}`,
        borderRadius: '8px',
        padding: '12px',
        backgroundColor: colors.white,
        gap: '8px'
      }}
      className="flex flex-col items-start justify-center w-full"
    >
      <div className="flex items-start gap-2 w-full">
        <div className="flex items-center gap-3 flex-1">
          {/* Clock Icon */}
          <div className="w-5 h-5 shrink-0 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8.5" stroke="#666666" strokeWidth="1"/>
              <path d="M10 6v4l3 2" stroke="#666666" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* Message Text */}
          <div 
            style={{
              fontFamily: typography.fontFamily.primary,
              fontSize: '16px',
              fontWeight: typography.fontWeight.regular,
              lineHeight: '24px',
              color: colors.black1
            }}
            className="flex-1"
          >
            {getMessage()}
          </div>
        </div>
      </div>
    </div>
  );
};