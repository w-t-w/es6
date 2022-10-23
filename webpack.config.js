const path = require('path');
const open = require('open');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

const OUTPUT_DIR = path.resolve(__dirname, './build');
const TEMPLATE_DIR = path.resolve(__dirname, './src/index.ejs');

const PORT = 7777;

const config = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
        filename: '[name].[fullhash].js',
        path: OUTPUT_DIR,
        publicPath: '',
        chunkFilename: '[name].[fullhash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                }
            }]
        }]
    },
    stats: {
        preset: 'minimal'
    },
    devServer: {
        hot: true,
        port: PORT,
        host: 'localhost',
        open: {
            app: {
                name: open.apps.chrome
            }
        },
        historyApiFallback: true,
        proxy: {}
    },
    plugins: [
        new HtmlWebpackPlugin({
            publicPath: './',
            filename: 'index.html',
            template: TEMPLATE_DIR,
            minify: true,
            inject: 'body'
        }),
        new CleanWebpackPlugin()
    ]
};

module.exports = config;