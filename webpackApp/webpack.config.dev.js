const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development", // build type
    entry: "./src/app.js", // entry point
    output: { // output config
        path: path.resolve(__dirname, 'build/dev'), // output directory
        filename: 'script.js' // output file
    },
    devServer: {  // config devServer with current output file 'public'
        static: path.join(__dirname, 'build/dev'),
        compress: true,
        port: 8008
    },
    // loader
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    // HtmlWebpackPlugin
    plugins: [new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html",

        title: 'Webpack_Dev',
        bodyTags: "Development Build"
    })],
}
