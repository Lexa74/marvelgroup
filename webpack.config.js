const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: ['./style.less', './index.html'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        assetModuleFilename: 'assets/images/[name][ext]'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.less$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ],
                dependency: { not: ['url'] }
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}       