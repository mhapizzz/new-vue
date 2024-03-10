import { createRouter, createWebHistory } from "vue-router";
import TableVue from "@/components/Table.vue";
import Post from "@/components/Post.vue";
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
