export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/Animals_cd45b04a.mjs').then(n => n.A);

export { page };
