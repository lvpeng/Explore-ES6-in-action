var path = require('path');

var config = {
  entry: {
      arrowFn : path.resolve(__dirname, 'src/Arrow Function/app.js'),
      destruct: path.resolve(__dirname, 'src/Destructuring/app.js')
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  }
};

module.exports = config;
