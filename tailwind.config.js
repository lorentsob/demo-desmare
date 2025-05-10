module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#ffffff',
        'text-secondary': '#8a8f98',
        accent: {
          DEFAULT: '#5E6AD2',
          hover: '#6E7AE2',
        },
        border: '#1F2128',
        'card-bg': '#111318',
        // Construction page theme
        construction: {
          bg: '#121212',
          text: '#f8f8ff',
          'text-secondary': 'rgba(248, 248, 255, 0.8)',
          accent: '#f8f8ff',
          border: '#f8f8ff',
          'accent-transparent': 'rgba(248, 248, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}