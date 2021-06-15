const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#28292C',
      white: '#ffffff',
      gray: {
        200: '#F8F9FA',
        300: '#E9ECEF',
        400: '#DEE2E6',
        500: '#CED4DA',
        600: '#ADB5BD',
        700: '#6C757D',
        800: '#495057',
        900: '#343A40',
      },
      blue: {
        100: '#F8FDFF',
        200: '#ECFBFF',
        300: '#B1E6F5',
        400: '#1CB4E1',
        500: '#009AC8',
        600: '#1889AF',
        700: '#006B8F',
      },
      green: {
        500: '#70C683',
        600: '#5BBF78',
        700: '#529E68',
      },
      red: {
        300: '#F9A2A2',
        400: '#F37C7C',
        500: '#DE6060',
        600: '#C64A4A',
        700: '#B40C0C',
      },
      midnight: {
        200: '#2B5362',
        300: '#174150',
        400: '#093442',
        500: '#042631',
      },
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
