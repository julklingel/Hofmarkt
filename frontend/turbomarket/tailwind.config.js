/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: "#000",
      white: "#fff",
      green: {
        100: "#F0FFF4",
        200: "#C6F6D5",
        300: "#9AE6B4",
        400: "#68D391",
        500: "#48BB78",
        600: "#38A169",
        700: "#2F855A",
        800: "#276749",
        900: "#22543D",
      },
      brown: {
        100: "#FDF5F0",
        200: "#FCE7D9",
        300: "#FAD6BF",
        400: "#F7C29F",
        500: "#F0A56A",
        600: "#E08E4E",
        700: "#C97A3F",
        800: "#A7632F",
        900: "#8B5126",
      },
      red: {
        100: "#FFF5F5",
        200: "#FED7D7",
        300: "#FEB2B2",
        400: "#FC8181",
        500: "#F56565",
        600: "#E53E3E",
        700: "#C53030",
        800: "#9B2C2C",
        900: "#742A2A",
    },
    gray: {
      100: "#F7FAFC",
      200: "#EDF2F7",
      300: "#E2E8F0",
      400: "#CBD5E0",
      500: "#A0AEC0",
      600: "#718096",
      700: "#4A5568",
      800: "#2D3748",
      900: "#1A202C",
    },

    yellow: {
      100: "#FFFFF0",
      200: "#FEFCBF",
      300: "#FAF089",
      400: "#F6E05E",
      500: "#ECC94B",
      600: "#D69E2E",
      700: "#B7791F",
      800: "#975A16",
      900: "#744210",
    },
  },


    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        primary: "#D0CDC4",
        secondary: "#E1E2DB",
        "c.green": "#304A45",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
};
