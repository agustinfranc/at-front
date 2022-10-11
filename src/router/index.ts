import { createRouter, createWebHistory } from "vue-router";

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
      path: "/clients/new",
      name: "new-client",
      component: () => import("../views/NewClientView.vue"),
    },
    {
      path: "/companions",
      name: "companions",
      component: () => import("../views/CompanionsView.vue"),
    },
    {
      path: "/companions/new",
      name: "new-companion",
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
      component: () => import("../views/Assignment/AssignmentListView.vue"),
    },
    {
      path: "/assignments/new",
      name: "assignment-new",
      component: () => import("../views/Assignment/NewAssignmentView.vue"),
    },
    {
      path: "/clients/:id",
      name: "client-detail",
      component: () => import("../views/Client/ClientDetailView.vue"),
    },
    {
      path: "/assignments/:id",
      name: "assignment-detail",
      component: () => import("../views/Assignment/AssignmentDetailView.vue"),
    },
    {
      path: "/assignments/:id/edit",
      name: "assignment-edit",
      component: () => import("../views/Assignment/EditAssignmentView.vue"),
    },
  ],
});

export default router;
