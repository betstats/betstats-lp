import { colors } from './src/theme/colors';
const defaultColors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...defaultColors,
      ...colors,
    },
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        rubik: ['var(--font-rubik)'],
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(78deg, #1E8327 0%, #85BC8A 99.48%)',
        'hero-background': "url('/images/hero-background.png')",
      },
    },
  },
  plugins: [],
};
