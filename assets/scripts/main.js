screenfull = require('screenfull')

if (screenfull.enabled) {
  var goFS = document.getElementById("goFS");
   goFS.addEventListener("click", function() {
    screenfull.request();
   }, false);
};
