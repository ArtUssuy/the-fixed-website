"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(function () {
  // *********** BG FUNCTIONS
  var images = _toConsumableArray(document.getElementById("images").children);

  var currentImage = "";
  var randomImage = Math.floor(Math.random() * images.length);
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      images[randomImage].classList = " current";
      start();
    }, 800);
  });

  function start() {
    setTimeout(function () {
      var oldImage = currentImage !== "" ? currentImage : Math.floor(Math.random() * images.length);
      images.map(function (image) {
        image.classList = "";
      });
      images[oldImage].classList += " hide";
      setTimeout(function () {
        images[oldImage].classList = "";
      }, 2200);
      currentImage = randomNext(oldImage);
      images[currentImage].classList += " current";
      start();
    }, 3000);
  }

  function randomNext(oldImage) {
    var newImage = Math.floor(Math.random() * images.length);

    if (newImage == oldImage) {
      while (newImage == oldImage) {
        newImage = Math.floor(Math.random() * images.length);
      }
    }

    return newImage;
  } // ********** TITLE FUNCTIONS

})();
//# sourceMappingURL=functions.js.map
