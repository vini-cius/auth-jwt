import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Contact = lazy(() => import('../pages/Contact'));

const routes = [
	{ path: '/', exact: true, component: Home },
	{ path: '/contact', exact: true, component: Contact },
];

export default routes;
