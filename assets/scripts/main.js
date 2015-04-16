screenfull = require('screenfull')

// if (screenfull.enabled) {
//   var goFS = document.getElementById("goFS");
//    goFS.addEventListener("click", function() {
//     screenfull.request();
//    }, false);
// };

var main = document.querySelector('main')
var navbars = document.querySelectorAll('nav');
var navbars = [].slice.call(document.querySelectorAll("nav"));
// var a = ["a", "b", "c"];
navbars.forEach(function(element) {
    element.onclick = function(e){

      main.classList.toggle('hover')
    }
});


var items = [].slice.call(document.querySelectorAll("strong"));
console.log(items)
items.forEach(function(element) {
    element.onclick = function(e){

      element.classList.toggle('live')
    }
});
