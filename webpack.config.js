const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src')
}

module.exports = {
    mode: 'production',
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        publicPath: '/',
        assetModuleFilename: '[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(woff|woff2|otf|eot|ttf)$/,
                use: {
                    loader: 'url-loader'
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                loader: ImageMinimizerPlugin.loader,
                options: {
                    severityError: 'warning', // Ignore errors on corrupted images
                    minimizerOptions: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            // ['optipng', { optimizationLevel: 5 }],
                            // [
                            //     'svgo',
                            //     {
                            //         plugins: [
                            //             {
                            //                 removeViewBox: false,
                            //             },
                            //         ],
                            //     },
                            // ],
                        ],
                    },
                },

            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
        // new PurgeCSSPlugin({
        //     paths: glob.sync(`${PATHS.src}/**/*.html`,  { nodir: true }),
        // }),
        new HtmlWebpackPlugin({
            title: 'Icetea Labs',
            template: path.resolve(__dirname, 'src/index.html'), // template file
            filename: 'index.html', // output file
            favicon: path.resolve(__dirname, 'src/images/favicon.svg')
        }),
        new HtmlWebpackPlugin({
            title: 'Icetea Labs News',
            template: path.resolve(__dirname, 'src/news.html'), // template file
            filename: 'news.html', // output file
            favicon: path.resolve(__dirname, 'src/images/favicon.svg')
        }),
    ],
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            }
        },
    },
};
