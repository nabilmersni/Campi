/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        "nunito": ["nunito", "sans-serif"]
      },
      colors: {
        'primary': '#7262AF',
        'primary-dark': '#3A3D64',
        'primary-light': '#E5E0FF',
        'secondary': '#DEFEE6',
        'black-light': "#1C315E"
      },
    },
  },
  plugins: [],
};
