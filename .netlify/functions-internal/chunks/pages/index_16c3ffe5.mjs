import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent, g as addAttribute } from '../astro_bf1117ea.mjs';
import 'clsx';
import { $ as $$Icon, l as lion1, d as lion7, e as lion3, f as lion4, a as $$MainLayout } from './Animals_1fd2c29e.mjs';
/* empty css                           */import { $ as $$FAQ } from './Contact_6958ab00.mjs';
import { $ as $$Location } from './Tickets_bfc9b018.mjs';
import 'html-escaper';
/* empty css                          */import 'svgo';
/* empty css                             *//* empty css                             *//* empty css                             *//* empty css                             *//* empty css                             *//* empty css                             */
const lion5 = "/images/lion5.jpg";

const lion6 = "/images/lion6.jpg";

const $$Astro$7 = createAstro("https://lionpark.netlify.app");
const $$Feeding = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Feeding;
  return renderTemplate`${maybeRenderHead()}<section class="feeding"><div class="container feeding__container"><div class="feeding__left"><h2 class="heading-second feeding__title">Feeding Schedule</h2><h3 class="heading-third feeding__title2">
Get up close with our animals during feeding sessions
</h3><p class="paragraph feeding__text">
Our animals choose between strolling in plain view of visitors or
        seeking shelter. Join a feeding session for a guaranteed opportunity to
        see your favorite animals. Watch our dedicated staff nourish the Arctic
        fox, fox, bearded seal, and other enclosure residents. Our knowledgeable
        keepers will share captivating stories about these incredible creatures.
<br><br>
Don't miss out – pick a date and arrive promptly!
</p><a class="cta feeding__cta" href="/Tickets">Pick up a Date</a></div><div class="feeding__right"><div class="feeding__right--top"><button class="select-btn-bg feeding__select feeding__select-today selected">Today</button><button class="select-btn-bg feeding__select feeding__select-tomorrow">Tomorrow</button><a href="#sub" class="feeding__sub">Subscribe for events news${renderComponent($$result, "Icon", $$Icon, { "class": "icon feeding__icon", "name": "ep:arrow-right" })}</a></div><div class="feeding__right--bottom"><div class="feeding__card"><img${addAttribute(lion1, "src")} alt="big lion "><p class="feeding__time">10:00</p><p class="feeding__name">Barbary lion</p></div><div class="feeding__card"><img${addAttribute(lion7, "src")} alt="big lion "><p class="feeding__time">12:00</p><p class="feeding__name">Cougar</p></div><div class="feeding__card"><img${addAttribute(lion3, "src")} alt="big lion "><p class="feeding__time">12:30</p><p class="feeding__name">A cub</p></div><div class="feeding__card"><img${addAttribute(lion4, "src")} alt="big lion "><p class="feeding__time">14:00</p><p class="feeding__name">Bengal tiger</p></div><div class="feeding__card"><img${addAttribute(lion5, "src")} alt="big lion "><p class="feeding__time">14:30</p><p class="feeding__name">White lion</p></div><div class="feeding__card"><img${addAttribute(lion6, "src")} alt="big lion "><p class="feeding__time">16:00</p><p class="feeding__name">Black tiger</p></div></div></div></div></section>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/Feeding.astro", void 0);

const lion2 = "/images/lion2.jpg";

const lion8 = "/images/lion8.jpg";

const lion9 = "/images/lion9.jpg";

const lion10$1 = "/images/lion10.jpg";

const lowImage = "/images/lowqt.svg";

const $$Astro$6 = createAstro("https://lionpark.netlify.app");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="hero"><div class="hero__top"><div class="hero__buttons"><a href="#location" class="hero__select select-btn">${renderComponent($$result, "Icon", $$Icon, { "class": "icon", "name": "carbon:location" })}Get Location</a><a href="#map-cart" class="hero__select select-btn">${renderComponent($$result, "Icon", $$Icon, { "class": "icon", "name": "iconoir:map" })}Zoo Map</a><a href="/Animals" class="hero__select select-btn">${renderComponent($$result, "Icon", $$Icon, { "class": "icon", "name": "mdi:paw" })}Our Animals</a></div></div><div class="hero__content"><div class="hero__mid"><h1 class="hero__title heading">
LI<span>O${renderComponent($$result, "Icon", $$Icon, { "class": "icon hero__title--icon", "name": "mdi:paw" })}</span>N
        PARK AGADIR
</h1><a href="/Tickets" class="hero__button big-button">Purchase<br>Tickets</a></div><div class="hero__bottom swiper"><div class="hero__bottom--images swiper-wrapper" data-mouse-at="0" data-prev-percent="0"><div class="hero__image hero__image--1 swiper-slide"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="hero__image-img lazy"${addAttribute(lion1, "data-src")}${addAttribute(lowImage, "src")} alt="lion picture from our lion zoo"></div><div class="hero__image hero__image--2 swiper-slide"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="hero__image-img lazy"${addAttribute(lion2, "data-src")}${addAttribute(lowImage, "src")} alt="lion picture from our lion zoo"></div><div class="hero__image hero__image--3 swiper-slide"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="hero__image-img lazy"${addAttribute(lion3, "data-src")}${addAttribute(lowImage, "src")} alt="lion picture from our lion zoo"></div><div class="hero__image hero__image--4 swiper-slide"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="hero__image-img lazy"${addAttribute(lion4, "data-src")}${addAttribute(lowImage, "src")} alt="lion picture from our lion zoo"></div><div class="hero__image hero__image--5 swiper-slide"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="hero__image-img lazy"${addAttribute(lion5, "data-src")}${addAttribute(lowImage, "src")} alt="lion picture from our lion zoo"></div><div class="hero__image hero__image--6 swiper-slide"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="hero__image-img lazy"${addAttribute(lion6, "data-src")}${addAttribute(lowImage, "src")} alt="lion picture from our lion zoo"></div><div class="hero__image hero__image--7 swiper-slide"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="hero__image-img lazy"${addAttribute(lion7, "data-src")}${addAttribute(lowImage, "src")} alt="lion picture from our lion zoo"></div><div class="hero__image hero__image--8 swiper-slide"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="hero__image-img lazy"${addAttribute(lion8, "data-src")}${addAttribute(lowImage, "src")} alt="lion picture from our lion zoo"></div><div class="hero__image hero__image--9 swiper-slide"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="hero__image-img lazy"${addAttribute(lion9, "data-src")}${addAttribute(lowImage, "src")} alt="lion picture from our lion zoo"></div><div class="hero__image hero__image--10 swiper-slide"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="hero__image-img lazy"${addAttribute(lion10$1, "data-src")}${addAttribute(lowImage, "src")} alt="lion picture from our lion zoo"></div></div><div class="hero__bottom--buttons"><button class="hero__buttom--prev">${renderComponent($$result, "Icon", $$Icon, { "class": "icon hero__bottom--icon hero__bottom--icon-1", "name": "bi:arrow-up" })}</button><button class="hero__buttom--next">${renderComponent($$result, "Icon", $$Icon, { "class": "icon hero__bottom--icon hero__bottom--icon-2", "name": "bi:arrow-up" })}</button></div></div></div></section>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/Hero.astro", void 0);

const safari = "/icons/safari2.svg";

const lion = "/icons/lion2.svg";

const map = "/icons/map2.svg";

const music = "/icons/music2.svg";

const photo = "/icons/photo2.svg";

const shop = "/icons/shop2.svg";

const $$Astro$5 = createAstro("https://lionpark.netlify.app");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${maybeRenderHead()}<section class="services"><div class="container services__container"><div class="services__left"><h2 class="heading-second services__title">Plan a Visit</h2><p class="paragraph services__text">
Explore Morocco's fifth-largest zoo, covering 21 hectares. A single day
        may not be enough to see all the exhibits. Use the map to choose the
        animals you want to see, and find cafes and playgrounds if you're with
        children. The zoo features 1,267 animal species in 35 exhibits and a Zoo
        History Museum.
</p></div><div class="services__list"><figure class="service"><img class="service__icon"${addAttribute(safari, "src")} alt="safari jeep icon"><p class="service__text">safari</p></figure><figure class="service"><img class="service__icon"${addAttribute(lion, "src")} alt="safari jeep icon"><p class="service__text">cages</p></figure><figure class="service"><img class="service__icon"${addAttribute(map, "src")} alt="safari jeep icon"><p class="service__text">mapping</p></figure><figure class="service"><img class="service__icon"${addAttribute(music, "src")} alt="safari jeep icon"><p class="service__text">Music</p></figure><figure class="service"><img class="service__icon"${addAttribute(photo, "src")} alt="safari jeep icon"><p class="service__text">photograph</p></figure><figure class="service"><img class="service__icon"${addAttribute(shop, "src")} alt="safari jeep icon"><p class="service__text">Gift Shop</p></figure></div></div></section>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/Services.astro", void 0);

const mapBg = "/images/map-bg.svg";

const $$Astro$4 = createAstro("https://lionpark.netlify.app");
const $$Map = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Map;
  return renderTemplate`${maybeRenderHead()}<section class="map" id="map-cart"><div class="container map__container"><div class="map__top"><h1 class="heading-second map__title">Explore the Map</h1></div><div class="map__bottom"><a href="../../public/images/map-bg.jpg" download class="map__download">
