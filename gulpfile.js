/// <binding Clean='clean' />
const gulp = require('gulp');
const less = require('gulp-less');
const notify = require('gulp-notify');

var paths{
  lessFiles = "style/**/*.less",
  mainStyle = "style/mainstyle.less"
}

gulp.task('less', function () {
    return gulp.src(paths.mainStyle)
        .pipe(less())
        .pipe(gulp.dest(paths.concatCssDest))
        .pipe(notify("Less done building"));
});

gulp.task('watchLess', function() {
    gulp.watch(paths.lessFiles, ['less']);
});
