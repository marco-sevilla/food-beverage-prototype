// Menu availability utility functions

export interface TimeRange {
  id: string;
  openTime: string;
  closeTime: string;
  isOvernight?: boolean;
}

export interface DayAvailability {
  day: string;
  type: 'set-hours' | 'open-24' | 'closed';
  timeRanges: TimeRange[];
}

// Convert 12-hour format to 24-hour format for comparison
export const convertTo24Hour = (hour: number, minute: number, ampm: 'AM' | 'PM'): string => {
  let hour24 = hour;
  if (ampm === 'PM' && hour !== 12) {
    hour24 += 12;
  } else if (ampm === 'AM' && hour === 12) {
    hour24 = 0;
  }
  return `${hour24.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
};

// Convert 24-hour time string to minutes since midnight for comparison
const timeToMinutes = (timeString: string): number => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * 60 + minutes;
};

// Check if current time falls within a time range (handling overnight)
const isTimeInRange = (currentTime: string, openTime: string, closeTime: string): boolean => {
  const currentMinutes = timeToMinutes(currentTime);
  const openMinutes = timeToMinutes(openTime);
  const closeMinutes = timeToMinutes(closeTime);

  // If close time is earlier than open time, it's overnight
  if (closeMinutes <= openMinutes) {
    // Overnight: open until midnight OR midnight until close
    return currentMinutes >= openMinutes || currentMinutes <= closeMinutes;
  } else {
    // Same day: between open and close
    return currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
  }
};

// Get saved availability data or fallback to sample data
const getSavedOrDefaultAvailability = (menuName: string, providedData?: DayAvailability[]): DayAvailability[] => {
  // If availability data is provided, use it
  if (providedData && providedData.length > 0) {
    return providedData;
  }
  
  // Try to load from persistence
  if (typeof window !== 'undefined') {
    try {
      const { getMenuAvailability } = require('./persistence');
      const saved = getMenuAvailability(menuName);
      if (saved && saved.length > 0) {
        return saved;
      }
    } catch (error) {
      console.warn('Could not load saved availability data:', error);
    }
  }
  
  // Fallback to sample data
  const sampleAvailability: Record<string, DayAvailability[]> = {
    'Breakfast menu': [
      { day: 'Monday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '06:00', closeTime: '11:00' }] },
      { day: 'Tuesday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '06:00', closeTime: '11:00' }] },
      { day: 'Wednesday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '06:00', closeTime: '11:00' }] },
      { day: 'Thursday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '06:00', closeTime: '11:00' }] },
      { day: 'Friday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '06:00', closeTime: '11:00' }] },
      { day: 'Saturday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '07:00', closeTime: '12:00' }] },
      { day: 'Sunday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '07:00', closeTime: '12:00' }] },
    ],
    'Lunch menu': [
      { day: 'Monday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '11:30', closeTime: '15:00' }] },
      { day: 'Tuesday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '11:30', closeTime: '15:00' }] },
      { day: 'Wednesday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '11:30', closeTime: '15:00' }] },
      { day: 'Thursday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '11:30', closeTime: '15:00' }] },
      { day: 'Friday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '11:30', closeTime: '15:00' }] },
      { day: 'Saturday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '12:00', closeTime: '16:00' }] },
      { day: 'Sunday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '12:00', closeTime: '16:00' }] },
    ],
    'Dinner menu': [
      { day: 'Monday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '17:00', closeTime: '22:00' }] },
      { day: 'Tuesday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '17:00', closeTime: '22:00' }] },
      { day: 'Wednesday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '17:00', closeTime: '22:00' }] },
      { day: 'Thursday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '17:00', closeTime: '22:00' }] },
      { day: 'Friday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '17:00', closeTime: '23:00' }] },
      { day: 'Saturday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '17:00', closeTime: '23:00' }] },
      { day: 'Sunday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '17:00', closeTime: '21:00' }] },
    ],
    'Happy hour menu': [
      { day: 'Monday', type: 'closed', timeRanges: [] },
      { day: 'Tuesday', type: 'closed', timeRanges: [] },
      { day: 'Wednesday', type: 'closed', timeRanges: [] },
      { day: 'Thursday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '16:00', closeTime: '18:00' }] },
      { day: 'Friday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '16:00', closeTime: '19:00' }] },
      { day: 'Saturday', type: 'set-hours', timeRanges: [{ id: '1', openTime: '15:00', closeTime: '19:00' }] },
      { day: 'Sunday', type: 'closed', timeRanges: [] },
    ],
    'Dessert menu': [
      { day: 'Monday', type: 'open-24', timeRanges: [] },
      { day: 'Tuesday', type: 'open-24', timeRanges: [] },
      { day: 'Wednesday', type: 'open-24', timeRanges: [] },
      { day: 'Thursday', type: 'open-24', timeRanges: [] },
      { day: 'Friday', type: 'open-24', timeRanges: [] },
      { day: 'Saturday', type: 'open-24', timeRanges: [] },
      { day: 'Sunday', type: 'open-24', timeRanges: [] },
    ],
  };

  return sampleAvailability[menuName] || [];
};

// Check if a menu is available at a specific day and time
export const isMenuAvailable = (
  menuName: string,
  currentDay: string,
  currentHour: number,
  currentMinute: number,
  currentAmPm: 'AM' | 'PM',
  availabilityData?: DayAvailability[]
): boolean => {
  const menuAvailability = getSavedOrDefaultAvailability(menuName, availabilityData);
  if (!menuAvailability || menuAvailability.length === 0) return false;

  const dayAvailability = menuAvailability.find(d => d.day === currentDay);
  if (!dayAvailability) return false;

  if (dayAvailability.type === 'open-24') return true;
  if (dayAvailability.type === 'closed') return false;

  const currentTime = convertTo24Hour(currentHour, currentMinute, currentAmPm);
  
  return dayAvailability.timeRanges.some(range => 
    isTimeInRange(currentTime, range.openTime, range.closeTime)
  );
};

// Helper function to find next available day and time
const findNextAvailable = (menuAvailability: DayAvailability[], currentDay: string): string => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const currentDayIndex = daysOfWeek.indexOf(currentDay);
  
  // Check the next 7 days starting from tomorrow
  for (let i = 1; i <= 7; i++) {
    const nextDayIndex = (currentDayIndex + i) % 7;
    const nextDay = daysOfWeek[nextDayIndex];
    const nextDayAvailability = menuAvailability.find(d => d.day === nextDay);
    
    if (nextDayAvailability) {
      if (nextDayAvailability.type === 'open-24') {
        return `Available ${nextDay} at 12:00 AM`;
      } else if (nextDayAvailability.type === 'set-hours' && nextDayAvailability.timeRanges.length > 0) {
        const firstRange = nextDayAvailability.timeRanges[0];
        const formatTime = (time: string) => {
          const [hours, minutes] = time.split(':').map(Number);
          const ampm = hours >= 12 ? 'PM' : 'AM';
          const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
          return `${displayHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
        };
        return `Available ${nextDay} at ${formatTime(firstRange.openTime)}`;
      }
    }
  }
  
  return 'Currently unavailable';
};

