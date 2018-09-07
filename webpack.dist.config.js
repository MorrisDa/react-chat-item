const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const reactExternal = {
	root: 'React',
	commonjs2: 'react',
	commonjs: 'react',
	amd: 'react'
};
const reactDOMExternal = {
	root: 'ReactDOM',
	commonjs2: 'react-dom',
	commonjs: 'react-dom',
	amd: 'react-dom'
};

module.exports = {

	entry: {
		'twilio-chat-item': './src/index.jsx',
		'twilio-chat-item.min': './src/index.jsx'
	},

	externals: {
		'react': reactExternal,
		'react-dom': reactDOMExternal
	},

	output: {
		filename: '[name].js',
		chunkFilename: '[id].chunk.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		libraryTarget: 'umd',
		library: 'twilio-chat-item'
	},

	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				include: /\.min\.js$/
			})
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	],

	module: {
		rules: [
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
			{ test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"] }
		]
	}

};
