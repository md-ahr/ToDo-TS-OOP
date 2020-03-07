const path = require('path');

module.exports = {
    entry: {
        'app': './src/ts/bootstrap.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist/js/'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css', '.json', '.jpeg', '.jpg', '.gif', '.png', 'svg']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../images/',
                            publicPath: ''
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../fonts/',
                        publicPath: ''
                    }
                }]
            }
        ]
    }
};