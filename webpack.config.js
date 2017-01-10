const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack');

const config = {
  entry: {
      // arrowFn : path.resolve(__dirname, 'src/Arrow Function/app.js'),
      // destruct: path.resolve(__dirname, 'src/Destructuring/app2.js')
      // default : path.resolve(__dirname, 'src/DefaultParam/app.js')
      spread: path.resolve(__dirname, 'src/Spread/app.js')
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  ],
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  devtool: "cheap-source-map",
};

module.exports = config;
