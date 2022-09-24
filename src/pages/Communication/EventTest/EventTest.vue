<template>
  <div>
    <h1>EventTest组件</h1>
    <pre @click="handler" ref="pre">本是同根生,相煎何太急</pre>
    <!-- Event1组件:Event1非原生DOM节点,而绑定的click事件并非原生DOw事件，而是自定义事件
      @click.native,可以把自定义事件变为原生DOM事件
      当前原生DOMclick事件，其实是给子组件的根节点绑定了点击事件---利用到事件委派-->
    <Event1 @click.native="handler1"></Event1>
    <hr />
    <pre @memeda="handler2">
       大江东去浪淘尽,千古风流人物
    </pre>
    <!-- 下面的写法是给原生DoM绑定自定义事件
      给原生DOM绑定自定义事件没有任何意义的，因为没有办法出发$emit函数 -->
    <Event2 @click="handler3" @xxx="handler4"></Event2>
    <hr />
    <!-- 自定义事件 -->
    <el-button @click="ceshi" type="success">我是按钮</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
import Event1 from './Event1.vue'
import Event2 from './Event2.vue'

export default {
  name: 'EventTest',

  components: {
    Event1,
    Event2,
  },

  methods: {
    //点击事件的回调
   handler(e){
       this.$refs.pre.style.color="red";
       console.log('我是原生DOM事件',e);
   },
   handler1(){
     console.log('event1事件回调测试');
   },
   handler2(){

   }
   ,
   handler3(params){
      console.log(params);
   },
   handler4(params){
      console.log(params);
   },
   ceshi(e){
     console.log(e);
   }
  }
}
</script>
