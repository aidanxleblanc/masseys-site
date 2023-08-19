/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ['Raleway', 'sans-serif'],
      archivo: ['Archivo', 'sans-serif']
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semi: 600,
      bold: 700,
    },
    extend: {
      backgroundColor: {
        'navy': '#3A5471',
      },
      textColor: {
        'navy': '#2B3D53',
      }
    }
  },
  plugins: [],
}