import { lazy } from 'react';

const Home = lazy(() => import('~/pages/Home'));
const Contact = lazy(() => import('~/pages/Contact'));

const routes = [
	{ path: '/', exact: true, name: 'Home', component: Home },
	{ path: '/contact', name: 'Contact', component: Contact },
];

export default routes;
