module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary, Secondary and Accent colors - Main brand colors
        primary: {
          50: '#E6F5EB',
          100: '#C2E6D1',
          200: '#9AD6B5',
          300: '#71C799',
          400: '#53BA85',
          DEFAULT: '#08A045', // Main brand green - Used for primary buttons and links
          600: '#079140',
          700: '#067F38',
          800: '#056D30',
          900: '#034F23',
        },

        // Secondary colors - Used for secondary actions
        secondary: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          DEFAULT: '#2196F3', // Secondary blue - Used for secondary buttons and decorative elements
          600: '#1E88E5',
          700: '#1976D2',
          800: '#1565C0',
          900: '#0D47A1',
        },

        // Accent colors - Used for highlights and attention-grabbing elements
        accent: {
          50: '#FFF5E5',
          100: '#FFE6BF',
          200: '#FFD699',
          300: '#FFC673',
          400: '#FFBA57',
          DEFAULT: '#FF9505', // Orange accent - Used for call-to-action elements
          600: '#F08A00',
          700: '#E07A00',
          800: '#D06B00',
          900: '#B15000',
        },

        // Base colors - For text and backgrounds
        text: {
          DEFAULT: '#1A2634', // Main text color
          secondary: 'rgba(26, 38, 52, 0.75)', // Secondary text color
          muted: 'rgba(26, 38, 52, 0.6)', // Muted text for less important content
          light: '#FFFFFF', // White text for dark backgrounds
        },

        // Background colors
        background: '#FFFFFF', // Main background color
        foreground: '#1A2634', // Main text color

        // Construction page theme
        construction: {
          bg: '#F8F9FA',
          text: '#1A2634',
          'text-secondary': 'rgba(26, 38, 52, 0.75)',
          'text-light': '#F8F9FA',
          accent: '#08A045', // Updated to match primary
          border: 'rgba(26, 38, 52, 0.08)',
          'accent-transparent': 'rgba(8, 160, 69, 0.08)', // Updated to match primary
        },

        bg: {
          DEFAULT: '#FFFFFF', // Main background
          light: '#F8F9FA', // Light gray background for section differentiation
          dark: '#1A2634', // Dark background for contrast sections
        },

        // UI element colors - For consistent component styling
        ui: {
          border: 'rgba(26, 38, 52, 0.08)', // Standard border color
          input: '#F8F9FA', // Input background
          'input-border': 'rgba(26, 38, 52, 0.12)', // Input border color
          'focus-ring': 'rgba(8, 160, 69, 0.2)', // Focus ring color (based on primary)
          'hover-bg': 'rgba(8, 160, 69, 0.05)', // Hover background (based on primary)
          'card-bg': '#FFFFFF', // Card background
          'section-bg': '#F8F9FA', // Section background
        },

        // Status colors - For notifications and alerts
        status: {
          success: '#08A045', // Success messages (matches primary)
          warning: '#FF9505', // Warning messages (uses accent-color)
          error: '#D32F2F', // Error messages
          info: '#2196F3', // Information messages (matches secondary)
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        section:
          '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        button: '0 2px 4px 0 rgba(8, 160, 69, 0.15)', // Updated to use primary color
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #08A045 0%, #067F38 100%)', // Updated to use primary color
        'gradient-primary-light':
          'linear-gradient(135deg, rgba(8, 160, 69, 0.1) 0%, rgba(6, 127, 56, 0.05) 100%)', // Updated to use primary color
        'gradient-accent-color': 'linear-gradient(135deg, #FF9505 0%, #E07A00 100%)', // Renamed to keep the gradient but not have it used by default
      },
    },
  },
  plugins: [],
};