Download Map${renderComponent($$result, "Icon", $$Icon, { "class": "icon map__icon", "name": "teenyicons:download-outline" })}</a><div class="map__bg-map--container"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="map__bg-map lazy"${addAttribute(lowImage, "src")}${addAttribute(mapBg, "data-src")} alt="lion park map"></div></div></div></section>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/Map.astro", void 0);

const lion10 = "/images/lionvideo.jpg";

class LRU extends Map {
  constructor(maxSize) {
    super();
    this.maxSize = maxSize;
  }
  get(key) {
    const value = super.get(key);
    if (value)
      this.#touch(key, value);
    return value;
  }
  set(key, value) {
    this.#touch(key, value);
    if (this.size > this.maxSize)
      this.delete(this.keys().next().value);
    return this;
  }
  #touch(key, value) {
    this.delete(key);
    super.set(key, value);
  }
}
const cache = new LRU(1e3);
const formatError = (...lines) => lines.join("\n         ");
async function safeGet(url) {
  try {
    const cached = cache.get(url);
    if (cached)
      return cached;
    const res = await fetch(url);
    if (!res.ok)
      throw new Error(
        formatError(
          `Failed to fetch ${url}`,
          `Error ${res.status}: ${res.statusText}`
        )
      );
    const json = await res.json();
    cache.set(url, json);
    return json;
  } catch (e) {
    console.error(formatError(`[error]  astro-embed`, e?.message ?? e));
    return void 0;
  }
}

