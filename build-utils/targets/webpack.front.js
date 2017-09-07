/* global __webpackBase */
const path = require('path')
const bootstrapConfig = require('../config/webpack.bootstrap').dev

const config = {
  entry: {
    front: path.resolve(__webpackBase, 'src/front/index.js'),
    bootstrap: bootstrapConfig
  },
  output: {
    publicPath: '/',
    path: path.resolve(__webpackBase, 'public/front'),
    filename: 'js/[name].bundle.js'
  }
}

module.exports = config
