var gulp = require('gulp');
var del = require('del');
var minifyHTML = require('gulp-minify-html');

gulp.task('clean', function () {
  return del.sync(['www']);
});

gulp.task('copy', function () {
  gulp.src('./public/**/*', {base: './public'})
  .pipe(minifyHTML({}))
  .pipe(gulp.dest('./www'));
});

gulp.task('build', ['clean', 'copy', 'styles'])
