'use client';

import React from 'react';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiClose } from '@mdi/js';
import { colors } from './temp-components/design-tokens';

// Image constants from Figma
const hotelLogoImage = "http://localhost:3845/assets/02ef86990d898c1888997fe617cc329d3a113fe3.png";
const hotelInteriorImage = "http://localhost:3845/assets/ce95c7983cba689bd228ef0b76c4300b31ee9df4.png";

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

interface EmailPreviewProps {
  order: OrderDetails;
  onClose: () => void;
  prepTimeMinutes?: number;
}

export const EmailPreview: React.FC<EmailPreviewProps> = ({ order, onClose, prepTimeMinutes = 30 }) => {
  // Calculate ETA by adding prep time to current time (simulating approval time)
  const calculateETA = () => {
    const now = new Date();
    const etaTime = new Date(now.getTime() + prepTimeMinutes * 60000);
    return etaTime.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };
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
              Guest Confirmation Email
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
              <span style={{ color: colors.colorBlack3 }}>We're working on your in-room dining order - Order #{order.orderNumber}</span>
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
            style={{ 
              maxWidth: '640px',
              width: '100%'
            }}
          >
            {/* Hotel Logo */}
            <div className="flex justify-center py-8">
              <div className="w-[148.75px] h-16">
                <img
                  src={hotelLogoImage}
                  alt="Statler Hotel Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Hotel Interior Image */}
            <div className="w-full h-[200px]">
              <img
                src={hotelInteriorImage}
                alt="Hotel Interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Email Body */}
            <div className="px-8 py-8">
              {/* Header and Body Text Section */}
              <div className="mb-8">
                <h1 
                  className="font-roboto text-[24px] font-semibold leading-[36px] mb-4"
                  style={{ color: '#333333' }}
                >
                  We're working on your in-room dining order
                </h1>
                <p 
                  className="font-roboto text-[16px] font-normal leading-[24px]"
                  style={{ color: '#000000' }}
                >
                  Your order has been approved and is now being prepared. It will arrive at{' '}
                  <span className="font-bold">{order.roomNumber}</span>
                  {' '}around{' '}
                  <span className="font-bold">{calculateETA()}</span>
                  . If you need to make any changes, please contact the hotel staff.
                </p>
              </div>

              {/* View Order Button */}
              <div className="mb-8">
                <button 
                  className="bg-black text-white font-roboto text-[14px] font-medium px-4 py-2 rounded h-10"
                >
                  View order
                </button>
              </div>

              {/* Divider Line */}
              <div className="h-0 border-b mb-8" style={{ borderBottomColor: '#e0e0e0' }}></div>

              {/* Hotel Footer */}
              <div className="text-center">
                <p 
                  className="font-roboto text-[16px] font-normal leading-[24px]"
                  style={{ color: '#666666' }}
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