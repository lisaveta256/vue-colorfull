import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

import Footer from './layout/Footer.vue';
import MainHeader from "./layout/MainHeader.vue";
import Ndex from './views/Ndex.vue';
import Registration from './views/Registration.vue';
import Gallery from './views/Gallery.vue';
import About from './views/About.vue';
import Lessons from './views/Lessons.vue';
import Buy from './views/Buy.vue';
import Addons from './views/Addons.vue'
import Tarif from './views/Tarif.vue'

import VueRouteMiddleware from 'vue-route-middleware';
import currentTarif from './middleware/CurrentTarifMiddleware';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Ndex, header: MainHeader, footer: Footer }/*,
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }*/
    },
    {
      path: '/registration',
      name: 'registration',
      components : {default: Registration, header: MainHeader,footer: Footer}

    },
    {
      path:'/gallery',
      name:'gallery',
      components: {default: Gallery, header: MainHeader, footer: Footer}
    },
    {
      path:'/about',
      name :'about',
      components: {default : About, header: MainHeader, footer : Footer}
    },
    {
      path: '/lessons',
      name:'lessons',
      meta: {
        middleware: currentTarif,
       },
      components: {default: Lessons, header: MainHeader, footer: Footer}
    },
    {
      path:'/buy',
      name: 'buy',
      components:{default: Buy, header: MainHeader, footer: Footer}
    },
    {
      path:'/addons',
      name: 'addons',
      components:{default: Addons, header: MainHeader, footer: Footer}
    },
    {
      path:'/tarif',
      name: 'tarif',
      components:{default: Tarif, header: MainHeader, footer: Footer}
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }/*,
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }*/
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
//Router.beforeEach(VueRouteMiddleware());