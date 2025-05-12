// Theme Controller - Central place to manage all UI theme settings
// This can be imported and used across the application for consistency

// Main branding colors
export const brand = {
  // Primary accent - Forest Green
  primary: {
    50: "#E8F5E9", // Very light green - Card backgrounds, section backgrounds
    100: "#C8E6C9", // Light green - Icon backgrounds
    200: "#A5D6A7", // Medium light green - Secondary elements
    300: "#81C784", // Medium green - Tertiary elements
    400: "#66BB6A", // Medium dark green - Active states
    main: "#388E3C", // Main brand green - Primary buttons and links
    600: "#2E7D32", // Dark green - Secondary elements
    700: "#1B5E20", // Darker green - Hover states
    800: "#0A3C0A", // Very dark green - Text on light backgrounds
    900: "#042604", // Extremely dark green - Text on light backgrounds
  },

  // Secondary branding - Blue
  secondary: {
    50: "#E3F2FD", // Very light blue - Card backgrounds
    100: "#BBDEFB", // Light blue - Icon backgrounds
    main: "#2196F3", // Main blue - Secondary buttons/links
    700: "#1976D2", // Dark blue - Hover states
  },

  // Tertiary branding - Earth tones
  tertiary: {
    50: "#EFEBE9", // Very light brown - Card backgrounds
    100: "#D7CCC8", // Light brown - Icon backgrounds
    main: "#795548", // Main brown - Tertiary elements
    700: "#5D4037", // Dark brown - Hover states
  },
};

// Semantic UI - These reference the brand colors but are easier to use in components
export const ui = {
  // Text colors
  text: {
    primary: "#1A2634", // Main text color
    secondary: "rgba(26, 38, 52, 0.75)", // Secondary text color
    light: "#FFFFFF", // Light text color (for dark backgrounds)
  },

  // Element backgrounds
  background: {
    page: "#FFFFFF", // Main page background
    card: "#FFFFFF", // Card background
    input: "#F8F9FA", // Input background
    section: {
      light: "#F8F9FA", // Light section background
      dark: "#1A2634", // Dark section background
      accent: "#E8F5E9", // Accent section background (using primary.50)
    },
  },

  // Border colors
  border: {
    default: "rgba(26, 38, 52, 0.08)", // Default border color
    input: "rgba(26, 38, 52, 0.12)", // Input border color
    focus: "rgba(56, 142, 60, 0.2)", // Focus border color (using primary main with opacity)
    card: "rgba(26, 38, 52, 0.08)", // Card border color
  },

  // Icon backgrounds
  icon: {
    bg: "#C8E6C9", // Icon background (using primary.100)
    color: "#388E3C", // Icon color (using primary.main)
  },

  // Shadow effects
  shadow: {
    card: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
    section:
      "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
    button: "0 2px 4px 0 rgba(56, 142, 60, 0.15)",
  },

  // Gradients
  gradient: {
    accent: "linear-gradient(135deg, #388E3C 0%, #1B5E20 100%)",
    accentLight:
      "linear-gradient(135deg, rgba(56, 142, 60, 0.1) 0%, rgba(27, 94, 32, 0.05) 100%)",
  },

  // Status colors
  status: {
    success: {
      main: "#388E3C",
      light: "rgba(56, 142, 60, 0.08)",
    },
    warning: {
      main: "#F57C00",
      light: "rgba(245, 124, 0, 0.08)",
    },
    error: {
      main: "#D32F2F",
      light: "rgba(211, 47, 47, 0.08)",
    },
  },
};

// Usage examples:
// import { brand, ui } from '@/lib/theme';
// <div style={{ backgroundColor: brand.primary[50] }}>...</div>
// <div style={{ color: ui.text.secondary, borderColor: ui.border.default }}>...</div>
