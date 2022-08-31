const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build')
    },

    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            src: path.resolve(__dirname, 'src'),
            store: path.resolve(__dirname, 'src/store'),
            svg: path.resolve(__dirname, 'src/assets/svg'),
        },
        extensions: ['.js', '.jsx']
    },

    devtool: 'eval-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],

    mode: 'development',
    devServer: {
        static: './build',
    },

    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.jsx?$/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
}