import { ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import { BuildOptions } from './types';

export const buildPlugins = (
  opts: BuildOptions
): [HtmlWebpackPlugin, ProgressPlugin, ESLintWebpackPlugin, Dotenv, MiniCssExtractPlugin] => [
  new HtmlWebpackPlugin({ template: opts.paths.html }),
  new ProgressPlugin(),
  new ESLintWebpackPlugin({
    extensions: ['js', 'jsx', 'ts', 'tsx'],
  }),
  new Dotenv(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
];
