const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;
const __DEV__ = env === 'development';
const __PRODUCTION__ = env === 'production';

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
        extensions: ['.ts', '.tsx']
    },
    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin()
    ]
};

if (__DEV__) {
    config.devtool = 'inline-source-map';
}

if (__PRODUCTION__) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;