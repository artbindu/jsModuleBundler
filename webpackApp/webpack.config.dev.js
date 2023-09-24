const path = require('path');

module.exports = {
    mode: "development", // build type
    entry: "./src/app.js", // entry point
    output: { // output config
        path: path.resolve(__dirname, 'public'), // output directory
        filename: 'script.js' // output file
    },
    devServer: {  // config devServer with current output file 'public'
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 8008
    },
    // loader
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
}