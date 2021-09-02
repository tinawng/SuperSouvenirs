module.exports = {
  darkMode: false,
  theme: {
    transitionDuration: {
      DEFAULT: '250ms',
    },
    extend: {
      colors: {
        brand: {
          'primary': '#333333', // DF4F4F c8c8c8 333333
          'primary-light': '#E36665',
          'secondary': '#F2F2F3', // F5DED4 181a1c F2F2F3
        }
      },
      fontSize: {
        '2xs': '.60rem',
      },
    },
    screens: {
      'portrait': {'raw': '(orientation: portrait)'},
      // 'sm': '1024px',
      'md': '1024px',
      'lg': '1920px',
    },
  },
  variants: {
  },
  plugins: [],
}
