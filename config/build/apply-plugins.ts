import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';

export const applyPlugins = (path: string): [
  HtmlWebpackPlugin,
  webpack.ProgressPlugin,
  Dotenv,
] => ([
  new HtmlWebpackPlugin({ template: path }),
  new webpack.ProgressPlugin(),
  new Dotenv(),
]);
