'use-strict';

document.addEventListener("DOMContentLoaded", function() {
  // Events

  // navDay1 hover
  navDay1.addEventListener("mouseenter", function() {
    setTransparency1();
    navDay1.style.opacity = "1";
  }, false);
  navDay1.addEventListener("mouseleave", resetOpacity1, false);

  // navDay2 hover
  navDay2.addEventListener("mouseenter", function() {
    setTransparency1();
    navDay2.style.opacity = "1";
  }, false);
  navDay2.addEventListener("mouseleave", resetOpacity1, false);

  // navDay3 hover
  navDay3.addEventListener("mouseenter", function() {
    setTransparency1();
    navDay3.style.opacity = "1";
  }, false);
  navDay3.addEventListener("mouseleave", resetOpacity1, false);

  // navDay4 hover
  navDay45.addEventListener("mouseenter", function() {
    setTransparency1();
    navDay45.style.opacity = "1";
  }, false);
  navDay45.addEventListener("mouseleave", resetOpacity1, false);

  // progNavHomeButton hover
  progNavHomeButton.addEventListener("mouseenter", function() {
    setTransparency1();
    progNavHomeButton.style.opacity = "1";
  }, false);
  progNavHomeButton.addEventListener("mouseleave", resetOpacity1, false);

  // progNavBackButton hover
  progNavBackButton.addEventListener("mouseenter", function() {
    setTransparency1();
    progNavBackButton.style.opacity = "1";
  }, false);
  progNavBackButton.addEventListener("mouseleave", resetOpacity1, false);
});
