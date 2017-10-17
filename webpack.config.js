const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry : {        
       app:[
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './src/index.js',
        ] 
      // print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJSPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'  //指定公共 bundle 的名称
        })
    ],
    output : {
        filename : '[name].bundle.js',
        path : path.resolve( __dirname, 'dist' ),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};