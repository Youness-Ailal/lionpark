import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent } from '../astro_bf1117ea.mjs';
import 'clsx';
import { $ as $$Icon, a as $$MainLayout } from './Animals_1fd2c29e.mjs';
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

const $$Astro$2 = createAstro("https://lionpark.netlify.app");
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

const $$Astro$1 = createAstro("https://lionpark.netlify.app");
const $$ContactHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactHero;
  return renderTemplate`${maybeRenderHead()}<section class="contact"><div class="container contact__container"><h2 class="heading-second contact__title page-title">Drop us a Message</h2><div class="contact__content"><div class="contact__left"><form class="contact__form"><div class="contact__form--field"><input type="text" required id="contact_name" placeholder="Name"><!-- <label for="contact_name" class="contact__form--first-label"
              >Name</label
            > --></div><div class="contact__form--field"><input type="email" required id="contact_email" placeholder="Email"><!-- <label for="contact_email" class="contact__form--first-label"
              >Email</label
            > --></div><div class="contact__form--field"><textarea id="contact__message" placeholder="Message"></textarea><!-- <label for="contact_message" class="contact__form--last-label"
              >Message</label
            > --></div><button class="cta">Send${renderComponent($$result, "Icon", $$Icon, { "class": "icon contact__form--icon", "name": "carbon:send" })}</button></form></div><div class="contact__right"><a href="tel:+212624360624" class="contact__info link">${renderComponent($$result, "Icon", $$Icon, { "class": "icon contact__icon", "name": "ph:phone-light" })}
+212 123456789</a><p class="paragraph contact__info">${renderComponent($$result, "Icon", $$Icon, { "class": "icon contact__icon", "name": "carbon:location" })}Drarga
          street 1, Agadir Morocco
</p><div class="contact__socials"><a target="_blank" href="https://facebook.com/">${renderComponent($$result, "Icon", $$Icon, { "class": "icon contact__social", "name": "ic:baseline-facebook" })}</a><a target="_blank" href="https://www.instagram.com/">${renderComponent($$result, "Icon", $$Icon, { "class": "icon contact__social", "name": "mdi:instagram" })}</a><a target="_blank" href="https://www.youtube.com/">${renderComponent($$result, "Icon", $$Icon, { "class": "icon contact__social", "name": "mdi:youtube" })}</a><a target="_blank" href="https://www.linkedin.com/in/youness-ailal/">${renderComponent($$result, "Icon", $$Icon, { "class": "icon contact__social", "name": "mdi:linkedin" })}</a></div><div class="contact__map"><div id="map"></div></div></div></div></div></section>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/ContactHero.astro", void 0);

const $$Astro = createAstro("https://lionpark.netlify.app");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Contact us", "description": "Get in touch with our team at Lion Park Agadir in Morocco. Send us your questions, feedback, or inquiries. We look forward to hearing from you!" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContactHero", $$ContactHero, {})}${renderComponent($$result2, "FAQ", $$FAQ, {})}` })}`;
}, "C:/Users/Youness/Desktop/Crocopark/src/pages/Contact.astro", void 0);

const $$file = "C:/Users/Youness/Desktop/Crocopark/src/pages/Contact.astro";
const $$url = "/Contact";

const Contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FAQ as $, Contact as C };
