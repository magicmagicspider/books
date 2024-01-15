import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import Home from '../pages/Home.vue';
import Search_interface from "../components/Search_interface.vue"
import pop_up_win from "../components/pop_up_win.vue"
import Bookshelf from "../components/Bookshelf_interface.vue"
import UPload from "../components/UPload_interface.vue"
import Help_interface from "../components/Help_interface.vue"


const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }, {
    path: '/home',
    name: "Home",
    component: Home,
    children: [
      {
        path: '/pop_up_win',
        name: 'pop_up_win',
        component: pop_up_win
      },
      {
        path: '/Bookshelf',
        name: 'Bookshelf',
        component: Bookshelf
      },
      {
        path: '/UPload',
        name: 'UPload_interface',
        component: UPload
      },
      {
        path: '/Search',
        name: 'Search_interface',
        component: Search_interface
      },
      {
        path: '/Help',
        name: 'help_interface',
        component: Help_interface
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;