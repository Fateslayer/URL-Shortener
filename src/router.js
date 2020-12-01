import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Redirect from './views/Redirect.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/:code',
			name: 'redirect',
			component: Redirect,
		},
	],
	mode: 'history',
});
