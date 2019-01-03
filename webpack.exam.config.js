const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
 
    /*入口*/
    entry: path.join(__dirname, 'examples/index.js'),
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
        //   {
        //     test: /\.(js|jsx)$/,
        //     enforce: 'pre',
        //     use: [
        //       {
        //         loader: require.resolve('eslint-loader'),
        //         options: {
        //           eslintPath: require.resolve('eslint'),
        //           emitWarning: false,
        //           cache: false,
        //         },
        //       },
        //     ],
        //     exclude: /node_modules/,
        //     include: [path.resolve(__dirname, '../src/')],
        //   },
          {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader?cacheDirectory',
            include: [path.resolve(__dirname, 'src')],
          },
          {
              test:/\.css$/,
              use:['style-loader','css-loader'] //"postcss-loader"
          },
          {
              test:/\.scss$/,
              use:['style-loader','css-loader','sass-loader','postcss-loader']
          },
          {
            test:/\.less$/,
            use:['style-loader','css-loader','less-loader']
          },
          
        //   {
        //     test: /\.(woff|woff2|eot|ttf|otf)$/,
        //     use: ['file-loader'],
        //   },
        ],
    },

    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'examples/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            // chunkFilename: "css/[id].css"
        }),
        new UglifyJSPlugin(),
    ],
};