module.exports = (config)=>{
    config.addPassthroughCopy('src/css');
    config.addPassthroughCopy('src/imgs');
    return {
        dir: {
            input: "src",
            output: "_site"
        },
        passthroughFileCopy: true
    };
}