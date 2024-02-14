/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "426px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1440px",
      },
      colors: {
        dark: {
          primary: "#252730",
          secondary: "#282f32",
        },
        light: "#fcfffb",
        green: {
          light: "#6ee89e",
          pale: "#54e4ce",
        },
        darkBlue: "#0e1b2a",
      },
    },
  },
  plugins: [],
};
