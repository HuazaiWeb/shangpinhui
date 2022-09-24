// home模块的小仓库
import { reCategoryList, reqGetBannerList, reqFloorList } from "@/API";

//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
  //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
  // 这里使用了解构赋值： {commit} 相当于：comtext.commit
  async categoryList({ commit }) {
    let result = await reCategoryList();
    if (result.code === 200) {
      commit("CATEGORYLIST", result.data);
    }
  },
  //获取首页轮播图的数据
  async getBannerList({ commit }) {
    // axios发送get或post请求返回的是一个promise对象 所以用await来接收
    let result = await reqGetBannerList();
    if (result.code == 200) {
      commit("GETCOTEGORYLIST", result.data);
    }
  },
  //获取floor数据
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    if (result.code == 200) {
      //提交mutation
      commit("GETFLOORLIST", result.data);
    }
  },
};
//mutions是唯一修改state的地方
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETCOTEGORYLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state,floorList){
    state.floorlist = floorList;
  }
};
// home模块的仓库
const state = {
  //state中数据默认初始值别瞎写，服务器返回对象，服务器返回数组。【根据接口返回值初始化的】
  //home仓库中存储三级菜单的数据
  categoryList: [],
  // 轮播图的数据
  bannerList: [],
  // floor组件的数据
  floorlist: [],
};
// 计算属性
const getters = {}

export default {
    actions,
    mutations,
    state,
    getters
}