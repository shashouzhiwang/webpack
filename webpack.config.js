// tree shaking  只支持es module引入方式，require是动态引入，不支持

const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: "development",
    // devtool: "cheap-module-eval-source-map",
    // devtool: "eval",
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
        // 即使hot不生效，也不刷新浏览器
        hotOnly: true,
    },
    entry: {
        main: "./src/index.js",
        // sub: "./src/index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        usedExports: true
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
            test: /\.(jpg|png)$/,
            use: {
                loader: "url-loader",
                options: {
                    name: '[name]_[hash].[ext]',
                    outputPath: "images/",
                    limit: 2048
                }
            },
        },{
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: {
                loader: "file-loader",
                options: {
                    outputPath: "font/"
                }
            },
        },
        {
            test: /\.(css|scss)$/,
            use: ["style-loader",{
                loader: "css-loader",
                options: {
                    importLoaders: 2
                }
            }, {
                loader: "postcss-loader"
            }, "sass-loader"],

        }]
    },
    output: {
        // publicPath: "www.shashouzhiwang.sit/",
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    }
};