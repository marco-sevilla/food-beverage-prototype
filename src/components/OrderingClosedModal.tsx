'use client';

import React from 'react';
import { colors, typography, spacing } from '@/lib/design-tokens';

interface OrderingClosedModalProps {
  isVisible: boolean;
  onReturn: () => void;
  closedMenuNames?: string[];
}

export const OrderingClosedModal: React.FC<OrderingClosedModalProps> = ({
  isVisible,
  onReturn,
  closedMenuNames = []
}) => {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-50 rounded-[44px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div 
        className="mx-6 overflow-hidden"
        style={{
          backgroundColor: colors.black8,
          borderRadius: '8px',
          boxShadow: '0px 12px 32px 0px rgba(0,0,0,0.12)',
          width: 'calc(100% - 48px)',
          maxWidth: '352px'
        }}
      >
        {/* Header */}
        <div style={{ backgroundColor: colors.white, padding: '24px 24px 0px 24px' }}>
          <h2 
            style={{
              fontFamily: typography.fontFamily.primary,
              fontWeight: 500,
              fontSize: typography.fontSize.subtitle,
              lineHeight: '28px',
              color: colors.black1,
              margin: 0
            }}
          >
            Ordering period closed
          </h2>
        </div>

        {/* Content */}
        <div style={{ backgroundColor: colors.white, padding: '4px 24px 12px 24px' }}>
          <p 
            style={{
              fontFamily: typography.fontFamily.primary,
              fontWeight: 400,
              fontSize: typography.fontSize.bodySm,
              lineHeight: typography.lineHeight.bodySm,
              color: colors.black1,
              margin: 0
            }}
          >
            {closedMenuNames.length > 0 ? (
              `We're sorry, but ordering for the ${closedMenuNames.join(' and ')} ${closedMenuNames.length === 1 ? 'menu is' : 'menus are'} now closed. Items from ${closedMenuNames.length === 1 ? 'this menu have' : 'these menus have'} been removed from your cart.`
            ) : (
              `We're sorry, but ordering is closed at the moment. You can place an order once the service period opens again.`
            )}
          </p>
        </div>

        {/* Footer */}
        <div style={{ backgroundColor: colors.white, padding: '16px 24px 24px 24px', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={onReturn}
            style={{
              backgroundColor: colors.black1,
              color: colors.white,
              padding: '0px 16px',
              height: '40px',
              borderRadius: '4px',
              border: 'none',
              fontFamily: typography.fontFamily.primary,
              fontWeight: 500,
              fontSize: typography.fontSize.bodySm,
              lineHeight: typography.lineHeight.bodySm,
              cursor: 'pointer'
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};