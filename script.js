history.scrollRestoration = "manual";

function initScroll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
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
    page2.style.backgroundImage = `url(${bgimg})`
  });
});
