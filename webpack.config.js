const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('build'),
        publicPath: 'build',
        filename: 'index.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]',
                    },
                }, ]
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
    }
};