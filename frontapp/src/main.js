import { createApp } from 'vue';
import App from './App.vue';
import Posts from './views/Posts';
import Login from './views/Login';
import Logout from './views/Logout';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'posts',
    component: Posts,
    meta: { requiresLogin: true },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresLogin)) {
    if (!store.getters.loggedIn) {
      next({ name: 'login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
