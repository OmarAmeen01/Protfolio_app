/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        wBold:['WhBold'],
        wReg:["WhReg"],
        wMed:["WhMed"],
        wSup:["WhSup"],
        wHev:["WhHev"],
        wLight:["WhLight"],
        Mplus:['M PLUS', "sans-serif"]
      }
    },
  },
  plugins: [],
}
