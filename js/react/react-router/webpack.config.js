var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry: {
	    'without-router':path.resolve(__dirname, 'jsx/without-router.jsx'),
	    'with-router':path.resolve(__dirname, 'jsx/with-router.jsx'),
	},
	output: {
		path: __dirname + '/build/js',
		publicPath: '/',
		filename: './[name].bundle.js'
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:'style!css'},
			{test: /\.js[x]?$/, include: path.resolve(__dirname, 'jsx'), exclude: /node_modules/, loader: 'babel-loader'},
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	plugins: [
    		new webpack.BannerPlugin('This file is created by kim')
  	]
};

