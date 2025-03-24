/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
          primary: "#1a1a1a",
          secondary: "#2d2d2d",
          text: {
            primary: "#ffffff",
            secondary: "#a3a3a3",
          },
        },
        light: {
          primary: "#ffffff",
          secondary: "#f3f4f6",
          text: {
            primary: "#1f2937",
            secondary: "#4b5563",
          },
        },
        green: {
          light: "#6ee89e",
          pale: "#54e4ce",
          dark: "#2ecc71",
        },
        blue: {
          dark: "#212A3E",
          light: "#394867",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      backgroundColor: {
        "form-input": "var(--form-input-bg)",
      },
      textColor: {
        "form-input": "var(--form-input-text)",
      },
      borderColor: {
        "form-input": "var(--form-input-border)",
      },
    },
  },
  plugins: [],
};
