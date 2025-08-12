/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-accent": "#FFC529",
        "secondary-accent": "#FE724C",
        "dark-base": "#272D2F",
        "light-base": "#D7D7D7",
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
