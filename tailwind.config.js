/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',

      'customXl': '1540px'
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "128px",
      },
    },
    extend: {
      colors: {
        green: "#28a745",
        primary: {
          "black": "#000000",
          "white": "#FFFFFF"
        },
        gray: {
          50: "#F7FAFC",
          100: "#EDF2F7",
          200: "#E2E8F0",
          300: "#CBD5E0",
          400: "#A0AEC0",
          500: "#718096",
          600: "#4A5568",
          700: "#2D3748",
          800: "#1A202C",
          900: "#171923",
        },
        brand: {
          50: "#E2F0FD",
          100: "#BADAFA",
          200: "#8DC3F8",
          300: "#60ACF4",
          400: "#409AF2",
          500: "#2389EF",
          600: "#247CE1",
          700: "#226ACD",
          800: "#2058BB",
          900: "#1B3A9C",
        },
        white_alpha: {
          50: "rgba(255, 255, 255, 0.04)",
          100: "rgba(255, 255, 255, 0.06)",
          200: "rgba(255, 255, 255, 0.08)",
          300: "rgba(255, 255, 255, 0.16)",
          400: "rgba(255, 255, 255, 0.24)",
          500: "rgba(255, 255, 255, 0.36)",
          600: "rgba(255, 255, 255, 0.48)",
          700: "rgba(255, 255, 255, 0.64)",
          800: "rgba(255, 255, 255, 0.8)",
          900: "rgba(255, 255, 255, 0.92)",
        },
        red: {
          50: "#FFF5F5",
          100: "#FED7D7",
          200: "#FEB2B2",
          300: "#FC8181",
          400: "#F56565",
          500: "#E53E3E",
          600: "#C53030",
          700: "#9B2C2C",
          800: "#822727",
          900: "#63171B",
        },
      },
    },
  },
  plugins: [],
}