const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      // Loader de estilos.
      {
        test: /\.(css|scss)$/,
        use: ["style-loader","css-loader"]
      },
      // Loader de arquivos (fontes, imagens, PDF, etc).
      {
        test: /\.(ttf|otf|woff|eot|jpg|png|pdf)$|\.woff/,
        exclude: /node_modules/,
        use: ["file-loader"],
      },
      // Loader de imagens SVG.
      {
        test: /\.(svg)$/,
        exclude: /node_modules/,
        use: ["svg-url-loader"],
      },
      // Loader de Javascript.
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    // Allows remove/clean the build folder
    new CleanWebpackPlugin(),
    // Allows update react components in real time
    new HotModuleReplacementPlugin(),
    // Allows to create an index.html in our build folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    // This get all our css and put in a unique file
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};
