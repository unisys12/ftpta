module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "colors.gray.800",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            h2: {
              color: "colors.indigo.600",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
