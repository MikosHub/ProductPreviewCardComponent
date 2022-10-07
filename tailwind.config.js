/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    colors: {
      darkCyan: {
        DEFAULT: "#3c8067",
        dark: "#306652",
      },
      cream: "#f2ebe3",
      darkBlue: "#1c232b",
      grayBlue: "#6c7289",
      white: "#ffffff",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      fraunces: ["Fraunces", "serif"],
    },
  },
  plugins: [],
};
