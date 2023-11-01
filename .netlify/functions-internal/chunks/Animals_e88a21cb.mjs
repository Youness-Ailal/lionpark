export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/Animals_1fd2c29e.mjs').then(n => n.A);

export { page };
