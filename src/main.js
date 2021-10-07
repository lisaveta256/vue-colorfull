import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios  from "axios";

import MaterialKit from "./plugins/material-kit";

axios.defaults.headers['Authorization']=`Bearer ${localStorage.getItem('token')}`;
axios.defaults.baseURL = 'http://localhost:8001';
Vue.config.productionTip = false;

Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
