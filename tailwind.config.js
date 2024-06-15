/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      DEFAULT: ["Montserrat", "sans-serif"]
    },
    colors:{
      primary:{
        'darkest': "#040A28", //bg-1

      },
      'purple': '#6A04AF', //bg-2
      'grey': '#E3E3E3'

    },
    container:{
      center: true,
      padding: '2rem',
    },
    extend: {},
  },
  plugins: [],
}

