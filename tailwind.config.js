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
        '10xl' : '10rem'
      }
    },
  },
  plugins: [],
}