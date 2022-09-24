<template>
  <div class="detail">
    <!-- 商品分类导航 -->
    <TypeNav />

    <!-- 主要内容区域 -->
    <section class="con">
      <!-- 导航路径区域 -->
      <div class="conPoin">
        <!-- 这里的v-show 是判断你有没有这个一级标签 -->
        <span v-show="categoryView.category1Name">{{
          categoryView.category1Name
        }}</span>
        <span v-show="categoryView.category2Name">{{
          categoryView.category2Name
        }}</span>
        <span v-show="categoryView.category3Name">{{
          categoryView.category3Name
        }}</span>
      </div>
      <!-- 主要内容区域 -->
      <div class="mainCon">
        <!-- 左侧放大镜区域 -->
        <div class="previewWrap">
          <!--放大镜效果-->
          <Zoom :skuImageList="skuImageList" />
          <!-- 小图列表 -->
          <ImageList :skuImageList="skuImageList" />
        </div>
        <!-- 右侧选择区域布局 -->
        <div class="InfoWrap">
          <div class="goodsDetail">
            <h3 class="InfoName">{{ skuInfo.skuName }}</h3>
            <p class="news">{{ skuInfo.skuDesc }}</p>
            <div class="priceArea">
              <div class="priceArea1">
                <div class="title">
                  价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格
                </div>
                <div class="price">
                  <i>¥</i>
                  <em>{{ skuInfo.price }}</em>
                  <span>降价通知</span>
                </div>
                <div class="remark">
                  <i>累计评价</i>
                  <em>65545</em>
                </div>
              </div>
              <div class="priceArea2">
                <div class="title">
                  <i>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</i>
                </div>
                <div class="fixWidth">
                  <i class="red-bg">加价购</i>
                  <em class="t-gray"
                    >满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</em
                  >
                </div>
              </div>
            </div>
            <div class="support">
              <div class="supportArea">
                <div class="title">
                  支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持
                </div>
                <div class="fixWidth">
                  以旧换新，闲置手机回收 4G套餐超值抢 礼品购
                </div>
              </div>
              <div class="supportArea">
                <div class="title">配 送 至</div>
                <div class="fixWidth">广东省 深圳市 宝安区</div>
              </div>
            </div>
          </div>

          <div class="choose">
            <div class="chooseArea">
              <div class="choosed"></div>
              <dl v-for="spuSaleAttr in spuSaleAttrList" :key="spuSaleAttr.id">
                <dt class="title">{{ spuSaleAttr.saleAttrName }}</dt>
                <dd
                  changepirce="0"
                  :class="{ active: spuSaleVip.isChecked == 1 }"
                  v-for="spuSaleVip in spuSaleAttr.spuSaleAttrValueList"
                  :key="spuSaleVip.id"
                  @click="changeActive(spuSaleVip,spuSaleAttr.spuSaleAttrValueList)"
                >
                  {{ spuSaleVip.saleAttrValueName }}
                </dd>
              </dl>
            </div>
            <div class="cartWrap">
              <div class="controls">
                <input autocomplete="off" class="itxt" v-model="count" @change="changeNum" />
                <a href="javascript:" class="plus" @click="count++">+</a>
                <a href="javascript:" class="mins" @click="count>1?count--:count=1">-</a>
              </div>
              <div class="add">
                <!-- 以前咱们的路由跳转:从A路由跳转到B路由，这里在加入购物车，进行路由跳转之前，
                  发请求 把你购买的产品的信息通过请求的形式通知服务器，服务器进行相应的存储  -->
                <a @click="addShopcar">加入购物车</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 内容详情页 -->
    <section class="product-detail">
      <aside class="aside">
        <div class="tabWraped">
          <h4 class="active">相关分类</h4>
          <h4>推荐品牌</h4>
        </div>
        <div class="tabContent">
          <div class="tab-pane active">
            <ul class="partList">
              <li>手机</li>
              <li>手机壳</li>
              <li>内存卡</li>
              <li>Iphone配件</li>
              <li>贴膜</li>
              <li>手机耳机</li>
              <li>移动电源</li>
              <li>平板电脑</li>
            </ul>
            <ul class="goodsList">
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part01.png" />
                  </div>
                  <div class="attr">Apple苹果iPhone 6s (A1699)</div>
                  <div class="price">
                    <em>¥</em>
                    <i>6088.00</i>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part03.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part03.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane">
            <p>推荐品牌</p>
          </div>
        </div>
      </aside>
      <div class="detail">
        <div class="fitting">
          <h4 class="kt">选择搭配</h4>
          <div class="good-suits">
            <div class="master">
              <img src="./images/l-m01.png" />
              <p>￥5299</p>
              <i>+</i>
            </div>
            <ul class="suits">
              <li class="suitsItem">
                <img src="./images/dp01.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="39" />
                  <span>39</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp02.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="50" />
                  <span>50</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp03.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="59" />
                  <span>59</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp04.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="99" />
                  <span>99</span>
                </label>
              </li>
            </ul>
            <div class="result">
              <div class="num">已选购0件商品</div>
              <div class="price-tit">套餐价</div>
              <div class="price">￥5299</div>
              <button class="addshopcar">加入购物车</button>
            </div>
          </div>
        </div>
        <div class="intro">
          <ul class="tab-wraped">
            <li class="active">
              <a href="###"> 商品介绍 </a>
            </li>
            <li>
              <a href="###"> 规格与包装 </a>
            </li>
            <li>
              <a href="###"> 售后保障 </a>
            </li>
            <li>
              <a href="###"> 商品评价 </a>
            </li>
            <li>
              <a href="###"> 手机社区 </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="one" class="tab-pane active">
              <ul class="goods-intro">
                <li>分辨率：1920*1080(FHD)</li>
                <li>后置摄像头：1200万像素</li>
                <li>前置摄像头：500万像素</li>
                <li>核 数：其他</li>
                <li>频 率：以官网信息为准</li>
                <li>品牌： Apple</li>
                <li>商品名称：APPLEiPhone 6s Plus</li>
                <li>商品编号：1861098</li>
                <li>商品毛重：0.51kg</li>
                <li>商品产地：中国大陆</li>
                <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                <li>系统：苹果（IOS）</li>
                <li>像素：1000-1600万</li>
                <li>机身内存：64GB</li>
              </ul>
              <div class="intro-detail">
                <img src="./images/intro01.png" />
                <img src="./images/intro02.png" />
                <img src="./images/intro03.png" />
              </div>
            </div>
            <div id="two" class="tab-pane">
              <p>规格与包装</p>
            </div>
            <div id="three" class="tab-pane">
              <p>售后保障</p>
            </div>
            <div id="four" class="tab-pane">
              <p>商品评价</p>
            </div>
            <div id="five" class="tab-pane">
              <p>手机社区</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ImageList from "./ImageList/ImageList";
