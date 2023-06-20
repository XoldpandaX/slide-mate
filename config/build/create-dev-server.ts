import { Configuration } from 'webpack-dev-server';
export const createDevServer = (port: number): Configuration => ({
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
