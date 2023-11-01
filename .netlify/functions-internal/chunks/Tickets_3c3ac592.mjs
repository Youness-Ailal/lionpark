export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/Tickets_bfc9b018.mjs').then(n => n.T);

export { page };
