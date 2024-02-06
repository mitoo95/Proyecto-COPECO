const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        buffer: require.resolve("buffer/"),
        stream: require.resolve("stream-browserify"),
        os: require.resolve("os-browserify/browser")
      };
      return webpackConfig;
    }
  }
};