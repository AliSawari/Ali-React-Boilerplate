module.exports = {
  entry: "./src/Main.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    extensions:[".js",".jsx"]
  },
  module: {
    loaders: [
      {
        use : "babel-loader",
        exclude: /(node_modules)/
      }
    ]
  }
}
