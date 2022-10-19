import Auth from "@/views/Auth.vue";

export const routes = [
  {
    path: "/",
    component: Auth,
    meta: { requiresAuth: false },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  /* {
    path: "/dashboard",
    component: () => import("@/views/dashboard.vue"),
    children: [
      {
        path: "history",
        component: () => import("./views/dashboard/history.vue"),
      },
    ],
  }, */
  /* {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  }, */
];
