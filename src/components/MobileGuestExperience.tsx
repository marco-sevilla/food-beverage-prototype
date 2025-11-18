'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import Icon from '@mdi/react';
import { 
  mdiArrowLeft, 
  mdiMapMarker,
  mdiArrowRight,
  mdiPhone,
  mdiEmail,
  mdiOpenInNew,
  mdiClockOutline,
  mdiChevronDown
} from '@mdi/js';
import { colors, typography } from '@/lib/design-tokens';
import { DemoControls } from './DemoControls';
import { loadData, getGuestInfo, getViewMode } from '@/utils/persistence';

interface MobileGuestExperienceProps {
  onBack: () => void;
  onOrderClick: () => void;
  menuName?: string;
}

// Image constants - using placeholder images that match the design
const heroImage = "https://images.unsplash.com/photo-1511909525232-61113c912358?w=430&h=230&fit=crop&crop=center";

export const MobileGuestExperience: React.FC<MobileGuestExperienceProps> = ({ 
  onBack,
  onOrderClick
}) => {
  // Load saved data
  const savedData = loadData();
  const [demoDay, setDemoDay] = useState(savedData.demoTime?.day || 'Monday');
  const [demoHour, setDemoHour] = useState(savedData.demoTime?.hour || 7);
  const [demoMinute, setDemoMinute] = useState(savedData.demoTime?.minute || 30);
  const [demoAmPm, setDemoAmPm] = useState<'AM' | 'PM'>(savedData.demoTime?.ampm || 'AM');
  const [guestName, setGuestName] = useState(getGuestInfo().name);
  const [roomNumber, setRoomNumber] = useState(getGuestInfo().room);
  const [viewMode, setViewMode] = useState<'mobile' | 'desktop'>(getViewMode());

  // Demo controls handlers
  const handleDemoTimeChange = (timeData: any) => {
    setDemoDay(timeData.day);
    setDemoHour(timeData.hour);
    setDemoMinute(timeData.minute);
    setDemoAmPm(timeData.ampm);
  };

  const handleGuestInfoChange = (guestData: any) => {
    setGuestName(guestData.name);
    setRoomNumber(guestData.room);
  };

  return (
    <div className={clsx(
      "min-h-screen bg-gray-100",
      viewMode === 'mobile' 
        ? "flex items-center justify-center p-8"
        : "p-0"
    )}>
      {/* Demo Controls */}
      <DemoControls
        day={demoDay}
        hour={demoHour}
        minute={demoMinute}
        ampm={demoAmPm}
        guestName={guestName}
        roomNumber={roomNumber}
        viewMode={viewMode}
        onDayChange={setDemoDay}
        onHourChange={setDemoHour}
        onMinuteChange={setDemoMinute}
        onAmPmChange={setDemoAmPm}
        onGuestNameChange={setGuestName}
        onRoomNumberChange={setRoomNumber}
        onViewModeChange={setViewMode}
      />

      {/* Back to Menu Management Button */}
      <div className={clsx(
        "fixed z-40",
        viewMode === 'mobile' 
          ? "top-8 left-8" 
          : "top-8 right-8"
      )}>
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded font-roboto text-body-sm font-medium hover:bg-gray-50"
        >
          <Icon path={mdiArrowLeft} size={0.8} />
          Back to Menu Management
        </button>
      </div>

      {/* Mobile Frame */}
      <div 
        className={clsx(
          "relative bg-white overflow-hidden",
          viewMode === 'mobile' 
            ? "shadow-xl" 
            : "min-h-screen"
        )}
        style={viewMode === 'mobile' ? {
          width: '430px',
          height: '932px',
          borderRadius: '44px',
          boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.16)'
        } : {
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto'
        }}
      >
        {/* Hero Image with Progress Indicators */}
        <div className={clsx(
          "relative w-full",
          viewMode === 'mobile' ? "h-[230px]" : "h-[320px]"
        )}>
          <img 
            src={heroImage}
            alt="In-room dining"
            className="w-full h-full object-cover"
          />
          
          {/* Progress Bar - mobile only */}
          {viewMode === 'mobile' && (
            <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
              <div className="w-[6px] h-[6px] bg-white/40 rounded-full" />
              <div className="w-[8px] h-[8px] bg-white rounded-full" />
              <div className="w-[6px] h-[6px] bg-white/40 rounded-full" />
              <div className="w-[6px] h-[6px] bg-white/40 rounded-full" />
            </div>
          )}

          {/* Back Button Overlay - mobile only */}
          {viewMode === 'mobile' && (
            <div className="absolute top-4 left-4">
              <button
                onClick={onBack}
                className="flex items-center justify-center w-12 h-12 bg-white rounded shadow-md hover:bg-gray-50"
              >
                <Icon path={mdiArrowLeft} size={1} color="#000000" />
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={clsx(
          "space-y-4",
          viewMode === 'mobile' ? "px-4 py-4" : "px-8 py-8"
        )}>
          {/* Dynamic Header */}
          <div className="space-y-1">
            <h1 
              className="font-roboto font-medium text-canary-black-1"
              style={{ 
                fontSize: '32px',
                lineHeight: '48px'
              }}
            >
              In-room dining
            </h1>
            
            <div className="flex items-center gap-2">
              <Icon path={mdiMapMarker} size={0.8} color="#666666" />
              <span 
                className="font-roboto font-normal text-black"
                style={{
                  fontSize: '14px',
                  lineHeight: '22px'
                }}
              >
                The Statler Hotel New York • Deliver to Room {roomNumber}
              </span>
            </div>
          </div>

          {/* Order Button */}
          <button
            onClick={onOrderClick}
            className="w-full bg-black text-white rounded-lg h-12 flex items-center justify-between px-4 hover:opacity-90"
          >
            <div className="w-6" /> {/* Spacer */}
            <span 
              className="font-roboto font-medium"
              style={{
                fontSize: '16px',
                lineHeight: '24px'
              }}
            >
              Order in-room dining
            </span>
            <Icon path={mdiArrowRight} size={1} color="white" />
          </button>

          {/* Description */}
          <div className="py-2">
            <p 
              className="font-roboto font-normal text-canary-black-1"
              style={{
                fontSize: '16px',
                lineHeight: '24px'
              }}
            >
              Experience in-room dining at its finest with our curated breakfast, lunch, and dinner selections. Enjoy a delightful array of farm-fresh eggs, artisanal pastries, and seasonal fruits, all delivered to your door. Start your day with a gourmet meal that captures the essence of local flavors, all while taking in stunning city skyline views from the comfort of your room.
            </p>
          </div>

          {/* Contact Information Container */}
          <div className="border border-neutral-200 rounded-lg overflow-hidden">
            {/* Phone */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-200">
              <div className="flex items-center gap-4">
                <Icon path={mdiPhone} size={0.8} color="#666666" />
                <span 
                  className="font-roboto font-normal text-canary-black-1"
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}
                >
                  (410) 633-9500
                </span>
              </div>
              <Icon path={mdiArrowRight} size={0.8} color="#000000" />
            </div>

            {/* Email */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-200">
              <div className="flex items-center gap-4">
                <Icon path={mdiEmail} size={0.8} color="#666666" />
                <span 
                  className="font-roboto font-normal text-canary-black-1"
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}
                >
                  roomservice@statler.com
                </span>
              </div>
              <Icon path={mdiArrowRight} size={0.8} color="#000000" />
            </div>

            {/* Website */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-200">
              <div className="flex items-center gap-4">
                <Icon path={mdiOpenInNew} size={0.8} color="#666666" />
                <span 
                  className="font-roboto font-normal text-canary-black-1"
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}
                >
                  Visit website
                </span>
              </div>
              <Icon path={mdiArrowRight} size={0.8} color="#000000" />
            </div>

            {/* Hours */}
            <div className="flex items-center justify-between p-4 bg-neutral-50">
              <div className="flex items-center gap-4">
                <Icon path={mdiClockOutline} size={0.8} color="#666666" />
                <span 
                  className="font-roboto font-normal text-canary-black-1"
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}
                >
                  Open • Closes 05:00 PM
                </span>
              </div>
              <Icon path={mdiArrowRight} size={0.8} color="#8C1836" />
            </div>
          </div>

          {/* Footer */}
          <div className="pt-6 pb-4 space-y-4">
            {/* Language Selector */}
            <div className="flex justify-center">
              <div className="bg-white border border-neutral-200 rounded px-4 py-3 flex items-center gap-2 w-32">
                <span 
                  className="font-roboto font-normal flex-1"
                  style={{
                    fontSize: '14px',
                    lineHeight: '22px'
                  }}
                >
                  English
                </span>
                <Icon path={mdiChevronDown} size={0.8} color="#000000" />
              </div>
            </div>

            {/* Footer Links */}
            <div className="text-center space-y-2">
              <p 
                className="font-roboto font-medium text-gray-600"
                style={{
                  fontSize: '12px',
                  lineHeight: '18px'
                }}
              >
                Privacy Policy • Terms & Conditions
              </p>
              
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-3 bg-gray-400 rounded" /> {/* Canary logo placeholder */}
                <span 
                  className="font-roboto font-normal text-gray-500"
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px'
                  }}
                >
                  Powered by Canary Technologies
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};