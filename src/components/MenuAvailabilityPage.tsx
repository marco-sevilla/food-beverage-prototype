'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { 
  mdiArrowLeft, 
  mdiHome, 
  mdiBrushVariant, 
  mdiAccountMultiple, 
  mdiSecurity, 
  mdiCog,
  mdiBook,
  mdiFoodForkDrink,
  mdiTrendingUp,
  mdiLoginVariant,
  mdiLogoutVariant,
  mdiMessage,
  mdiCurrencyUsd,
  mdiShieldCheck,
  mdiFileDocument,
  mdiLink,
  mdiChevronDown,
  mdiRadioboxMarked,
  mdiRadioboxBlank,
  mdiPlus,
  mdiClose
} from '@mdi/js';

// Navigation Item component
interface NavItemProps {
  children: React.ReactNode;
  icon: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ children, icon, active = false, onClick }) => (
  <div 
    className={`h-10 w-full relative flex items-center cursor-pointer ${
      active ? 'bg-white rounded mx-2' : ''
    }`}
    onClick={onClick}
  >
    <div className="absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center">
      <Icon 
        path={icon} 
        size={1} 
        color={active ? '#000000' : '#ffffff'} 
      />
    </div>
    <span className={`absolute left-12 font-roboto text-sm font-normal ${
      active ? 'text-black' : 'text-white'
    }`}>
      {children}
    </span>
  </div>
);

// Button component
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'icon';
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, type = 'button' }) => {
  if (variant === 'icon') {
    return (
      <button
        type={type}
        onClick={onClick}
        className="flex items-center justify-center p-2 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50"
      >
        {children}
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button
        type={type}
        onClick={onClick}
        className="flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90"
    >
      {children}
    </button>
  );
};

// Radio Button component
interface RadioButtonProps {
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
  name: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ checked, onChange, children, name }) => (
  <div className="flex items-center gap-2 px-1 py-2 cursor-pointer" onClick={onChange}>
    <Icon 
      path={checked ? mdiRadioboxMarked : mdiRadioboxBlank} 
      size={1} 
      color={checked ? '#2858C4' : '#666666'} 
    />
    <span className="font-roboto text-body-sm font-normal text-canary-black-1">
      {children}
    </span>
  </div>
);

// Day availability types
type AvailabilityType = 'set-hours' | 'open-24' | 'closed';

interface TimeRange {
  id: string;
  openTime: string;
  closeTime: string;
  isOvernight?: boolean;
}

interface DayAvailability {
  day: string;
  type: AvailabilityType;
  timeRanges: TimeRange[];
}

// Time Input component
interface TimeInputProps {
  value: string;
  onChange: (time: string) => void;
  placeholder: string;
  isOvernight?: boolean;
}

