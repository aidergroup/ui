const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#28292C',
      white: '#ffffff',
      gray: {
        100: '#FAFBFC',
        200: '#F6F8FA',
        300: '#E1E4E8',
        400: '#D1D5DA',
        500: '#959DA5',
        600: '#6A737D',
        700: '#586069',
        800: '#444D56',
        900: '#2F363D',
      },
      blue: {
        100: '#CCEBF4',
        200: '#99D7E9',
        300: '#66C2DE',
        400: '#33AED3',
        500: '#009AC8',
        600: '#008BB4',
        700: '#006C8C',
        800: '#004D64',
        900: '#002E3C',
      },
      red: '#ED5454',
    },
    fontFamily: {
      futura: ['Futura-PT', 'sans-serif'],
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    opacity: ['active', 'hover', 'focus', 'disabled'],
    backgroundColor: ['active', 'hover', 'focus', 'disabled', 'group-hover'],
    borderStyle: ['active', 'hover', 'focus', 'disabled', 'group-hover'],
    textColor: ['active', 'hover', 'focus', 'disabled'],
    cursor: ['active', 'hover', 'focus', 'disabled'],
    ringWidth: ['hover', 'focus', 'active'],
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.inset-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      })
    }),
  ],
}
