var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function (cb) {
  return del('./dist', {force: true}, cb);
});
