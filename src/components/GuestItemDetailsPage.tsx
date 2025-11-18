'use client';

import React, { useState } from 'react';
import { CompendiumItem } from '../utils/persistence';
import CanaryButton from './temp-components/CanaryButton';
import { ButtonType } from './temp-components/button-types';
import { loadData, saveDemoTime, saveGuestInfo, getGuestInfo, getViewMode, saveViewMode } from '../utils/persistence';
import CanaryInput from '../../temp-components/CanaryInput';
import CanarySegmentedControl from '../../temp-components/CanarySegmentedControl';
import { InputSize } from './temp-components/types';

// Time Controls Component
interface TimeControlsProps {
  day: string;
  hour: number;
  minute: number;
  ampm: 'AM' | 'PM';
  guestName: string;
  roomNumber: string;
  viewMode: 'mobile' | 'desktop';
  onDayChange: (day: string) => void;
  onHourChange: (hour: number) => void;
  onMinuteChange: (minute: number) => void;
  onAmPmChange: (ampm: 'AM' | 'PM') => void;
  onGuestNameChange: (guestName: string) => void;
  onRoomNumberChange: (roomNumber: string) => void;
  onViewModeChange: (viewMode: 'mobile' | 'desktop') => void;
}

const TimeControls: React.FC<TimeControlsProps> = ({
  day,
  hour,
  minute,
  ampm,
  guestName,
  roomNumber,
  viewMode,
  onDayChange,
  onHourChange,
  onMinuteChange,
  onAmPmChange,
  onGuestNameChange,
  onRoomNumberChange,
  onViewModeChange
}) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = [0, 15, 30, 45];

  return (
    <div className="fixed top-24 left-8 z-50 bg-white border border-neutral-200 rounded-lg p-4 shadow-lg max-w-xs">
      <h3 className="font-roboto text-body-sm font-semibold text-canary-black-1 mb-3">
        Demo Controls
      </h3>
      <div className="space-y-3">
        {/* Day of Week */}
        <div>
          <label className="block font-roboto text-caption font-medium text-canary-black-2 mb-1">
            Day
          </label>
          <select
            value={day}
            onChange={(e) => onDayChange(e.target.value)}
            className="w-full h-8 px-2 border border-neutral-200 rounded font-roboto text-body-sm focus:outline-none focus:ring-2 focus:ring-canary-blue-1"
          >
            {daysOfWeek.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Time */}
        <div>
          <label className="block font-roboto text-caption font-medium text-canary-black-2 mb-1">
            Time
          </label>
          <div className="flex gap-2">
            {/* Hour */}
            <select
              value={hour}
              onChange={(e) => onHourChange(parseInt(e.target.value))}
              className="flex-1 h-8 px-2 border border-neutral-200 rounded font-roboto text-body-sm focus:outline-none focus:ring-2 focus:ring-canary-blue-1"
            >
              {hours.map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>

            {/* Minute */}
            <select
              value={minute}
              onChange={(e) => onMinuteChange(parseInt(e.target.value))}
              className="flex-1 h-8 px-2 border border-neutral-200 rounded font-roboto text-body-sm focus:outline-none focus:ring-2 focus:ring-canary-blue-1"
            >
              {minutes.map(m => (
                <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
              ))}
            </select>

            {/* AM/PM */}
            <select
              value={ampm}
              onChange={(e) => onAmPmChange(e.target.value as 'AM' | 'PM')}
              className="w-16 h-8 px-2 border border-neutral-200 rounded font-roboto text-body-sm focus:outline-none focus:ring-2 focus:ring-canary-blue-1"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>

        {/* Guest Information */}
        <div>
          <CanaryInput
            label="Guest Name"
            value={guestName}
            onChange={(e) => onGuestNameChange(e.target.value)}
            placeholder="Enter guest name"
            size={InputSize.COMPACT}
          />
        </div>

        <div>
          <CanaryInput
            label="Room Number"
            value={roomNumber}
            onChange={(e) => onRoomNumberChange(e.target.value)}
            placeholder="Enter room number"
            size={InputSize.COMPACT}
          />
        </div>

        {/* View Mode Toggle */}
        <div>
          <label className="block font-roboto text-caption font-medium text-canary-black-2 mb-1">
            Preview Mode
          </label>
          <CanarySegmentedControl
            options={[
              { label: 'Mobile', value: 'mobile' },
              { label: 'Desktop', value: 'desktop' }
            ]}
            value={viewMode}
            onChange={(value) => onViewModeChange(value as 'mobile' | 'desktop')}
          />
        </div>

        {/* Current Time Display */}
        <div className="text-xs text-canary-black-4 font-roboto">
          Current: {day}, {hour}:{minute.toString().padStart(2, '0')} {ampm}
        </div>
      </div>
    </div>
  );
};

