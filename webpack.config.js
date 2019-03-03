const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.tsx",
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    devServer: {
        inline: true,
        contentBase: './public',
        // historyApiFallback: true,
        port: 3000
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader"},
				{ test: /\.js$/, use: ["source-map-loader"], enforce: "pre" },
				{ test: /\.css$/, use: ['style-loader', 'css-loader']}
      ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "index.html"
				}),
				// new MiniCssExtractPlugin({filename: "app.css"}),
				new UglifyJsPlugin()
    ]
  };