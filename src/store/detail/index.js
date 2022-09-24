import { reqGoodsInfo, reqAddorUpdateShopCart } from "@/API";
//封装游客身份模块uuid--->生成一个随机字符串（不能在变了)
import {getUUID} from '@/utils/uuid_token';
const actions = {
  async getGoodsInfo({ commit }, skuid) {
    let result = await reqGoodsInfo(skuid);
    if (result.code == 200) {
      commit("GETGOODSINFO", result.data);
    }
  },
  // 将产品添加到购物车中
 async addorUpdateShopCart({commit},{skuId,skuNum}){
   // 加入购物车返回的解构
   //加入购物车以后（发请求），前台将参数带给服务器
   //服务器写入数据成功，并没有返回其他的数据，只是返回code=200，代表这次操作成功
   //因为服务器没有返回其余数据，因此咱们不需要三连环存储数据
   let result = await reqAddorUpdateShopCart(skuId, skuNum);
  //  代表服务器加入购物车成功
  if(result.code == 200){
    return 'ok'
  }else{
    // 代表加入购物车失败
    return Promise.reject(new Error('faile'));
  }
 }
};

const mutations = {
  GETGOODSINFO(state,getgoods){
    state.getgoods = getgoods
  }
};

const state = {
  getgoods:{},
  // 游客临时身份
  uuid_token:getUUID()
};

// 简化数据而生
const getters = {
  // 路径导航简化的数据
  categoryView(state) {
    //比如:state.goodInfo初始状态空对象，空对象的categoryview属性值undefined
    //当前计算出的 categoryView属性值至少是一个空对象，假的报错不会有了。
    return state.getgoods.categoryView || {};
  },
  // 简化产品信息的数据
  skuInfo(state) {
    return state.getgoods.skuInfo || {};
  },
  // 产品售卖信息的简化
  spuSaleAttrList(state) {
    return state.getgoods.spuSaleAttrList || [];
  },
};

export default {
  actions,
  mutations,
  state,
  getters,
};