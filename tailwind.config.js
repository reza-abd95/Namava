/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        iranyekanBold: "iranyekanBold",
        iranyekanRegular: "iranyekanRegular",
      },
      animation: {
        'closeMobileMenu': 'closemobilemenu 300ms linear',
        'openMobileMenu': 'openmobilemenu 300ms linear',
        'myfirst': 'myfirst 0.5s',
        'animName':'animName 0.5s linear'
      },
      keyframes: {
        closemobilemenu: {
          '0%': { translate: '0px' },
          '100%': { translate: '250px' },
        },
        openmobilemenu : {
          '0%': { translate: '250px' },
          '100%': { translate: '0px' },
        },
        animName:{
          '0%':{
            transform: 'rotate(0deg)'
           },
        '50%':{
            transform: 'rotate(30deg)'
           },
          '100%':{
             transform: 'rotate(0deg)'}
        },
        myfirst: {
          '0%': { backgroundColor: 'transparent', left: '0', top: '0' },
          '30%': { backgroundColor: 'transparent', left: '0', top: '4px' },
          '100%': { backgroundColor: 'transparent', left: '0', top: '0' },
        },
      }
    },
    screens: {
      'ms': '360px',
      'ml': '500px',
      'tab': '800px',
      'des': '1280px',
      'large': '1920px',
    },
  },
  plugins: [],
}



