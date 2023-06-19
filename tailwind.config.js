/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkest: '#232323', // Replace with your desired color value
      },
      fontFamily: {
        anonymous: ['"Anonymous Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

