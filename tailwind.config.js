module.exports = {
  content: ["./src/**/*.{html,md,njk,js}"],
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
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
