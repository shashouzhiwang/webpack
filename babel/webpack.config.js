/**
 * Created by Loki.Luo on 2016/10/26.
 */
var path = require('path'),
    webpack =  require('webpack'),
    server = require('webpack-dev-server'),
    htmlWebpack = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

var nodeModules = path.resolve(__dirname,'node_modules'),
	pathToAngular = path.resolve(nodeModules,'angular/angular.min.js');
console.log(pathToAngular);
var config =  {
    devtool:'cheap-eval-source-map',
    entry : {
		app:['webpack/hot/dev-server', path.join(__dirname, 'app/main.js')],
		vendors: ['angular']
	},
    output: {
        path:path.join(__dirname,'/build'),
        filename:"bundle.js"
    },
	//resolve:{
	//	alias:{
	//		'angular':'../node_modules/angular/angular.min.js'
	//		}
	//},
    plugins:[
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        //new webpack.ProvidePlugin({
		//  'angular': 'angular'
		//}),
        //new htmlWebpack({
		//	template:path.join(__dirname,'index.html'),
        //}),
		new htmlWebpack({
			template: './index.html',
			chunks: ['app', 'vendors']
		}),
    ],
	//externals: {
  //  'angular': 'angular'
  //},
	module:{
			noParse:[
				pathToAngular	
			],
			loaders: [
			  {
				test: /\.html$/, // Only .html files
				loader: 'html' // Run html loader
			  },
			  {
				test: /\.js$/,
				exclude: [nodeModules],
				loader: 'babel?presets[]=es2015'
			  }
			]
		}

};

module.exports = config;