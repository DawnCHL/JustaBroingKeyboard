var gulp = require('gulp');
// var gulpWebpack = require('gulp-webpack');
var webpackStream = require("webpack-stream")
var defaultsDeep = require('merge-defaults');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var PUBLIC_PATH = '/public/';

gulp.task("webpack-dev", function() {
  return gulp.src('./src/static/app/js/main.js')
    .pipe(webpackStream( webpackConfig ))
    .pipe(gulp.dest('dist/src/static/app'));
});