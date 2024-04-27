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
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors:{
      brand: "#803D3B",
      white: "#FFFFFF",
      black: "#000000",
      yellow: "#FFD666",
      blue: "#00268A",
      purple: "#A020F0",
      green: "#00C49A",
      red: "#FF5A5F",
      orange: "#F7931B",
      'dark-orange': "#CA6700",
      'calm-blue': "#33B5E5",
      'light-blue': "#99E0FF",

    },
    fontFamily: {
      'ultra': ["Ultra", 'serif'],
      'bang': ["Bangers", 'system-ui'],
      'fred': ["Fredoka", 'sans-serif'],
      'ant': ["Anton", 'sans-serif'],

      'open': ["Open Sans", 'sans-serif'],
      'mon': ["Montserrat", 'sans-serif'],

      'comic': ["Comic Neue", 'cursive'],
      'glo': ["Gloria Hallelujah", 'cursive'],
      'play': ["Playfair Display", 'serif'],
      'paci': ["Pacifico", 'cursive'],
    },
    extend: {
      backgroundImage: {
        'hero-banner': 'url("/assets/images/hero-banner.jpg")',
        'creature-banner': 'url("/assets/images/creature-banner.jpg")',
        'hero-gradient': 'linear-gradient(to right, #ffc700, #fbd749, #f9e674, #faf39c, #fdffc2);',
        'card-gradient': 'linear-gradient(to right bottom, #43766c, #63997f, #8dbc8f, #c0df9c, #fdffab);',
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

