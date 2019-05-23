const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    skeleton: './src/skeleton/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
    ]
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueSSRServerPlugin({
      filename: 'skeleton.json'
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractCssChunks({
      filename: "[name].css",
      chunkFilename: "[id].css",
      orderWarning: true
  })
  ]
}
