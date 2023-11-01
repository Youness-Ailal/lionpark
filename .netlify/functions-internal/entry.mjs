import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_8f7b716f.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_bf1117ea.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_1f6aaac9.mjs');
const _page1  = () => import('./chunks/index_964291c4.mjs');
const _page2  = () => import('./chunks/Animals_ae6fcee5.mjs');
const _page3  = () => import('./chunks/Gallery_62104c8d.mjs');
const _page4  = () => import('./chunks/Tickets_62e4bd28.mjs');
const _page5  = () => import('./chunks/_id__68dc6620.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/Animals.astro", _page2],["src/pages/Gallery.astro", _page3],["src/pages/Tickets.astro", _page4],["src/pages/Animal/[id].astro", _page5]]);
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
