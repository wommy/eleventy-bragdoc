module.exports = function (eleventyConfig) {

	// Add filters to Nunjucks
	eleventyConfig.addFilter("dateDisplay", require("./src/_filters/dates.js") );
	
	eleventyConfig.addPassthroughCopy({ "./public/css/": "css" })
	eleventyConfig.addPassthroughCopy({ "./public/images/": "images" })
	eleventyConfig.addWatchTarget("./public/")

	return {
		dir: {
			input: "src",
			output: "dist"
		},
		pathPrefix: "/eleventy-bragdoc/"
	}
}