'use client';

import React, { useEffect } from 'react';
import Icon from '@mdi/react';
import { 
  mdiClose, 
  mdiCalendar, 
  mdiClock, 
  mdiBed, 
  mdiEmail 
} from '@mdi/js';
import CanaryButton from './temp-components/CanaryButton';
import { ButtonType, ButtonSize, ButtonColor } from './temp-components/button-types';
import { colors, typography } from './temp-components/design-tokens';
import CanaryTag, { TagColor, TagVariant, TagSize } from './temp-components/CanaryTag';

// Types for order details
interface OrderItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  specialRequests?: string;
}

interface OrderDetails {
  id: string;
  orderNumber: string;
  guestName: string;
  guestEmail: string;
  roomNumber: string;
  orderDate: string;
  orderTime: string;
  timeElapsed: string;
  items: OrderItem[];
  subtotal: number;
  totalItems: number;
  transactionId: string;
  status: string;
}

interface OrderDetailsSideSheetProps {
  isOpen: boolean;
  order?: OrderDetails;
  onClose: () => void;
  onApprove?: (order: OrderDetails) => void;
  onDeny?: (order: OrderDetails) => void;
  onViewEmail?: (order: OrderDetails, prepTimeMinutes?: number) => void;
  onViewDenialEmail?: (order: OrderDetails, reason: string, comment?: string) => void;
  denialInfo?: { reason: string; comment?: string };
  prepTimeMinutes?: number;
}

