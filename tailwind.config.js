/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
      },
      textColor: {
        white: '#e0e0e0',
        black: '#121212'
      }
    },
  },
  plugins: [],
}

