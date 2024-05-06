/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '770px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1650px',
    },
    colors:{
      brand: "#D37676",
      white: "#FFFFFF",
      black: "#000000",
      dark: "#9CAFAA",
      light: "#B0C5A4",
      yellow: "#F1EF99",
      brown: "#803D3B",
      blue: "#00268A",
      purple: "#A020F0",
      green: "#00C49A",
      red: "#FF5A5F",
      orange: "#F7931B",
      'dark-orange': "#CA6700",

    },
    fontFamily: {
      // 'ultra': ["Ultra", 'serif'],
      'bang': ["Bangers", 'system-ui'],
      'fred': ["Fredoka", 'sans-serif'],
      'ant': ["Anton", 'sans-serif'],

      // 'open': ["Open Sans", 'sans-serif'],
      'mon': ["Montserrat", 'sans-serif'],
      'dance': ["Dancing Script, cursive"],
      'im': ["IM Fell DW Pica SC, serif"],

      'comic': ["Comic Neue", 'cursive'],
      // 'glo': ["Gloria Hallelujah", 'cursive'],
      // 'play': ["Playfair Display", 'serif'],
      // 'paci': ["Pacifico", 'cursive'],
    },
    extend: {
      boxShadow: {
        'spread': "-1px -1px 51px -12px #FFC700;"
      },
      dropShadow: {
        brand: "0px 10px 0px #803D3B",
        logo: "0px 5px 0px #FFD666",
        img: "0px 10px 20px #FFD666",
        good: "0px 10px 0px #00C49A",
        bad: "0px 10px 0px #FF5A5F",
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
}

