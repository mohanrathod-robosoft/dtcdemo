const path = require('path')

const webpack = require('webpack') // eslint-disable-line import/no-extraneous-dependencies
const ExtractTextPlugin = require('extract-text-webpack-plugin') // eslint-disable-line import/no-extraneous-dependencies

const resolve = require('./webpack/resolve.js')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: path.join(__dirname, 'src', 'index.tsx'), 
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new ExtractTextPlugin('styles.scss'),
  ],
  resolve,
  module: {
    rules: [
      { 
        test: /\.(ts|tsx)$/, 
        loader: "ts-loader",
        exclude: /node_modules/,
      }, 
      {
        test: /\.(js|jsx)$/,      
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {        
        test: /\.(css|scss)$/,        
        use: ["style-loader", "css-loader", "sass-loader"]      
      },      
      {        
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader']
      },
    ],
  },
}
