export type Mode = 'development' | 'production';

export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
}

export interface BuildEnv {
    mode: Mode;
    port: number;
}

export interface BuildOptions {
    mode: Mode;
    isDev: boolean;
    paths: BuildPaths;
    port: number;
}
