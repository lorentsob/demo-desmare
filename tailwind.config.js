module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors - Change these to adjust the entire site color scheme
        background: '#FFFFFF',
        foreground: '#1A2634',
        'text-secondary': 'rgba(26, 38, 52, 0.75)',
        
        // Primary accent colors - Forest Green - Main brand color
        accent: {
          50: '#E8F5E9',  // Very light green - Used for card backgrounds
          100: '#C8E6C9', // Light green - Used for icon backgrounds
          200: '#A5D6A7', // Medium light green
          300: '#81C784', // Medium green
          400: '#66BB6A', // Medium dark green
          DEFAULT: '#388E3C', // Main brand green - Used for primary buttons and links
          600: '#2E7D32', // Dark green
          700: '#1B5E20', // Darker green - Used for hover states
          800: '#0A3C0A', // Very dark green
          900: '#042604', // Extremely dark green
        },
        
        // Secondary colors - Blue Accent - Used for secondary actions
        blue: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          DEFAULT: '#2196F3',
          600: '#1E88E5',
          700: '#1976D2',
          800: '#1565C0',
          900: '#0D47A1',
        },
        
        // Tertiary colors - Earth Accent - Used for tertiary elements
        earth: {
          50: '#EFEBE9',
          100: '#D7CCC8',
          200: '#BCAAA4',
          300: '#A1887F',
          400: '#8D6E63',
          DEFAULT: '#795548',
          600: '#6D4C41',
          700: '#5D4037',
          800: '#4E342E',
          900: '#3E2723',
        },
        
        // UI element colors - Derive from the base/accent colors but can be adjusted independently
        border: 'rgba(26, 38, 52, 0.08)',
        'card-bg': '#FFFFFF',
        'input-bg': '#F8F9FA',
        'input-border': 'rgba(26, 38, 52, 0.12)',
        'input-focus': 'rgba(56, 142, 60, 0.2)',
        
        // Semantic UI elements - Use these in components for consistent styling
        ui: {
          'card-bg': '#FFFFFF',
          'card-border': 'rgba(26, 38, 52, 0.08)',
          'section-bg': '#F8F9FA',
          'section-accent-bg': '#E8F5E9',
          'icon-bg': '#C8E6C9',
          'hover-bg': 'rgba(56, 142, 60, 0.05)',
          'focus-ring': 'rgba(56, 142, 60, 0.2)',
        },
        
        // Section backgrounds
        'section-bg': {
          light: '#F8F9FA',
          DEFAULT: '#FFFFFF',
          dark: '#1A2634',
        },
        
        // Status colors
        success: {
          DEFAULT: '#388E3C',
          light: 'rgba(56, 142, 60, 0.08)',
        },
        warning: {
          DEFAULT: '#F57C00',
          light: 'rgba(245, 124, 0, 0.08)',
        },
        error: {
          DEFAULT: '#D32F2F',
          light: 'rgba(211, 47, 47, 0.08)',
        },
        
        // Construction page theme
        construction: {
          bg: '#F8F9FA',
          text: '#1A2634',
          'text-secondary': 'rgba(26, 38, 52, 0.75)',
          'text-light': '#F8F9FA',
          accent: '#388E3C',
          border: 'rgba(26, 38, 52, 0.08)',
          'accent-transparent': 'rgba(56, 142, 60, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'section': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'button': '0 2px 4px 0 rgba(56, 142, 60, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #388E3C 0%, #1B5E20 100%)',
        'gradient-accent-light': 'linear-gradient(135deg, rgba(56, 142, 60, 0.1) 0%, rgba(27, 94, 32, 0.05) 100%)',
      },
    },
  },
  plugins: [],
}