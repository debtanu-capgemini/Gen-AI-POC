module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f5f5f5",
          200: "#ece6e6",
          400: "#b1b1b1",
          600: "#6d6d6d",
          800: "#464646",
          900: "#111111",
          "900_01": "#202020",
          "800_59": "#46464659",
        },
        deep_orange: { 50: "#fce6e4" },
        blue_gray: { 100: "#d5d5d5", 800: "#2c4452", "800_01": "#324242" },
        red: { 700: "#dc1e35" },
        blue: { A700: "#0066ff" },
        green: { 800: "#2d7b43" },
        black: { 900: "#000000" },
        white: { A700_01: "#fdfdfd", A700: "#ffffff" },
        cyan: { 800: "#0a7597" },
      },
      fontFamily: { jost: "Jost" },
      boxShadow: { bs: "0px 1px  4px 0px #46464659" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
