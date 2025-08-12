/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-accent": "#fda7a6",
        "secondary-accent": "#baa1da",
        "dark-base": "#5e4485",
        "light-base": "#fdf1f1",
      },
      // fontFamily: {
      //   gilroy: ['Gilroy', 'sans-serif'],
      // },
    },
  },
  plugins: [],
};
