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
<<<<<<< HEAD
<<<<<<< HEAD
  /* {
    path: "/dashboard",
    component: () => import("@/views/dashboard.vue"),
=======
  {
    path: "/home/:id",
    name: "microservice",
>>>>>>> df0e06d1e7ce65963ffc22323ecbeaf119da514c
    children: [
      { path: '', component: import("@/views/MicroServices.vue") },
    ],
<<<<<<< HEAD
  }, */
  /* {
=======
  {
    path: "/home/:id",
    name: "microservice",
    children: [
      { path: '', component: import("@/views/MicroServices.vue") },
    ],
  },
  {
>>>>>>> 9f27ef9 (Update)
=======
  },
  {
>>>>>>> df0e06d1e7ce65963ffc22323ecbeaf119da514c
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];
