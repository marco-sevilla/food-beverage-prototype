/**
 * Canary Design System - Design Tokens
 *
 * Extracted from the Canary UI design system.
 * Source: /Documents/Canary/canary/frontend/packages/canary-ui/
 *
 * These tokens should be used throughout all components to maintain
 * visual consistency with the main Canary product.
 */

// ============================================================================
// COLORS
// ============================================================================

/**
 * Status Colors
 * Used for success, warning, and error states
 */
export const colors = {
  // Status colors (aliases for convenience)
  ok: "#008040",
  success: "#008040",
  warning: "#FAB541",
  danger: "#E40046",
  error: "#E40046",

  // Base colors - Figma token: $color-white
  colorWhite: "#FFFFFF",
  white: "#FFFFFF", // Alias for convenience

  // Black scale (grayscale) - Figma tokens: $color-black-1 through $color-black-8
  colorBlack1: "#000000", // $color-black-1
  colorBlack2: "#333333", // $color-black-2
  colorBlack3: "#666666", // $color-black-3
  colorBlack4: "#999999", // $color-black-4
  colorBlack5: "#CCCCCC", // $color-black-5
  colorBlack6: "#E5E5E5", // $color-black-6
  colorBlack7: "#F0F0F0", // $color-black-7
  colorBlack8: "#FAFAFA", // $color-black-8

  // Canary Blue (Light) - Brand color - Figma tokens: $color-blue-canary-1 through $color-blue-canary-5
  colorBlueCanary1: "#1C91FA", // $color-blue-canary-1
  colorBlueCanary2: "#55ACFB", // $color-blue-canary-2
  colorBlueCanary3: "#8DC8FC", // $color-blue-canary-3
  colorBlueCanary4: "#C6E3FE", // $color-blue-canary-4
  colorBlueCanary5: "#E8F4FF", // $color-blue-canary-5

  // Blue Dark - Primary action color - Figma tokens: $color-blue-dark-1 through $color-blue-dark-5
  colorBlueDark1: "#2858C4", // $color-blue-dark-1 - Primary button color
  colorBlueDark2: "#5E82D3", // $color-blue-dark-2
  colorBlueDark3: "#93ABE1", // $color-blue-dark-3
  colorBlueDark4: "#C9D5F0", // $color-blue-dark-4
  colorBlueDark5: "#EAEEF9", // $color-blue-dark-5

  // Pink - Figma tokens: $color-pink-1 through $color-pink-5
  colorPink1: "#F16682", // $color-pink-1
  colorPink2: "#F48CA1", // $color-pink-2
  colorPink3: "#F8B2C0", // $color-pink-3
  colorPink4: "#FBD9E0", // $color-pink-4
  colorPink5: "#FEF0F3", // $color-pink-5

  // Light Green - Figma tokens: $color-light-green-1 through $color-light-green-5
  colorLightGreen1: "#008040", // $color-light-green-1
  colorLightGreen2: "#339966", // $color-light-green-2
  colorLightGreen3: "#66B38C", // $color-light-green-3
  colorLightGreen4: "#99CCB3", // $color-light-green-4
  colorLightGreen5: "#CCE6D9", // $color-light-green-5

  // Wheat (Orange/Yellow) - Figma tokens: $color-wheat-1 through $color-wheat-5
  colorWheat1: "#FAB541", // $color-wheat-1
  colorWheat2: "#FBC770", // $color-wheat-2
  colorWheat3: "#FCDAA0", // $color-wheat-3
  colorWheat4: "#FEECCF", // $color-wheat-4
  colorWheat5: "#FFF8EC", // $color-wheat-5

  // Purple - Figma tokens: $color-purple-1 through $color-purple-5
  colorPurple1: "#3304AD", // $color-purple-1
  colorPurple2: "#723DFC", // $color-purple-2
  colorPurple3: "#9D7AFA", // $color-purple-3
  colorPurple4: "#CAB8F8", // $color-purple-4
  colorPurple5: "#E3DCF6", // $color-purple-5

  // Red - Figma tokens: $color-red-1 through $color-red-5
  colorRed1: "#E40046", // $color-red-1
  colorRed2: "#EB4074", // $color-red-2
  colorRed3: "#F59FBA", // $color-red-3
  colorRed4: "#F8BFD1", // $color-red-4
  colorRed5: "#FCE6ED", // $color-red-5
} as const;