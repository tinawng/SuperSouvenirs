module.exports = {
  darkMode: false,
  theme: {
    transitionDuration: {
      DEFAULT: '200ms',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',      // h1
      white: '#FFF',      // background
      dark: '#4B4B4B',    // text
      light: '#F5F5F5',   // background-alt
      gray: '#E4E1DE',
      red: '#DD3C45',     // button & accent
      orange: '#E7793D',
      yellow: '#F9BC32',
      green: '#43AD67',
      blue: '#447DD9',
    },
    extend: {
      fontSize: {
        '2xs': '.65rem',
      },
      height: {
        'fit': 'fit-content',
        '18': '4.5rem',
      },
      width: {
        'fit': 'fit-content',
        '18': '4.5rem',
      },
      zIndex: {
        '-1': '-1',
      }
    },
    screens: {
      'portrait': { 'raw': '(orientation: portrait)' },
      'md': '1081px',
      'lg': '1920px',
      'xl': '2560px',
    },
  },
  variants: {
  },
  plugins: [],
}
