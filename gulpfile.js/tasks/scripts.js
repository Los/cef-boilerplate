var handleErrors = require('../lib/handleErrors');
var gulp = require("gulp");
var browserSync = require("browser-sync");
var path = require("path");
var named = require("vinyl-named");
var webpackStream = require("webpack-stream");
var webpack = require("webpack");
var gulpif = require('gulp-if');
var glob = require('glob');

var paths = {
  src: path.join(CONFIG.root.src, CONFIG.tasks.scripts.src),
  destDev: path.join(CONFIG.root.destDev, CONFIG.tasks.scripts.dest),
  destProd: path.join(CONFIG.root.destProd, CONFIG.tasks.scripts.dest)
};

var entry = [
  path.join(paths.src, "main.js")
];

var webpackConfigDev = {
  devtool: "source-map",
  target: "web",
  mode: 'development',
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"]]
          }
        }
      }
    ],
  }
};

var webpackConfigProd = {
  target: "web",
  mode: 'production',
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"]]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
};

gulp.task("scripts", function() {
  return gulp
    .src(entry)
    .pipe(named())
    .pipe(gulpif(global.PRODUCTION, webpackStream(webpackConfigProd, webpack)))
    .pipe(gulpif(!global.PRODUCTION, webpackStream(webpackConfigDev, webpack)))
    .on('error', handleErrors)
    .pipe(gulpif(global.PRODUCTION, gulp.dest(paths.destProd)))
    .pipe(gulpif(!global.PRODUCTION, gulp.dest(paths.destDev)))
    .pipe(browserSync.stream());
});