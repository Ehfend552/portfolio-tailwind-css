/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  safelist: [
    "hamburger-active", // <-- TAMBAHIN INI
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
};
