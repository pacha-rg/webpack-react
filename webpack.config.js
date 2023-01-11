const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-plugin');
const TerserPlugin = require('terser-plugin');
const {cleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude:/node-modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test:/\.html$/,
                use:[
                    {loader: 'html-loader'}
                ]
            },
            {
                test:/\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename: './index.html'
        }),
        new MiniCSSExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname,'dist/'),
        },
        compress:true,
        port: 3006,
    }
}