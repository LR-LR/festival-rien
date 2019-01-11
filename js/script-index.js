'use-strict';

document.addEventListener("DOMContentLoaded", function() {
  // Events

  // indexNav1 hover
  indexNav1.addEventListener("mouseenter", function() {
    setTransparency();
    indexNav1.style.opacity = "1";
  }, false);
  indexNav1.addEventListener("mouseleave", resetOpacity, false);

  // indexNav2 hover
  indexNav2.addEventListener("mouseenter", function() {
    setTransparency();
    indexNav2.style.opacity = "1";
  }, false);
  indexNav2.addEventListener("mouseleave", resetOpacity, false);

}, false);
