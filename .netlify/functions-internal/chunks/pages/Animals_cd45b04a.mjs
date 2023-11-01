import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, g as addAttribute, u as unescapeHTML, h as renderComponent, F as Fragment, i as renderHead, j as renderSlot, k as renderTransition } from '../astro_bf1117ea.mjs';
import 'clsx';
/* empty css                          */import { optimize } from 'svgo';
/* empty css                             *//* empty css                             */
const logo$1 = "/images/logo.svg";

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$a = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "C:/Users/Youness/Desktop/Crocopark/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$9 = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}</svg>`;
}, "C:/Users/Youness/Desktop/Crocopark/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$8 = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "C:/Users/Youness/Desktop/Crocopark/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$7 = createAstro();
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>${title ? renderTemplate`<title>${title}</title>` : ""}<use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use></svg>`;
}, "C:/Users/Youness/Desktop/Crocopark/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$6 = createAstro();
const $$DropNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$DropNav;
  return renderTemplate`${maybeRenderHead()}<div class="dropdown hidden-drop"><ul><li class="dropdown__item">${renderComponent($$result, "Icon", $$Icon, { "class": "icon dropdown__icon", "name": "clarity:image-gallery-line" })}<a href="/Gallery">Photo Gallery</a></li><li class="dropdown__item">${renderComponent($$result, "Icon", $$Icon, { "class": "icon dropdown__icon", "name": "mdi:pets" })}<a href="/Animals">Animals</a></li><li class="dropdown__item">${renderComponent($$result, "Icon", $$Icon, { "class": "icon dropdown__icon", "name": "ic:outline-contact-support" })}<a href="/Gallery">Contact</a></li><li class="dropdown__item">${renderComponent($$result, "Icon", $$Icon, { "class": "icon dropdown__icon", "name": "carbon:ticket" })}<a href="/Tickets">Tickets</a></li><li class="dropdown__item">${renderComponent($$result, "Icon", $$Icon, { "class": "icon dropdown__icon", "name": "octicon:info-16" })}<a href="/Gallery">About us</a></li></ul><div class="dropdown__bottom"><div class="header__right dropdown__bottom--elements"><div class="header__open dropdown__bottom-links"><div class="header__open--dot"></div><p class="header__open--p">open daily 9:00 to 17:00 (GMT+1)</p></div><a href="tel:+212624360624" class="header__phone link dropdown__bottom-links">${renderComponent($$result, "Icon", $$Icon, { "class": "header__phone--icon icon", "name": "ph:phone-light" })}
+212 123456789</a></div></div></div><div class="dropdown__bg hidden-bg"></div>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/DropNav.astro", void 0);

