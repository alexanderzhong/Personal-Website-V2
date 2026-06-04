/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-variant": "var(--primary-variant)",
        background: "var(--background)",
        surface: "var(--surface)",
      },
    },
  },
  plugins: [],
};
