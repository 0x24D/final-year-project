import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userMessage: '',
  },
  mutations: {
    /* eslint no-param-reassign: ["error", { "props": false }] */
    setUserMessage(s, text) {
      Vue.set(s, 'userMessage', text);
    },
  },
});
