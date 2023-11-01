import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderComponent } from '../astro_bf1117ea.mjs';
import 'clsx';
import { $ as $$Icon, a as $$MainLayout } from './Animals_1fd2c29e.mjs';
import { $ as $$FAQ } from './Contact_6958ab00.mjs';
/* empty css                             */import 'html-escaper';
/* empty css                          */import 'svgo';
/* empty css                             *//* empty css                             *//* empty css                             *//* empty css                             */
const photo1 = "/images/gallery1.jpg";

const photo2 = "/images/gallery2.jpg";

const photo3 = "/images/gallery3.jpg";

const photo4 = "/images/gallery4.jpg";

const photo5 = "/images/gallery5.jpg";

const photo6 = "/images/gallery6.jpg";

const photo7 = "/images/gallery7.jpg";

const $$Astro$1 = createAstro("https://lionpark.netlify.app");
const $$Photos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Photos;
  return renderTemplate`${maybeRenderHead()}<section class="gallery"><div class="container"><h1 class="heading-second gallery__title page-title">
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

const $$Astro = createAstro("https://lionpark.netlify.app");
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Gallery", "description": "View stunning photos and videos of majestic lions, cute cubs, and other incredible wildlife at our lion park in Agadir, Morocco. A closer look at our pride." }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Photos", $$Photos, {})}${renderComponent($$result2, "FAQ", $$FAQ, {})}` })}`;
}, "C:/Users/Youness/Desktop/Crocopark/src/pages/Gallery.astro", void 0);

const $$file = "C:/Users/Youness/Desktop/Crocopark/src/pages/Gallery.astro";
const $$url = "/Gallery";

export { $$Gallery as default, $$file as file, $$url as url };