interface GuestItemDetailsPageProps {
  item: CompendiumItem;
  onBack?: () => void;
  onNavigateToFoodOrdering?: (connectedMenus: string[], sourceItem?: CompendiumItem) => void;
}

export const GuestItemDetailsPage: React.FC<GuestItemDetailsPageProps> = ({ item, onBack, onNavigateToFoodOrdering }) => {
  const [imageError, setImageError] = useState(false);
  
  // Check if this item has food ordering enabled
  const hasFoodOrdering = item.actionButton?.enabled && item.actionButton?.type === 'Enable food ordering';
  
  // Demo controls state - only initialize if food ordering is enabled
  const savedData = loadData();
  const [demoDay, setDemoDay] = useState(savedData.demoTime?.day || 'Monday');
  const [demoHour, setDemoHour] = useState(savedData.demoTime?.hour || 7);
  const [demoMinute, setDemoMinute] = useState(savedData.demoTime?.minute || 30);
  const [demoAmPm, setDemoAmPm] = useState<'AM' | 'PM'>(savedData.demoTime?.ampm || 'AM');
  const [guestName, setGuestName] = useState(getGuestInfo().name);
  const [roomNumber, setRoomNumber] = useState(getGuestInfo().room);
  const [viewMode, setViewMode] = useState<'mobile' | 'desktop'>(getViewMode());

  // Demo controls handlers
  const handleDayChange = (day: string) => {
    setDemoDay(day);
    saveDemoTime({ day, hour: demoHour, minute: demoMinute, ampm: demoAmPm });
  };

  const handleHourChange = (hour: number) => {
    setDemoHour(hour);
    saveDemoTime({ day: demoDay, hour, minute: demoMinute, ampm: demoAmPm });
  };

  const handleMinuteChange = (minute: number) => {
    setDemoMinute(minute);
    saveDemoTime({ day: demoDay, hour: demoHour, minute, ampm: demoAmPm });
  };

  const handleAmPmChange = (ampm: 'AM' | 'PM') => {
    setDemoAmPm(ampm);
    saveDemoTime({ day: demoDay, hour: demoHour, minute: demoMinute, ampm });
  };

  const handleGuestNameChange = (name: string) => {
    setGuestName(name);
    saveGuestInfo({ name, room: roomNumber });
  };

  const handleRoomNumberChange = (room: string) => {
    setRoomNumber(room);
    saveGuestInfo({ name: guestName, room });
  };

  const handleViewModeChange = (mode: 'mobile' | 'desktop') => {
    setViewMode(mode);
    saveViewMode(mode);
  };

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Centered Mobile Frame Container */}
      <div className="flex-1 flex items-center justify-center p-8">
        {/* Mobile Frame */}
        <div 
          className="relative bg-white overflow-hidden shadow-xl"
          style={{
            width: '430px',
            height: '932px',
            borderRadius: '44px',
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.16)'
          }}
        >
          {/* Mobile Content - Single Scrollable Container */}
          <div className="h-full overflow-y-auto" style={{ borderRadius: '44px' }}>
            
            {/* Header with Image and Back Button */}
            <div className="relative h-[230px] overflow-hidden">
              {/* Header Image */}
              {item.image && !imageError ? (
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="absolute inset-0 w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">No image available</span>
                </div>
              )}
              
              {/* Back Button Overlay */}
              <div className="absolute top-4 left-4 z-10">
                <button
                  onClick={onBack}
                  className="bg-white p-3 rounded shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                  style={{ width: '48px', height: '48px' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M19 12H5M12 19l-7-7 7-7" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Title Section - Combined title and delivery location */}
            <div className="px-4 py-4 bg-white">
              <div className="flex flex-col gap-1">
                {/* Item Title */}
                <h1 className="font-roboto text-[32px] font-medium text-black leading-[48px]">
                  {item.name}
                </h1>
                
                {/* Delivery Location - Only show for food ordering */}
                {hasFoodOrdering && (
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="font-roboto text-[14px] font-normal text-black leading-[22px]">
                      The Statler Hotel New York • Deliver to Room {roomNumber}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Button - Only show if enabled and has label */}
            {item.actionButton?.enabled && item.actionButton?.label && (
              <div className="px-4 py-4 bg-white">
                <CanaryButton
                  type={ButtonType.PRIMARY}
                  isExpanded={true}
                  className="h-12 text-[16px] w-full [&_.button-bg]:!bg-black"
                  onClick={() => {
                    // Handle action button click based on type
                    const buttonType = item.actionButton?.type;
                    
                    if (buttonType === 'Enable food ordering') {
                      const connectedMenus = item.actionButton?.connectedMenus || [];
                      if (onNavigateToFoodOrdering && connectedMenus.length > 0) {
                        onNavigateToFoodOrdering(connectedMenus, item);
                      } else {
                        console.log('No connected menus available for food ordering');
                      }
                    } else if (buttonType === 'Email' && item.email) {
                      window.location.href = `mailto:${item.email}`;
                    } else if (buttonType === 'Call' && item.phone) {
                      window.location.href = `tel:${item.phone.replace(/\D/g, '')}`;
                    } else if (buttonType === 'Link' && item.actionButton?.url) {
                      window.open(item.actionButton.url, '_blank');
                    }
                  }}
                  icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M9 18l6-6-6-6" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                >
                  {item.actionButton.label}
                </CanaryButton>
              </div>
            )}

            {/* Item Description */}
            {item.description && (
              <div className="px-4 py-4 bg-white">
                <p className="font-roboto text-[16px] font-normal text-black leading-[24px]">
                  {item.description}
                </p>
              </div>
            )}

            {/* Contact Information Table */}
            {(item.phone || item.email || item.website || item.hours) && (
              <div className="px-4 py-4 bg-white">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Phone Number */}
                  {item.phone && (
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0">
                      <div className="flex items-center gap-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path 
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="font-roboto text-[16px] font-normal text-black leading-[24px]">
                          {item.phone}
                        </span>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M9 18l6-6-6-6" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Email */}
                  {item.email && (
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0">
                      <div className="flex items-center gap-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path 
                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="font-roboto text-[16px] font-normal text-black leading-[24px]">
                          {item.email}
                        </span>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M9 18l6-6-6-6" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Website */}
                  {item.website && (
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0">
                      <div className="flex items-center gap-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span className="font-roboto text-[16px] font-normal text-black leading-[24px]">
                          {item.website}
                        </span>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M9 18l6-6-6-6" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Hours */}
                  {item.hours && item.hours.length > 0 && (
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="font-roboto text-[16px] font-normal text-black leading-[24px]">
                          {/* Display hours information - simplified for now */}
                          Hours available
                        </span>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M9 18l6-6-6-6" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="px-4 py-6 bg-white flex flex-col items-center gap-6">
              {/* Language Selector */}
              <div className="w-32">
                <div className="bg-white border border-gray-300 rounded px-3 py-3 flex items-center justify-between">
                  <span className="font-roboto text-[14px] font-normal text-black">English</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Footer Links */}
              <div className="flex flex-col items-center gap-2">
                <p className="font-roboto text-[12px] font-medium text-[#414141] text-center leading-[18px]">
                  Privacy Policy • Terms & Conditions
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-3">
                    <div className="w-full h-full bg-gray-300 rounded"></div>
                  </div>
                  <p className="font-roboto text-[12px] font-normal text-[#9f9f9f] leading-[18px]">
                    Powered by Canary Technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Controls - Only show for food ordering items */}
      {hasFoodOrdering && (
        <TimeControls
          day={demoDay}
          hour={demoHour}
          minute={demoMinute}
          ampm={demoAmPm}
          guestName={guestName}
          roomNumber={roomNumber}
          viewMode={viewMode}
          onDayChange={handleDayChange}
          onHourChange={handleHourChange}
          onMinuteChange={handleMinuteChange}
          onAmPmChange={handleAmPmChange}
          onGuestNameChange={handleGuestNameChange}
          onRoomNumberChange={handleRoomNumberChange}
          onViewModeChange={handleViewModeChange}
        />
      )}
    </div>
  );
};