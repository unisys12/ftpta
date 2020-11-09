module.exports = (config) => {
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("src/imgs");

  // Setup Markdown-it to parse Markdown files
  let markdownIt = require("markdown-it");
  var markdownItAttrs = require("markdown-it-attrs");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  config.setLibrary("md", markdownLib);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    passthroughFileCopy: true,
  };
};
