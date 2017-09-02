const path = require('path')
require('webpack')

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'public/admin/js'),
    filename: 'main.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
