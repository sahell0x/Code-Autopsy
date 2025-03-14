/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /.*/, // This regex matches all class names
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
};
