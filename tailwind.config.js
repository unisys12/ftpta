module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/_includes/*.njk",
      "./src/_includes/components/*.html",
      "./src/services/*.html",
      "./src/*.njk",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#E5E7EB",
            a: {
              color: "#F3F4F6",
              "&:hover": {
                color: "#F9FAFB",
              },
            },
            h2: {
              color: "#4F46E5",
            },
            h3: {
              color: "#A5B4FC",
            },
            blockquote: {
              color: "#fafafa",
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
