var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
  return del.sync(['www']);
});

gulp.task('copy', function () {
  gulp.src('./public/**/*', {base: './public'})
  .pipe(gulp.dest('./www'));
});

gulp.task('build', ['clean', 'copy'])
