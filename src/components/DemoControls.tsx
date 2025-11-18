'use client';

import React from 'react';
import CanaryInput from '../../temp-components/CanaryInput';
import CanarySegmentedControl from '../../temp-components/CanarySegmentedControl';
import { InputSize } from '../../temp-components/types';
import { saveViewMode, saveDemoTime, saveGuestInfo } from '@/utils/persistence';

// Demo Controls Component
interface DemoControlsProps {
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

export const DemoControls: React.FC<DemoControlsProps> = ({
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

  const handleDayChange = (newDay: string) => {
    onDayChange(newDay);
    saveDemoTime({ day: newDay, hour, minute, ampm });
  };

  const handleHourChange = (newHour: number) => {
    onHourChange(newHour);
    saveDemoTime({ day, hour: newHour, minute, ampm });
  };

  const handleMinuteChange = (newMinute: number) => {
    onMinuteChange(newMinute);
    saveDemoTime({ day, hour, minute: newMinute, ampm });
  };

  const handleAmPmChange = (newAmPm: 'AM' | 'PM') => {
    onAmPmChange(newAmPm);
    saveDemoTime({ day, hour, minute, ampm: newAmPm });
  };

  const handleGuestNameChange = (name: string) => {
    onGuestNameChange(name);
    saveGuestInfo({ name, room: roomNumber });
  };

  const handleRoomNumberChange = (room: string) => {
    onRoomNumberChange(room);
    saveGuestInfo({ name: guestName, room });
  };

  const handleViewModeChange = (mode: string) => {
    onViewModeChange(mode as 'mobile' | 'desktop');
    saveViewMode(mode as 'mobile' | 'desktop');
  };

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
            onChange={(e) => handleDayChange(e.target.value)}
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
              onChange={(e) => handleHourChange(parseInt(e.target.value))}
              className="flex-1 h-8 px-2 border border-neutral-200 rounded font-roboto text-body-sm focus:outline-none focus:ring-2 focus:ring-canary-blue-1"
            >
              {hours.map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>

            {/* Minute */}
            <select
              value={minute}
              onChange={(e) => handleMinuteChange(parseInt(e.target.value))}
              className="flex-1 h-8 px-2 border border-neutral-200 rounded font-roboto text-body-sm focus:outline-none focus:ring-2 focus:ring-canary-blue-1"
            >
              {minutes.map(m => (
                <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
              ))}
            </select>

            {/* AM/PM */}
            <select
              value={ampm}
              onChange={(e) => handleAmPmChange(e.target.value as 'AM' | 'PM')}
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
            onChange={(e) => handleGuestNameChange(e.target.value)}
            placeholder="Enter guest name"
            size={InputSize.COMPACT}
          />
        </div>

        <div>
          <CanaryInput
            label="Room Number"
            value={roomNumber}
            onChange={(e) => handleRoomNumberChange(e.target.value)}
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
            onChange={handleViewModeChange}
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