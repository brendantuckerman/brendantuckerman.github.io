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
      'grey': '#BFBFBF',
      'white': '#ffffff'

    },
    container:{
      center: true,
      padding: '2rem',
    },

   
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },

    },
  },
  plugins: [],
}

