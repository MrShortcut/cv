/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundColor: {
        lightWhite: '#f7f8fa',
        lightDark: '#1c1f2f',
      },
      colors: {},
      textColor: {
        white: '#e0e0e0',
        black: '#121212',
      }
    },
  },
  plugins: [],
}

