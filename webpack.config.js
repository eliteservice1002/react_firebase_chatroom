var webpack = require("webpack");
var path = require('path');

module.exports = {
	entry: {
		app: "./src/app.js"
	},
	output: {
		filename:"build/bundle.js",
        sourceMapFilename: "build/bundle.map"
	},
	devServer: {
  contentBase: path.join(__dirname, "/"),
  compress: true,
	stats: 'errors-only'
},
    devtool: '#source-map',
	// plugins: [
  //   	new webpack.optimize.UglifyJsPlugin({minimize: true}),
	// ],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			}
		]
	}
}
