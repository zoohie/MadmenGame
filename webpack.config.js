const path = require("path");
const CopyPlugin  = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'bin')
    },
    devServer: {
        host: '0.0.0.0'
    },
    plugins: [
        new CopyPlugin ([
            { from: 'data', to: 'data' },
            { from: 'index.html', to: 'index.html' },
            { from: 'app.css', to: 'app.css' }

        ]),
        new CompressionPlugin({
            compressionOptions: { level: 6 },
        })
    ],
    module: {
        rules: [
            {test: /\.css$/, loader: 'styles!css'},
            {
                test: /\.scss$/,
                loaders: ['styles-loader', 'raw-loader', 'sass-loader']
            },
            {test: /\.tsx?$/, loader: "ts-loader"},
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            },
            {
                test: /\.(png|jpg|json)$/,
                use: "file-loader?name=[path][name].[ext]"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", '.css']
    },
    externals: {
        pixi: "PIXI"
    },

    devtool: 'inline-source-map'
};