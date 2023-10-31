import LazyLoad from "vanilla-lazyload";
const lazyLoadInstance = new LazyLoad({
  callback_loaded: img => {
    if (img?.previousElementSibling?.classList?.contains("lazy-loader")) {
      img.previousElementSibling.classList.add("hidden-loader");
    }
    if (
      img?.parentElement?.previousElementSibling?.classList?.contains(
        "lazy-loader"
      )
    ) {
      img.parentElement.previousElementSibling.classList.add("hidden-loader");
    }
  },
});
