import Posts from "../pages/posts.vue";
import Home from "../pages/home.vue";
import Login from "../pages/login.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import PublicLayout from "../layouts/PublicLayout.vue";


export const routes = [
    {
      path: "/",
      component: PublicLayout,
      children: [
        { path: "", component: Home },
        { path: "/articles", component: Posts },
      ],
    },
  
    {
      path: "/connexion",
      component: AuthLayout,
      children: [{ path: "", component: Login }],
    },
  ];