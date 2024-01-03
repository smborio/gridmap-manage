const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineSourcePlugin = require('inline-source-webpack-plugin');

module.exports = {
    mode: 'development', // or 'production' for production mode
    entry: './src/index.js', // the entry point of your app
    output: {
        filename: 'main.js', // the output filename
        path: path.resolve(__dirname, 'dist'), // the output directory
    },
    target: 'web', // target the web environment
    module: {
        rules: [
            {
                // The test property specifies which files should be transformed by the loader.
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            // The esModule option is set to false.
                            // This is because when esModule is true, html-loader exports HTML as ES modules.
                            // But html-webpack-plugin expects CommonJS modules.
                            // So, we set esModule to false to make html-loader export HTML as CommonJS modules.
                            esModule: false,
                        },
                    },
                ],
            },
            {
                // The test property specifies which files should be transformed by the loader.
                test: /\.css$/,
                // The use property specifies which loaders should be used.
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body', // Add this line
        }),
        new InlineSourcePlugin({
            inlineSource: '.(html)$',
        })
    ],
};