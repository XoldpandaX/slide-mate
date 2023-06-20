import path from 'path';
import webpack from 'webpack';
import { Mode, BuildPaths, BuildEnv } from './config/build/types';
import { createWebpackConfig } from './config/build/create-webpack-config';

export default (env: BuildEnv): webpack.Configuration => {
  const mode: Mode = env.mode || 'development';
  const port = env.port || 3000;
  const isDev = mode === 'development';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
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
