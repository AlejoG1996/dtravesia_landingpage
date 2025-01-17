/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#2E8B57",
        secondary:"#c19d68"
      },
      fontFamily:{
        montserrat:["Montserrat", "serif"],
        londrina: ['Londrina Sketch', 'cursive'],
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          '2xl': "6rem"
        }
      }
    },
  },
  plugins: [],
}