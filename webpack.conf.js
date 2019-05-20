const path = require('path');
const webpack = require('webpack');

const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                query: {
                    compact: true,
                    minified: true
                }
            },
            {
                test: /\.css/,
                use: [{
                    loader: ExtractCssChunks.loader,
                    options: {
                        hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
                        reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
                    }
                },
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: ExtractCssChunks.loader,
                    options: {
                        hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
                        reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
                    }
                },
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [new ExtractCssChunks({
        filename: "[name].css",
        chunkFilename: "[id].css",
        orderWarning: true
    })]
}