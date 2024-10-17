/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#3238f2",
        anuj: ["#01ee91"],
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["inter", "sans-serief"],
      },
    },
  },
  plugins: [],
};
