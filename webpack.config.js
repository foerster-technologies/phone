'use strict';

const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	// devtool: 'source-map',
	entry: './src/index.js',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'umd',
		library: 'phone',
		globalObject: 'this',
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new MinifyPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, 'src'),
				],
				loader: 'babel-loader',
				options: {
					babelrc: false,
					presets: [
						['env', {
							targets: {
								browsers: '>1%',
								node: '6.10',
							},
							modules: false,
							debug: true,
						}],
					],
				},
			},
		],
	},
};
