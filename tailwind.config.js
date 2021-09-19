module.exports = {
  darkMode: false,
  theme: {
    transitionDuration: {
      DEFAULT: '250ms',
    },
    extend: {
      colors: {
        brand: {
          'primary': '#181818',
          'secondary-dark': '#F3F3F3',
          'secondary': '#FFF',
        }
      },
      fontSize: {
        '2xs': '.65rem',
        '3xs': '.50rem',
      }
    },
    screens: {
      'portrait': { 'raw': '(orientation: portrait)' },
      // 'sm': '1024px',
      'md': '1081px',
      'lg': '1920px',
    },
  },
  variants: {
  },
  plugins: [],
}
