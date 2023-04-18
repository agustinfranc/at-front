import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import("../views/AssignmentTemplate/AssignmentTemplateListView.vue"),
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
      path: "/clients/:id",
      name: "client-detail",
      component: () => import("../views/Client/ClientDetailView.vue"),
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
      path: "/companions",
      name: "companions",
      component: () => import("../views/Companion/CompanionsView.vue"),
    },
    {
      path: "/companions/new",
      name: "companion-new",
      component: () => import("../views/Companion/NewCompanionView.vue"),
    },
    {
      path: "/companions/:id/edit",
      name: "companion-edit",
      component: () => import("../views/Companion/EditCompanionView.vue"),
    },
    {
      path: "/companions/:id",
      name: "companion-detail",
      component: () => import("../views/Companion/CompanionDetailView.vue"),
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
      path: "/assignments/:id",
      name: "assignment-detail",
      component: () => import("../views/Assignment/AssignmentDetailView.vue"),
    },
    {
      path: "/assignments/:id/edit",
      name: "assignment-edit",
      component: () => import("../views/Assignment/EditAssignmentView.vue"),
    },
    {
      path: "/clients/:id/edit",
      name: "client-edit",
      component: () => import("../views/Client/EditClientView.vue"),
    },
    {
      path: "/balances",
      name: "balances",
      component: () => import("../views/Balance/BalanceView.vue"),
    },
    {
      path: "/users",
      name: "users",
      component: () => import("../views/User/UserListView.vue"),
    },
    {
      path: "/users/new",
      name: "user-new",
      component: () => import("../views/User/NewUserView.vue"),
    },
    {
      path: "/users/:id",
      name: "user-detail",
      component: () => import("../views/User/UserDetailView.vue"),
    },
    {
      path: "/users/:id/edit",
      name: "user-edit",
      component: () => import("../views/User/EditUserView.vue"),
    },
    {
      path: "/assignment-templates",
      name: "assignment-templates",
      component: () =>
        import("../views/AssignmentTemplate/AssignmentTemplateListView.vue"),
    },
    {
      path: "/assignment-templates/new",
      name: "assignment-template-new",
      component: () =>
        import("../views/AssignmentTemplate/NewAssignmentTemplate.vue"),
    },
    {
      path: "/assignment-templates/:id",
      name: "assignment-template-detail",
      component: () =>
        import("../views/AssignmentTemplate/AssignmentTemplateDetailView.vue"),
    },
    {
      path: "/assignment-templates/:id/edit",
      name: "assignment-template-edit",
      component: () =>
        import("../views/AssignmentTemplate/EditAssignmentTemplateView.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: {
        layout: "blank",
      },
      component: () => import("../views/Login/LoginView.vue"),
    },
  ],
});

export default router;
