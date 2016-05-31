var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',

  entry: './index.js',

  output: {
    path: path.join(__dirname, '/public/bundle'),
    filename: 'bundle/bundle.js',
    publicPath: '/public'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],
  eslint: {
    configFile: '.eslintrc'
  },

  module: {
    preLoaders: [
      { test: /\.js|\.jsx$/, exclude: /node_modules/, loader: 'eslint-loader' }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
