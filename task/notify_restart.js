var gulp = require('gulp');
// 错误处理
var notify = require("gulp-notify")

module.exports = function(errorObject, callback) {
    // 错误通知
    notify.onError(errorObject.toString().split(': ').join(':\n'))
        .apply(this, arguments);

    // Keep gulp from hanging on this task
    if (typeof this.emit === 'function') {
        this.emit('end');
    }
}

// 任务
var plumber = require('gulp-plumber');

var project = require('../lib/project')(); // 得到当前的后台项目
var config = require('../config.' + project).views; // 读取配置文件
var handleErrors = require('../lib/handleErrors');


gulp.task('views', function() {
    return gulp.src(config.src)
        .pipe(plumber(handleErrors)) // 错误自启动
        .pipe(gulp.dest(config.dest));
});
