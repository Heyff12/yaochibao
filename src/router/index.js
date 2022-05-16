import { createRouter, createWebHashHistory } from "vue-router";

const AuctionList = () => import("../views/auctionList");
const routes = [
  {
    path: "/",
    redirect: "/list",
  },
  {
    path: "/list",
    name: "AuctionList",
    component: AuctionList,
  },
];

const router = createRouter({
  base: "/",
  history: createWebHashHistory(),
  routes,
});

export { router };
