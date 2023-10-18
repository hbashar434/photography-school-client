/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "my-sans": ["Suisse", "sans"],
        "my-serif": ["Georgia", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
