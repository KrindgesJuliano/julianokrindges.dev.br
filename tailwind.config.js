module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#0F123D",
      secondary: "#64FFDA",
      tint: "#64FFDA",
      "light-gray": "#8892B0",
    },
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#0F123D",
      secondary: "#64FFDA",
      tint: "#64FFDA",
      "light-gray": "#8892B0",
    }),
    textColor: {
      transparent: "transparent",
      current: "currentColor",
      tint: "#64FFDA",
      gray: "#8892B0",
      white: "#fff",
    },
    fontFamily: {
      mono: ["Fira Code", "monospace", "Fira Sans"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
