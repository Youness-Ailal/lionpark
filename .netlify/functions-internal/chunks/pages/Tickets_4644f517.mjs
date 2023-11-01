import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent } from '../astro_bf1117ea.mjs';
import 'clsx';
import { $ as $$Icon, a as $$MainLayout } from './Animals_cd45b04a.mjs';
/* empty css                             *//* empty css                             */import { $ as $$FAQ } from './Gallery_698737c2.mjs';

const $$Astro$2 = createAstro();
const $$Location = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Location;
  return renderTemplate`${maybeRenderHead()}<section class="location" id="location"><div class="location__container"><!-- <div class="location__top"></div> --><div class="location__bottom"><div class="location__right"><h2 class="heading-second location__title">Where Are We?</h2><p class="paragraph location__instructions">
Once you're on the Marrakesh-Agadir Highway in Drarga, follow the
          signs to Lion Park, just 2 minutes from Crocopark. At the park's
          entrance checkpoint, mention that you're visiting Lion Park.
</p><p class="paragraph location__p">${renderComponent($$result, "Icon", $$Icon, { "class": "icon location__p--icon", "name": "carbon:location" })}Drarga
          street 1, Agadir Morocco
</p><p class="paragraph location__p">${renderComponent($$result, "Icon", $$Icon, { "class": "icon location__p--icon", "name": "carbon:time" })}open daily
          9:00 to 17:00 (GMT+1)
</p><a target="_blank" href="https://www.google.com/maps/dir//9GRC%2BFM+Lion+Park,+Drarga+80000/@30.3911565,-9.4809152,17z/data=!4m17!1m7!3m6!1s0xdb3c970674b7d31:0x150db889f8c52298!2sLion+Park!8m2!3d30.3911519!4d-9.4783403!16s%2Fg%2F11s34k3j0p!4m8!1m0!1m5!1m1!1s0xdb3c970674b7d31:0x150db889f8c52298!2m2!1d-9.4783403!2d30.3911519!3e3?entry=ttu" class="cta">Get Directions</a></div><div class="location__left"><div id="map"></div></div></div></div></section>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/Location.astro", void 0);

const $$Astro$1 = createAstro();
const $$TicketsHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TicketsHero;
  return renderTemplate`${maybeRenderHead()}<section class="tickets"><div class="container tickets__container"><div class="tickets__top"><h2 class="heading-second tickets__title">Purchase Your tickets</h2><!-- <div class="tickets__options">
        <button class="select-btn selected">Online</button>
        <button class="select-btn">Office</button>
      </div> --></div><div class="tickets__steps"><div class="tickets__bottom"><div class="tickets__left"><h4 class="heading-third tickets__step">1. Pick a date</h4><div class="tickets__picker-container"><input type="text" id="datepicker" autocomplete="off"></div></div><form id="ticket-members-form" class="tickets__right ticket"><h4 class="heading-third tickets__step">2. Choose tickets</h4><div class="ticket__persons"><div class="person"><p class="paragraph person__age">
Adults <span>(18+ years)</span></p><p class="paragraph person__price">35 MAD</p><div class="person__qt"><button type="button" class="cta person__minest">-</button><input class="person-input" type="number" name="" id="adult-input" value="1"><button type="button" class="cta person__plus">+</button></div></div><div class="person"><p class="paragraph person__age">
Kids <span>(4-17 years)</span></p><p class="paragraph person__price">20 MAD</p><div class="person__qt"><button type="button" class="cta person__minest">-</button><input class="person-input" type="number" name="" id="kid-input" value="0"><button type="button" class="cta person__plus">+</button></div></div><div class="person"><p class="paragraph person__age">
Babies <span>(0-4 years)</span></p><p class="paragraph person__price">00 MAD</p><div class="person__qt"><button type="button" class="cta person__minest">-</button><input class="person-input" type="number" name="" id="kid-input" value="0"><button type="button" class="cta person__plus">+</button></div></div></div><div class="person__email"><div class="person__email--text"><p class="person__email--text-top">Email Address</p><p class="person__email--text-bottom">
tickets will be sent to this email*
</p></div><input type="email" class="ticket__email" placeholder="Email@example.com" required></div><div class="ticket__bottom"><div class="ticket__total"><h4 class="ticket__total--text heading-third">
Total: <span class="ticket__total--price">35</span> MAD
</h4></div><button class="cta to-payment">Go To Payment
<div class="cta-loading hidden"></div></button></div></form></div><div class="ticket__office"></div></div></div></section>`;
}, "C:/Users/Youness/Desktop/Crocopark/src/components/TicketsHero.astro", void 0);

const $$Astro = createAstro();
const $$Tickets = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tickets;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Tickets" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "TicketsHero", $$TicketsHero, {})}${renderComponent($$result2, "FAQ", $$FAQ, {})}${renderComponent($$result2, "Location", $$Location, {})}` })}`;
}, "C:/Users/Youness/Desktop/Crocopark/src/pages/Tickets.astro", void 0);

const $$file = "C:/Users/Youness/Desktop/Crocopark/src/pages/Tickets.astro";
const $$url = "/Tickets";

const Tickets = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tickets,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Location as $, Tickets as T };
