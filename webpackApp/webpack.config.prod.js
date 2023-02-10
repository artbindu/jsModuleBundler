const path = require('path');

module.exports = {
    mode: "development", // build type
    entry: "./src/app.js", // entry point
    output: { // output config
        path: path.resolve(__dirname, 'public'), // output directory
        filename: 'script.js' // output file
    },
    // loader
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
}
