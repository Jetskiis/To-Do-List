const { appendFile } = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //production
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
    hashFunction: "xxhash64",
    assetModuleFilename: "[name][ext]",
  },
  watchOptions: {
    aggregateTimeout: 600,
    poll: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    open: true,
    hot: true,
  },
  //loaders
  module: {
    rules: [
      //css
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      //images
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: "asset/resource" },
      //babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "To Do List",
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
