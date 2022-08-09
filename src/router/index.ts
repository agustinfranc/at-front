import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/CalendarView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/calendar",
      name: "calendar",
      component: () => import("../views/CalendarView.vue"),
    },
    {
      path: "/clients",
      name: "clients",
      component: () => import("../views/ClientsView.vue"),
    },
    {
      path: "/client",
      name: "client",
      component: () => import("../views/NewClientView.vue"),
    },
    {
      path: "/companions",
      name: "companions",
      component: () => import("../views/CompanionsView.vue"),
    },
    {
      path: "/companion",
      name: "companion",
      component: () => import("../views/NewCompanionView.vue"),
    },
    {
      path: "/users",
      name: "users",
      component: () => import("../views/UsersView.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: () => import("../views/NewUserView.vue"),
    },
    {
      path: "/assignments",
      name: "assignments",
      component: () => import("../views/AssignmentsView.vue"),
    },
    {
      path: "/assignment",
      name: "assignment",
      component: () => import("../views/NewAssignmentView.vue"),
    },
  ],
});

export default router;
