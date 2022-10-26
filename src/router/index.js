import { createRouter, createWebHashHistory } from "vue-router";

const SettleDetail = () => import("../views/settleDetail");
const userCenter = () => import("../views/userCenter");
const routes = [
  {
    path: "/",
    redirect: { name: "UserCenter" },
  },
  {
    path: "/user-center",
    name: "UserCenter",
    component: userCenter,
  },
  {
    path: "/settle-detail/:sid",
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
