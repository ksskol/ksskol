/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cambria", "Helvetica", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInF: "fadeIn 0.4s ease-in-out",

      },
    },
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
      fourK: "2560px",
    },
  },
  plugins: [],
};
