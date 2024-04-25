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
      blue: "#3F88C5",
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

      'comic': ["Comic Neue", 'cursive'],
      'glo': ["Gloria Hallelujah", 'cursive'],
      'play': ["Playfair Display", 'serif'],
      'paci': ["Pacifico", 'cursive'],
    },
    extend: {
      backgroundImage: {
        'hero-back': 'url("/assets/images/logo.png")'
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
}

