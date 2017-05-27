const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var locals = {
  routes: [
    '/',
  ]
}
module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        //loader: ExtractTextPlugin.extract("css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"),
        include: path.resolve(__dirname, 'src'),
      }
    ],
  },
  plugins: [
    //new ExtractTextPlugin("styles.css"),
    //new StaticSiteGeneratorPlugin('main', locals.routes),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
 }