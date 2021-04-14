const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "sobre", component: () => import("src/pages/About.vue") },
      { path: "admin", component: () => import("src/pages/Admin.vue") },
      { path: "produtos", component: () => import("src/pages/Products.vue") },
      { path: "cursos", component: () => import("src/pages/Courses.vue") },
      { path: "comprar/:id", component: () => import("src/pages/Details.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
