const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'modern': {
          'primary': '#6366f1', // Indigo
          'secondary': '#8b5cf6', // Purple
          'accent': '#06b6d4', // Cyan
          'success': '#10b981', // Emerald
          'warning': '#f59e0b', // Amber
          'error': '#ef4444', // Red
          'dark': '#0f172a', // Slate 900
          'darker': '#020617', // Slate 950
          'light': '#f8fafc', // Slate 50
          'muted': '#64748b', // Slate 500
          'border': '#334155', // Slate 700
        },
        'background': '#0f172a',
        'surface': '#1e293b',
        'primary': '#6366f1',
        'secondary': '#8b5cf6',
        'accent': '#06b6d4',
        'success': '#10b981',
        'error': '#ef4444',
        'muted': '#64748b',
        'darker': '#020617',
      },
      fontFamily: {
        'modern': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide': 'slide 20s linear infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #6366f1, 0 0 10px #6366f1, 0 0 15px #6366f1' },
          '100%': { boxShadow: '0 0 10px #6366f1, 0 0 20px #6366f1, 0 0 30px #6366f1' },
        },
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'pulse-neon': {
          '0%, 100%': { 
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            opacity: '1'
          },
          '50%': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
            opacity: '0.8'
          },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-primary': '0 0 5px #6366f1, 0 0 10px #6366f1, 0 0 15px #6366f1',
        'neon-secondary': '0 0 5px #8b5cf6, 0 0 10px #8b5cf6, 0 0 15px #8b5cf6',
        'neon-accent': '0 0 5px #06b6d4, 0 0 10px #06b6d4, 0 0 15px #06b6d4',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-modern': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'gradient-accent': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
      },
    },
  },
  plugins: [],
} 