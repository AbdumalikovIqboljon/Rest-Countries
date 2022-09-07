/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'lighterblack': '#111517',
    },
    extend: {
      'headerShadow': '0px 2px 4px rgba(0, 0, 0, 0.0562443)',
      'cardShadow': '0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)',
    },
  },
  plugins: [],
}