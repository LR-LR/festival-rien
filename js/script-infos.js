'use-strict';

document.addEventListener("DOMContentLoaded", function() {
  // Events

  // HOVERS
  // infosBtn1 hover
  infosBtn1.addEventListener("mouseenter", function() {
    setTransparency2();
    infosBtn1.style.opacity = "1";
  }, false);
  infosBtn1.addEventListener("mouseleave", resetOpacity2, false);

  // infosBtn2 hover
  infosBtn2.addEventListener("mouseenter", function() {
    setTransparency2();
    infosBtn2.style.opacity = "1";
  }, false);
  infosBtn2.addEventListener("mouseleave", resetOpacity2, false);

  // infosBtn3 hover
  infosBtn3.addEventListener("mouseenter", function() {
    setTransparency2();
    infosBtn3.style.opacity = "1";
  }, false);
  infosBtn3.addEventListener("mouseleave", resetOpacity2, false);

  // infosBtn4 hover
  infosBtn4.addEventListener("mouseenter", function() {
    setTransparency2();
    infosBtn4.style.opacity = "1";
  }, false);
  infosBtn4.addEventListener("mouseleave", resetOpacity2, false);

  // infosBtn5 hover
  infosBtn5.addEventListener("mouseenter", function() {
    setTransparency2();
    infosBtn5.style.opacity = "1";
  }, false);
  infosBtn5.addEventListener("mouseleave", resetOpacity2, false);

  // infosBtn6 hover
  infosBtn6.addEventListener("mouseenter", function() {
    setTransparency2();
    infosBtn6.style.opacity = "1";
  }, false);
  infosBtn6.addEventListener("mouseleave", resetOpacity2, false);

  // infosBtn7 hover
  infosBtn7.addEventListener("mouseenter", function() {
    setTransparency2();
    infosBtn7.style.opacity = "1";
  }, false);
  infosBtn7.addEventListener("mouseleave", resetOpacity2, false);

  // infosHomeBtn hover
  infosHomeBtn.addEventListener("mouseenter", function() {
    setTransparency2();
    infosHomeBtn.style.opacity = "1";
  }, false);
  infosHomeBtn.addEventListener("mouseleave", resetOpacity2, false);

  // infosBackBtn hover
  infosBackBtn.addEventListener("mouseenter", function() {
    setTransparency2();
    infosBackBtn.style.opacity = "1";
  }, false);
  infosBackBtn.addEventListener("mouseleave", resetOpacity2, false);

  // CLICKS
  // infosBtn2 & infosBtn22 click
  infosBtn2.addEventListener("click", function() {
    if (displayCards) {
      window.setTimeout(resetDisplay, 300);
      resetOpacity2();
    } else {
      setDisplayNone();
      divBtn2.style.display = "inherit";
    }
  }, false);

  infosBtn22.addEventListener("click", function() {
    window.setTimeout(resetDisplay, 300);
  }, false);

  // infosBtn3 click
  infosBtn3.addEventListener("click", function() {
    if (displayCards) {
      window.setTimeout(resetDisplay, 300);
      resetOpacity2();
    } else {
      setDisplayNone();
      divBtn3.style.display = "inherit";
    }
  }, false);

  infosBtn32.addEventListener("click", function() {
    window.setTimeout(resetDisplay, 300);
  }, false);

  // infosBtn5 click
  infosBtn5.addEventListener("click", function() {
    if (displayCards) {
      window.setTimeout(resetDisplay, 300);
      resetOpacity2();
    } else {
      setDisplayNone();
      divBtn5.style.display = "inherit";
    }
  }, false);

  infosBtn52.addEventListener("click", function() {
    window.setTimeout(resetDisplay, 300);
  }, false);

  // infosBtn6 click
  infosBtn6.addEventListener("click", function() {
    if (displayCards) {
      window.setTimeout(resetDisplay, 300);
      resetOpacity2();
    } else {
      setDisplayNone();
      divBtn6.style.display = "inherit";
    }
  }, false);

  infosBtn62.addEventListener("click", function() {
    window.setTimeout(resetDisplay, 300);
  }, false);

  // infosBtn7 click
  infosBtn7.addEventListener("click", function() {
    if (displayCards) {
      window.setTimeout(resetDisplay, 300);
      resetOpacity2();
    } else {
      setDisplayNone();
      divBtn7.style.display = "inherit";
    }
  }, false);

  infosBtn72.addEventListener("click", function() {
    window.setTimeout(resetDisplay, 300);
  }, false);
}, false);
