var gulp = require('gulp');
var mocha = require('gulp-mocha');
var util = require('gulp-util');

require('./test/support/node.js');

gulp.task('default', ['test']);

gulp.task('test', function() {
  return gulp.src(['public/**/*.spec.js'], { read: false })
    .pipe(mocha({ reporter: 'spec' }))
    .on('error', util.log);
});

gulp.task('watch-test', function () {
  gulp.watch(['public/**', 'app.js', 'test/**'], ['test']);
});
