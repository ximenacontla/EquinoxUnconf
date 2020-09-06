const {
  colors
} = require('tailwindcss/defaultTheme');


module.exports = {
  purge: {
    enabled: false
  },
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',
      'primary': {
        50: '#F2F2F2',
        100: '#E6E6E6',
        200: '#BFBFBF',
        300: '#999999',
        400: '#4D4D4D',
        500: '#000000',
        600: '#000000',
        700: '#000000',
        800: '#000000',
        900: '#000000'
      },
      'secondary': {
        100: '#E6ECEF',
        200: '#C1D0D6',
        300: '#9CB3BE',
        400: '#527A8D',
        500: '#08415C',
        600: '#073B53',
        700: '#052737',
        800: '#041D29',
        900: '#02141C',
      },
      'accent': {
        100: '#F9E7EC',
        200: '#EFC3CF',
        300: '#E59EB1',
        400: '#D25677',
        500: '#BF0D3D',
        600: '#AC0C37',
        700: '#730825',
        800: '#56061B',
        900: '#390412',
      },
      'black': {
        100: '#EBEAE9',
        200: '#CDCBC9',
        300: '#AFABA8',
        400: '#726C67',
        500: '#362D26',
        600: '#312922',
        700: '#201B17',
        800: '#181411',
        900: '#100E0B',
      },
      'grey': {
        100: '#FAFBFC',
        200: '#F2F6F6',
        300: '#EBF1F1',
        400: '#DBE6E7',
        500: '#CCDBDC',
        600: '#B8C5C6',
        700: '#7A8384',
        800: '#5C6363',
        900: '#3D4242',
      },
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
    fontFamily: {
      display: ['"impact_label_reversedregular"', 'sans-serif'],
      body: ['DM Mono', 'monospace']
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),

  ],
  future: {
    removeDeprecatedGapUtilities: true //https://tailwindcss.com/docs/upcoming-changes
  },
}