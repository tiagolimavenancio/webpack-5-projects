const path = require("path");

module.exports = {
  target: false,
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: "css-loader",
      },
    ],
  },
};
