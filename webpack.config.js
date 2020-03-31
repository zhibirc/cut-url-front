'use strict';

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin   = require('vue-loader/lib/plugin');

const DEVELOPMENT = 'development';
const NODE_ENV    = process.env.NODE_ENV || DEVELOPMENT;

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    target: 'web',
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
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }/*,
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }*/
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

    devtool: NODE_ENV === DEVELOPMENT ? 'eval-source-map' : false,

    watch: NODE_ENV === DEVELOPMENT
};
