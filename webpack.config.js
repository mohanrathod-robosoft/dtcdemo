

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
  entry: path.join(__dirname, 'src', 'index.js'), 
  output: { 
    path: path.join(__dirname, 'build'), 
    filename: 'index.bundle.js' 
  }, 
  mode: process.env.NODE_ENV || 'development', 
  devtool: "source-map",
  resolve: { modules: [path.resolve(__dirname, 'src'), 'node_modules'], extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css", ".scss"] },
  module: { 
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }, 
      { test: /\.css$/, use: [ 
          { loader: "style-loader" },  // to inject the result into the DOM as a style block
          { loader: "css-modules-typescript-loader"},  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          { loader: "css-loader", options: { modules: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: "sass-loader" },  // to convert SASS to CSS
          { loader: 'typings-for-css-modules-loader?silent' }
          // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
      ] }, 
      { 
        test: /\.(js|jsx)$/,        
        exclude: /node_modules/,
        use: ['babel-loader']
      },      
      {        
        test: /\.(css|scss)$/,        
        use: ["style-loader", "css-loader", "sass-loader"]      
      },      
      {        
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader']
      }
    ],
    loaders: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ],

    preLoaders: [
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" }
    ]  
  },  
  plugins: [    
    new HtmlWebpackPlugin({ template: path.join(__dirname,'src','index.html')})
  ],
  
};