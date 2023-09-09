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
      pr_color: 'hsla(0,0%,83%,.6)',
      sc_color: '#ff6b00',
      gray: 'gray',
      black: '#000',
      body: "hsl(217, 18%, 14%)",
      white: "hsl(0, 0%, 100%)",
      text: "hsl(0, 0%, 83%)",
      text_Light: "hsla(0, 0%, 83%, 0.6)",
      buttonBg: "hsl(217, 10%, 25%)",
      cyan: "hsl(166, 100%, 34%)",
      cyan_dark: "hsla(166, 100%, 34%, 0.4)",
      veryDark: "hsl(0, 0%, 0%)",
      gray: "hsl(217, 13%, 27%)",
    }
  },
  plugins: [],
}

