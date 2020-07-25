import Vue from "vue";
import Antd from "ant-design-vue";
import vueRouter from "vue-router";

import App from "./App.vue";
import "./style/AntDesign/Theme/BlogShopTheme.less";
import "./style/AntDesign/css/blogshop.css";

import { BootstrapVue } from "bootstrap-vue";

import BlockshopHome from "./components/BlockshopHome.vue";
import BlockshopServices from "./components/BlockshopServices.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(vueRouter);
Vue.use(BootstrapVue);

const routes = [
  { path: "/", component: BlockshopHome },
  { path: "/services", component: BlockshopServices },
];

const router = new vueRouter({ routes, mode: "history" });

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
