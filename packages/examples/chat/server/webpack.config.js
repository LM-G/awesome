const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    target: 'node',
    externals: [
        nodeExternals()
    ],
    resolve: {
        extensions: ['.js', '.ts'],
        plugins: [new TsconfigPathsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    node: {
        global: true,
        process: true,
        __dirname: true
    }
}