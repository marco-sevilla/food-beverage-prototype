'use client';

import React, { useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiClose } from '@mdi/js';
import { colors } from './temp-components/design-tokens';

// Image constants - using local assets
const hotelLogoImage = "/statler logo.png";
const hotelInteriorImage = "/Screenshot 2025-11-18 at 7.50.26 AM.png";

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

interface DenialEmailPreviewProps {
  order: OrderDetails;
  denialReason: string;
  denialComment?: string;
  onClose: () => void;
}

// Denial reason to email content mapping based on Figma
const getDenialEmailContent = (reason: string, comment?: string) => {
  const reasonKey = reason.toLowerCase();
  
  if (reasonKey.includes('items unavailable') || reasonKey.includes('unavailable')) {
    return {
      title: "Your in-room dining order could not be completed",
      message: "We're sorry, one or more items in your order are currently unavailable. Please contact the hotel staff if you have any questions."
    };
  }
  
  if (reasonKey.includes('duplicate') || reasonKey.includes('already received')) {
    return {
      title: "Your in-room dining order could not be completed",
      message: "It looks like we received this order more than once, so the duplicate request has been canceled. Your original order is still being processed. If this wasn't intentional, please contact the hotel staff."
    };
  }
  
  if (reasonKey.includes('guest requested') || reasonKey.includes('cancel')) {
    return {
      title: "Your in-room dining order has been cancelled",
      message: "Your order has been canceled as requested. If you'd like to place a new order, you may do so at any time."
    };
  }
  
  if (reasonKey.includes('invalid') || reasonKey.includes('test')) {
    return {
      title: "Your in-room dining order could not be completed",
      message: "This order could not be completed because it appears to be a test or an invalid request. If this was unintentional, please contact the hotel staff for assistance."
    };
  }
  
  if (reasonKey.includes('other') || comment) {
    return {
      title: "Your in-room dining order could not be completed",
      message: `We're sorry, your order could not be completed for the following reason:

${comment || 'Please contact the hotel staff for more information.'}

If you have any questions or would like to place another order, please contact the hotel staff.`
    };
  }
  
  // Default fallback
  return {
    title: "Your in-room dining order could not be completed",
    message: "We're sorry, your order could not be completed. Please contact the hotel staff if you have any questions."
  };
};

export const DenialEmailPreview: React.FC<DenialEmailPreviewProps> = ({
  order,
  denialReason,
  denialComment,
  onClose
}) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const emailContent = getDenialEmailContent(denialReason, denialComment);

  return (
    <div className="fixed inset-0 z-50 bg-gray-100">
      {/* Faux Email Client Header */}
      <div className="bg-white border-b shadow-sm" style={{ borderBottomColor: colors.colorBlack6 }}>
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded hover:bg-gray-100 transition-colors"
              style={{ color: colors.colorBlack1 }}
            >
              <Icon path={mdiArrowLeft} size="16px" />
              Back to Orders
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium" style={{ color: colors.colorBlack1 }}>
              Guest Denial Email
            </span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
            >
              <Icon path={mdiClose} size="20px" color={colors.colorBlack3} />
            </button>
          </div>
        </div>
      </div>

      {/* Email Metadata Bar */}
      <div className="bg-white border-b px-6 py-3" style={{ borderBottomColor: colors.colorBlack6 }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-sm">
              <span className="font-medium" style={{ color: colors.colorBlack1 }}>From:</span>
              <span style={{ color: colors.colorBlack3 }}>noreply@statlernewyork.com</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="font-medium" style={{ color: colors.colorBlack1 }}>To:</span>
              <span style={{ color: colors.colorBlack3 }}>{order.guestEmail}</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="font-medium" style={{ color: colors.colorBlack1 }}>Subject:</span>
              <span style={{ color: colors.colorBlack3 }}>Your order could not be completed - Order #{order.orderNumber}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Email Content Container */}
      <div 
        className="flex-1 overflow-auto p-6"
        style={{ backgroundColor: colors.colorBlack7 }}
      >
        <div className="max-w-4xl mx-auto flex justify-center">
          {/* Email Content - 640px max width */}
          <div 
            className="bg-white shadow-lg"
            style={{ maxWidth: '640px', width: '100%' }}
          >
            {/* Hotel Logo */}
            <div className="flex justify-center py-8">
              <div className="w-[148.75px] h-16">
                <img 
                  alt="Statler Hotel Logo" 
                  className="w-full h-full object-contain"
                  src={hotelLogoImage}
                />
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full h-[200px]">
              <img 
                alt="Hotel Interior" 
                className="w-full h-full object-cover"
                src={hotelInteriorImage}
              />
            </div>

            {/* Email Content - matching Figma exactly */}
            <div className="px-8 py-8">
              {/* Email container with 32px gap */}
              <div className="flex flex-col gap-8 w-full">
                {/* Email body */}
                <div className="flex flex-col gap-4 w-full">
                  <h1 
                    className="font-roboto text-[24px] font-semibold leading-[36px] w-full"
                    style={{ color: colors.colorBlack2 }}
                  >
                    {emailContent.title}
                  </h1>
                  <p 
                    className="font-roboto text-[16px] font-normal leading-[24px] whitespace-pre-line w-[570px]"
                    style={{ color: colors.colorBlack1 }}
                  >
                    {emailContent.message}
                  </p>
                </div>

                {/* Divider line */}
                <div className="h-0 w-full relative">
                  <div className="absolute left-0 right-0 top-[-1px] bottom-0">
                    <div className="w-full h-px" style={{ backgroundColor: colors.colorBlack6 }} />
                  </div>
                </div>

                {/* Footer */}
                <p 
                  className="font-roboto text-[16px] font-normal leading-[24px] text-center w-[570px]"
                  style={{ color: colors.colorBlack3, fontVariationSettings: "'wdth' 100" }}
                >
                  Statler Hotel | 130 Statler Dr, Ithaca, NY 14853
                  <br />
                  +12019533456
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};