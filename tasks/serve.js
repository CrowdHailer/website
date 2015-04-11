'use strict';

var gulp = require('gulp');
var open = require("open");

function startExpress(port, path) {
    var express = require('express'),
        app = express();

    app.use(require('connect-livereload')());
    app.use(express.static(path));
    app.listen(port);
}

var lr;
function startLivereload() {
    lr = require('tiny-lr')();
    lr.listen(35729);
}

function notifyLivereload(event) {
    var fileName = require('path').relative('/home/peter/Workshop14/website/www', event.path);
    lr.changed({
      body: {
        files: [fileName]
      }
    });
    // gulp.src(event.path, {read: false})
    //     .pipe(require('gulp-livereload')(lr));
}

gulp.task('serve', function () {
  var port = 4000
  startLivereload();
  startExpress(port, 'www');

  gulp.watch('./www/**/*', notifyLivereload);

  // open('http://localhost:' + port);
});
