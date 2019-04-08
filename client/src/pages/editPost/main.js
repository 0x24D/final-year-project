import Axios from 'axios';
import Vue from 'vue';
import {
  MdButton,
  MdCard,
  MdEmptyState,
  MdField,
  MdList,
  MdProgress,
  MdSnackbar,
  MdToolbar,
} from 'vue-material/dist/components';
import App from './App.vue';
import store from '../../store/index';
import '@/assets/vue-material/vue-material.min.css';
import '@/assets/vue-material/theme/default.css';

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;

// Material UI
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdEmptyState);
Vue.use(MdField);
Vue.use(MdList);
Vue.use(MdProgress);
Vue.use(MdSnackbar);
Vue.use(MdToolbar);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
