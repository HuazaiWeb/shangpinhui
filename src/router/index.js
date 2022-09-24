// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
// 使用插件 应用路由
Vue.use(VueRouter);

import store from '@/store'

//先把vueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 如果点击多次搜索 会出现报错，所以要进行重写
//重写push|replace
//第一个参数:告诉原来push方法，你往哪里跳转（传递哪些参数)//call||apply区别
//相同点，都可以调用函数一次，都可以篡改函数的上下文一次
//不同点: call与apply传递参数: call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push = function (location,resolve,reject) {
  if(resolve && reject) {
    originPush.call(this,location,resolve,reject);
  } else {
    // 如果直接调用originPush() 它的this指向是window 函数直接调用是window,所以要用call来改变this的指向
    originPush.call(this, location,()=>{},()=> {});
  }
}

//重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

//对外暴露vueRouter类的实例
let route = new VueRouter({
  //配置路由
  routes,
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    //返回的这个y=e，代表的滚动条在最上方 始终滚动到顶部
    return { y: 0 };
  },
});

// 全局守卫：前置守卫（在路由跳转之间进行判断）
// route.beforeEach(async (to,from,next) => {
//   //to:可以获取到你要跳转到那个路由信息
//   //from:可以获取到你从哪个路由而来的信息
//   //next:放行函数next()放行next(path)放行到指令路由
//   // next();
//   // console.log(to); //to 是个对象
//   // console.log(from); //from 是个对象
//   // 获取仓库中的token
//   let token = store.state.user.token;
//   let name = store.state.user.userInfo.name;
//   // 用户登录了
//   if(token){
//     //用户已经登陆了还想去login[不能去，停留在首页]
//     if (to.path == "/login") {
//       next("/home");
//       console.log("已经登录过了！");
//     } else {
//       //已经登陆了,访问的是非登录与注册
//       //登录了且拥有用户信息放行
//       if (name){
//         next();
//       }else{
//         //登陆了且没有用户信息、
//         //在路由跳转之前获取用户信息且放行
//         try {
//           await store.dispatch('getUserInfo');
//           next();
//         } catch (error) {
//           // token失效重新登录
//           await store.dispatch("userLogOut");
//           next('/login')
//         }
//       }
//        console.log("登陆了，但去的不是login");
//     }
//   }else{
//     //未登录:不能去交易相关、不能去支付相关【pay|paysuccess】、不能去个人中心
//     //未登录去上面这些路由-----登录
//     let toPath = to.path;
//     if(toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center')!=-1){
//       // 携带query参数
//       next('/login?redirect='+toPath)
//     }else{
//       // 去的不是上面这些路由(home|search|shopCart) ---放行
//         next();
//     }
//   }
// })

export default route