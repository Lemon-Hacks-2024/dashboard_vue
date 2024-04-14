import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes.js";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  let currentUser = !!localStorage.token;
  let isRequireAuth = to.meta?.auth || false;
  let isRequireNoAuth = to.meta?.noauth || false;

  if (isRequireAuth && !currentUser) {
    next("/login");
  } else if (isRequireNoAuth && currentUser) {
    next("/");
  } else {
    next();
  }
});

export default router;
