history.scrollRestoration = "manual";

function initScroll() {
  var locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  return locoScroll
}
function scrollToPage2() {
  console.log("tryiing");
  // Initialize Locomotive Scroll if not already initialized
  if (typeof locoScroll === "undefined") {
    console.log("not def");
    var locoScroll = initScroll();
  }
  // Scroll to #targetDiv
  locoScroll.scrollTo(document.querySelector("#page2"));
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

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const imageDivs = document.querySelectorAll(".image-div");
  imageDivs.forEach((div) => {
    const randomHeight = Math.floor(Math.random() * (650 - 350 + 1)) + 350;
    const gridRowEndValue = Math.ceil(randomHeight / 10); // Calculate the number of rows to span
    div.style.gridRowEnd = `span ${gridRowEndValue}`;
  });
});
