/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'background' : 'var(--background-color)',
        'font' : 'var(--font-color)'
      },
      fontFamily : {
        'redhat-regular' : ['Red Hat Regular'],
        'redhat-bold' : ['Red Hat Bold'],
        'clashgrotesk-semi' : ['Clash Grotesk Semibold'],
        'clashgrotesk-bold' : ['Clash Grotesk Bold']
      },
      fontSize : {
        '10xl' : '10rem',
        '12xl' : '14rem',
      },
      borderRadius: {
        '60xl' : '80px',
      },
      borderWidth: {
        '12xl' : '16px',
      },
      width: {
        '400px' : '500px'
      },
    },
  },
  experimental : {
    applyComplexClasses : true,
  },
  plugins: [],
}