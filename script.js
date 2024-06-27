history.scrollRestoration = "manual";

function initScroll() {
  window.locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  return locoScroll;
}
function scrollToPage1() {
  window.locoScroll.scrollTo(document.querySelector("#page1"));
}
function scrollToPage2() {
  window.locoScroll.scrollTo(document.querySelector("#page2"));
}

function scrollToPage3() {
  window.locoScroll.scrollTo(document.querySelector("#page3"));
}
function scrollToFooter() {
  window.locoScroll.scrollTo(document.querySelector("#footer"));
}

function loader() {
  var tl = gsap.timeline();
  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
  });

  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.5,
      duration: 0.5,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.3,
      color: "black",
      duration: 0.5,
    },
    "anim"
  );
  tl.to("#loader", {}, "hide");
  tl.to(
    "#loader",
    {
      display: "none",
      duration: 0.1,
      onComplete: initScroll, // Call initScroll after the loader hides
    },
    "hide"
  );
}

loader(); // Call loader function to start the animation

var elems = document.querySelectorAll(".elem");

var page2 = document.querySelector("#page2");
var main = document.querySelector("#main");

elems.forEach(function (elem) {
  // console.log(elem)
  elem.addEventListener("mouseenter", function () {
    var bgimg = elem.getAttribute("data-img");
    console.log(main);
    page2.style.backgroundImage = `url(${bgimg})`;
  });
});

document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("open");
  const navRightItems = document.querySelector(".nav-right-items-container");
  if (this.classList.contains("open")) {
    navRightItems.style.width = "100px";
  } else {
    navRightItems.style.width = "300px";
  }
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const imageDivs = document.querySelectorAll(".image-div");
  imageDivs.forEach((div) => {
    const randomHeight = Math.floor(Math.random() * (650 - 350 + 1)) + 350;
    const gridRowEndValue = Math.ceil(randomHeight / 10); // Calculate the number of rows to span
    div.style.gridRowEnd = `span ${gridRowEndValue}`;
  });
});
