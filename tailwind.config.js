/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash-display': ['ClashDisplay', ...defaultTheme.fontFamily.sans],
        satoshi: ['Satoshi', ...defaultTheme.fontFamily.sans],
        'stix-two-text': ['STIX Two Text', ...defaultTheme.fontFamily.sans],
        baskerville: ['Baskervville', ...defaultTheme.fontFamily.sans],
        bellefair: ['Bellefair', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'content-color': '#333333',
        'menu-color': '#292929',
      },
      fontSize: {
        24: '24px',
      },
      lineHeight: {
        48: '48px',
        52: '52px',
      },
      screens: {
        xxs: {
          min: '250px',
          max: '480px',
        },
        xms: {
          min: '481px',
          max: '767px',
        },
        smm: {
          min: '768px',
          max: '900px',
        },
        lgs: {
          min: '901px',
          max: '1100px',
        },
        xlgs: {
          min: '1279px',
          max: '1282px',
        },
      },
      backgroundImage: {
        'event-slider': "url('/images/bg_redefined.png')",
        'event-sub-img': "url('/images/bg_monalisa.png')",
        'event-slider_desktop': "url('/images/bg_redefined_desktop.png')",
        'event-sub_desktop': "url('/images/bg_monalisa_desktop.png')",
      },
    },
  },
  plugins: [],
}
