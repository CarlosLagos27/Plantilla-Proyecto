import { createRouter, createWebHistory } from "vue-router";

import DashB from '../pages/master/DashB'
import P_Home from '../pages/P_Home'
import P_profile from '../pages/P_profile'

   const routes = [
     {
        name: 'Dashboard',
        path: '/',
        component: DashB
     },
     {
         name: 'Home',
         path: '/P_home',
         component: P_Home
     },
     {
         name: 'Profile',
         path: '/P_profile',
         component: P_profile
     }

  ];
  const router = Router();
  export default router;
  function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
        return router;
  }