// 当前这个模块：API进行统一管理
import requests from "./request";
import mockRequests from './mockAjax'

//三级联动接口
///api/product/getBaseCategoryList get无参数
//发请求:axios发请求返回结果Promise对象
export const reCategoryList = () =>
  requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });

  //获取banner （Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner');
// 获取floor数据
export const reqFloorList = ()=> mockRequests.get('/floor');

//获取搜索模块数据地址:/api/list请求方式:post参数:需要带参数
//当前这个函数需不需要接受外部传递参数
//当前这个接口，给服务器传递参数params，至少是一个空对象
export const reqGetSearchInfo = (params)=> requests({url:'/list',method:'post',data:params})


//获取产品详情信息的接口URL: /api/item/{ skuId }请求方式: get
export const reqGoodsInfo = (skuid)=>requests({url:`/item/${skuid}`,method:'get'})

//将产品添加到购物车中（获取更新某一个产品的个数)
// /api/cart/addToCart/{ skuId }/{ skuNum }  POST
export const reqAddorUpdateShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`,method:'post'});

// 获取购物车列表
export const reqShopCart = () => requests({ url: "/cart/cartList",method:'get'});

// 删除购物车商品
// /api/cart/deleteCart/{skuId}
export const reqDeleteCartById = (skuId) =>requests({ url: `/cart/deleteCart/${skuId}`,method:'delete' });

// 切换商品选中状态
// /api/cart/checkCart/{skuID}/{isChecked}
export const reqUpdateCheckedById = (skuID, isChecked) =>
  requests({ url: `/cart/checkCart/${skuID}/${isChecked}`, method: "get" });

// 获取验证码
// /api/user/passport/sendCode/{phone} get
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

// 注册用户
// /api/user/passport/register
export const reqUserRegister = (data) => requests({ url: "/user/passport/register",data,method:'post'});

// 登录
// /api/user/passport/login  post
export const reqUserLogin = (data) => requests({ url: "/user/passport/login",data,method:'post'});

//获取用户信息【需要带着用户的token向服务器要用户信息    通过请求头把token带给服务器
// /user/passport/auth/getUserInfo  get
export const reqUserInfo = () =>requests({ url: "/user/passport/auth/getUserInfo", method: "get" });

// 退出登录
// /api/user/passport/logout  get
export const reqLogOut = () => requests({ url: "/user/passport/logout",method:'get'});

// 获取用户地址信息
// /api/user/userAddress/auth/findUserAddressList  get 
export const reqUserAddressList = () =>requests({ url: "/user/userAddress/auth/findUserAddressList",method:'get'});

// 获取商品清单
// /api/order/auth/trade  get 
export const reqOrderInfo = () => requests({ url: "/order/auth/trade",method:'get'});

// 提交订单
// /api/order/auth/submitOrder?tradeNo={tradeNo}  post 
export const reqSubmitOrder = (tradeNo,data) =>requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post' });

// 获取支付订单信息
// /api/payment/weixin/createNative/{orderId}  get 
export const reqPayInfo = (orderId) =>requests({ url: `/payment/weixin/createNative/${orderId}`,method:'get'});

// 查询支付订单状态
// /api/payment/weixin/queryPayStatus/{orderId} get 
export const reqPayStatus = (orderId) =>requests({ url: `/payment/weixin/queryPayStatus/${orderId}`,method:'get'});

// 获取我的订单列表 
// /api/order/auth/{page}/{limit}  get 
export const reqMyOrderList = (page, limit) =>requests({ url: `/order/auth/${page}/${limit}`,method:'get'});
