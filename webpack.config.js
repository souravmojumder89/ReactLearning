const webpack = require('webpack');

module.exports={
	entry:"./index.jsx",
	output:{
		filename:"./bundle.js"
	},
	module:{
		rules:[
		{
			test:/\.jsx/,
			exclude:/(node_modules|bower_components)/,
			loader:'babel-loader',//'babel-loader' is also a legal namme to reference
			query:{
				presets:["es2015","react","stage-1"]
			}
		}
		]
	}
}