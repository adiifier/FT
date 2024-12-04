/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#258484",
        telagreen: "#6ec4c4",
        grey: "#dddddd",
        w: "#f5f5f5",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
