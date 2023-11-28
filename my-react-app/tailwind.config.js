/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      sm2: "610px",
      md: "768px",
      lg: "976px",
      lg2: "1050px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkBlue: "#28285B",
        gold: "#A78236",
      },
    },
  },
  plugins: [],
};
