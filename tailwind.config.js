/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ['Raleway', 'sans-serif'],
      archivo: ['Archivo', 'sans-serif']
    },
    fontWeight: {
      thin: 300,
      regular: 400,
      medium: 500,
      semi: 600,
      bold: 700,
    },
    extend: {
      backgroundColor: {
        'navy': '#3A5471',
        'dknavy': '#2B3D53'
      },
      textColor: {
        'navy': '#2B3D53',
        'gold': '#F2CD52',
      },
      spacing: {
        '28': '7rem',
        '32': '8rem',
      },
      width: {
        '1/7': '14%',
        '1/8': '12.5%',
        '1/9': '11%',
        '1/10': '10%'
      },
      height: {
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
        '1/5': '20%',
        '1/6': '16%',
        '1/7': '14%',
        '1/8': '12.5%',
        '1/9': '11%',
        '1/10': '10%'
      }
    }
  },
  plugins: [],
}