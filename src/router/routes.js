// 引入路由组件
// import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
// import Search from '@/pages/Search'
import Detail from "@/pages/Detail";
import AddCarSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 引入二级路由组件
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'

export default [
  //配置路由
  //第一:路径的前面需要有/(不是二级路由)
  //路径中单词都是小写的
  //component右侧v别给我加单引号【字符串:组件是对象（VueComponent类的实例）】
  {
    path: "/center",
    name: "Center",
    component: Center,
    meta: { show: true },
    // 二级路由组件
    children: [
      {
        // 二级路由路径不用加 /
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "grouporder",
        component: GroupOrder,
      },
      // 路由重定向
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    path: "/paysuccess",
    name: "PaySuccess",
    component: PaySuccess,
    meta: { show: true },
  },
  {
    path: "/pay",
    name: "Pay",
    component: Pay,
    meta: { show: true },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      if (from.path == "/trade") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/trade",
    name: "trade",
    component: Trade,
    meta: { show: true },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      if (from.path == "/shopcart") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: ShopCart,
    meta: { show: true },
  },
  {
    path: "/addcarsuccess",
    name: "addcarsuccess",
    component: AddCarSuccess,
    meta: { show: true },
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: { show: true },
  },
  {
    path: "/home",
    // Vue Router 支持开箱即用的动态导入，这意味着你可以用动态导入代替静态导入：
    // 路由懒加载
    component: () => import("@/pages/Home"),
    //   配置路由元信息
    meta: { show: true },
  },
  {
    path: "/login",
    component: Login,
    //   配置路由元信息
    meta: { show: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
  {
    // 用params 传递参数 需要占位 /:keyword
    //   指定params参数可传可不传 在后面加个？
    path: "/search/:keyword?",
    component: () => import("@/pages/Search"),
    meta: { show: true },
    // 用对象形式 params 传递参数 需要给路由起一个名字name
    name: "search",

    //路由组件能不能传递props数据?
    // 布尔值写法：params
    //props的第一种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Search组件。
    // props: true,

    //props的第二种写法，值为对象，该对象中的所有key-value都会以props的形式传给Search组件
    // 对象写法：额外的给路由组件传递一些props
    // props: { a: 10, b: 20 },

    //函数写法:可以params参数、query参数，通过props传递给路由组件
    /*  props: ($route) => ({
        keyword: $route.params.keyword,
        k: $route.query.k,
      }), */

    //props的第三种写法，值为函数
    /*props($route) {
          return {
            id: $route.query.id,
            title: $route.query.title,
          };
         }, */
  },
  {
    path: "/communication",
    component: () => import("@/pages/Communication/Communication"),
    children: [
      {
        path: "attrs-listeners",
        component: () =>
          import("@/pages/Communication/AttrsListenersTest/AttrsListenersTest"),
      },
      {
        path: "children-parent",
        component: () =>
          import("@/pages/Communication/ChildrenParentTest/ChildrenParentTest"),
      },
      {
        path: "event",
        component: () => import("@/pages/Communication/EventTest/EventTest"),
      },
      {
        path: "model",
        component: () => import("@/pages/Communication/ModelTest/ModelTest"),
      },
      {
        path: "scope-slot",
        component: () =>
          import("@/pages/Communication/ScopeSlotTest/ScopeSlotTest"),
      },
      {
        path: "sync",
        component: () => import("@/pages/Communication/SyncTest/SyncTest"),
      },
    ],
  },
  // 重定向，在项目跑起来的时候，访问/，立马让他定向到首页
  {
    path: "*",
    redirect: "/home",
  },
];