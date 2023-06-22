import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from "./types";

export const buildPlugins = (opts: BuildOptions): [
    HtmlWebpackPlugin,
    webpack.ProgressPlugin,
    Dotenv,
    MiniCssExtractPlugin,
] => ([
    new HtmlWebpackPlugin({ template: opts.paths.html }),
    new webpack.ProgressPlugin(),
    new Dotenv(),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    }),
]);
