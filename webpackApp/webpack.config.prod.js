const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "production", // build type
    entry: "./src/app.js", // entry point
    output: { // output config
        path: path.resolve(__dirname, 'build/prod'), // output directory
        filename: 'script.js' // output file
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

        title: 'ProdApp'
    })],
}
