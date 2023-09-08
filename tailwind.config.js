/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      }
    },
    colors: {
      'pr-color': 'hsla(0,0%,83%,.6)',
      'sc-color': '#ff6b00',
      'white': '#fff',
      'gray': 'gray',
      'black': '#000'
    }
  },
  plugins: [],
}

