const { appendFile } = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development', //production
    entry: {
        main: path.resolve(__dirname,'src/index.js'),
    },
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: 'app.bundle.js',
        hashFunction: 'xxhash64',
    },
    //loaders
    module: {
        rules: [
            {test: /\.css$/, use:['style-loader','css-loader']}
        ]
    },
    //plugins
    plugins: [new HtmlWebpackPlugin({
        title: 'To Do List',
        filename: 'index.html',
        template: path.resolve(__dirname,"./src/index.html")
    })]
}