const TimeInput: React.FC<TimeInputProps> = ({ value, onChange, placeholder, isOvernight = false }) => (
  <div className="relative">
    <input
      type="time"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-24 h-10 px-3 border ${
        isOvernight ? 'border-orange-400' : 'border-neutral-200'
      } rounded font-roboto text-body-sm focus:outline-none focus:ring-2 focus:ring-canary-blue-1 focus:border-canary-blue-1`}
    />
    {isOvernight && (
      <span className="absolute -bottom-6 left-0 text-xs text-orange-600 font-roboto">
        (overnight)
      </span>
    )}
  </div>
);

// Time Range component
interface TimeRangeProps {
  timeRange: TimeRange;
  onTimeChange: (id: string, field: 'openTime' | 'closeTime', value: string) => void;
  onRemove: (id: string) => void;
  showRemove: boolean;
}

const TimeRangeComponent: React.FC<TimeRangeProps> = ({ 
  timeRange, 
  onTimeChange, 
  onRemove, 
  showRemove 
}) => {
  const isOvernight = Boolean(timeRange.openTime && timeRange.closeTime && 
    timeRange.openTime >= timeRange.closeTime);

  return (
    <div className="flex items-center gap-3 py-2">
      <TimeInput
        value={timeRange.openTime}
        onChange={(time) => onTimeChange(timeRange.id, 'openTime', time)}
        placeholder="Open"
      />
      <span className="text-canary-black-3 font-roboto text-body-sm">to</span>
      <TimeInput
        value={timeRange.closeTime}
        onChange={(time) => onTimeChange(timeRange.id, 'closeTime', time)}
        placeholder="Close"
        isOvernight={isOvernight}
      />
      {showRemove && (
        <button
          onClick={() => onRemove(timeRange.id)}
          className="flex items-center justify-center p-1 text-canary-black-4 hover:text-red-500 transition-colors"
        >
          <Icon path={mdiClose} size={0.8} />
        </button>
      )}
    </div>
  );
};

// Day Row component
interface DayRowProps {
  day: string;
  selectedType: AvailabilityType;
  timeRanges: TimeRange[];
  onTypeChange: (day: string, type: AvailabilityType) => void;
  onTimeRangeChange: (day: string, id: string, field: 'openTime' | 'closeTime', value: string) => void;
  onAddTimeRange: (day: string) => void;
  onRemoveTimeRange: (day: string, id: string) => void;
  isLast?: boolean;
}

const DayRow: React.FC<DayRowProps> = ({ 
  day, 
  selectedType, 
  timeRanges, 
  onTypeChange, 
  onTimeRangeChange, 
  onAddTimeRange, 
  onRemoveTimeRange, 
  isLast = false 
}) => (
  <div className={`p-4 ${isLast ? '' : 'border-b border-neutral-200'}`}>
    {/* Day name and radio options */}
    <div className="flex items-center gap-4 mb-3">
      <div className="w-20 font-roboto text-body font-medium text-canary-black-1">
        {day}
      </div>
      <div className="flex items-center gap-4 flex-1">
        <RadioButton
          checked={selectedType === 'set-hours'}
          onChange={() => onTypeChange(day, 'set-hours')}
          name={`${day}-availability`}
        >
          Set hours
        </RadioButton>
        <RadioButton
          checked={selectedType === 'open-24'}
          onChange={() => onTypeChange(day, 'open-24')}
          name={`${day}-availability`}
        >
          Open 24 hours
        </RadioButton>
        <RadioButton
          checked={selectedType === 'closed'}
          onChange={() => onTypeChange(day, 'closed')}
          name={`${day}-availability`}
        >
          Closed
        </RadioButton>
      </div>
    </div>
    
    {/* Time ranges - only show if 'set-hours' is selected */}
    {selectedType === 'set-hours' && (
      <div className="ml-24 space-y-2">
        {timeRanges.map((timeRange) => (
          <TimeRangeComponent
            key={timeRange.id}
            timeRange={timeRange}
            onTimeChange={(id, field, value) => onTimeRangeChange(day, id, field, value)}
            onRemove={(id) => onRemoveTimeRange(day, id)}
            showRemove={timeRanges.length > 1}
          />
        ))}
        <button
          onClick={() => onAddTimeRange(day)}
          className="flex items-center gap-2 text-canary-blue-1 hover:text-blue-700 font-roboto text-body-sm font-medium mt-2"
        >
          <Icon path={mdiPlus} size={0.8} />
          Add hours
        </button>
      </div>
    )}
  </div>
);

// Main component
interface MenuAvailabilityPageProps {
  menuName?: string;
  onBack?: () => void;
  onSave?: (availability: DayAvailability[]) => void;
}

export const MenuAvailabilityPage: React.FC<MenuAvailabilityPageProps> = ({ 
  menuName = "Menu",
  onBack,
  onSave
}) => {
  const [availability, setAvailability] = useState<DayAvailability[]>([
    { day: 'Monday', type: 'open-24', timeRanges: [] },
    { day: 'Tuesday', type: 'open-24', timeRanges: [] },
    { day: 'Wednesday', type: 'open-24', timeRanges: [] },
    { day: 'Thursday', type: 'open-24', timeRanges: [] },
    { day: 'Friday', type: 'open-24', timeRanges: [] },
    { day: 'Saturday', type: 'open-24', timeRanges: [] },
    { day: 'Sunday', type: 'open-24', timeRanges: [] }
  ]);

  // Load saved availability data on mount
  useEffect(() => {
    if (menuName && typeof window !== 'undefined') {
      try {
        const { getMenuAvailability } = require('@/utils/persistence');
        const savedAvailability = getMenuAvailability(menuName);
        if (savedAvailability && savedAvailability.length > 0) {
          setAvailability(savedAvailability);
        }
      } catch (error) {
        console.warn('Could not load saved availability data:', error);
      }
    }
  }, [menuName]);

  const handleTypeChange = (day: string, type: AvailabilityType) => {
    setAvailability(prev => 
      prev.map(item => {
        if (item.day === day) {
          // If switching to 'set-hours' and no time ranges exist, add one
          if (type === 'set-hours' && item.timeRanges.length === 0) {
            return { 
              ...item, 
              type, 
              timeRanges: [{ id: Date.now().toString() + Math.random().toString(36), openTime: '', closeTime: '' }] 
            };
          }
          // If switching away from 'set-hours', clear time ranges
          if (type !== 'set-hours') {
            return { ...item, type, timeRanges: [] };
          }
          return { ...item, type };
        }
        return item;
      })
    );
  };

  const handleTimeRangeChange = (day: string, id: string, field: 'openTime' | 'closeTime', value: string) => {
    setAvailability(prev =>
      prev.map(item => {
        if (item.day === day) {
          return {
            ...item,
            timeRanges: item.timeRanges.map(range =>
              range.id === id ? { ...range, [field]: value } : range
            )
          };
        }
        return item;
      })
    );
  };

  const handleAddTimeRange = (day: string) => {
    setAvailability(prev =>
      prev.map(item => {
        if (item.day === day) {
          return {
            ...item,
            timeRanges: [...item.timeRanges, { id: Date.now().toString() + Math.random().toString(36), openTime: '', closeTime: '' }]
          };
        }
        return item;
      })
    );
  };

  const handleRemoveTimeRange = (day: string, id: string) => {
    setAvailability(prev =>
      prev.map(item => {
        if (item.day === day) {
          return {
            ...item,
            timeRanges: item.timeRanges.filter(range => range.id !== id)
          };
        }
        return item;
      })
    );
  };

  const handleSave = () => {
    onSave?.(availability);
  };

  return (
    <div className="flex h-screen rounded-xl shadow-canary overflow-hidden">
      {/* Sidebar */}
      <div className="w-45 bg-canary-black-2 flex flex-col">
        {/* Back button */}
        <div className="h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer" onClick={onBack}>
          <div className="absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center">
            <Icon path={mdiArrowLeft} size={1} color="#ffffff" />
          </div>
          <span className="absolute left-12 font-roboto text-sm font-medium text-white">
            Back
          </span>
        </div>

        {/* Navigation */}
        <div className="w-full flex flex-col gap-6 pt-6">
          {/* General Settings */}
          <div className="flex flex-col">
            <div className="px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4">
              General Settings
            </div>
            <div className="flex flex-col gap-4">
              <NavItem icon={mdiHome}>Property Info</NavItem>
              <NavItem icon={mdiBrushVariant}>Branding</NavItem>
              <NavItem icon={mdiAccountMultiple}>Staff Members</NavItem>
              <NavItem icon={mdiSecurity}>Security</NavItem>
              <NavItem icon={mdiCog}>Integrations</NavItem>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white opacity-20"></div>

          {/* Product Settings */}
          <div className="flex flex-col">
            <div className="px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4">
              Product settings
            </div>
            <div className="flex flex-col gap-4">
              <NavItem icon={mdiBook}>Compendium</NavItem>
              <NavItem icon={mdiFoodForkDrink} active>F&B Ordering</NavItem>
              <NavItem icon={mdiTrendingUp}>Upsells</NavItem>
              <NavItem icon={mdiLoginVariant}>Check-in</NavItem>
              <NavItem icon={mdiLogoutVariant}>Checkout</NavItem>
              <NavItem icon={mdiMessage}>Messages</NavItem>
              <NavItem icon={mdiCurrencyUsd}>Digital Tips</NavItem>
              <NavItem icon={mdiShieldCheck}>Authorizations</NavItem>
              <NavItem icon={mdiFileDocument}>Contracts</NavItem>
              <NavItem icon={mdiLink}>Payment Links</NavItem>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full min-w-0">
        {/* Top Header */}
        <div className="bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="font-roboto text-body-sm font-medium text-canary-black-1 truncate">
              Statler New York
            </span>
            <Icon path={mdiChevronDown} size={0.8} />
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-canary-black-5 shrink-0" />
            <div className="flex flex-col sm:hidden">
              <span className="font-roboto text-caption font-medium text-canary-black-1">
                Theresa Webb
              </span>
              <span className="font-roboto text-caption-sm font-normal text-canary-black-4 uppercase">
                Operations manager
              </span>
            </div>
            <Icon path={mdiChevronDown} size={0.8} />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex bg-white overflow-hidden">
          {/* Left Configuration Panel */}
          <div className="flex-1 max-w-lg border-r border-neutral-200 flex flex-col">
            {/* Page Header */}
            <div className="border-b border-neutral-200 py-4 px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={onBack}
                  className="flex items-center justify-center p-2 hover:bg-gray-50 rounded"
                >
                  <Icon path={mdiArrowLeft} size={1} />
                </button>
                <h1 className="font-roboto text-subtitle font-medium text-canary-black-1">
                  Menu availability
                </h1>
              </div>
              <Button onClick={handleSave}>Save</Button>
            </div>

            {/* Configuration Content */}
            <div className="flex-1 overflow-auto py-8 px-6">
              {/* Hours Section */}
              <div className="border border-neutral-200 rounded-lg bg-white">
                {availability.map((item, index) => (
                  <DayRow
                    key={item.day}
                    day={item.day}
                    selectedType={item.type}
                    timeRanges={item.timeRanges}
                    onTypeChange={handleTypeChange}
                    onTimeRangeChange={handleTimeRangeChange}
                    onAddTimeRange={handleAddTimeRange}
                    onRemoveTimeRange={handleRemoveTimeRange}
                    isLast={index === availability.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Mobile Preview Placeholder */}
          <div className="flex-1 bg-canary-black-6 flex items-center justify-center">
            <span className="text-canary-black-4 font-roboto text-body-sm">
              Mobile preview (coming soon)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};