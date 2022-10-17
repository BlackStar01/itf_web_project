import Auth from "@/views/Auth.vue";

export const routes = [
  {
    path: "/",
    component: Auth,
    meta: { requiresAuth: false },
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/Auth.vue"),
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
