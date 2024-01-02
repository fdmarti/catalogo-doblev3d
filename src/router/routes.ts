export const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Productos/ProductosList.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About/About.vue'),
	},
    {
		path: '/contact',
		name: 'Contact',
		component: () => import('../views/Contact/Contact.vue'),
	},
];

