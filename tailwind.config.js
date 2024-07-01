/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        'charlie-brown': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%2397939d' fill-opacity='0.07'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      },
      backgroundColor: {
        lightWhite: '#f7f8fa',
        lightDark: '#1c1f2f',
      },
      colors: {
        salmon: '#e56952'
      },
      textColor: {
        white: '#e0e0e0',
        black: '#121212',
      },
      fontFamily: {
        heading: 'Times New Roman',
        arial: 'Arial',
      },
      fontSize: {
        heading: [
          '2.5rem', {
            lineHeight: '1rem ',
          } 
        ]
      },
    },
  },
  plugins: [],
}

