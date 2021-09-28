module.exports = {
  darkMode: false,
  theme: {
    transitionDuration: {
      DEFAULT: '200ms',
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
      },
      height: {
        '18': '4.5rem',
        'fit': 'fit-content',
      },
      width: {
        '18': '4.5rem'
      }
    },
    screens: {
      'portrait': { 'raw': '(orientation: portrait)' },
      // 'sm': '1024px',
      'md': '1081px',
      'lg': '1920px',
      'xl': '2560px',
    },
  },
  variants: {
  },
  plugins: [],
}
