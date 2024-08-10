/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary': '#7262AF',
        'primary-dark': '#3A3D64',
        'primary-light': '#E5E0FF',
        'secondary': '#DEFEE6',
        'black-light': "#1C315E",
        'white-light': "#F5F1F6",
        'bg-light': "#F2EFFF",

        google: {
          "text-gray": "#3c4043",
          // "button-blue": "#7586FF",
          // "button-blue-hover": "#5195ee",
          "button-blue": "#8b7bcb",
          "button-blue-hover": "#7262AF",
          "button-dark": "#202124",
          "button-dark-hover": "#555658",
          "button-border-light": "#dadce0",
          "logo-blue": "#4285f4",
          "logo-green": "#34a853",
          "logo-yellow": "#fbbc05",
          "logo-red": "#ea4335",
        },
      },
      screens: {
        'xsm': '370px',
        'xlg': '1536px',
      }
    },
  },
  plugins: [],
};
