/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bg1": "#09203F",
        "bg2": "#537895" 
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
