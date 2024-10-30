import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin), {
    baseHref: eleventyConfig.pathPrefix,
  }
    return {
      dir: {
        input: "index.njk", // Input folder for Eleventy templates
        output: "dist", // Output folder (matches Vite's build folder)
      },
    };
  };

  export const config = {
    pathPrefix: "/eleventy-base-blog/",
  }
  
