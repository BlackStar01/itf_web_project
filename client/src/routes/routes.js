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
  {
    path: "/home/:id",
    name: "microservice",
    children: [
      { path: '', component: () => import("@/views/MicroServices.vue") },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];
