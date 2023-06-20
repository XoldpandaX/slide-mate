import webpack from 'webpack';
import { BuildOptions } from './types';
import { applyPlugins } from './apply-plugins';
import { applyLoaders } from './apply-loaders';
import { applyResolvers } from './apply-resolvers';
import { createDevServer } from './create-dev-server';

export const createWebpackConfig = (opts: BuildOptions): webpack.Configuration => {
  const { mode, paths, isDev } = opts;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].bundle.js',
      path: paths.output,
    },
    plugins: applyPlugins(paths.html),
    module: {
      rules: applyLoaders(),
    },
    resolve: applyResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? createDevServer(opts.port) : undefined,
  };
};
