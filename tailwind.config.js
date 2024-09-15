/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: '#7262AF',
        'primary-dark': '#3A3D64',
        'primary-light': '#E5E0FF',
        secondary: '#DEFEE6',
        'black-light': '#1C315E',
        'white-light': '#F5F1F6',
        'bg-light': '#F2EFFF',
        'border-light': '#BEB3EB',

        google: {
          'text-gray': '#3c4043',
          // "button-blue": "#7586FF",
          // "button-blue-hover": "#5195ee",
          'button-blue': '#8b7bcb',
          'button-blue-hover': '#7262AF',
          'button-dark': '#202124',
          'button-dark-hover': '#555658',
          'button-border-light': '#dadce0',
          'logo-blue': '#4285f4',
          'logo-green': '#34a853',
          'logo-yellow': '#fbbc05',
          'logo-red': '#ea4335',
        },
      },
      screens: {
        xsm: '370px',
        xlg: '1536px',
        mlg: '1460px',
      },
      spacing: {
        'nav-height': 'calc(100dvh - 2rem)',
      },
    },
  },
  plugins: [],
});
