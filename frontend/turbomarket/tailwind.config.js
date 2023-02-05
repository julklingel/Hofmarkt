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
