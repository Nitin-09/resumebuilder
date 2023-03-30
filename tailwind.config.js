/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('/public/banner-bg.png')",
      },
      fontFamily:{
       'pacifico':['Pacifico', 'cursive'],
       'oleo':['Oleo Script', 'cursive'],
       'edu': ['Edu NSW ACT Foundation', 'cursive']
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