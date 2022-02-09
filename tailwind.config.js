module.exports = {
  content: [
    "./src/_includes/*.njk",
    "./src/_includes/components/*.html",
    "./src/services/*.html",
    "./src/blog/*.njk",
    "./src/*.njk",
  ],
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
<<<<<<< HEAD
              color: "#fafafa",
=======
              color: "#fafafa", // zinc-50
>>>>>>> 90d4874 (add custom blockquote styling)
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
