import Axios from 'axios';
import Vue from 'vue';
import {
  MdButton,
  MdCard,
  MdEmptyState,
  MdField,
  MdList,
  MdToolbar,
} from 'vue-material/dist/components';
import App from './App.vue';
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
Vue.use(MdToolbar);

new Vue({
  render: h => h(App),
}).$mount('#app');
