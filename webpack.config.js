const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry : {
    index       : './src/index.js'
  },
  output : {
    path : path.resolve(__dirname, 'public/js'),
    filename: '[name].js',
  },
  devServer : {
    contentBase : path.resolve(__dirname + "/public"),
    lazy: false,
    publicPath: '/js/',
    host: '0.0.0.0',
    historyApiFallback: true,
    historyApiFallback: {
      rewrites: [
        // shows index.html as the landing page
        { from: /^\/$/, to: './index.html' }
      ]
    }
  },
  plugins : [
    new VueLoaderPlugin(),
    new Dotenv()
  ],
  module : {
    rules : [
      { test : /\.vue$/,use : ['vue-loader']},
      { test : /\.css$/, use : ['style-loader', 'css-loader']},
      { test : /\.xml$/, use : ['xml-loader']},
      { test : /\.(csv|tsv)$/, use : ['csv-loader']},
      { test : /\.(png|svg|jpg|gif)$/, use : ['file-loader']},
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
  },
  mode : 'development'
}
