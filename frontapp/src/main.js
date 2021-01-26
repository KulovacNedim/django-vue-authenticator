import { createApp } from 'vue';
import App from './App.vue';
import Posts from './views/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'posts',
    component: Posts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
