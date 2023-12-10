const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');

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
    // webpack plugins
    plugins: [
        new HtmlWebpackPlugin({// HtmlWebpackPlugin
            template: "./public/index.html",
            filename: "./index.html",
            title: 'webpack-prod' // HTML page - title
        }),
        new WebpackObfuscator ({ // JavaScript Obfuscator
            // what files will obfuscate or what not
            include: ['src/**/*.js', 'public/*.html'],
            exclude: ['node_modules/**', 'build/**'],
            enforce: 'post',
            // Obfuscator Rules
            use: { 
                loader: WebpackObfuscator.loader, 
                options: {
                    rotateStringArray: true
                }
            }
        })
    ],
}
