var gulp = require('gulp');
var del = require('del');
var minifyHTML = require('gulp-minify-html');
var inject = require('gulp-inject');

gulp.task('clean', function () {
  return del.sync(['www']);
});

function fileContents(filePath, file) {
    return file.contents.toString('utf8');
}

gulp.task('copy', function () {
  var sources = gulp.src(['./src/**/*.js', './www/**/*.css']);
  console.log('boo')

  gulp.src('./public/**/*', {base: './public'})
  .pipe(inject(sources, { transform: fileContents }))
  // .pipe(minifyHTML({}))
  .pipe(gulp.dest('./www'));
});

gulp.task('build', ['clean', 'styles', 'scripts', 'copy'])

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
