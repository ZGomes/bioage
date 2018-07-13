const BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    jeet = require('jeet'),
    koutoSwiss = require('kouto-swiss'),
    path = require('path'),
    rupture = require('rupture'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        "bundle.min": "./src/app.js",
        "bundle": "./src/app.js"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'stylus-loader',
                        options: {
                            'resolve url': true,
                            use: [
                                jeet(),
                                rupture(),
                                koutoSwiss()
                            ],
                        }
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin({
            include: /\.min\.js$/,
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            minify: true,
            favicon: 'src/assets/icons/favicon.png',
            template: 'src/pages/index.html',
            excludeChunks: ['bundle']
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/'
        }, {
            reload: false
        })
    ]
};