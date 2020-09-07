import Home from '../pages/Home';
import Contact from '../pages/Contact';

const routes = [
	{ path: '/', exact: true, component: Home },
	{ path: '/contact', component: Contact },
];

export default routes;
