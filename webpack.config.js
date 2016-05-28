var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: './index.js',

  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/'
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
