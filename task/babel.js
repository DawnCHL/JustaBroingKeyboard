const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('babel1', () => {
	return gulp.src('*.js')
		.pipe(babel({
			plugins: ['transform-async-to-generator']
		}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('babel2', () => {
	return gulp.src('./src/**/*.js')
		.pipe(babel({
			plugins: ['transform-async-to-generator']
		}))
		.pipe(gulp.dest('./dist/src'));
});
