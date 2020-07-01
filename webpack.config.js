var webpack = require("webpack");
var path = require("path");
//Distribution direction (bundled files to serve the app)
var DIST_DIR = path.resolve(__dirname,"/dist"); //Copies everything into the "dist" folder which is created automatically
var SRC_DIR = path.resolve(__dirname,"src"); //Where to find the entry source code

var config = {
    entry: SRC_DIR + "/app/index.js", //Looks at entry files and looks at dependencies and pulls in required imports.
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    devServer: {
        contentBase: "./src",
        inline:true,
        hot:true,
        port: 8080
    },
    module: {
        rules: [
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.(jpg|png)$/, loader: 'url-loader'},
            {
                test: /\.js?/, //Have a look at all js files
                include: SRC_DIR,
                loader: 'babel-loader',
              //  loader: 'babel-loader && style-loader!css-loader',
                query: {
                    presets: ["react","es2015", "stage-2"] //presets are in the devDependencies in package.json
                }
            }
        ]
    }
}; // Holds the configuration

module.exports = config;