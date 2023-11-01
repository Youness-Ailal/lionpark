import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_a19895dd.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_bf1117ea.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_fcb9a74f.mjs');
const _page1  = () => import('./chunks/index_d4d31592.mjs');
const _page2  = () => import('./chunks/Animals_e88a21cb.mjs');
const _page3  = () => import('./chunks/Contact_b0a41734.mjs');
const _page4  = () => import('./chunks/Gallery_bd3e0bce.mjs');
const _page5  = () => import('./chunks/Tickets_3c3ac592.mjs');
const _page6  = () => import('./chunks/_id__529b22cc.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/Animals.astro", _page2],["src/pages/Contact.astro", _page3],["src/pages/Gallery.astro", _page4],["src/pages/Tickets.astro", _page5],["src/pages/Animal/[id].astro", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
