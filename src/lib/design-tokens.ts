/**
 * Canary Design System - Design Tokens
 * 
 * These tokens match the component library design system
 * and are used throughout the Food & Beverage prototype
 */

export const colors = {
  // Base colors
  white: "#FFFFFF",
  black1: "#000000",
  black2: "#333333", 
  black3: "#666666",
  black4: "#999999",
  black5: "#CCCCCC",
  black6: "#E5E5E5",
  black7: "#F0F0F0",
  black8: "#FAFAFA",

  // Brand colors
  blueDark1: "#2858C4", // Primary button color
  blueCanary1: "#1C91FA",

  // Status colors
  red1: "#E40046",
  pink1: "#F16682",
  success: "#008040",
  warning: "#FAB541",

  // Neutral colors for borders
  neutral200: "#E5E5E5",
} as const;

export const typography = {
  fontFamily: {
    primary: '"Roboto", sans-serif',
  },
  fontSize: {
    captionSm: "0.625rem",     // 10px
    caption: "0.75rem",        // 12px 
    bodySm: "0.875rem",        // 14px
    body: "1rem",              // 16px
    subtitle: "1.125rem",      // 18px
    title: "1.5rem",           // 24px
  },
  lineHeight: {
    captionSm: "1rem",         // 16px
    caption: "1.125rem",       // 18px
    bodySm: "1.375rem",        // 22px
    body: "1.5rem",            // 24px
    subtitle: "1.75rem",       // 28px
    title: "2.25rem",          // 36px
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
  },
} as const;

export const spacing = {
  0: "0",
  1: "0.25rem",    // 4px
  2: "0.5rem",     // 8px
  3: "0.75rem",    // 12px
  4: "1rem",       // 16px
  6: "1.5rem",     // 24px
  8: "2rem",       // 32px
  10: "2.5rem",    // 40px
} as const;

export const borderRadius = {
  sm: "2px",
  default: "4px", 
  lg: "8px",
  xl: "12px",
} as const;

export const shadows = {
  md: "0 8px 16px 0 rgba(0, 0, 0, 0.16)",
} as const;