/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "526px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1440px",
      },
      colors: {
        dark: {
          primary: "#29252C",
          secondary: "#333146",
        },
        light: "#fcfffb",
        green: {
          light: "#6ee89e",
          pale: "#54e4ce",
        },
        blue: {
          dark: "#212A3E",
          light: "#394867",
        },
      },
    },
  },
  plugins: [],
};
