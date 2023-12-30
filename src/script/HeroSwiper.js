import Swiper from "swiper";
import imagesloads from "imagesloaded";

//Handles hero images loaded

//Handles image slider
const slider = document.querySelector(".hero__bottom--images");
const heroImages = document.querySelectorAll(".hero__image-img");
const nextSlideBtn = document.querySelector(".hero__buttom--next");
const prevSlideBtn = document.querySelector(".hero__buttom--prev");
const swiper = new Swiper(".hero__bottom", {
  slidesPerView: "auto",
  loop: "true",
  // spaceBetween: 10,

  // breakpoints: {
  //   400: {
  //     spaceBetween: 15,
  //   },
  //   800: {
  //     spaceBetween: 20,
  //   },
  //   1000: {
  //     spaceBetween: 25,
  //   },
  //   1200: {
  //     spaceBetween: 10,
  //   },
  // },
});
nextSlideBtn.addEventListener("click", () => {
  swiper.slideNext();
});
prevSlideBtn.addEventListener("click", () => {
  swiper.slidePrev();
});
const heroImagesLoad = imagesloads(".hero");
heroImagesLoad.on("done", () => {
  setInterval(() => {
    swiper.slideNext();
  }, 3000);
});
