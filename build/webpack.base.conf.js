const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename:'index.html',
            minify: {
                removeAttributeQuotes: true,
                // collapseWhitespace: true
            },
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename:'main.css'
        })
    ],
    module: {
        rules: [
            {   
                test: /\.css$/,
                use: [
                    // {
                    //     loader: 'style-loader',
                    //     options: {
                    //         insertAt: 'top'
                    //     }  
                    // },
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
}