import { type Configuration } from 'webpack-dev-server';

export const buildDevServer = (port: number): Configuration => ({
  port,
  open: true,
  historyApiFallback: true,
  hot: true,
  client: {
    logging: 'error',
    overlay: true,
    progress: true,
  },
});
