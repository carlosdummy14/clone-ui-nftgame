const {merge} = require('webpack-merge')

const webpackCommon = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    host: '127.0.0.1',
    open: false,
    port: 3001,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      }
    ]
  }
}

module.exports = merge(webpackCommon, devConfig)