import Zoom from "./Zoom/Zoom";
import { mapGetters } from "vuex";
export default {
  name: "Detail",

  components: {
    ImageList,
    Zoom,
  },
  data() {
    return {
      // 购买产品的个数
      count:1
    }
  },
  mounted() {
    //派发action获取产品详情的信息
    this.$store.dispatch("getGoodsInfo", this.$route.params.skuid);
  },
  computed: {
    ...mapGetters(["categoryView", "skuInfo", "spuSaleAttrList"]),
    skuImageList() {
      //如果服务器数据没有回来,skuInfo这个对象是空对象
      return this.skuInfo.skuImageList || [];
    },
  },
  methods:{
    //产品的售卖属性值切换高亮 (排他思想)
    changeActive(spuSaleVip,arr){
      //遍历全部售卖属性值isChecked为零没有高亮了
     arr.forEach( item => {
      item.isChecked = 0;
     });
      //点击的那个售卖属性值
      spuSaleVip.isChecked = 1;
    },
    //表单元素修改产品个数
    changeNum(event){
      //用户输入进来的文本* 1
      let value = event.target.value * 1;
      //如果用户输入进来的非法,出现NaN或者小于1
      if(isNaN(value) || value < 1) {
        this.count = 1;
      } else {
        //正常大于1【大于1整数不能出现小数】
        this.count = parseInt(value);
      }
    },
    // 加入购物车的回调函数
    async addShopcar(){
      //1:发请求---将产品加入到数据库（通知服务器)
      // 当前这里是派发一个action，也想服务器发请求,判断加入购物车是成功还是失败了,进行相应的操作。
      // this. $stone.dispatch(' addOrUpdateShopCart ' , {skuId:this. $route.params.skuid,skuNum:this.skulNum})
      // 上面这行代码说白了:调用仓库中的addOrUpdateShopCart,这个方法加上asyc，返回一定是一个Promise
      //要么成功|要么失败
      try {
        // 成功
        await this.$store.dispatch('addorUpdateShopCart',{skuId:this.$route.params.skuid,skuNum:this.count});
        // 进行路由跳转
        sessionStorage.setItem('SKUINFO',JSON.stringify(this.skuInfo))
        this.$router.push({name:'addcarsuccess',query:{skuNum:this.count}});
      } catch (error) {
        // 失败
        alert(error.message)
      }
      //2:服务器存储成功-----进行路由跳转传递参数
      //3:失败，给用户进行提示

    }
  }
};
</script>

