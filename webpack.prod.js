const webpackCommon = require('./webpack.common')
const { merge } = require('webpack-merge')

const prodConfig= {
  mode: 'production',
}

module.exports= merge(webpackCommon, prodConfig)