const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/client/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
      {
        test: /\.(css)$/,
        use: "css-loader",
      },
    ],
  },
};
