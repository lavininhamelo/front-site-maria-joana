const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "sobre", component: () => import("src/pages/About.vue") },
      { path: "produtos", component: () => import("src/pages/Products.vue") },
      { path: "cursos", component: () => import("src/pages/Courses.vue") },
      { path: "comprar/:id", component: () => import("src/pages/Details.vue") }
    ]
  },
  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      { path: "", name: "admin-home", component: () => import("pages/admin/AdminHome.vue")},
      { path: "sobre", name: "admin-sobre", component: () => import("src/pages/admin/AdminAbout.vue") },
      { path: "produtos", name: "admin-produtos",component: () => import("src/pages/admin/AdminProducts.vue") },
      { path: "cursos", name: "admin-cursos",component: () => import("src/pages/admin/AdminCourses.vue") },
      { path: "contatos", name: "admin-contatos", component: () => import("src/pages/admin/AdminContact.vue") },
      
    ]
  },
  {
    path: "/adm",
    component: () => import("layouts/AdminLoginLayout.vue"),
    children: [
      { path: "login", name: "admin-login", component: () => import("src/pages/admin/AdminLogin.vue") }
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

      