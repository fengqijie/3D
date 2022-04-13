/**
 * 路由配置
 */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";
import { login } from "./utils/sso";

Vue.use(VueRouter);

// 页面
import Index from "./views/index.vue";
import CommonParent from "./views/common/parent-page.vue";

// eslint-disable-next-line import/no-mutable-exports
export let routes = [
  {
    path: "/",
    name: "/",
    component: Index
  },
  {
    path: "/cssAnimation",
    component: CommonParent,
    meta: {
      title: "css动画"
    },
    children: [
      {
        path: "cssRotateCube",
        name: "cssRotateCube",
        component: () => import("@/views/cssAnimation/css-rotate-cube.vue"),
        meta: {
          title: "旋转的正方体"
        }
      },
      {
        path: "cssTurnBook",
        name: "cssTurnBook",
        component: () => import("@/views/cssAnimation/css-turn-book.vue"),
        meta: {
          title: "翻书效果"
        }
      }
    ]
  },
  {
    path: "/canvasAnimation",
    component: CommonParent,
    meta: {
      title: "canvas动画",
      subtitle: ""
    },
    children: [
      {
        path: "canvasBg",
        name: "canvasBg",
        component: () => import("@/views/canvasAnimation/bg.vue"),
        meta: {
          title: "少女心满满的背景墙"
        }
      },
      {
        path: "canvasClock",
        name: "canvasClock",
        component: () => import("@/views/canvasAnimation/clock.vue"),
        meta: {
          title: "时钟"
        }
      }
    ]
  }
].concat({
  // 404页面
  path: "*",
  name: "404",
  component: resolve => import("./views/common/404.vue").then(resolve)
});

const router = new VueRouter({
  mode: "hash",
  base: "/" || undefined,
  routes
});

router.afterEach(to => {
  // 开启 sso 登录
  login();

  // 将 route 对象同步到 store
  store.dispatch("setRoute", to);
});

export default router;
