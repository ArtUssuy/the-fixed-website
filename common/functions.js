"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

(function ($) {
  var images = _toConsumableArray(document.getElementById("images").children);

  var numImages = images.length;
  var current = Math.floor(Math.random() * numImages);
  var INTERVAL = 5000;
  var init_timers = [];

  function start() {
    timer = setTimeout(function () {
      images.map(function (image) {
        image.classList = "hide";
        subTimer = setTimeout(function () {
          image.classList = "";
        }, 2200);
        current = (_readOnlyError("current"), getRandomNext());
        image.classList = "current";
        start();
      });
    }, INTERVAL);
  }

  function getRandomNext() {
    var n = Math.floor(Math.random() * numImages);

    if (n == current) {
      while (n == current) {
        n = Math.floor(Math.random() * numImages);
      }
    }

    return n;
  } // 
  // $(window).one('enter.page.bq', function(){
  // init_timers[init_timers.length] = setTimeout(function(){
  // $title.addClass('show');
  // }, 0);
  // init_timers[init_timers.length] = setTimeout(function(){
  // $images.eq(current).addClass('current');
  // start();
  // }, 800);
  // init_timers[init_timers.length] = setTimeout(function(){
  // $('#scroll-info').addClass('show');
  // }, 1300);
  // init_timers[init_timers.length] = setTimeout(addEvents, 2000);
  // }).one('exit.page.bq', function(){
  // removeEvents();
  // stop();
  // for (var i = init_timers.length - 1; i >= 0; i--) {
  // clearTimeout(init_timers[i]);
  // }
  // })

})(); // var timer = subTimer = null;
// function stop(){
//     clearTimeout(timer);
//     clearTimeout(subTimer);
// }
// var init_timers = []
// $(window).one('enter.page.bq', function(){
//     init_timers[init_timers.length] = setTimeout(function(){
//         $title.addClass('show');
//     }, 0);
//     init_timers[init_timers.length] = setTimeout(function(){
//         $images.eq(current).addClass('current');
//         start();
//     }, 800);
//     init_timers[init_timers.length] = setTimeout(function(){
//         $('#scroll-info').addClass('show');
//     }, 1300);
//     init_timers[init_timers.length] = setTimeout(addEvents, 2000);
// }).one('exit.page.bq', function(){
//     removeEvents();
//     stop();
//     for (var i = init_timers.length - 1; i >= 0; i--) {
//         clearTimeout(init_timers[i]);
//     }
// })
//# sourceMappingURL=functions.js.map
