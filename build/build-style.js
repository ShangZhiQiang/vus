const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const connect=require('gulp-connect');

//编译less
gulp.task('css', function (cb) {
    gulp.src('../src/styles/index.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(rename('vus.css'))
        .pipe(gulp.dest('../dist/styles')).pipe(connect.reload());
    cb();
});

// 拷贝字体文件
gulp.task('fonts', function (cb) {
    gulp.src('../src/styles/common/fonts/*.*')
        .pipe(gulp.dest('../dist/styles/fonts'));
    cb();
});

gulp.task('default', gulp.series(gulp.parallel('fonts','css')));


// gulp.task('build',gulp.series('clean:dist','css','fonts'));
// gulp.task('default', ['css', 'fonts']);
