screenfull = require('screenfull')

if (screenfull.enabled) {
  var goFS = document.getElementById("goFS");
   goFS.addEventListener("click", function() {
    screenfull.request();
   }, false);
};

var main = document.querySelector('main')
var navbars = document.querySelectorAll('nav');
// var a = ["a", "b", "c"];
[navbars[0], navbars[1]].forEach(function(element) {
    element.onclick = function(e){

      main.classList.toggle('hover')
    }
});
