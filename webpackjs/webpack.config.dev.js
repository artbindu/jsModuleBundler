const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development", // build type
    entry: "./src/app.js", // entry point
    // webpack devServer
    devServer: {  // config devServer with current output file 'public'
        static: path.join(__dirname, 'build/dev'),
        compress: true,
        port: 8002
    },
    // loader
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    // webpack plugins
    plugins: [
        // HtmlWebpackPlugin
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            title: 'webpack-dev' // HTML page - title
        })
    ],
    output: { // output config
        path: path.resolve(__dirname, 'build/dev'), // output directory
        filename: 'script.js', // output file
        clean: true,
    },
}
