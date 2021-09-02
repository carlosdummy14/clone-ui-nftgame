const webpackCommon = require('./webpack.common')
const { merge } = require('webpack-merge')

const devConfig= {
  mode: 'development',
  devServer:{
    historyApiFallback:true,
    host:"127.0.0.1",
    open:false,
    port:3001,
    hot:true
  },
}

module.exports=merge(webpackCommon,devConfig)