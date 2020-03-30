'use strict';

const path    = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin   = require('vue-loader/lib/plugin');


module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: 'build',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'/*,
                options: {
                    loaders: {
                        ts: 'ts-loader'
                    }
                }*/
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new VueLoaderPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json']
    },
    devtool: 'source-map'
};
