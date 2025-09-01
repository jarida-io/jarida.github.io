/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Jarida Brand Colors (EXACT VALUES)
        'jarida-purple': '#8C52FF',
        'jarida-charcoal': '#171616',
        'jarida-white': '#fff9f9',
        'light-grey': '#F5F5F5',
        'accent-white': '#FFFFFF',
        
        // CSS Variable Colors for Dark Mode
        'color-primary': 'var(--color-primary)',
        'color-text-primary': 'var(--color-text-primary)',
        'color-text-secondary': 'var(--color-text-secondary)',
        'color-background-primary': 'var(--color-background-primary)',
        'color-background-secondary': 'var(--color-background-secondary)',
        'color-border': 'var(--color-border)',
        
        // Semantic color mapping
        primary: {
          50: '#f5f1ff',
          100: '#ede5ff',
          200: '#dccfff',
          300: '#c4abff',
          400: '#a479ff',
          500: '#8C52FF', // Jarida Purple
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        charcoal: {
          50: '#f8f8f8',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b4b4b4',
          400: '#989898',
          500: '#7c7c7c',
          600: '#626262',
          700: '#4e4e4e',
          800: '#3a3a3a',
          900: '#171616', // Jarida Charcoal
        }
      },
      fontFamily: {
        'comfortaa': ['Comfortaa', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        'h5': ['1.25rem', { lineHeight: '1.4' }],
        'h6': ['1.125rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSubtle: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0, -10px, 0)' },
          '70%': { transform: 'translate3d(0, -5px, 0)' },
          '90%': { transform: 'translate3d(0, -2px, 0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'jarida': '0 4px 20px rgba(140, 82, 255, 0.15)',
        'jarida-lg': '0 8px 40px rgba(140, 82, 255, 0.2)',
      }
    },
  },
  plugins: [],
}