const plugin = require("html-webpack-plugin")
const instancia = new plugin({
    template : __dirname + "/dist/index.html" ,
    filename : "index.html" ,
    inject : "body"
})

module.exports = {
    entry : __dirname + "/src/app.js" ,
    output : {
        path : __dirname + "/dist" ,
        filename : "bundle.js"
    },
    module : {
        rules : [
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            { test: /\.styl$/, loader: ["style-loader","css-loader","stylus-loader"]}
        ]
    },
    mode : "development" ,
    plugins : [instancia]    
}