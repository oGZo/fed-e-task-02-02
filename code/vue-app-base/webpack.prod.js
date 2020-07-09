const baseConfig = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    filename: "[name]-[contenthash:8].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
        },
      ],
    }),
  ],
});
