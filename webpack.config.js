/* eslint-disable no-undef */

const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {},
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/*.html",
          to: "[name][ext]",
        },
        {
          from: "src/*.css",
          to: "[name][ext]",
        },
      ],
    }),
  ],
};
