import { createRouter, createWebHistory } from "vue-router";

import Cart from "../views/Cart/Cart.vue";
import Home from "../views/Home/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/Cart",
      name: "Cart",
      component: Cart,
    },
  ],
});
export default router;
