const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00c2cb',
        secondary: '#182034',
        sHover: '#283044',
      },
      fontFamily: {
        rubik: "'Rubik', serif",
        poppins: "'Poppins', serif",
      },
      minHeight: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh',
      },
      maxWidth: {
        '2xs': '6rem',
        xs: '8rem',
      },
      maxHeight: {
        '2xs': '6rem',
        xs: '8rem',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
