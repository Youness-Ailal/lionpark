import gsap from "gsap";
// handels dropdown position
const topNav = document.querySelector(".header");
const dropDown = document.querySelector(".dropdown");

document.documentElement.style.setProperty(
  "--header-height",
  `${topNav.clientHeight}px`
);
window.onresize = e => {
  document.documentElement.style.setProperty(
    "--header-height",
    `${topNav.clientHeight}px`
  );
};

// Handles Dropdown Navigation
const dropBg = document.querySelector(".dropdown__bg");
const dropNav = document.querySelector(".dropdown");
const navButton = document.querySelector(".header__menu");
const navItems = document.querySelectorAll(".dropdown__item");
const toggle = document.querySelector(".toggle");
const navTl = gsap.timeline();
const showNav = function (e) {
  navButton.disabled = true;
  dropNav.classList.remove("hidden-drop");
  dropBg.classList.remove("hidden-bg");
  dropNav.style.display = "flex";
  document.documentElement.style.setProperty("--body-overflow", "hidden");
  toggle.classList.add("activenav");

  navTl
    .fromTo(
      dropNav,
      {
        translateX: "100%",
      },
      {
        translateX: 0,
        duration: 0.5,
      }
    )
    .fromTo(
      dropBg,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.1,
      },
      "<"
    )
    .fromTo(
      navItems,
      {
        opacity: 0,
        translateY: 50,
      },
      {
        opacity: 1,
        translateY: 0,
        stagger: 0.1,
        duration: 0.4,
        delay: 0.3,
      },
      "<"
    );
  setTimeout(() => {
    navButton.disabled = false;
  }, 1500);
};
const hideNav = function (e) {
  navButton.disabled = true;
  document.documentElement.style.setProperty("--body-overflow", "auto");
  toggle.classList.remove("activenav");

  console.log("closing nav");

  navTl
    .fromTo(
      navItems,
      {
        opacity: 1,
        translateY: 0,
      },
      {
        opacity: 0,
        translateY: 50,
        stagger: 0.05,
        duration: 0.1,
      }
    )
    .fromTo(
      dropNav,
      {
        translateX: 0,
      },
      {
        translateX: "100%",
        duration: 0.5,
        delay: 0.2,
      },
      "<"
    )
    .fromTo(
      dropBg,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.2,
        // delay: 0.3,
      },
      "<"
    );
  // dropNav.classList.add("hidden-drop");

  setTimeout(() => {
    navButton.disabled = false;
  }, 1500);
  setTimeout(() => {
    dropBg.classList.add("hidden-bg");
    dropNav.style.display = "none";
    navButton.disabled = false;
  }, 1000);
  document.documentElement.style.setProperty("--body-overflow", "auto");
};
let isNavOpened = false;
navButton.addEventListener("click", e => {
  if (!isNavOpened) {
    showNav(e);
  } else {
    hideNav(e);
  }
  isNavOpened = !isNavOpened;
});
