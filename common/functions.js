"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(function () {
  document.addEventListener("DOMContentLoaded", load);

  function load() {
    setTimeout(animateSiteBG, 1000);
    setTimeout(animateSiteName, 1200);
  }
  /* MY ANIMATIONS */


  var animateSiteName = function animateSiteName() {
    var nameLetters = _toConsumableArray(document.getElementsByClassName("letter-name-site"));

    var subNameLetters = _toConsumableArray(document.getElementsByClassName("letter-subname-site"));

    var subNameSite = document.getElementById("subNameSite");
    nameLetters.map(function (letter) {
      // animate name
      letter.style.opacity = 1;
      letter.style.transform = "scale(1, 1)";
    });
    subNameLetters.map(function (letter) {
      // animate subname
      letter.style.opacity = 1;
    });
    subNameSite.style.opacity = 1; // animate subname wrapper

    subNameSite.style.marginTop = "20px";
  };

  var animateSiteBG = function animateSiteBG() {
    var imagesBG = _toConsumableArray(document.getElementById("bgImages").children);
    /* 
        - iterar array HTMLCollection
            -
    */

  };
})();
/*


*/
//# sourceMappingURL=functions.js.map
