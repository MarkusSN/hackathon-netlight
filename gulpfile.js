/// <binding Clean='clean' />
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const less = require('gulp-less');
const join = require('path').resolve;
const browserify = require('browserify');
const reactify = require('reactify');
const babelify = require('babelify');
const watchify = require('watchify');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify');
const project = require("./project.json");
const objectAssign = require('object-assign');
const plumber = require('gulp-plumber');

const errorHandler = {
    errorHandler: notify.onError('Error: <%- error.message%>')
};

var paths = {

};

const outputFolder = join(paths.webroot + "/js");


paths.concatCssDest = "dist/css/";
paths.concatJsDest = "js/site.min.js";
paths.app = "js/app.min.js";
paths.mainStyle =  "./Style/Main.less";
paths.reactRoot = './JS/React/App.js';
paths.watchReact = './JS/React/**/*.jsx';
paths.lessFiles = 'Style/**/*.less';

const b = watchify(browserify(objectAssign({}, watchify.args, {
    entries: './JS/React/App.js',
    extensions: ['.jsx'],
    debug: true
})));

b.transform(babelify).transform(reactify);
b.on('update', bundle);

function bundle() {

    return b.bundle()
      .on('error', function (err) {
          errorHandler.errorHandler(err);
      })
      .pipe(source(paths.app))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest("."))
    .pipe(notify("Successfully built JSX"));
}

gulp.task("react", function () {
    bundle();
});

gulp.task('less', function () {
    return gulp.src(paths.mainStyle)
        .pipe(less())
        .pipe(gulp.dest(paths.concatCssDest))
        .pipe(notify("Less done building"));
});

gulp.task('watchLess', function() {
    gulp.watch(paths.lessFiles, ['less']);
});
