import { WebpackConfiguration } from "webpack-cli";
import path from "path";
import {Mode, BuildEnv, BuildPaths, BuildOptions} from "./config/build/types";
import {buildLoaders} from "./config/build/build-loaders";
import {buildPlugins} from "./config/build/build-plugins";
import {buildDevServer} from "./config/build/build-dev-server";


const createWebpackConfig = (opts: BuildOptions): WebpackConfiguration => {
  const { mode, paths, isDev } = opts;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].dist.js',
      path: paths.output,
      clean: true,
    },
    module: {
      rules: buildLoaders(opts),
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: buildPlugins(opts),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(opts.port) : undefined,
  }
};

export default (env: BuildEnv): WebpackConfiguration => {
  const mode: Mode = env.mode || 'development';
  const port = env.port || 3000;
  const isDev = mode === 'development';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  return createWebpackConfig({
    mode,
    paths,
    port,
    isDev,
  });
};
