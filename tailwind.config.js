/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./js/index.js"
    ],
  theme: {
    extend: {
      dropShadow: {
        n: "0 0 0 rgba(0, 0, 0, 0)",
      },
    },
  },
  plugins: [],
};
