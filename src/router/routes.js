//not using lazy-loading for routing-->resources loaded and used only used when needed - good for big apps

import { defineComponent } from "vue";

//use demand-loading --> resources are only loaded when needed - good for small apps
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout"),
    children: [
      { path: "/", component: () => import("pages/IndexPage") },
      { path: "LoginPage", component: () => import("pages/LoginPage") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
