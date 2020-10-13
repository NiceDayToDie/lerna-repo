const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        "index": "./src/index.ts",
        "index.min": "./src/index.ts"
    },
    output: {
        filename: "[name].js",
        library: "tools",
        libraryExport: "default",
        libraryTarget: "umd",
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
};
