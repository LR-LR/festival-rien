document.addEventListener("DOMContentLoaded", function(event) {
  // ---------- INDEX.HTML ---------- \\
  // Variables
  let indexTitle = document.getElementById("index-title");
  let indexNav1 = document.getElementById("index-nav-1");
  let indexNav2 = document.getElementById("index-nav-2");

  // First link hover
  indexNav1.addEventListener("mouseenter", function(){
    indexTitle.style.opacity = "0.2";
    indexNav1.style.opacity = "1";
    indexNav2.style.opacity = "0.2";
  }, false);
  indexNav1.addEventListener("mouseleave", function(){
    indexTitle.style.opacity = "1";
    indexNav1.style.opacity = "1";
    indexNav2.style.opacity = "1";
  }, false);

  // Second link hover
  indexNav2.addEventListener("mouseenter", function(){
    indexTitle.style.opacity = "0.2";
    indexNav1.style.opacity = "0.2";
    indexNav2.style.opacity = "1";
  }, false);
  indexNav2.addEventListener("mouseleave", function(){
    indexTitle.style.opacity = "1";
    indexNav1.style.opacity = "1";
    indexNav2.style.opacity = "1";
  }, false);
});