<style lang="less" scoped>
.detail {
  .con {
    width: 75rem;
    margin: .9375rem auto 0;

    .conPoin {
      padding: .5625rem .9375rem .5625rem 0;

      & > span + span:before {
        content: "/\00a0";
        padding: 0 .3125rem;
        color: #ccc;
      }
    }

    .mainCon {
      overflow: hidden;
      margin: .3125rem 0 .9375rem;

      .previewWrap {
        float: left;
        width: 25rem;
        position: relative;
      }

      .InfoWrap {
        width: 43.75rem;
        float: right;

        .InfoName {
          font-size: .875rem;
          line-height: 1.3125rem;
          margin-top: .9375rem;
        }

        .news {
          color: #e12228;
          margin-top: .9375rem;
        }

        .priceArea {
          background: #fee9eb;
          padding: .4375rem;
          margin: .8125rem 0;

          .priceArea1 {
            overflow: hidden;
            line-height: 1.75rem;
            margin-top: .625rem;

            .title {
              float: left;
              margin-right: .9375rem;
            }

            .price {
              float: left;
              color: #c81623;

              i {
                font-size: 1rem;
              }

              em {
                font-size: 1.5rem;
                font-weight: 700;
              }

              span {
                font-size: .75rem;
              }
            }

            NaNpxark {
              float: right;
            }
          }

          .priceArea2 {
            overflow: hidden;
            line-height: 1.75rem;
            margin-top: .625rem;

            .title {
              margin-right: .9375rem;
              float: left;
            }

            .fixWidth {
              width: 32.5rem;
              float: left;

              .red-bg {
                background: #c81623;
                color: #fff;
                padding: .1875rem;
              }

              .t-gray {
                color: #999;
              }
            }
          }
        }

        .support {
          border-bottom: .0625rem solid #ededed;
          padding-bottom: .3125rem;

          .supportArea {
            overflow: hidden;
            line-height: 1.75rem;
            margin-top: .625rem;

            .title {
              margin-right: .9375rem;
              float: left;
            }

            .fixWidth {
              width: 32.5rem;
              float: left;
              color: #999;
            }
          }
        }

        .choose {
          .chooseArea {
            overflow: hidden;
            line-height: 1.75rem;
            margin-top: .625rem;

            dl {
              overflow: hidden;
              margin: .8125rem 0;

              dt {
                margin-right: .9375rem;
                float: left;
              }

              dd {
                float: left;
                margin-right: .3125rem;
                color: #666;
                line-height: 1.5rem;
                padding: .125rem .875rem;
                border-top: .0625rem solid #eee;
                border-right: .0625rem solid #bbb;
                border-bottom: .0625rem solid #bbb;
                border-left: .0625rem solid #eee;

                &.active {
                  color: green;
                  border: .0625rem solid green;
                }
              }
            }
          }

          .cartWrap {
            .controls {
              width: 3rem;
              position: relative;
              float: left;
              margin-right: .9375rem;

              .itxt {
                width: 2.375rem;
                height: 2.3125rem;
                border: .0625rem solid #ddd;
                color: #555;
                float: left;
                border-right: 0;
                text-align: center;
              }

              .plus,
              .mins {
                width: .9375rem;
                text-align: center;
                height: 1.0625rem;
                line-height: 1.0625rem;
                background: #f1f1f1;
                color: #666;
                position: absolute;
                right: -0.5rem;
                border: .0625rem solid #ccc;
              }

              .mins {
                right: -0.5rem;
                top: 1.1875rem;
                border-top: 0;
              }

              .plus {
                right: -0.5rem;
              }
            }

            .add {
              float: left;

              a {
                background-color: #e1251b;
                padding: 0 1.5625rem;
                font-size: 1rem;
                color: #fff;
                height: 2.25rem;
                line-height: 2.25rem;
                display: block;
              }
            }
          }
        }
      }
    }
  }

  .product-detail {
    width: 75rem;
    margin: 1.875rem auto 0;
    overflow: hidden;

    .aside {
      width: 13.125rem;
      float: left;
      border: .0625rem solid #ccc;

      .tabWraped {
        height: 2.5rem;

        h4 {
          border-top: .1875rem solid #fff;
          float: left;
          line-height: 2.3125rem;
          width: 6.5625rem;
          text-align: center;
          border-bottom: .0625rem solid #ccc;

          &.active {
            border-top: .1875rem solid #e1251b;
            border-bottom: 0;
            font-weight: normal;
          }
        }
      }

      .tabContent {
        padding: .625rem;

        .tab-pane {
          display: none;

          &.active {
            display: block;
          }

          &:nth-child(1) {
            .partList {
              overflow: hidden;

              li {
                width: 50%;
                float: left;
                border-bottom: .0625rem dashed #ededed;
                line-height: 1.75rem;
              }
            }

            .goodsList {
              & > li {
                margin: .3125rem 0 .9375rem;
                border-bottom: .0625rem solid #ededed;
                padding-bottom: .3125rem;

                .list-wrap {
                  .p-img {
                    text-align: center;

                    img {
                      width: 9.5rem;
                    }
                  }

                  .price {
                    font-size: 1rem;
                    color: #c81623;
                  }

                  .operate {
                    text-align: center;
                    margin: .3125rem 0;

                    a {
                      background-color: transparent;
                      border: .0625rem solid #8c8c8c;
                      color: #8c8c8c;
                      display: inline-block;
                      padding: .125rem .875rem;
                      line-height: 1.125rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .detail {
      width: 61.25rem;
      float: right;

      .fitting {
        border: .0625rem solid #ddd;
        margin-bottom: .9375rem;

        .kt {
          border-bottom: .0625rem solid #ddd;
          background: #f1f1f1;
          color: #333;
          padding: .3125rem 0 .3125rem .9375rem;
        }

        .good-suits {
          height: 10.625rem;
          padding-top: .625rem;

          .master {
            width: 7.9375rem;
            height: 10.3125rem;
            text-align: center;
            position: relative;
            float: left;

            img {
              width: 5.4375rem;
            }

            p {
              color: #c81623;
              font-size: 1rem;
              font-weight: 700;
            }

            i {
              position: absolute;
              top: 3rem;
              right: -1.5625rem;
              font-size: 1rem;
            }
          }

          .suits {
            width: 41.75rem;
            height: 10.3125rem;
            float: left;

            .suitsItem {
              float: left;
              width: 7.9375rem;
              padding: 0 1.25rem;
              text-align: center;

              img {
                width: 7.5rem;
                height: 8.125rem;
              }

              p {
                font-size: .75rem;
              }

              label {
                display: block;
                position: relative;

                input {
                  vertical-align: middle;
                }

                span {
                  vertical-align: middle;
                }
              }
            }
          }

          .result {
            border-left: .0625rem solid #ddd;
            width: 9.5625rem;
            height: 10.3125rem;
            padding-left: 1.25rem;
            float: left;

            .num {
              font-size: .875rem;
              margin-bottom: .625rem;
              margin-top: .625rem;
            }

            .price-tit {
              font-weight: bold;
              margin-bottom: .625rem;
            }

            .price {
              color: #b1191a;
              font-size: 1rem;
              margin-bottom: .625rem;
            }

            .addshopcar {
              background-color: #e1251b;
              border: .0625rem solid #e1251b;
              padding: .625rem 1.5625rem;
              font-size: 1rem;
              color: #fff;
              display: inline-block;
              box-sizing: border-box;
            }
          }
        }
      }

      .intro {
        .tab-wraped {
          background: #ededed;
          // border: .0625rem solid #ddd;
          overflow: hidden;

          li {
            float: left;

            & + li > a {
              border-left: .0625rem solid #ddd;
            }

            &.active {
              a {
                // border: 0;
                background: #e1251b;
                color: #fff;
              }
            }

            a {
              display: block;
              height: 2.5rem;
              line-height: 2.5rem;
              padding: 0 .6875rem;
              text-align: center;
              color: #666;
              background: #fcfcfc;
              border-top: .0625rem solid #ddd;
              border-bottom: .0625rem solid #ddd;
            }
          }
        }

        .tab-content {
          .tab-pane {
            display: none;

            &.active {
              display: block;
            }

            &:nth-child(1) {
              .goods-intro {
                padding-left: .625rem;

                li {
                  margin: .625rem 0;
                }
              }

              .intro-detail {
                img {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
