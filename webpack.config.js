const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),

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
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
    },

    devtool: 'eval-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],

    mode: 'development',
    devServer: {
        client: {
            logging: 'info',
        },
        compress: true,
        // for react router
        historyApiFallback: true,
        port: 8000,
    },

    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(t|j)sx?$/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
}