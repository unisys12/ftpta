module.exports = (config) => {
  config.addPassthroughCopy("src/imgs");
  config.addPassthroughCopy("src/js");
  config.addPassthroughCopy("src/fonts");
  config.addPassthroughCopy("src/robots.txt");

  config.setServerOptions({
    watch: ["./src/**/**/*.njk", "./src/**/**/*.html"],
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    passthroughFileCopy: true,
  };
};
