const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: {
    app: "./src/js/index.js",
  },
  output: {
    clean: true,
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    static: "./src",
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: path.resolve(__dirname, "dist"),
          }
        }, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
       },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Вкусная еда",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
  ],
};