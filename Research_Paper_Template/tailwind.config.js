/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['TT Interphases', 'sans-serif'], // Default: Body text and Titles
      },
      colors: {
        'pitch-black': '#000',         // Define pitch black color
        'dark-page-black': '#111',    // Define dark page background color
        'dark-text': '#ddd',          // Define brighter dark text color
      },
    },
  },
  plugins: [],
}
