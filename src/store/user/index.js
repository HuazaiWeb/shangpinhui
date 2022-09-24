import {
  reqGetCode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo,
  reqLogOut,
} from "@/API";
import { setToken, getToken, removeToken } from "@/utils/token";
// 登录与注册的模块
const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    //获取验证码的这个接口:把验证码返回，但是正常情况，后台把验证码发到用户手机上【省钱】
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      commit("GETCODE", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("@@出错啦 ！！！"));
    }
  },
  // 注册业务
  async getUserRegister({ commit }, user) {
    let result = await reqUserRegister(user);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("数据错误！！"));
    }
  },
  // 登录业务
  async getUserLogin({ commit }, data) {
    let result = await reqUserLogin(data);
    //服务器下发token，用户唯一标识符(uuid)
    //将来经常通过带token找服务器要用户信息进行展示
    if (result.code == 200) {
      //用户已经登录成功且获取到token
      commit("USERLOGIN", result.data.token);
      // 持久化存储token
      setToken(result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 获取用户信息
  async getUserInfo({ commit }) {
    let result = await reqUserInfo();
    if (result.code == 200) {
      commit("GETUSERINFO", result.data);
      return "ok";
    } else {
      // 这个错误是因为home里发送diapatch的时候没有try catch的操作导致的，去掉user里的catch中返回的promise就可以了
      // return Promise.reject(new Error("faile"));
    }
  },
  // 退出登录
  async userLogOut({ commit }) {
    //只是向服务器发起一次请求，通知服务器清除token
    let result = await reqLogOut();
    //action里面不能操作state，提交mutation修读state
    if (result.code == 200) {
      commit('CLEAR');
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
};

const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  // 清除本地数据
  CLEAR(state){
    // 把仓库中相关用户信息清空
    state.token = '',
    state.userInfo = {},
    // 本地存储数据清空
    removeToken()
  }
};

const state = {
  code: "",
  token: getToken(),
  userInfo: {},
};

const getters = {};

export default {
  actions,
  mutations,
  state,
  getters,
};
