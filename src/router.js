import Vue from "vue";
import Router from "vue-router";/*
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";*/

import Footer from './layout/Footer.vue';
import MainHeader from "./layout/MainHeader.vue";
import Ndex from './views/Ndex.vue';
import Registration from './views/Registration.vue';
import Gallery from './views/Gallery.vue';
import About from './views/About.vue';
import Lessons from './views/Lessons.vue';
import Buy from './views/Buy.vue';
import Addons from './views/Addons.vue';
import Tarif from './views/Tarif.vue';
import Clients from './views/Clients.vue';
import Tarifs from './views/Tarifs.vue';
import Users from './views/Users.vue';
import OneTarif from './views/OneTarif.vue';
import Account from './views/Account.vue';

import UserAuth from './views/UserAuth';

/*
import VueRouteMiddleware from 'vue-route-middleware';*/
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
      path:'/tarifs',
      name: 'tarifs',
      components:{default: Tarifs, header: MainHeader, footer: Footer}
    },
    {
      props: { default: true, header: false, footer: false},
      path:'/tarifs/info/:id',
      name: 'tarif_info',
      components:{default: OneTarif, header: MainHeader, footer: Footer}
    },
    {
      path:'/users',
      name: 'users',
      components:{default: Users, header: MainHeader, footer: Footer}
    },
    {
      path:'/account',
      name: 'account',
      components:{default: Account, header: MainHeader, footer: Footer}
    },
    {
      path: '/vkk',
      name: 'vkk',
      components:{default:UserAuth}
    },
      /*
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },*/
    {
      path:'/clients',
      name:'clients',
      components: { default: Clients, header: MainHeader, footer: Footer },
    }
    
    /*,
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