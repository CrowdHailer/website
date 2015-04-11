var gulp = require('gulp');
var del = require('del');
var minifyHTML = require('gulp-minify-html');

gulp.task('clean', function () {
  return del.sync(['www']);
});

gulp.task('copy', function () {
  gulp.src('./public/**/*', {base: './public'})
  // .pipe(minifyHTML({}))
  .pipe(gulp.dest('./www'));
});

gulp.task('build', ['clean', 'copy', 'styles', 'scripts'])

gulp.task('watch', function () {
  var core_watcher = gulp.watch('./public/**/*', ['copy'])
  core_watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
  var style_watcher = gulp.watch('./assets/styles/**/*', ['styles'])
  style_watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
  var script_watcher = gulp.watch('./assets/scripts/**/*', ['scripts'])
  script_watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});
