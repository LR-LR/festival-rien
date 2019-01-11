'use-strict';

// Variables
// variable for transparency value
let transparency = "0.3";

// ---------- INDEX ---------- //
// title & nav
let indexTitle = document.getElementById("index-title");
let indexNav1 = document.getElementById("index-nav-1");
let indexNav2 = document.getElementById("index-nav-2");

// Functions
function resetOpacity() {
  indexTitle.style.opacity = "1";
  indexNav1.style.opacity = "1";
  indexNav2.style.opacity = "1";
}

function setTransparency() {
  indexTitle.style.opacity = transparency;
  indexNav1.style.opacity = transparency;
  indexNav2.style.opacity = transparency;
}


// ---------- PROGRAMMATION-NAV ---------- //
// nav & buttons
let navDay1 = document.getElementById("nav-day-1");
let navDay2 = document.getElementById("nav-day-2");
let navDay3 = document.getElementById("nav-day-3");
let navDay45 = document.getElementById("nav-day-45");
let progNavHomeButton = document.getElementById("prog-nav-home-button");
let progNavBackButton = document.getElementById("prog-nav-back-button");


// Functions
function setTransparency1() {
  navDay1.style.opacity = transparency;
  navDay2.style.opacity = transparency;
  navDay3.style.opacity = transparency;
  navDay45.style.opacity = transparency;
  progNavHomeButton.style.opacity = transparency;
  progNavBackButton.style.opacity = transparency;
};

function resetOpacity1() {
  navDay1.style.opacity = "1";
  navDay2.style.opacity = "1";
  navDay3.style.opacity = "1";
  navDay45.style.opacity = "1";
  progNavHomeButton.style.opacity = "1";
  progNavBackButton.style.opacity = "1";
};


// ---------- INFOS ---------- //
// Cards
let divBtn1 = document.getElementById("div-btn-1");
let divBtn2 = document.getElementById("div-btn-2");
let divBtn3 = document.getElementById("div-btn-3");
let divBtn4 = document.getElementById("div-btn-4");
let divBtn5 = document.getElementById("div-btn-5");
let divBtn6 = document.getElementById("div-btn-6");
let divBtn7 = document.getElementById("div-btn-7");
let divBtn8 = document.getElementById("div-btn-8");

// Buttons and links
let infosBtn1 = document.getElementById("infos-btn-1");
let infosBtn2 = document.getElementById("infos-btn-2");
let infosBtn22 = document.getElementById("infos-btn-2-2");
let infosBtn3 = document.getElementById("infos-btn-3");
let infosBtn32 = document.getElementById("infos-btn-3-2");
let infosBtn4 = document.getElementById("infos-btn-4");
let infosBtn5 = document.getElementById("infos-btn-5");
let infosBtn52 = document.getElementById("infos-btn-5-2");
let infosBtn6 = document.getElementById("infos-btn-6");
let infosBtn62 = document.getElementById("infos-btn-6-2");
let infosBtn7 = document.getElementById("infos-btn-7");
let infosBtn72 = document.getElementById("infos-btn-7-2");
let infosHomeBtn = document.getElementById("infos-home-button");
let infosBackBtn = document.getElementById("infos-back-button");

// Boolean for cards display
let displayCards = false;

// Parts of the accordion
let accordionLeft = document.getElementById("accordion-left");
let accordionRight = document.getElementById("accordion-right");


// Functions
function setTransparency2() {
  infosBtn1.style.opacity = transparency;
  infosBtn2.style.opacity = transparency;
  infosBtn3.style.opacity = transparency;
  infosBtn4.style.opacity = transparency;
  infosBtn5.style.opacity = transparency;
  infosBtn6.style.opacity = transparency;
  infosBtn7.style.opacity = transparency;
  infosHomeBtn.style.opacity = transparency;
  infosBackBtn.style.opacity = transparency;
};

function resetOpacity2() {
  infosBtn1.style.opacity = "1";
  infosBtn2.style.opacity = "1";
  infosBtn3.style.opacity = "1";
  infosBtn4.style.opacity = "1";
  infosBtn5.style.opacity = "1";
  infosBtn6.style.opacity = "1";
  infosBtn7.style.opacity = "1";
  infosHomeBtn.style.opacity = "1";
  infosBackBtn.style.opacity = "1";
};

function setDisplayNone() {
  divBtn1.style.display = "none";
  divBtn2.style.display = "none";
  divBtn3.style.display = "none";
  divBtn4.style.display = "none";
  divBtn5.style.display = "none";
  divBtn6.style.display = "none";
  divBtn7.style.display = "none";
  divBtn8.style.display = "none";
  accordionLeft.classList.remove("text-md-right");
  accordionLeft.classList.remove("col-md-6");
  accordionRight.classList.remove("text-md-left");
  accordionRight.classList.remove("col-md-6");
  displayCards = true;
};

function resetDisplay() {
  divBtn1.style.display = "inherit";
  divBtn2.style.display = "inherit";
  divBtn3.style.display = "inherit";
  divBtn4.style.display = "inherit";
  divBtn5.style.display = "inherit";
  divBtn6.style.display = "inherit";
  divBtn7.style.display = "inherit";
  divBtn8.style.display = "inherit";
  accordionLeft.classList.add("text-md-right");
  accordionLeft.classList.add("col-md-6");
  accordionRight.classList.add("text-md-left");
  accordionRight.classList.add("col-md-6");
  displayCards = false;
};
