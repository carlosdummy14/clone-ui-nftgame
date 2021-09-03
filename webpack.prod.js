const {merge} = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpackCommon = require('./webpack.common')

const prodConfig = {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
      }
    ]
  }
}

module.exports = merge(webpackCommon, prodConfig)
