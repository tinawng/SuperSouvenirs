module.exports = {
  darkMode: false,
  theme: {
    transitionDuration: {
      DEFAULT: '300ms',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#FFF',
      dark: '#4B4B4B',
      light: '#F5F5F5',
      gray: '#E4E1DE',
      red: '#DD3C45',
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
        '18': '4.5rem',
        'fit': 'fit-content',
      },
      width: {
        '18': '4.5rem'
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
