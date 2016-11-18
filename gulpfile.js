var gulp = require('gulp');
var mocha = require('gulp-mocha');

require('./test/support/node.js');

gulp.task('default', function() {
  return gulp.src(['test/*.js'], { read: false })
    .pipe(mocha());
});