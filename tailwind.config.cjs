/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      colors: {
        transparent: "transparent",

        black: "#000000",
        white: "#ffffff",

        gray: {
          900: "#121214",
          800: "#282824",
          400: "#7c7c8a",
          200: "#c4c4cc",
          100: "#e1e1e6",
        },
        cyan: {
          500: "#81D8F7",
          300: "#9BE1FB",
        },
      },
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        "2xl": 32,
      },
    },
  },
  plugins: [],
};
