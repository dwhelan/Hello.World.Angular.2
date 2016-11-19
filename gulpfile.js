var gulp = require('gulp');
var mocha = require('gulp-mocha');

require('./test/support/node.js');

gulp.task('default', function() {
  return gulp.src(['public/**/*.spec.js'], { read: false })
    .pipe(mocha());
});

gulp.task('test', function() {
  return gulp.src(['public/**/*.spec.js'], { read: false })
    .pipe(mocha());
});

gulp.task('watch-test', function () {
  gulp.watch(['public/**', 'app.js', 'test/**'], ['test']);
});