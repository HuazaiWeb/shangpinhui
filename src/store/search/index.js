// search模块的小仓库
import { reqGetSearchInfo } from "@/API";

const actions = {
  // 获取search模块数据
  async getSearchList({ commit }, value={}) {
    //当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（空对象)
    // params形参:是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
    let result = await reqGetSearchInfo(value);
    if(result.code == 200){
        commit('GETSEARCHLIST',result.data)
    }
  },
};
const mutations = {
  GETSEARCHLIST(state,searchlist){
    state.searchList = searchlist
  }
};
const state = {
  // 仓库初始状态
  searchList:{}
};
// 计算属性，在项目当中，为简化数据而生
//可以把我们将来在组件当中需要用的数据简化一下【将来组件在获取数据的时候就方便了】
const getters = {
  //当前形参state，当前仓库中的state，并非大仓库中的那个state
  goodsList(state) {
    //假如网络不给力|没有网state.searchList.goodsList应该返回的是undefined
    return state.searchList.goodsList || [];
  },
  attrsList(state) {
    return state.searchList.attrsList;
  },
  trademarkList(state) {
    return state.searchList.trademarkList;
  }, 
};

export default {
  actions,
  mutations,
  state,
  getters,
};
