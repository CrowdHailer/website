var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('styles', function () {
    return gulp.src('assets/styles/main.scss')
        .pipe(sass(
          // {outputStyle: 'compressed'}
        ))
        .pipe(prefix())
        .pipe(gulp.dest('www/styles'));
});
