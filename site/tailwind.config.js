/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'teal': '#40e0d0',
        'teal-light': '#65e6da',
        'teal-dark': '#2cbbad',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'arabic': ['Noto Naskh Arabic', 'Lexend', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        loading: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        gradient: {
          '0%': { backgroundPosition: '200% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      animation: {
        loading: 'loading 1.5s infinite',
        gradient: 'gradient 2s linear infinite',
      },
      backgroundSize: {
        'gradient-size': '200% 100%',
      },
    },
  },
  plugins: [],
}