var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000',
		'webpack/hot/only-dev-server',
		'./index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel']
			}
		]
	}
};
