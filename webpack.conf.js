const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        port:9090
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: 'babel-loader'

            },
            {
                test: /\.css$/,
                use: [{
                    loader: ExtractCssChunks.loader,
                    options: {
                        hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
                        reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
                    }
                },
                    "css-loader",
                    'postcss-loader'
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
                    "sass-loader",
                    'postcss-loader'
                ]
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new ExtractCssChunks({
            filename: "[name].css",
            chunkFilename: "[id].css",
            orderWarning: true
        }),
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new VueLoaderPlugin()
    ]
}
