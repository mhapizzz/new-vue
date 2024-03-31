import { createRouter, createWebHistory } from "vue-router";
import TableVue from "@/components/Table.vue";
import Post from "@/components/Post.vue";
import Home from "@/components/Home.vue";
import ContactUs from "@/components/ContactUs.vue";
import UserDetail from "@/components/UserDetail.vue";

const routes = [
  {
    path: "/",
    name: "Table",
    component: TableVue,
  },
  {
    path: "/user/:id",
    name: "UserDetail",
    component: UserDetail,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
