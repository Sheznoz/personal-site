import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,astro}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['SpaceMono', defaultTheme.fontFamily.mono],
      }
    },
  },
  theme: {
    screens: {

      'sm': '0px',

      'md': '640px',

      'lg': '768px',

      'xl': '1024px',

      '2xl': '1280px',

    }
  },
  plugins: [],
};
