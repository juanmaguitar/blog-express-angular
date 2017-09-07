/* global __webpackBase */
const path = require('path')
const bootstrapConfig = require('../config/webpack.bootstrap').prod
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    admin: path.resolve(__webpackBase, 'src/admin/index.js'),
    bootstrap: bootstrapConfig
  },
  output: {
    publicPath: '/admin',
    path: path.resolve(__webpackBase, 'public/admin'),
    filename: 'js/[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CMS Admin Blog',
      template: path.resolve(__webpackBase, 'src/admin/index.tpl')
    })
  ]
}

module.exports = config
