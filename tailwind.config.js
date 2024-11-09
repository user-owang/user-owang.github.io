/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#1B221B",
          light: "#1b322e",
        },
        primary: "#F88924",
        secondary: {
          base: "#19A389",
          dark: "#13846F",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
