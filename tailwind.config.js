/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      borderRadius: {
        radiusAdded: '6rem'
      },

      colors: {
        lightRed: 'hsl(356, 100%, 66%)',
        veryLightRed: 'hsl(355, 100%, 74%)',
        veryDarkBlue: 'hsl(208, 49%, 24%)',

        white: 'hsl(0, 0%, 100%)',
        grayishBlue: 'hsl(240, 2%, 79%)',
        veryDarkGrayishBlue: 'hsl(207, 13%, 34%)',
        veryDarkBlackBlue: 'hsl(240, 10%, 16%)',

        veryLightRedG: 'hsl(13, 100%, 72%)',
        lightRedG: 'hsl(353, 100%, 62%)',

        veryDarkGrayBlue: 'hsl(237, 17%, 21%)',
        veryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)'
      },

      fontFamily: {
        overpass: 'Overpass',
        ubuntu: 'Ubuntu' 
      },

      height: {
        '30rem': '30rem',
        '70rem': '70rem'
      },

      screens: {
        'surface': '420px'
      },

      spacing: {
        '5rem': '23rem',
        '30rem': '30rem'
      }
    },
  },
  plugins: [],
}

