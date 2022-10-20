module.exports = (config) => {
  config.addPassthroughCopy("src/css/style.css");
  config.addPassthroughCopy("src/imgs");
  config.addPassthroughCopy("src/js");
  config.addPassthroughCopy("src/robots.txt");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
    passthroughFileCopy: true,
  };
};