const urlPattern = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:vimeo\.com)\/(\d{1,20})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
function matcher(url) {
  const match = url.match(urlPattern);
  return match?.[3];
}

const $$Astro$3 = createAstro("https://lionpark.netlify.app");
const $$Vimeo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Vimeo;
  const { id, poster, params = "", playlabel = "Play" } = Astro2.props;
  const idRegExp = /^\d+$/;
  function extractID(idOrUrl) {
    if (idRegExp.test(idOrUrl))
      return idOrUrl;
    return matcher(idOrUrl);
  }
  const videoid = extractID(id);
  let posterURL = poster;
  if (!posterURL) {
    const data = await safeGet(`https://vimeo.com/api/v2/video/${videoid}.json`);
    const { thumbnail_large } = data?.[0] || {};
    posterURL = thumbnail_large;
  }
  let [searchString, t] = params.split("#t=");
  const searchParams = new URLSearchParams(searchString);
  if (!t)
    t = searchParams.get("t");
  searchParams.append("autoplay", "1");
  if (!searchParams.has("dnt"))
    searchParams.append("dnt", "1");
  const color = searchParams.get("color");
  const styles = [];
  if (color)
    styles.push(`--ltv-color: #${color}`);
  if (posterURL)
    styles.push(`background-image: url('${posterURL}')`);
  return renderTemplate`${renderComponent($$result, "lite-vimeo", "lite-vimeo", { "data-id": videoid, "data-t": t, "data-params": searchParams.toString(), "style": styles.join(";") }, { "default": () => renderTemplate`${maybeRenderHead()}<button class="ltv-playbtn" type="button"${addAttribute(playlabel, "aria-label")}></button>` })}`;
}, "C:/Users/Youness/Desktop/Crocopark/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro", void 0);

