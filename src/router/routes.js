export const routes = [
  {
    path: "/",
    name: "tickets",
    meta: {
      layout: "main",
      auth: true,
    },
    component: () => import("../views/TicketsView.vue"),
  },
  {
    path: "/:ticketId",
    name: "ticket",
    meta: {
      layout: "main",
      auth: true,
    },
    component: () => import("../views/TicketDetailView.vue"),
  },
  {
    path: "/info",
    name: "info",
    meta: {
      layout: "main",
      auth: true,
    },
    component: () => import("../views/InfoView.vue"),
  },
  {
    path: "/executors",
    name: "executors",
    meta: {
      layout: "main",
      auth: true,
    },
    component: () => import("../views/ExecutorsView.vue"),
  },
  {
    path: "/prices",
    name: "prices",
    meta: {
      layout: "main",
      auth: true,
    },
    component: () => import("../views/PricesView.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "auth",
      noauth: true,
    },
    component: () => import("../views/LoginView.vue"),
  },
];
