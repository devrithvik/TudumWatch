/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*"
  ],
  theme: {
    extend: {
      fontFamily: {
        'pee' : ['Rubik Pixels', 'serif'] 
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

