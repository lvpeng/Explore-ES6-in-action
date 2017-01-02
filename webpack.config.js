const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const config = {
  entry: {
      arrowFn : path.resolve(__dirname, 'src/Arrow Function/app.js'),
      // destruct: path.resolve(__dirname, 'src/Destructuring/app.js')
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};

module.exports = config;
