/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        smPlus: "15px",
        mdPlus: "18px",
      },
      typography: {
        DEFAULT: {
          css: {
            img: {
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              maxHeight: "300px",
            },
          },
        },
      },
    },
    fontFamily: {
      sans: ["Inter var"],
      serif: ["Pencerio"],
    },
  },

  plugins: [require("@tailwindcss/typography")],
  darkMode: ["class", "[data-theme='dark']"],
};
