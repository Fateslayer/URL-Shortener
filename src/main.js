import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(VueResource);

Vue.http.options.root = 'https://ancient-mountain-91263.herokuapp.com';

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
