/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#F6FAFD",
        color2: "#90E0EF",
        color3: "#00BD8",
        color4: "#0077B6",
        color5: "#303161",
        white: "#ffffff",
      },
      fontSize: {
        "3xl": "1.8rem", // Add your custom size
        "4xl": "2rem",
        "2xl": "1.3rem", // Add your custom size
        "8xl": "6rem", // Add another custom size if needed
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    // ...
  ],
};
