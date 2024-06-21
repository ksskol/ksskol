/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cambria", "Helvetica", "sans-serif"],
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
