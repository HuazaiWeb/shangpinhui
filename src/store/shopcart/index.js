import { reqShopCart, reqDeleteCartById, reqUpdateCheckedById } from "@/API";

const actions = {
  // 获取购物车列表数据
  async getShopCart({ commit }) {
    let result = await reqShopCart();
    console.log(result, "222@@@@@@@@@@");
    if (result.code == 200) {
      commit("GETSHOPCART", result.data);
    }
  },
  // 删除购物车某一个产品
  async deleteCartListById({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 修改购物车某一个产品的选中状态
  async updateCheckedByIdd({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedById(skuId, isChecked);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 删除全部勾选的产品
  deleteAllCheckedCart({ dispatch, getters }) {
    //context:小仓库，commit【提交mutations修改state】 getters【计算属性】dispatch【派发action】 state【当前仓库数据
    //获取购物车中全部的产品（是一个数组)
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let promise =
        item.isChecked == 1 ? dispatch("deleteCartListById", item.skuId) : "";
      //将每一次返回的Promise添加到数组当中
      PromiseAll.push(promise);
    });
    //只要全部的p1lp2... .都成功，返回结果即为成功
    //如果有一个失败，返回即为失败结果
    return Promise.all(PromiseAll);
  },
  // 修改全部产品的选中状态
  updateAllCartIsChecked({ dispatch, state },isChecked) {
    // 数组
    let promiseAll = [];
    state.shopCartInfo[0].cartInfoList.forEach(item => {
      let promise = dispatch("updateCheckedByIdd",{skuId:item.skuId,isChecked});
      promiseAll.push(promise);
    });
    // 最终返回结果
    return Promise.all(promiseAll);
  },
};

const mutations = {
  GETSHOPCART(state, shopCartInfo) {
    state.shopCartInfo = shopCartInfo;
  },
};

const state = {
  shopCartInfo: [],
};

const getters = {
  cartList(state) {
    return state.shopCartInfo[0] || {};
  },
};

export default {
  actions,
  mutations,
  state,
  getters,
};