const $$Astro$2 = createAstro("https://lionpark.netlify.app");
const $$Rare = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Rare;
  return renderTemplate`${maybeRenderHead()}<section class="rare"><div class="container rare__container"><div class="rare__top"><h2 class="heading-second rare__title">
Visit the Rare Animal Reproduction Center
</h2></div><div class="rare__bottom"><div class="rare__left"><div class="rare__video--container">${renderComponent($$result, "Vimeo", $$Vimeo, { "id": "475645175", "poster": lion10 })}</div></div><div class="rare__right"><p class="paragraph rare__text">
The Rare Animal Reproduction Center, located just 100 km from Agadir
          in Morocco, covers 200 hectares and houses more than 7,500 animals
          from 213 species, spanning continents from the Arctic to Africa. We're
          dedicated to safeguarding and protecting endangered species, and our
          successes include the first-ever Moroccan breeding of wolverines,
          vicuñas, Marco Polo sheep, and Far Eastern storks. You can visit us
          individually or with a group to observe these animals in their natural
          habitats.
</p><a class="cta" href="/Tickets">Explore Center's Tour</a></div></div></div></section>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/Rare.astro", void 0);

const $$Astro$1 = createAstro("https://lionpark.netlify.app");
const $$Subscribe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Subscribe;
  return renderTemplate`${maybeRenderHead()}<secion class="subscribe" id="sub"><div class="container subscribe__container"><div class="subscribe__left"><h2 class="heading-second subscribe__title">
Subscribe for Latest News & More
</h2><p class="paragraph subscribe__p">
Stay connected with all things lion-related at our zoo. Subscribe to
        receive the latest news on feeding times, special discounts, and more.
        Be the first to know when our majestic lions roar and when fantastic
        savings come your way. Subscribe now for an adventure like no other.
</p><form action=""><input type="email" name="" id="email" placeholder="Your Email..." required><button type="submit" class="cta">Subscribe</button></form></div><div class="subscribe__right"><img${addAttribute(lion3, "src")} alt="lionet from our lion zoo"></div></div></secion>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/Subscribe.astro", void 0);

const $$Astro = createAstro("https://lionpark.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Main", $$MainLayout, { "title": "Home", "isView": "true" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, {})}${renderComponent($$result2, "Services", $$Services, {})}${renderComponent($$result2, "Feeding", $$Feeding, {})}${renderComponent($$result2, "Map", $$Map, {})}${renderComponent($$result2, "Rare", $$Rare, {})}${renderComponent($$result2, "FAQ", $$FAQ, {})}${renderComponent($$result2, "Location", $$Location, {})}${renderComponent($$result2, "Subscribe", $$Subscribe, {})}` })}`;
}, "C:/Users/Youness/Desktop/Crocopark/src/pages/index.astro", void 0);

const $$file = "C:/Users/Youness/Desktop/Crocopark/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
