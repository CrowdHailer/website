var gulp = require('gulp');
var download = require("gulp-download");

gulp.task('fetch', function () {
  download('https://raw.githubusercontent.com/davidtheclark/scut/master/dist/_scut.scss')
      .pipe(gulp.dest("assets/styles/vendor"));
})
