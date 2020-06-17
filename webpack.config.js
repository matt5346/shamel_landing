const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin}  = require("clean-webpack-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: [
                    {
                    loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                    loader: "html-loader",
                    options: { minimize: true }
                    }
                ]
            },
            {
              test: /\.(png|svg|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: "img/[name].[ext]",
                  },
                },
              ],
            },
            {
                test: /\.(ttf|eot|woff|otf|woff2)$/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "fonts/[name].[ext]",
                  },
                },
            },
            {
              test: /\.scss$/,
              use: [
                "style-loader",
                "postcss-loader",
                "sass-loader"
              ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[nanme].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin()
    ]
}