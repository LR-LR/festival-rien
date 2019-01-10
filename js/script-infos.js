document.addEventListener("DOMContentLoaded", function(event) {
  // ---------- INFOS.HTML ---------- \\
  // Variables
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

  // transparency value
  let transparency = "0.5";

  // Parts of the accordion
  let accordionLeft = document.getElementById("accordion-left");
  let accordionRight = document.getElementById("accordion-right");


  // Events
  // HOVERS
  // infosBtn1 hover
  infosBtn1.addEventListener("mouseenter", function() {
    setTransparency();
    infosBtn1.style.opacity = "1";
  }, false);
  infosBtn1.addEventListener("mouseleave", resetOpacity, false);

  // infosBtn2 hover
  infosBtn2.addEventListener("mouseenter", function() {
    setTransparency();
    infosBtn2.style.opacity = "1";
  }, false);
  infosBtn2.addEventListener("mouseleave", resetOpacity, false);

  // infosBtn3 hover
  infosBtn3.addEventListener("mouseenter", function() {
    setTransparency();
    infosBtn3.style.opacity = "1";
  }, false);
  infosBtn3.addEventListener("mouseleave", resetOpacity, false);

  // infosBtn4 hover
  infosBtn4.addEventListener("mouseenter", function() {
    setTransparency();
    infosBtn4.style.opacity = "1";
  }, false);
  infosBtn4.addEventListener("mouseleave", resetOpacity, false);

  // infosBtn5 hover
  infosBtn5.addEventListener("mouseenter", function() {
    setTransparency();
    infosBtn5.style.opacity = "1";
  }, false);
  infosBtn5.addEventListener("mouseleave", resetOpacity, false);

  // infosBtn6 hover
  infosBtn6.addEventListener("mouseenter", function() {
    setTransparency();
    infosBtn6.style.opacity = "1";
  }, false);
  infosBtn6.addEventListener("mouseleave", resetOpacity, false);

  // infosBtn7 hover
  infosBtn7.addEventListener("mouseenter", function() {
    setTransparency();
    infosBtn7.style.opacity = "1";
  }, false);
  infosBtn7.addEventListener("mouseleave", resetOpacity, false);

  // infosHomeBtn hover
  infosHomeBtn.addEventListener("mouseenter", function() {
    setTransparency();
    infosHomeBtn.style.opacity = "1";
  }, false);
  infosHomeBtn.addEventListener("mouseleave", resetOpacity, false);

  // infosBackBtn hover
  infosBackBtn.addEventListener("mouseenter", function() {
    setTransparency();
    infosBackBtn.style.opacity = "1";
  }, false);
  infosBackBtn.addEventListener("mouseleave", resetOpacity, false);

  // CLICKS
  // infosBtn2 & infosBtn22 click
  infosBtn2.addEventListener("click", function() {
    if (displayCards) {
      resetDisplay();
    } else {
      setDisplayNone();
      divBtn2.style.display = "inherit";
    }
  }, false);

  infosBtn22.addEventListener("click", resetDisplay, false);

  // infosBtn3 click
  infosBtn3.addEventListener("click", function() {
    if (displayCards) {
      resetDisplay();
    } else {
      setDisplayNone();
      divBtn3.style.display = "inherit";
    }
  }, false);

  infosBtn32.addEventListener("click", resetDisplay, false);

  // infosBtn5 click
  infosBtn5.addEventListener("click", function() {
    if (displayCards) {
      resetDisplay();
    } else {
      setDisplayNone();
      divBtn5.style.display = "inherit";
    }
  }, false);

  infosBtn52.addEventListener("click", resetDisplay, false);

  // infosBtn6 click
  infosBtn6.addEventListener("click", function() {
    if (displayCards) {
      resetDisplay();
    } else {
      setDisplayNone();
      divBtn6.style.display = "inherit";
    }
  }, false);

  infosBtn62.addEventListener("click", resetDisplay, false);

  // infosBtn7 click
  infosBtn7.addEventListener("click", function() {
    if (displayCards) {
      resetDisplay();
    } else {
      setDisplayNone();
      divBtn7.style.display = "inherit";
    }
  }, false);

  infosBtn72.addEventListener("click", resetDisplay, false);

  // functions setTransparency & resetOpacity
  function setTransparency(){
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

  function resetOpacity() {
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

  // functions setDisplay & resetDIsplay
  function setDisplayNone(){
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
  }

  function resetDisplay(){
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
  }
});
