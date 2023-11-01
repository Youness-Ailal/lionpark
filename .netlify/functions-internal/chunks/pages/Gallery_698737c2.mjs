import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent, g as addAttribute } from '../astro_bf1117ea.mjs';
import 'clsx';
import { $ as $$Icon, a as $$MainLayout } from './Animals_cd45b04a.mjs';
/* empty css                             *//* empty css                             */
const faqs = [
	{
		title: "Can you buy animals from the zoo?",
		answer: "No, buying animals from the zoo is not possible. Zoos exist to conserve and protect endangered species and promote animal welfare, not to sell animals to the public."
	},
	{
		title: "Can you donate animals to the zoo?",
		answer: "Typically, donating animals to the zoo is not allowed. Zoos carefully manage their animal populations for health and genetic diversity."
	},
	{
		title: "Why are some enclosures not accessible to visitors?",
		answer: "Certain enclosures are off-limits to provide animals privacy and meet their specific environmental needs."
	},
	{
		title: "Where should you take a homeless wild animal?",
		answer: "For homeless wild animals, it's best to contact local wildlife authorities or rehabilitation centers for proper care."
	},
	{
		title: "Can you take photos and videos at the zoo?",
		answer: "Yes, you can take photos and videos for personal use, but be respectful and follow zoo rules."
	},
	{
		title: "What restrictions are there at the zoo?",
		answer: "Common restrictions include no littering, not disturbing animals, and following posted rules for safety and conservation."
	},
	{
		title: "Can you bring your pet to the zoo?",
		answer: " In general, you cannot bring your pet to the zoo. Zoos have strict policies to ensure the safety and well-being of both their resident animals and visitors. Service animals are typically an exception and may be allowed with proper documentation."
	},
	{
		title: "Can you interact with the animals at the zoo?",
		answer: "Interactions with animals are typically limited to viewing from designated areas. For safety reasons, direct contact with animals is not allowed in most cases, as it can stress or harm the animals."
	}
];

const $$Astro$2 = createAstro();
const $$FAQ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FAQ;
  const faq1 = faqs.slice(0, Math.ceil(faqs.length / 2));
  const faq2 = faqs.slice(Math.ceil(faqs.length / 2));
  return renderTemplate`${maybeRenderHead()}<section class="faq" id="faq"><div class="container faq__container"><div class="faq__top"><h2 class="heading-second faq__title">
What do zoo visitors need to know?
</h2></div><div class="faq__questions"><ul class="faq__content">${faq1.map((question) => {
    return renderTemplate`<li class="question"><div class="question__top"><h4 class="question__title">${question.title}</h4>${renderComponent($$result, "Icon", $$Icon, { "class": "icon question__icon", "name": "simple-line-icons:arrow-up" })}</div><div class="question__content"><p class="paragraph question__text">${question.answer}</p></div></li>`;
  })}</ul><ul class="faq__content">${faq2.map((question) => {
    return renderTemplate`<li class="question"><div class="question__top"><h4 class="question__title">${question.title}</h4>${renderComponent($$result, "Icon", $$Icon, { "class": "icon question__icon", "name": "simple-line-icons:arrow-up" })}</div><div class="question__content"><p class="paragraph question__text">${question.answer}</p></div></li>`;
  })}</ul></div></div></section>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/FAQ.astro", void 0);

const photo1 = "/images/gallery1.jpg";

const photo2 = "/images/gallery2.jpg";

const photo3 = "/images/gallery3.jpg";

const photo4 = "/images/gallery4.jpg";

const photo5 = "/images/gallery5.jpg";

const photo6 = "/images/gallery6.jpg";

const photo7 = "/images/gallery7.jpg";

const $$Astro$1 = createAstro();
const $$Photos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Photos;
  return renderTemplate`${maybeRenderHead()}<section class="gallery"><div class="container"><h1 class="heading-second gallery__title">
Witness the Wild - Lion Zoo in Photos
</h1><div class="gallery__photos"><div class="gallery__photo"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="lazy"${addAttribute(photo1, "data-src")} alt="Photo of a big wild cat"></div><div class="gallery__photo"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="lazy"${addAttribute(photo2, "data-src")} alt="Photo of a big wild cat"></div><div class="gallery__photo"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="lazy"${addAttribute(photo3, "data-src")} alt="Photo of a big wild cat"></div><div class="gallery__photo"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="lazy"${addAttribute(photo4, "data-src")} alt="Photo of a big wild cat"></div><div class="gallery__photo"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="lazy"${addAttribute(photo5, "data-src")} alt="Photo of a big wild cat"></div><a target="_blank" href="https://www.instagram.com/natgeomagarab/" class="gallery__photo"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="lazy"${addAttribute(photo6, "data-src")} alt="Photo of a big wild cat"></a></div><div class="week"><div class="week__content"><div class="week__left"><h2 class="heading-second week__title">Photo of the Week</h2><h3 class="heading-third week__title2">by Sarah</h3><p class="paragraph week__text">
The winner will receive a 50% discount on the next visit to the
            park!*
</p><button class="cta week__button">Send Your Photo</button></div><div class="week__right"><div class="lazy-loader"><div class="lazy-spinner"></div></div><img class="lazy"${addAttribute(photo7, "data-src")} data-alt="photo of the week"></div></div><div class="week__submit"><h2 class="heading-second">Submit Your Photo</h2><form action="" class="week__form"><div class="week__form--top"><input type="text" name="name" id="week__name" placeholder="Name" required><input required type="email" name="" id="week__email" placeholder="Email Address"></div><div class="week__form--mid"><label for="week__file" class="week__form--label">${renderComponent($$result, "Icon", $$Icon, { "class": "icon week__form--label-icon", "name": "ep:upload-filled" })}<p class="week__file--text">Click or Drag an image</p></label><input type="file" name="" id="week__file" required accept="image/*"></div><div class="week__form--bottom"><button type="button" class="cta week__form--bottom-back">Go Back</button><button class="cta" type="submit">Submit</button></div></form></div><div class="week__done hidden-week">${renderComponent($$result, "Icon", $$Icon, { "class": "icon week__done--icon", "name": "ion:cloud-done-outline" })}<h2 class="heading-second">We Received Your Image!</h2><h3 class="heading-third">We'll let you know if you win by email</h3><button class="cta message-back">Go back</button></div></div><p class="paragraph week__desc">
*The winner is chosen weekly by the contest organizers. 50% discount can
      be used for 2 tickets within 2 months from the date of receipt. You will
      receive a notification about the winnings to the email indicated in your
      profile.
</p></div></section>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/Photos.astro", void 0);

const $$Astro = createAstro();
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Gallery" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Photos", $$Photos, {})}${renderComponent($$result2, "FAQ", $$FAQ, {})}` })}`;
}, "C:/Users/Youness/Desktop/Crocopark/src/pages/Gallery.astro", void 0);

const $$file = "C:/Users/Youness/Desktop/Crocopark/src/pages/Gallery.astro";
const $$url = "/Gallery";

const Gallery = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FAQ as $, Gallery as G };
