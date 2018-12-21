const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'index.[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                },  {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[hash:base64:5]',
                    },
                }]
            },
            {
                test: /\.(png|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.ico$/,
                loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Новогодний хакатон',
            template: './template.html'
        }),
        new MiniCssExtractPlugin({
            filename: "styles.[hash].css",
        })
    ]
};