const $$Astro$5 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<header class="header"><div class="header__left"><a href="/"><img${addAttribute(logo$1, "src")} alt="lion park logo"></a></div><div class="header__right"><div class="open"><div class="open--dot"><div class="open--dot-bg"></div></div><p class="open--p">open daily 9:00 to 17:00 (GMT+1)</p></div><a href="tel:+212624360624" class="header__phone link">${renderComponent($$result, "Icon", $$Icon, { "class": "header__phone--icon icon", "name": "ph:phone-light" })}
+212 123456789</a><a href="/Tickets" class="header__cta">Get Your Ticket
<div class="header__cta--line"></div><div class="header__cta--line"></div><div class="header__cta--line"></div><div class="header__cta--line"></div><div class="header__cta--line"></div></a><button class="header__menu"><!-- <input id="checkbox2" type="checkbox" /> --><div class="toggle"><div id="bar4" class="bars"></div><div id="bar5" class="bars"></div><div id="bar6" class="bars"></div></div></button></div></header>${renderComponent($$result, "DropNav", $$DropNav, {})}`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/Navigation.astro", void 0);

const logo = "/images/logo-footer.svg";

const lion1 = "/images/lion1.jpg";

const lion7 = "/images/lion7.jpg";

const lion3 = "/images/lion3.jpg";

const lion4 = "/images/lion4.jpg";

const $$Astro$4 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer"><div class="container footer__container"><div class="footer__logos"><img class="footer__logo"${addAttribute(logo, "src")} alt="lion zoo logo"><div class="footer__socials"><a target="_blank" href="https://facebook.com/">${renderComponent($$result, "Icon", $$Icon, { "class": "icon footer__social", "name": "ic:baseline-facebook" })}</a><a target="_blank" href="https://www.instagram.com/">${renderComponent($$result, "Icon", $$Icon, { "class": "icon footer__social", "name": "mdi:instagram" })}</a><a target="_blank" href="https://www.youtube.com/">${renderComponent($$result, "Icon", $$Icon, { "class": "icon footer__social", "name": "mdi:youtube" })}</a><a target="_blank" href="https://www.linkedin.com/in/youness-ailal/">${renderComponent($$result, "Icon", $$Icon, { "class": "icon footer__social", "name": "mdi:linkedin" })}</a></div></div><div class="footer__links"><h4 class="footer__title">links</h4><a href="/" class="link footer__link">Home</a><a href="/Gallery" class="link footer__link">Gallery</a><a href="/" class="link footer__link">About</a><a href="/Tickets" class="link footer__link">Tickets</a><a href="/Animals" class="link footer__link">Animals</a></div><div class="footer__contact"><h4 class="footer__title">contact</h4><a href="tel:+212123456789" class="link footer__link">${renderComponent($$result, "Icon", $$Icon, { "class": "icon footer__icon", "name": "ph:phone-light" })}+212 123456789</a><a href="mailto:itsyounessaylal@gmail.com" class="link footer__link">${renderComponent($$result, "Icon", $$Icon, { "class": "icon footer__icon", "name": "ic:outline-mail" })}itsyounessaylal@gmail.com</a><a class="link footer__link" href="/">${renderComponent($$result, "Icon", $$Icon, { "class": "icon footer__icon", "name": "carbon:location" })}Drarga street
        1, Agadir</a></div><div class="footer__photos"><h4 class="footer__title">latest photos</h4><div class="footer__gallery"><img${addAttribute(lion1, "src")} alt="a lion from lion park Agadir"><img${addAttribute(lion7, "src")} alt="a lion from lion park Agadir"><img${addAttribute(lion3, "src")} alt="a lion from lion park Agadir"><img${addAttribute(lion4, "src")} alt="a lion from lion park Agadir"></div></div></div><div class="footer__bottom"><p>
&copy; ${year} Made by <a target="_blank" href="https://www.linkedin.com/in/youness-ailal/">@Youness Ailal</a></p></div></footer>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description = "Welcome to Lion park zoo at Agadir" } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="shortcut icon" href="/favicon.svg" type="image/x-icon"><title>${`${title} | Lion Park Agadir`}</title>${renderHead()}</head><body>${renderComponent($$result, "Navigation", $$Navigation, {})}<main>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/Layouts/MainLayout.astro", void 0);

const animalsJson = [
	{
		id: 100,
		name: "Lion",
		top_speed: "80",
		order: "Carnivora",
		scientific_name: "Panthera leo",
		size: "The lion is a large felid of the genus Panthera. It is muscular, deep-chested and has a short, rounded head, a reduced neck and round ears. Its fur is short, tawny and dense with a tufted tail.",
		lifespan: "In the wild, lions typically live 10-14 years. In captivity, they can live over 20 years with proper care.",
		conservation: "Vulnerable due to habitat loss, human-wildlife conflict and illegal hunting.",
		distribution: "Lions inhabit grasslands, savannas, dense bush and woodlands across sub-Saharan Africa. Their range has declined significantly from historic levels.",
		species: "Lions are an iconic symbol of Africa and are featured in many aspects of human culture. They have cultural significance in Africa and evoke a sense of power and nobility. Lions inspire both awe and fear and have been prominent in folklore, mythology and art across history and cultures.",
		nutrition: "As obligate carnivores, lions primarily eat large ungulates like zebra, wildebeest, buffalo and antelope. They will also hunt smaller prey and scavenge carrion when necessary. Lions are apex predators that play a key ecological role.",
		lifestyle: "Lions are highly social and live in cohesive family groups called prides. Prides work cooperatively to defend territory, raise cubs and hunt prey. Lionesses do the majority of hunting while males focus on protecting the pride. Lions are mostly nocturnal and sleep 16-20 hours per day. They communicate via roaring, scent marking and other vocalizations.",
		image_1: "https://images.unsplash.com/photo-1589652045525-4496b6099023?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		image_2: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=1718&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
	{
		id: 101,
		name: "Tiger",
		top_speed: "65",
		order: "Carnivora",
		scientific_name: "Panthera tigris",
		size: "The tiger is the largest cat species and a member of the genus Panthera. It is muscular, with a rounded head, a thick neck and a stocky body. Its fur is orange-brown with black stripes.",
		lifespan: "In the wild, tigers live 8-10 years on average. In captivity with proper care, they can live over 20 years.",
		conservation: "Endangered due to habitat loss, poaching and human-wildlife conflict. Tiger populations have declined significantly.",
		distribution: "Tigers inhabit various forest, grassland and wetland habitats across South and Southeast Asia. Their range has shrunk dramatically.",
		species: "As a charismatic megafauna species, tigers hold great cultural significance and are revered in many Asian cultures as a symbol of strength and courage. They have been featured extensively in folklore, mythology, art and literature. Tiger parts are also used in traditional Asian medicine, fueling the illegal wildlife trade that threatens wild tigers.",
		nutrition: "As obligate carnivores, tigers mainly consume large ungulates like deer, wild pigs, buffalo and cattle. They occasionally eat smaller prey and are opportunistic hunters.",
		lifestyle: "Tigers are solitary animals that establish and defend their own territories. They are largely nocturnal and very elusive. Tigers are stealthy ambush hunters that rely on camouflage, stealth and the element of surprise to catch prey. They are strong swimmers and very agile.",
		image_1: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		image_2: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&q=80&w=1712&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
	{
		id: 102,
		name: "Leopard",
		top_speed: "58",
		order: "Carnivora",
		scientific_name: "Panthera pardus",
		size: "The leopard is a large felid of the genus Panthera. It is muscular, with a long body, relatively short legs and a broad head. Its fur is pale yellow to gray with black spots.",
		lifespan: "Leopards typically live 12-15 years in the wild. With proper care in captivity, they can live over 20 years.",
		conservation: "Classified as Vulnerable by the IUCN due to habitat loss, poaching and prey depletion. Leopard populations are declining across their range.",
		distribution: "Leopards have an extensive historic range in Africa and Asia. Today they inhabit sub-Saharan Africa, the Middle East, Russia, China, Southeast Asia and the Korean Peninsula.",
		species: "The elusive leopard features prominently in African and Asian folklore and mythology. Its stealth hunting evokes a sense of mystery, but is also feared. Leopards represent adaptability given their diverse habitats. Their iconic spotted coat has inspired human culture across their range.",
		nutrition: "Leopards are carnivores and prey on a wide variety of mammals based on availability, including antelope, monkeys, rodents, hares, birds, reptiles and amphibians.",
		lifestyle: "Leopards lead a solitary, nocturnal existence. They rest in vegetation, caves and rock crevices by day. Males demarcate territories with scent markings and defend them from other males. Females raise cubs independently in their own home ranges after brief mating encounters.",
		image_1: "https://images.unsplash.com/photo-1544985361-b420d7a77043?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		image_2: "https://images.unsplash.com/photo-1560968950-21518936fcea?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
	{
		id: 103,
		name: "White Lion",
		top_speed: "96",
		order: "Carnivora",
		scientific_name: "Panthera leo (leucistic)",
		size: "The white lion is a rare color variant of the African lion. It has a distinctive pale to white coat and blue or light-colored eyes.",
		lifespan: "White lions have a typical lifespan of 10-14 years in the wild, similar to other African lions.",
		conservation: "Classified as Vulnerable like the larger African lion populations. White lions number less than 13 in the wild and around 300 in captivity.",
		distribution: "White lions are extremely rare in the wild, found only in South Africa's Greater Timbavati region. They do not exist as a wild population.",
		species: "The white lion holds cultural significance among indigenous African tribes who saw them as divine or lucky. Their striking appearance has captivated global fascination. But selective breeding for the trait raises inbreeding concerns.",
		nutrition: "As opportunistic predators, white lions hunt cooperatively in prides for zebra, wildebeest, antelope and other large game.",
		lifestyle: "White lions live in social prides with related females and exhibit behaviors typical of African lions - resting by day, patroling territory and hunting at dawn, dusk and night.",
		image_1: "https://img.freepik.com/free-photo/lioness-natural-environment_181624-25431.jpg?w=1380&t=st=1698765674~exp=1698766274~hmac=b26505b1a50b20bca7bd3c9d83466869c8b7cfe65f02fb85d1d1cbe67acb55bf",
		image_2: "https://img.freepik.com/free-photo/white-lioness-portrait_181624-28203.jpg?w=1380&t=st=1698765703~exp=1698766303~hmac=66175f3a6b1cb061a482b6e95253941ab01e4465d4067348e72baf03fdfcec64"
	},
	{
		id: 104,
		name: "Jaguar",
		top_speed: "80",
		order: "Carnivora",
		scientific_name: "Panthera onca",
		size: "The jaguar is a large felid of the genus Panthera. It is muscular, with a compact body, a broad head and powerful jaws. Its fur is typically orange or tan with black rosette-shaped markings.",
		lifespan: "In the wild, jaguars live 11-15 years. With proper care in captivity, they can live over 20 years.",
		conservation: "The jaguar is Near Threatened due to habitat destruction and fragmentation across its Latin American range.",
		distribution: "Jaguars are found from Mexico to Argentina in tropical and subtropical moist forests, wetlands and savanna habitats.",
		species: "Revered by indigenous cultures, the jaguar embodies power and ferocity. It was prominent in rituals, folklore and shamanism for cultures like the Maya and Aztec. Jaguars represent the mysterious forces of nature.",
		nutrition: "As apex predators, jaguars have an expansive diet of over 85 species. They prey on mammals like tapir, capybara and peccary but also target livestock, exacerbating human conflicts.",
		lifestyle: "Jaguars are solitary animals with minimal social structure beyond mothers and cubs. Males establish large home ranges which they advertise via scraping and scent marking behaviors.",
		image_1: "https://images.unsplash.com/photo-1601544359642-c76c4f7c3221?auto=format&fit=crop&q=80&w=1744&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		image_2: "https://plus.unsplash.com/premium_photo-1673545660859-423a44316681?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
	{
		id: 105,
		name: "Snow Leopard",
		top_speed: "55",
		order: "Carnivora",
		scientific_name: "Panthera uncia",
		size: "The snow leopard is a large felid of the genus Panthera. It is muscular, with a long body, relatively short legs and a broad head. Its fur is pale gray with dark rosette-shaped markings.",
		lifespan: "Snow leopards live 10-12 years on average in the wild. In captivity with proper care, they can live over 20 years.",
		conservation: "Classified as Vulnerable by IUCN. Snow leopards face threats from poaching, prey loss, habitat degradation, and conflict with humans.",
		distribution: "Snow leopards are found at high elevations across 12 Central Asian countries. Their remote mountain habitat provides refuge but poses monitoring challenges.",
		species: "Local cultures imbue the snow leopard with mythological qualities of divinity, spirituality and ferocity. Their adapted beauty and survival in harsh conditions also garners respect.",
		nutrition: "Snow leopards are carnivores dependent on wild mountain prey like ibex, argali, markhor, marmots and hares. They hunt using stealth, opportunism and dexterity in rugged terrain.",
		lifestyle: "Snow leopards lead solitary lives except for mating purposes. They communicate using scraping and scent markings. Their camouflage and elusiveness make them difficult to observe and study in the wild.",
		image_1: "https://images.unsplash.com/photo-1694330027973-e76edfa17dd5?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		image_2: "https://images.unsplash.com/photo-1688417142483-7465800518df?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
	{
		id: 106,
		name: "Clouded Leopard",
		top_speed: "60",
		order: "Carnivora",
		scientific_name: "Neofelis nebulosa",
		size: "The clouded leopard is a medium-sized felid of the genus Neofelis. It is muscular, with a long body, relatively short legs and a broad head. Its fur is grayish or yellowish with large cloud-shaped markings.",
		lifespan: "Clouded leopards live 11-15 years on average in the wild. With proper care in captivity, they can live over 20 years.",
		conservation: "Classified as Vulnerable by IUCN. Major threats include deforestation, poaching and prey loss across its Southeast Asian range.",
		distribution: "Clouded leopards occupy primary and secondary tropical rainforests up to 2,000 meters elevation on the mainland and islands of Southeast Asia.",
		species: "The rare, canopy-dwelling clouded leopard features in folklore as an animal linked to the heavens due to its arboreal nature. But it is also feared as a predator capable of dropping down from the trees.",
		nutrition: "An opportunistic predator, the clouded leopard eats a variety of mammals and birds including deer, civets, monkeys, porcupines, squirrels and more.",
		lifestyle: "Clouded leopards lead a largely nocturnal, solitary existence, coming together only for mating purposes. They are adept climbers and can hang upside down from branches.",
		image_1: "https://cdn.pixabay.com/photo/2020/05/27/18/57/cloud-leopard-5228482_1280.jpg",
		image_2: "https://images.unsplash.com/photo-1503435400567-c94dcafd1f86?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
	{
		id: 107,
		name: "Lynx",
		top_speed: "50",
		order: "Carnivora",
		scientific_name: "Lynx",
		size: "Lynxes are medium-sized felids. They have a short body, long legs, a large head with prominent ears and a short tail. Their fur is typically gray or brown with black markings.",
		lifespan: "Lynxes live 10-15 years on average in the wild. With proper care in captivity, they can live over 20 years.",
		conservation: "IUCN classifies lynxes as Least Concern overall, but some populations are threatened by habitat loss, hunting and incidental trapping.",
		distribution: "The Eurasian lynx inhabits forests across Europe and Russia. The Canada lynx is native to Canada and Alaska. The Iberian lynx lives on the Iberian Peninsula. Bobcats roam across North America.",
		species: "Lynx hold significance in Northern Native American folklore. Their sharp vision, stealth hunting, and elusiveness endow them with an air of mystery that commands respect for the unknown.",
		nutrition: "As strict carnivores, lynxes prey primarily on mammals like hares, rabbits, squirrels, mice, voles, grouse, ptarmigan and ducks. They stalk, rush, and pounce on their targets.",
		lifestyle: "Lynx are predominantly nocturnal and crepuscular hunters. They lead solitary lives within home ranges scent-marked by urine, scat, and debris scraping. Females raise kittens alone.",
		image_1: "https://images.unsplash.com/photo-1612356700139-ba3b20f5f468?auto=format&fit=crop&q=80&w=1788&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		image_2: "https://images.unsplash.com/photo-1573595287099-eabfdb20ec6a?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
	{
		id: 108,
		name: "Black Panther",
		top_speed: "90",
		order: "Carnivora",
		scientific_name: "Panthera pardus (melanistic)",
		size: "The black panther is the dark color variant of leopards and jaguars. It has a black coat with faint rosette markings visible in certain lighting.",
		lifespan: "Black panthers have typical lifespans of 12-15 years in the wild, and potentially longer in captivity - similar to non-melanistic individuals.",
		conservation: "Black panthers face the same threats as regular leopard and jaguar populations. All are vulnerable to poaching and habitat loss.",
		distribution: "Melanistic leopards occur in southeast Asia. Melanistic jaguars are found in parts of Central and South America.",
		species: "The black panther holds an enduring allure, shrouded in mystery. It symbolizes the darkness, yet also represents rarity, power and the cryptic unknown.",
		nutrition: "As carnivores, black panthers hunt medium to large prey like deer, peccaries, capybaras, monkeys and occasional livestock.",
		lifestyle: "Black panthers share the solitary, nocturnal hunting behaviors of regular leopards and jaguars. They are known for their stealth, agility and strength.",
		image_1: "https://cdn.pixabay.com/photo/2018/06/10/12/52/black-panther-3466399_960_720.jpg",
		image_2: "https://cdn.pixabay.com/photo/2023/05/23/16/29/picture-8013085_1280.jpg"
	},
	{
		id: 109,
		name: "African Lion",
		top_speed: 80,
		order: "Carnivora",
		scientific_name: "Panthera leo",
		size: "African Lions are among the largest of the big cats, with males reaching up to 11 feet in length (including the tail) and weighing around 190 kg, while females are slightly smaller. They are robust and muscular animals, known for their distinctive manes, which are more pronounced in males.",
		lifespan: "In the wild, African Lions typically live for 10 to 14 years, while those in captivity can live up to 20 years. Their lifespan is influenced by factors such as access to food, territory, and competition with other predators.",
		conservation: "The African Lion is currently listed as Vulnerable due to habitat loss and poaching. Their populations have declined due to human encroachment and illegal wildlife trade, making conservation efforts crucial to their survival.",
		distribution: "African Lions are found across sub-Saharan Africa, from the savannas of East Africa to the dense woodlands of West Africa. They inhabit grasslands, savannas, and open woodlands, living in prides consisting of several related lionesses, their cubs, and a few adult males. Lions are social animals and live in groups known as prides to protect territory and hunt cooperatively.",
		species: "African Lions have cultural significance and have been featured in folklore, mythology, and are often associated with strength and bravery. However, they face threats from habitat loss and human-wildlife conflicts, making education and conservation efforts crucial to their long-term survival.",
		nutrition: "African Lions are carnivorous and primarily hunt large mammals such as zebras, wildebeests, and buffalo. Lions are opportunistic predators, and their diet may also include smaller mammals and scavenged carrion when hunting is challenging.",
		lifestyle: "Lions are known for their social behavior, living in prides that hunt and protect their territory together. They are often active at night, sleeping during the day. Male lions are responsible for defending the pride's territory, while lionesses are the primary hunters.",
		image_1: "https://cdn.pixabay.com/photo/2022/10/24/08/47/lion-7542944_1280.jpg",
		image_2: "https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_1280.jpg"
	},
	{
		id: 110,
		name: "Bengal Tiger",
		top_speed: 96,
		order: "Carnivora",
		scientific_name: "Panthera tigris tigris",
		size: "Bengal Tigers are the largest of the tiger subspecies, with males reaching up to 10 feet in length and weighing up to 220 kg. Their distinctive orange coat is adorned with black stripes, providing excellent camouflage in their forest habitats.",
		lifespan: "In the wild, Bengal Tigers can live up to 10-15 years, while those in captivity may reach 20 years or more. Their longevity is affected by factors such as food availability, disease, and human-related threats.",
		conservation: "Bengal Tigers are Endangered due to habitat loss and poaching for their body parts. Conservation efforts focus on protecting their forest homes and reducing human-wildlife conflict, which poses a significant threat to their survival.",
		distribution: "Bengal Tigers are found in the Indian subcontinent, including India, Bangladesh, Nepal, and Bhutan. They prefer diverse habitats, from grasslands to forests. These solitary hunters are territorial and require vast areas to roam and hunt for their preferred prey.",
		species: "Bengal Tigers have cultural significance in their range and are considered a national symbol of India. They are also popular in wildlife conservation efforts, with numerous reserves and protected areas dedicated to their preservation.",
		nutrition: "Bengal Tigers are carnivorous and primarily prey on deer, wild boar, and other large mammals. They are skilled ambush predators and can leap great distances to catch their prey, relying on stealth and power in their hunting strategies.",
		lifestyle: "Bengal Tigers are solitary animals, with males and females coming together only for mating purposes. They are known for their strength and agility, capable of taking down large prey animals and swimming skillfully to cool off in the hot and humid environments where they live.",
		image_1: "https://cdn.pixabay.com/photo/2016/07/22/12/53/white-1534797_1280.jpg",
		image_2: "https://cdn.pixabay.com/photo/2017/06/16/05/11/white-tiger-2407799_1280.jpg"
	},
	{
		id: 111,
		name: "Sunda Clouded Leopard",
		top_speed: "64",
		order: "Carnivora",
		scientific_name: "Neofelis diardi",
		size: "The Sunda clouded leopard is a medium-sized felid of the genus Neofelis. It is muscular, with a long body, relatively short legs and a broad head. Its fur is grayish or yellowish with large cloud-shaped markings.",
		lifespan: "Sunda clouded leopards live for 11-15 years in the wild, while in captivity they can live over 20 years.",
		conservation: "Vulnerable",
		distribution: "Sunda clouded leopards are found on the islands of Borneo and Sumatra in Southeast Asia.",
		species: "Sunda clouded leopards have a significant cultural and ecological importance in the region.",
		nutrition: "Sunda clouded leopards are carnivores and have a diet that includes a wide range of prey.",
		lifestyle: "Sunda clouded leopards are solitary animals and are known for their arboreal lifestyle.",
		image_1: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		image_2: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
	{
		id: 112,
		name: "Cheetah",
		top_speed: 112,
		order: "Carnivora",
		scientific_name: "Acinonyx jubatus",
		size: "Cheetahs are slender and streamlined big cats, with a body length of about 3.5 to 4.5 feet and weighing between 46 to 160 kg. They are recognized by their distinctive black spots on a pale golden background.",
		lifespan: "In the wild, Cheetahs usually live to 8 to 10 years, while those in captivity can live slightly longer. Their short lifespan is often due to high mortality rates among cubs and competition with larger predators.",
		conservation: "Cheetahs are listed as Vulnerable, primarily due to habitat loss and poaching. Their populations have dwindled, and conservation efforts focus on protecting their remaining habitats and reducing human-wildlife conflict.",
		distribution: "Cheetahs are found in parts of Africa, inhabiting a range of habitats from grasslands to savannas. They are known for their incredible speed, which enables them to chase down prey such as gazelles and impalas, but their speed is limited to short sprints.",
		species: "Cheetahs have fascinated humans for centuries, with their incredible speed and sleek appearance. They have also been associated with grace and elegance in art and culture. Conservation efforts aim to ensure the survival of this unique big cat.",
		nutrition: "Cheetahs are obligate carnivores, primarily preying on small to medium-sized ungulates. Their hunting style involves stalking and sprinting, making them one of the most formidable sprinters in the animal kingdom.",
		lifestyle: "Cheetahs are mostly solitary animals, except during mating and when a mother raises her cubs. They are known for their exceptional speed, capable of reaching 112 km/h in short bursts, allowing them to catch prey through a burst of acceleration.",
		image_1: "https://images.unsplash.com/photo-1624958723474-05d32b99005f?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		image_2: "https://images.unsplash.com/photo-1630315956721-b1cd928bd0d4?auto=format&fit=crop&q=80&w=1926&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
	{
		id: 113,
		name: "White Tiger",
		top_speed: "64",
		order: "Carnivora",
		scientific_name: "Panthera tigris tigris (leucistic)",
		size: "The white tiger is a striking variant of the Bengal tiger. It has a unique white coat with dark stripes and blue eyes.",
		lifespan: "White tigers typically live for 10-15 years in the wild and can have similar lifespans in captivity.",
		conservation: "Critically Endangered",
		distribution: "White tigers are not found in the wild. They are a product of captive breeding programs and not a separate subspecies.",
		species: "White tigers have captivated human fascination due to their rarity and distinctive appearance. They are often featured in zoos and wildlife conservation efforts.",
		nutrition: "White tigers are carnivores and share a diet similar to other Bengal tigers, preying on animals such as deer and wild boar.",
		lifestyle: "White tigers, like other Bengal tigers, are solitary animals known for their strength and agility.",
		image_1: "https://images.unsplash.com/photo-1559629250-d19ade798ced?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		image_2: "https://images.unsplash.com/photo-1653677185630-212a412efaa5?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
	{
		id: 114,
		name: "Serval",
		top_speed: "80",
		order: "Carnivora",
		scientific_name: "Leptailurus serval",
		size: "The Serval is a medium-sized wild cat with a slender body, long legs, and a distinctive coat with small spots and stripes. It is known for its agility and jumping ability.",
		lifespan: "Servals typically live for 10-12 years in the wild and can have a longer lifespan in captivity.",
		conservation: "Least Concern",
		distribution: "Servals are native to Africa and are found in a range of habitats, including grasslands, savannas, and wetlands.",
		species: "Servals have cultural significance in some African regions and are admired for their unique appearance. They are occasionally kept as exotic pets.",
		nutrition: "Servals are carnivorous and prey on small mammals, birds, and reptiles. They are skilled hunters known for their ability to leap high to catch birds in flight.",
		lifestyle: "Servals are solitary and crepuscular hunters, meaning they are most active during dawn and dusk. They are territorial and communicate using vocalizations.",
		image_1: "https://images.unsplash.com/flagged/photo-1551255868-86bbc8e0f971?auto=format&fit=crop&q=80&w=1841&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		image_2: "https://images.unsplash.com/photo-1621139265009-11ce7f5d441f?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	}
];

const $$Astro$2 = createAstro();
const $$Loader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Loader;
  return renderTemplate`${maybeRenderHead()}<div class="lazy-loader"><div class="lazy-spinner"></div></div>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/Loader.astro", void 0);

