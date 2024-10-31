const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/*.{html,md,njk,js}", // project root
    "./src/blog/*.{html,md,njk,js}", // blog dir
    "./src/services/*.{html,md,njk,js}", // services dir
    "./src/_includes/*.{html,md,njk,js}", // main includes dir
    "./src/_includes/components/*.{html,md,njk,js}", // components dir
    "./src/_includes/components/policies/*.{html,md,njk,js}", // policies dir
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
              color: "#e2e8f0",
            },
            h3: {
              color: "#f1f5f9",
            },
            blockquote: {
              color: "#fafafa",
            },
          },
        },
      },
      fontFamily: {
        sans: ["AtkinsonRegular", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
    }),
    require("@tailwindcss/typography"),
  ],
};
