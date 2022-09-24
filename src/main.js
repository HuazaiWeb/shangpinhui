import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "@/router";
// 引入Vuex仓库
import store from "@/store";

// 三级联动组件---全局组件
import TypeNav from "@/components/TypeNav";
import Carousel from '@/components/Carousel';
import Pagination from "@/components/Pagination";
// 引入element - ui 组件
import { Button, MessageBox } from "element-ui";
//第一个参数:全局组件的名字  第二个参数:哪一个组件
Vue.component("TypeNav", TypeNav);
// 将轮播图组件注册为全局组件
Vue.component("Carousel", Carousel);
// 分页器全局组件
Vue.component("Pagination",Pagination);

// 注册全局组件
Vue.component(Button.name, Button);
//ElementuI注册组件的时候,还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.config.productionTip = false;
// 测试
import { reCategoryList } from "@/API/index";
reCategoryList();

//引入MockServer.js----mock数据
import "@/mock/mockServer";
// 引入swiper样式
import "swiper/css/swiper.css";
// 引入字体图标样式
import './assets/font/iconfont.css'

// 统一接口api文件夹里面全部请求函数
// 统一引入
import * as API from '@/API';
import baobao from '@/assets/haimianbaobao.gif'
// npm i vue-lazyload@1.3.3 要安装1.3.3版本
// 引入插件
import VueLazyload from "vue-lazyload";
// 注册插件
Vue.use(VueLazyload, {
  // 懒加载默认的图片
  loading:baobao
});
// 引入表单效验插件
import '@/plugins/validate'

new Vue({
  render: (h) => h(App),
  // 全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  // 注册路由
  //注册路由信息:当这里书写router的时候，组件身上都拥有$route,$router属性
  router,
  //注册仓库:组件实例的身上会多个一个属性$store属性
  store,
}).$mount("#app");
