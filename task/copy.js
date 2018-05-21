var gulp = require('gulp');

gulp.task('copy', function () {
  return gulp.src([
      './src/static/pure/**/*',
      './src/view/*',
      './favicon.ico'
    ], {
      base: './src'
    })
    .pipe(gulp.dest('./dist/src'));
});