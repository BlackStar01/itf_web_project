import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from '@/routes/routes.js'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'active'
  });
  

createApp(App).use(router).mount('#app')

export default router;
