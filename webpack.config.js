// var path = require('path')
// var webpack = require('webpack')

// module.exports = {
//   entry: ["./src/index.js"],
//   output: {
//     path: path.join(__dirname, '/dist'),
//     filename: 'bundle.js',
//     publicPath: '/'
// },
//   module: {
//     loaders: [
//       {
//         exclude: /node_modules/,
//         loader: "babel"
//       }
//     ],
//   },
//   resolve: {
//     extensions: ["", ".js", ".jsx"]
//   },
//   devServer: {
//     contentBase: "/"
//   },
//   devtool : 'cheap-module-eval-source-map'
// };

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel"
      }
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    contentBase: "./"
  },
  devtool : 'cheap-module-eval-source-map'
};


