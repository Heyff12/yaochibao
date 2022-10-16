import { createRouter, createWebHashHistory } from "vue-router";

const SettleDetail = () => import("../views/settleDetail");
const routes = [
  {
    path: "/",
    redirect: "/settle-detail",
  },
  {
    path: "/settle-detail",
    name: "SettleDetail",
    component: SettleDetail,
  },
];

const router = createRouter({
  base: "/",
  history: createWebHashHistory(),
  routes,
});

export { router };
