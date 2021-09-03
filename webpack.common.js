const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const DotenvWebpackPlugin = require('dotenv-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    publicPath: '',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json']
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader'
      },
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/'
      },
      {
        type: 'asset',
        test: /\.(png|svg|jpg|gif)/i
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new DotenvWebpackPlugin()
  ]
}
