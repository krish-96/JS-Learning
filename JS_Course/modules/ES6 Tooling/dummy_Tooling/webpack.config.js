const path =require("path")
module.exports = {
    entry : "./src/index.js",
    output : {
        filename : "app.js",
        path : path.resolve(__dirname, "dist"),
    },
    module : {
        rules : [
            {
            test : /\.css$/,
            use : [
                "css-loader",
                "sass-loader"
            ]
            },
            {
                test : /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type : "image/"
            }
        ]
    }
}