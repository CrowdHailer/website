screenfull = require('screenfull')

// if (screenfull.enabled) {
//   var goFS = document.getElementById("goFS");
//    goFS.addEventListener("click", function() {
//     screenfull.request();
//    }, false);
// };

var front = document.querySelector('.front')
var back = document.querySelector('.back')
var navbars = document.querySelectorAll('nav');
var navbars = [].slice.call(document.querySelectorAll("nav a"));
// var a = ["a", "b", "c"];
navbars.forEach(function(element) {
    element.onclick = function(e){

      front.classList.toggle('flipped')
      back.classList.toggle('flipped')
    }
});

var professionalLink = document.querySelector('a[href="#professional-section"]')
var professionalSection = document.querySelector('#professional-section')
// console.log(professionalLink)
professionalLink.onclick = function (e){
  front.classList.add('hidden')
  professionalSection.classList.add('active')
}

var backButton = professionalSection.querySelector('a[href="#front-section"]')
backButton.onclick = function (e){
  console.log('hello')
  front.classList.remove('hidden')
  professionalSection.classList.remove('active')
}

var freshLink = document.querySelector('a[href="#fresh-section"]')
var freshSection = document.querySelector('#fresh-section')
// console.log(freshLink)
freshLink.onclick = function (e){
  front.classList.add('hidden')
  freshSection.classList.add('active')
}

var backfreshButton = freshSection.querySelector('a[href="#front-section"]')
backfreshButton.onclick = function (e){
  console.log('hello')
  front.classList.remove('hidden')
  freshSection.classList.remove('active')
}

var fastLink = document.querySelector('a[href="#fast-section"]')
var fastSection = document.querySelector('#fast-section')
// console.log(fastLink)
fastLink.onclick = function (e){
  front.classList.add('hidden')
  fastSection.classList.add('active')
}

var backfastButton = fastSection.querySelector('a[href="#front-section"]')
backfastButton.onclick = function (e){
  console.log('hello')
  front.classList.remove('hidden')
  fastSection.classList.remove('active')
}
// var items = [].slice.call(document.querySelectorAll("strong"));
// console.log(items)
// items.forEach(function(element) {
//     element.onclick = function(e){
//
//       element.classList.toggle('live')
//     }
// });
