const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  pageExtensions: ["page.tsx"],
  images: {
    domains: ["images.ctfassets.net"],
  },
  webpack: (config) => {
    // Make local `src` resolution win over node_modules so absolute imports
    // like `contentful/api` (src/contentful/api.ts) are not shadowed by the
    // npm `contentful` package, whose `exports` field rejects the subpath.
    config.resolve.modules = [
      path.join(__dirname, "src"),
      ...config.resolve.modules,
    ];
    return config;
  },
};