export const OrderDetailsSideSheet: React.FC<OrderDetailsSideSheetProps> = ({
  isOpen,
  order,
  onClose,
  onApprove,
  onDeny,
  onViewEmail,
  onViewDenialEmail,
  denialInfo,
  prepTimeMinutes = 30
}) => {
  const [isAccepted, setIsAccepted] = React.useState(false);
  const [isDenied, setIsDenied] = React.useState(false);
  const [localDenialInfo, setLocalDenialInfo] = React.useState<{ reason: string; comment?: string } | null>(null);
  
  // Reset states when order changes
  React.useEffect(() => {
    setIsAccepted(false);
    setIsDenied(false);
    setLocalDenialInfo(null);
  }, [order?.id]);

  // Calculate time threshold based on prep time setting
  const getTimeThreshold = (timeElapsed: number): TagColor => {
    const healthyThreshold = prepTimeMinutes * 0.5; // 0-50% = Green (Healthy)
    const warningThreshold = prepTimeMinutes * 0.8; // 50-80% = Yellow (Needs attention)
    // 80%+ = Red (Critical)
    
    if (timeElapsed <= healthyThreshold) {
      return TagColor.SUCCESS; // Green
    } else if (timeElapsed <= warningThreshold) {
      return TagColor.WARNING; // Yellow
    } else {
      return TagColor.ERROR; // Red
    }
  };

  // Extract time elapsed minutes from string (e.g., "45 min" -> 45)
  const getTimeElapsedMinutes = (timeElapsedString: string): number => {
    const match = timeElapsedString.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };
  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when side sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Invisible backdrop for closing */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ top: '48px' }}
          onClick={onClose}
        />
      )}

      {/* Side Sheet - Always rendered for smooth transitions */}
      <div
        className="fixed right-0 bg-white shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)] z-50"
        style={{ 
          width: '480px', 
          maxWidth: '90vw',
          top: '48px',
          height: 'calc(100vh - 48px)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          visibility: order ? 'visible' : 'hidden'
        }}
      >
        {order && (
          <div className="h-full flex flex-col p-6 gap-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="font-roboto text-[18px] font-medium leading-[1.5]" style={{ color: colors.colorBlack1 }}>
                  {order.guestName}
              </h2>
              {(() => {
                const timeElapsedMinutes = getTimeElapsedMinutes(order.timeElapsed);
                const tagColor = getTimeThreshold(timeElapsedMinutes);
                return (
                  <CanaryTag 
                    label={`${order.timeElapsed} ago`}
                    color={tagColor}
                    variant={TagVariant.OUTLINE}
                    size={TagSize.COMPACT}
                    uppercase={true}
                  />
                );
              })()}
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center p-1.5 rounded hover:bg-gray-100 transition-colors"
            >
              <Icon path={mdiClose} size="20px" color={colors.colorBlack1} />
            </button>
          </div>

          {/* Event Info */}
          <div className="flex flex-col gap-2">
            {/* Event Date */}
            <div className="flex items-center gap-3">
              <Icon path={mdiCalendar} size="16px" color={colors.colorBlack3} />
              <span className="font-roboto text-[14px] font-normal leading-[22px]" style={{ color: colors.colorBlack1 }}>
                {order.orderDate}
              </span>
            </div>

            {/* Event Time */}
            <div className="flex items-center gap-3">
              <Icon path={mdiClock} size="16px" color={colors.colorBlack3} />
              <span className="font-roboto text-[14px] font-normal leading-[22px]" style={{ color: colors.colorBlack1 }}>
                {order.orderTime}
              </span>
            </div>

            {/* Event Location */}
            <div className="flex items-center gap-3">
              <Icon path={mdiBed} size="16px" color={colors.colorBlack3} />
              <span className="font-roboto text-[14px] font-normal leading-[22px]" style={{ color: colors.colorBlack1 }}>
                {order.roomNumber}
              </span>
            </div>

            {/* User Email */}
            <div className="flex items-center gap-3">
              <Icon path={mdiEmail} size="16px" color={colors.colorBlack3} />
              <span className="font-roboto text-[14px] font-normal leading-[22px]" style={{ color: colors.colorBlack1 }}>
                {order.guestEmail}
              </span>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col gap-4">
            <span className="font-roboto text-[14px] font-normal leading-[22px]" style={{ color: colors.colorBlack1 }}>
              Details
            </span>
            
            {/* Details List - hugs content */}
            <div className="border rounded-lg overflow-hidden" style={{ borderColor: colors.colorBlack6 }}>
              <div className="flex flex-col">
                {order.items.map((item, index) => (
                  <div 
                    key={`${item.id}-${item.specialRequests || ''}`} 
                    className={`flex gap-4 items-center p-3 ${
                      index < order.items.length - 1 ? 'border-b' : ''
                    }`}
                    style={{ borderBottomColor: index < order.items.length - 1 ? 'rgba(0,0,0,0.12)' : 'transparent' }}
                  >
                    {/* Item Image */}
                    <div className="w-16 h-16 rounded-[5.12px] overflow-hidden shrink-0">
                      {item.image && item.image !== '/api/placeholder/64/64' ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: colors.colorBlack6 }}>
                          {/* Fork and knife icon SVG */}
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 9H9V2H7V9H5V2H3V9C3 10.1 3.9 11 5 11H7V22H9V11H11V9Z" fill={colors.colorBlack4}/>
                            <path d="M21 3H19V9C19 10.1 18.1 11 17 11H15V22H17V13H19C20.1 13 21 12.1 21 11V3Z" fill={colors.colorBlack4}/>
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-roboto text-[14px] font-medium leading-[22px] truncate" style={{ color: colors.colorBlack1 }}>
                            {item.quantity}x {item.name}
                          </h4>
                        </div>
                      </div>
                      <div className="font-roboto text-[14px] font-normal leading-[22px] mt-0.5" style={{ color: colors.colorBlack1 }}>
                        ${item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="font-roboto text-[14px] font-normal" style={{ color: colors.colorBlack3 }}>
                Subtotal • {order.totalItems} items
              </span>
              <span className="font-roboto text-[14px] font-bold tracking-[0.28px]" style={{ color: colors.colorBlack1 }}>
                ${order.subtotal}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="font-roboto text-[14px] font-normal" style={{ color: colors.colorBlack3 }}>
                Transaction ID
              </span>
              <span className="font-roboto text-[14px] font-normal" style={{ color: colors.colorBlack1 }}>
                {order.transactionId}
              </span>
            </div>
          </div>

          {/* Action Buttons or Confirmation States */}
          {(isAccepted || order.status === 'preparing' || order.status === 'delivered') ? (
            // Contextual container for accepted order
            <div className="flex items-center justify-between">
              <div 
                className="border border-solid rounded flex flex-col gap-2 items-start justify-center p-3 relative flex-1"
                style={{ borderColor: colors.colorBlack5 }}
              >
                <div className="flex flex-col items-start relative w-full">
                  <p 
                    className="font-roboto text-[14px] font-normal leading-[1.5] relative w-full"
                    style={{ color: colors.colorLightGreen1 }}
                  >
                    Theresa Webb approved this request
                  </p>
                  <p 
                    className="font-roboto text-[12px] font-normal leading-[18px] relative text-nowrap whitespace-pre"
                    style={{ color: colors.colorBlack3 }}
                  >
                    January 15, 2025 at 2:34 PM
                  </p>
                </div>
              </div>
              <button 
                className="ml-3 font-roboto text-[14px] font-normal underline"
                style={{ color: colors.colorBlueDark1 }}
                onClick={() => {
                  if (onViewEmail && order) {
                    onViewEmail(order, prepTimeMinutes);
                  }
                }}
              >
                View email
              </button>
            </div>
          ) : (isDenied || order.status === 'cancelled') ? (
            // Contextual container for denied order
            <div className="flex items-center justify-between">
              <div 
                className="border border-solid rounded flex flex-col gap-2 items-start justify-center p-3 relative flex-1"
                style={{ borderColor: colors.colorBlack5 }}
              >
                <div className="flex flex-col items-start relative w-full">
                  <p 
                    className="font-roboto text-[14px] font-normal leading-[1.5] relative w-full"
                    style={{ color: colors.colorRed1 }}
                  >
                    Theresa Webb denied this request
                  </p>
                  <p 
                    className="font-roboto text-[12px] font-normal leading-[18px] relative text-nowrap whitespace-pre"
                    style={{ color: colors.colorBlack3 }}
                  >
                    January 15, 2025 at 2:34 PM
                  </p>
                </div>
              </div>
              <button 
                className="ml-3 font-roboto text-[14px] font-normal underline"
                style={{ color: colors.colorBlueDark1 }}
                onClick={() => {
                  if (onViewDenialEmail && order) {
                    // Use the passed denial info or fallback
                    const reason = denialInfo?.reason || localDenialInfo?.reason || 'Items unavailable';
                    const comment = denialInfo?.comment || localDenialInfo?.comment;
                    onViewDenialEmail(order, reason, comment);
                  }
                }}
              >
                View email
              </button>
            </div>
          ) : (
            // Original action buttons (only for pending orders)
            <div className="flex gap-2">
              {/* Custom Approve Button */}
              <button
                onClick={() => {
                  setIsAccepted(true);
                  onApprove?.(order);
                }}
                className="flex-1 h-10 px-4 rounded font-roboto text-[14px] font-medium text-center transition-all duration-200 outline-none border-none cursor-pointer"
                style={{
                  backgroundColor: 'rgba(40, 88, 196, 0.1)',
                  color: colors.colorBlueDark1
                }}
              >
                Approve
              </button>
              {/* Custom Deny Button */}
              <button
                onClick={() => {
                  setIsDenied(true);
                  onDeny?.(order);
                }}
                className="flex-1 h-10 px-4 rounded font-roboto text-[14px] font-medium text-center transition-all duration-200 outline-none border-none cursor-pointer"
                style={{
                  backgroundColor: 'rgba(228, 0, 70, 0.1)',
                  color: colors.colorRed1
                }}
              >
                Deny
              </button>
            </div>
          )}
          </div>
        )}
      </div>
    </>
  );
};