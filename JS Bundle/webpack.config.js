const path = require("path");

module.exports = {
    entry: "./src/home.js",
    output: {
        filename : "app.js",
        path : path.resolve(__dirname, "dist")
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    "css-loader"
                ]
            }
        ]
    }
}