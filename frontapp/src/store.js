import { getAPI } from './axios-api';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    accessToken: null,
    refreshToken: null,
    APIData: '',
  },
  mutations: {
    updateStorage(state, { access, refresh }) {
      state.accessToken = access;
      state.refreshToken = refresh;
    },
    destroyToken(state) {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  getters: {
    loggedIn(state) {
      state;
      return localStorage.getItem('access-token') != null;
    },
  },
  actions: {
    userLogout(context) {
      if (context.getters.loggedIn) {
        localStorage.removeItem('access-token');
        context.commit('destroyToken');
      }
    },
    userLogin(context, usercredentials) {
      return new Promise((resolve, reject) => {
        getAPI
          .post('/api-token/', {
            username: usercredentials.username,
            password: usercredentials.password,
          })
          .then((response) => {
            context.commit('updateStorage', {
              access: response.data.access,
              refresh: response.data.refresh,
            });
            localStorage.setItem('access-token', response.data.access);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});

export default store;
