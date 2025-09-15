/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 53%, 80%, 100%': {
            transform: 'translateY(0)'
          },
          '40%, 43%': {
            transform: 'translateY(-15px)'
          },
          '70%': {
            transform: 'translateY(-7px)'
          },
          '90%': {
            transform: 'translateY(-3px)'
          }
        }
      }
    },
  },
  plugins: [],
};