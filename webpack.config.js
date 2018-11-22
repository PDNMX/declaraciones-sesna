const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');


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
    historyApiFallback: true,
    historyApiFallback: {
      rewrites: [
        // shows index.html as the landing page
        { from: /^\/$/, to: './index.html' }
      ]
    }
  },
  plugins : [
    new VueLoaderPlugin()
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

