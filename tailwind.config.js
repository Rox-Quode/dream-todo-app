/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    screens: {
      'xs': '300px',
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
