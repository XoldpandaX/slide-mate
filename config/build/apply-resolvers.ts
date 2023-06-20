import { ResolveOptions } from 'webpack';

export const applyResolvers = (): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
});
