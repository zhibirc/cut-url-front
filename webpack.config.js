'use strict';

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin   = require('vue-loader/lib/plugin');


module.exports = {
    entry: './src/main.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new VueLoaderPlugin(),
    ]
};
