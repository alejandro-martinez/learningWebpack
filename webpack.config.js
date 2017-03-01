module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.sass$/,
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    }
};