// Get the current availability status and time info for a menu
export const getMenuAvailabilityInfo = (
  menuName: string,
  currentDay: string,
  currentHour: number,
  currentMinute: number,
  currentAmPm: 'AM' | 'PM',
  availabilityData?: DayAvailability[]
): { isAvailable: boolean; timeInfo: string } => {
  const isAvailable = isMenuAvailable(menuName, currentDay, currentHour, currentMinute, currentAmPm, availabilityData);
  const menuAvailability = getSavedOrDefaultAvailability(menuName, availabilityData);
  
  // Get the actual availability for today
  const todayAvailability = menuAvailability.find(d => d.day === currentDay);
  
  let timeInfo = 'Available 24 hours';
  
  if (todayAvailability) {
    if (todayAvailability.type === 'open-24') {
      timeInfo = 'Available all day';
    } else if (todayAvailability.type === 'closed') {
      timeInfo = 'Closed';
    } else if (todayAvailability.type === 'set-hours' && todayAvailability.timeRanges.length > 0) {
      // Format time ranges for display
      const ranges = todayAvailability.timeRanges.map(range => {
        const formatTime = (time: string) => {
          const [hours, minutes] = time.split(':').map(Number);
          const ampm = hours >= 12 ? 'PM' : 'AM';
          const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
          return `${displayHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
        };
        return `${formatTime(range.openTime)} - ${formatTime(range.closeTime)}`;
      }).join(', ');
      timeInfo = ranges;
    }
  }
  
  if (isAvailable) {
    return {
      isAvailable: true,
      timeInfo
    };
  } else {
    // For unavailable menus, check if they have hours today first
    if (todayAvailability?.type === 'closed') {
      // Menu is closed today, show next available day
      const nextAvailable = findNextAvailable(menuAvailability, currentDay);
      return {
        isAvailable: false,
        timeInfo: nextAvailable
      };
    } else if (todayAvailability?.type === 'set-hours' && todayAvailability.timeRanges.length > 0) {
      // Menu has hours today but is not currently available - show today's time ranges
      return {
        isAvailable: false,
        timeInfo
      };
    } else if (todayAvailability?.type === 'open-24') {
      // This shouldn't happen if the menu is open 24 hours, but just in case
      return {
        isAvailable: false,
        timeInfo: 'Available all day'
      };
    }
    
    // Fallback: show next available time
    const nextAvailable = findNextAvailable(menuAvailability, currentDay);
    return {
      isAvailable: false,
      timeInfo: nextAvailable
    };
  }
};

// Find the first available menu or the one that will be available soonest
export const getDefaultMenu = (
  menuNames: string[],
  currentDay: string,
  currentHour: number,
  currentMinute: number,
  currentAmPm: 'AM' | 'PM'
): string => {
  // First, try to find an available menu
  for (const menuName of menuNames) {
    if (isMenuAvailable(menuName, currentDay, currentHour, currentMinute, currentAmPm)) {
      return menuName;
    }
  }
  
  // If no menus are available, return the first one (could be enhanced to find next available)
  return menuNames[0] || 'Breakfast menu';
};