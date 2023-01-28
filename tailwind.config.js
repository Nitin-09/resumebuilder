/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       'heading':['Pacifico', 'cursive'],
       'navbar':['Oleo Script', 'cursive'],
      },
      colors: {
        'primary': '#d3d1ff',
        'secondary': '#6c63ff',
      },
      animation: {
        fade: 'fadeOut 1s ease-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0},
        },
      }),
    },
  },
  plugins: [],
}