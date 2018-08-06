const path = require('path')
const webpack = require('webpack')
const utils = require('./utils')
const config = require('./config')
const vueLoaderConfig = require('./vue-loader.conf')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const resolve = dir => path.join(__dirname, '../', dir)

const isProd = process.env.NODE_ENV === 'production'

vueLoaderConfig.loaders['i18n'] = '@kazupon/vue-i18n-loader'
module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        app: './src/client.entry.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: isProd
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        },
        modules: [resolve('src'), resolve('node_modules')]
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: "pre",
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    performance: {
        maxEntrypointSize: 300000,
        hints: isProd ? 'warning' : false
    },
    plugins: isProd
        ? [
            // Scope Hositing
            new webpack.optimize.ModuleConcatenationPlugin(),
            // extract css into its own file
            new ExtractTextPlugin({
                filename: utils.assetsPath('css/[name].[contenthash].css')
            }),
            // minify css after extract
            new OptimizeCSSPlugin(),
            // minify JS
            new webpack.optimize.UglifyJsPlugin({
                workers: require('os').cpus().length,
                mangle: true,
                compress: {
                    warnings: false,
                    drop_console: true
                },
                sourceMap: true
            })
        ]
        : []
};
