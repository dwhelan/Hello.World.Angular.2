var gulp = require('gulp');
var util = require('gulp-util');

var mocha = require('gulp-mocha');

require('./test/support/node.js');

gulp.task('default', ['test', 'webpack']);

gulp.task('test', function() {
  return gulp.src(['public/**/*.spec.js'], { read: false })
    .pipe(mocha({ reporter: 'spec' }))
    .on('error', util.log);
});

gulp.task('watch-test', function () {
  gulp.watch(['public/**', 'app.js', 'test/**'], ['test']);
});

var webpack = require('webpack-stream');

gulp.task('webpack', function() {
  return gulp.src('public/src/index.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('public/dist/'));
});