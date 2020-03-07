const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const common = require('./webpack.common');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader', options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader', options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader', options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ 
            filename: '../css/[name].bundle.css' 
        }),
        new ImageminPlugin({
            test: 'images/**',
            optipng: {
                optimizationLevel: 9
            }
        })
    ]
});