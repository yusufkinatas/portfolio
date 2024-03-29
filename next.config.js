const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  pageExtensions: ["page.tsx"],
  images: {
    domains: ["images.ctfassets.net"],
  },
};
