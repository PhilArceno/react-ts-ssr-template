const path = require("path")

module.exports = {
    entry: path.resolve(__dirname, "src", "index.jsx"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: "/node_modules",
                loader: [
                    {
                        loader: "babel-loader",
                        query: {
                            presets: ["@babel/preset-react"]
                        }
                    }
                ]
            }
        ]
    }
}