const $$Astro$1 = createAstro();
const $$AnimalsHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AnimalsHero;
  const animals = animalsJson;
  return renderTemplate`${maybeRenderHead()}<section class="animals"><div class="container animals__container"><h2 class="heading-second animals__title">Meet Our Big Cats</h2><ul class="animals__list">${animals.map((animal) => {
    return renderTemplate`<li class="animals__item">${renderComponent($$result, "Loader", $$Loader, {})}<a class="animals__link"${addAttribute(`/Animal/${animal.id}`, "href")}><img class="animals__image lazy"${addAttribute(animal.image_1, "data-src")}${addAttribute(animal.lifespan, "alt")}${addAttribute(renderTransition($$result, "gogx7ngu", "", "animalphoto"), "data-astro-transition-scope")}></a><a${addAttribute(`/Animal/${animal.id}`, "href")} class="animals__details"><p class="animals__name">${animal.name}</p><p class="animals__seemore">${renderComponent($$result, "Icon", $$Icon, { "class": "icon animals__icon", "name": "system-uicons:arrow-top-right" })}</p></a></li>`;
  })}</ul></div></section>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/AnimalsHero.astro", "self");

const $$Astro = createAstro();
const $$Animals = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Animals;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Zoo Animals" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "AnimalsHero", $$AnimalsHero, {})}` })}`;
}, "C:/Users/Youness/Desktop/Crocopark/src/pages/Animals.astro", void 0);

const $$file = "C:/Users/Youness/Desktop/Crocopark/src/pages/Animals.astro";
const $$url = "/Animals";

const Animals = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Animals,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Icon as $, Animals as A, $$MainLayout as a, animalsJson as b, $$Loader as c, lion7 as d, lion3 as e, lion4 as f, lion1 as l };
