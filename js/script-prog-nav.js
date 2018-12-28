document.addEventListener("DOMContentLoaded", function(event) {
  // ---------- PROGRAMMATION-NAV.HTML ---------- \\
  // Variables
  let navDay1 = document.getElementById("nav-day-1");
  let navDay2 = document.getElementById("nav-day-2");
  let navDay3 = document.getElementById("nav-day-3");
  let navDay4 = document.getElementById("nav-day-4");
  let navDay5 = document.getElementById("nav-day-5");
  let progNavHomeButton = document.getElementById("prog-nav-home-button");
  let progNavBackButton = document.getElementById("prog-nav-back-button");

  // Events
  // navDay1 hover
  navDay1.addEventListener("mouseenter", function() {
    setOpacity();
    navDay1.style.opacity = "1";
  }, false);
  navDay1.addEventListener("mouseleave", resetOpacity, false);

  // navDay2 hover
  navDay2.addEventListener("mouseenter", function() {
    setOpacity();
    navDay2.style.opacity = "1";
  }, false);
  navDay2.addEventListener("mouseleave", resetOpacity, false);

  // navDay3 hover
  navDay3.addEventListener("mouseenter", function() {
    setOpacity();
    navDay3.style.opacity = "1";
  }, false);
  navDay3.addEventListener("mouseleave", resetOpacity, false);

  // navDay4 hover
  navDay4.addEventListener("mouseenter", function() {
    setOpacity();
    navDay4.style.opacity = "1";
  }, false);
  navDay4.addEventListener("mouseleave", resetOpacity, false);

  // navDay5 hover
  navDay5.addEventListener("mouseenter", function() {
    setOpacity();
    navDay5.style.opacity = "1";
  }, false);
  navDay5.addEventListener("mouseleave", resetOpacity, false);

  // progNavHomeButton hover
  progNavHomeButton.addEventListener("mouseenter", function() {
    setOpacity();
    progNavHomeButton.style.opacity = "1";
  }, false);
  progNavHomeButton.addEventListener("mouseleave", resetOpacity, false);

  // progNavBackButton hover
  progNavBackButton.addEventListener("mouseenter", function() {
    setOpacity();
    progNavBackButton.style.opacity = "1";
  }, false);
  progNavBackButton.addEventListener("mouseleave", resetOpacity, false);

  // function setOpacity & resetOpacity
  function setOpacity() {
    navDay1.style.opacity = "0.2";
    navDay2.style.opacity = "0.2";
    navDay3.style.opacity = "0.2";
    navDay4.style.opacity = "0.2";
    navDay5.style.opacity = "0.2";
    progNavHomeButton.style.opacity = "0.2";
    progNavBackButton.style.opacity = "0.2";
  };

  function resetOpacity() {
    navDay1.style.opacity = "inherit";
    navDay2.style.opacity = "inherit";
    navDay3.style.opacity = "inherit";
    navDay4.style.opacity = "inherit";
    navDay5.style.opacity = "inherit";
    progNavHomeButton.style.opacity = "inherit";
    progNavBackButton.style.opacity = "inherit";
  };
});
