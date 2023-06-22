import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types';

export const buildLoaders = (opts: BuildOptions): RuleSetRule[] => {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.(css|scss)$/,
        use: [
            opts.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    esModule: true,
                    modules: {
                        auto: (rPath: string) => Boolean(rPath.includes('.module.')),
                        localIdentName: opts.isDev ? '[path][name]__[local]' : '[hash:base64]',
                        localIdentHashSalt: 'hash',
                        localIdentHashDigestLength: 8,
                    },
                },
            },
            "sass-loader",
        ],
    };

    return [typescriptLoader, cssLoader];
};
