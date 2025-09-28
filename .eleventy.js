module.exports = function(eleventyConfig) {
  // Copy static assets with proper path mapping
  eleventyConfig.addPassthroughCopy({"src/assets/css": "css"});
  eleventyConfig.addPassthroughCopy({"src/assets/js": "js"});  
  eleventyConfig.addPassthroughCopy({"src/assets/images": "img"});
  eleventyConfig.addPassthroughCopy({"src/assets/img": "img"});
  eleventyConfig.addPassthroughCopy({"src/assets/fonts": "fonts"});

  // Watch for changes in assets
  eleventyConfig.addWatchTarget("src/assets/");
  
  // Configure Nunjucks environment to not auto-escape
  eleventyConfig.setNunjucksEnvironmentOptions({
    autoescape: false,
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Set directories
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    pathPrefix: process.env.ELEVENTY_ENV === 'production' ? '/workshopstudio' : '',
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html", "liquid"]
  };
};
