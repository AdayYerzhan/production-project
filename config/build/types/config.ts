export type BuilMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildEnv {
    mode: BuilMode;
    port: number;
}

export interface BuildOptions {
    mode: BuilMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}