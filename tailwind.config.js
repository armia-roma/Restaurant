/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    colors:{
      'indigo':"#312e81"
    } 
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

