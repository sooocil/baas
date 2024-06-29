/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
    extend: {},
    fontFamily: {
      sans: [ '"Roboto" ' , '"Nunito Sans"', 'sans-serif'],
      pink: ['"PinkSunset-Regular"', '"PinkSunset"' ,'"PinkSunset"', 'sans-serif'],
    }
  },
  plugins: [],
};
