const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

const config = {
    context: paths.src,
    
    entry: {
        app: './index'
    },
    
    output: {
        path: paths.dist,
        filename: '[name].bundle.js'
    },
    
    resolve: {
        extensions: ['.ts']
    },

    devtool: 'inline-source-map',
    
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin()
    ]
};

module.exports = config;