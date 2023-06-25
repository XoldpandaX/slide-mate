import { ProgressPlugin, HotModuleReplacementPlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type BuildOptions } from './types';

export const buildPlugins = (opts: BuildOptions): [
  HtmlWebpackPlugin,
  ProgressPlugin,
  HotModuleReplacementPlugin,
  Dotenv,
  MiniCssExtractPlugin
] => ([
  new HtmlWebpackPlugin({ template: opts.paths.html }),
  new ProgressPlugin(),
  new HotModuleReplacementPlugin(),
  new Dotenv(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
])
