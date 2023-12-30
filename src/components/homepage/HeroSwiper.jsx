import "../../styles/Hero.scss";
import "react-photo-view/dist/react-photo-view.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useEffect, useRef } from "react";
import LazyLoad from "vanilla-lazyload";

const IMAGE_BASE_URL_FULL =
  "https://res.cloudinary.com/ddi3hd3cx/image/upload/w_600/lionpark-swipers";
const IMAGE_BASE_URL =
  "https://res.cloudinary.com/ddi3hd3cx/image/upload/w_400/lionpark-swipers";
const IMAGE_BASE_URL_TABLET =
  "https://res.cloudinary.com/ddi3hd3cx/image/upload/w_350/lionpark-swipers";
const IMAGE_BASE_URL_MOBILE =
  "https://res.cloudinary.com/ddi3hd3cx/image/upload/w_250/lionpark-swipers";
const IMAGE_BASE_URL_LOW =
  "https://res.cloudinary.com/ddi3hd3cx/image/upload/w_20/lionpark-swipers";
const items = Array.from({ length: 10 });

function HeroSwiper() {
  const lazyLoadRef = useRef(null);
  useEffect(() => {
    const lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy",
    });

    // unsubscribe on unmount
    return () => {
      lazyLoadInstance.destroy();
    };
  }, []);
  return (
    <PhotoProvider>
      <Swiper
        ref={lazyLoadRef}
        autoplay={true}
        className="hero__bottom"
        slidesPerView={"auto"}
        loop={true}>
        {items.map((_, index) => {
          return (
            <SwiperSlide key={index} className="hero__image">
              <PhotoView src={`${IMAGE_BASE_URL_FULL}/swiper_${index + 1}.jpg`}>
                <picture>
                  <source
                    srcSet={`${IMAGE_BASE_URL}/swiper_${index + 1}.jpg`}
                    media="(min-width: 75em)"
                  />
                  <source
                    srcSet={`${IMAGE_BASE_URL_TABLET}/swiper_${index + 1}.jpg`}
                    media="(min-width: 40em)"
                  />
                  <img
                    draggable={false}
                    src={`${IMAGE_BASE_URL_MOBILE}/swiper_${index + 1}.jpg`}
                    alt="lion picture from our zoo"></img>
                </picture>
              </PhotoView>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </PhotoProvider>
  );
}

export default HeroSwiper;

{
  /* <script src="../../script/HeroSwiper.js"></script> */
}
