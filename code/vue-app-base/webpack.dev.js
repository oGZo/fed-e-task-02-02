const baseConfig = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
console.log(merge);
module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'cleap-modules-eval-source-map',
    devServer: {
        port: 8081,
        hot: true,
        open: true,
        contentBase: [path.join(__dirname, 'public')]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
})