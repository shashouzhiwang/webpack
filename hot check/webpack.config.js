/**
 * Created by Loki.Luo on 2016/10/26.
 */
var path = require('path'),
    webpack =  require('webpack'),
    server = require('webpack-dev-server'),
    htmlWebpack = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    devtool:'cheap-eval-source-map',
    entry : ['webpack/hot/dev-server', path.join(__dirname, 'app/main.js')],
    output: {
        path:path.join(__dirname,'/build'),
        filename:"bundle.js"
    },
    plugins:[
    //    new webpack.optimize.UglifyJsPlugin({
    //        compressor:{
    //            warnings:false,
    //        }
    //    }),
        new htmlWebpack({
            //template:path.join(__dirname,'src/index.html'),
        }),
    //    new webpack.optimize.OccurenceOrderPlugin(),
    //    //new extractTextPlugin("styles.css"),
    //    new ExtractTextPlugin('style.css', { allChunks: true }),
    ],
    //module:{
    //    loaders:[{
    //        test:/\.css$/,
    //        //loader:'style!css'
    //        //loaders:['style','css']
    //        loader:ExtractTextPlugin.extract('style-loader', 'css-loader')
    //        //loaders: extractTextPlugin.extract("style-loader","css-loader")
    //    }]
    //},
    //devserver:{
    //    contentBase:path.join(__dirname,'dist'),
    //    hot:true
    //}
};