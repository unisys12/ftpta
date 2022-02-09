module.exports = (config) => {
  config.addWatchTarget("src/css/style.css");
  // config.addPassthroughCopy("src/css/style.css");
  config.addPassthroughCopy("src/imgs");
  config.addPassthroughCopy("src/js");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
    passthroughFileCopy: true,
  };
};
