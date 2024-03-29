import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Todos from "@/views/Todos.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;