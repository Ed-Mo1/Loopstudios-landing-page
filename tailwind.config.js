/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "Alata": ["Alata"],
        "Josefin_Sans": ["Josefin Sans"],
      },
      colors: {
        "White": "hsl(0, 0%, 100%)",
        "Black": "hsl(0, 0%, 0%)",
        "Dark_Gray": " hsl(0, 0%, 55%)",
        "Very_Dark_Gray": "hsl(0, 0%, 41%)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      
    },
  },
  plugins: [],
};
