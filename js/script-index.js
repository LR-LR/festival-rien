document.addEventListener("DOMContentLoaded", function(event) {
  // ---------- INDEX.HTML ---------- \\
  // Variables
  let indexTitle = document.getElementById("index-title");
  let indexNav1 = document.getElementById("index-nav-1");
  let indexNav2 = document.getElementById("index-nav-2");

  // Events
  // indexNav1 hover
  indexNav1.addEventListener("mouseenter", function() {
    indexTitle.style.opacity = "0.2";
    indexNav1.style.opacity = "1";
    indexNav2.style.opacity = "0.2";
  }, false);
  indexNav1.addEventListener("mouseleave", resetOpacity, false);

  // indexNav2 hover
  indexNav2.addEventListener("mouseenter", function() {
    indexTitle.style.opacity = "0.2";
    indexNav1.style.opacity = "0.2";
    indexNav2.style.opacity = "1";
  }, false);
  indexNav2.addEventListener("mouseleave", resetOpacity, false);

  // function resetOpacity
  function resetOpacity(){
    indexTitle.style.opacity = "1";
    indexNav1.style.opacity = "1";
    indexNav2.style.opacity = "1";
  }
});
