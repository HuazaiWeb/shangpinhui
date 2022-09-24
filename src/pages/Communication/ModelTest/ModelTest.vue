<template>
  <div>
    <h2>深入v-model</h2>
    <input type="text" v-model="msg" />
    <span>{{ msg }}</span>
    <h2>v-model底层实现原理</h2>
    <!-- 原生Dom当中是有oninput事件，它经常结合表单元素一起使用，当表单元素文本内容发生变化的时候就会发出发一次回调
    Vue2:可以通过value与input事件实现v-model功能 -->
    <input type="text" placeholder="与v-model功能一样" :value="msg1" @input="handler"/>
    <span>{{ msg1 }}</span>
    <hr />
    <h2>父组件{{msg2}}</h2>
<!-- <小--深入学习v-model:实现父子组件数据同步（实现父子组件通信）--> 

    <!-- :value到底是什么?这可是props，父子组件通信
    @input到底是什么?并非原生DOM的input事件，属于自定义事件 -->
    <!-- 我们可以通过 $event 访问到被抛出的这个值： -->
    <CustomInput :value="msg" @input="msg = $event"></CustomInput>
    <CustomInput v-model="msg"></CustomInput>

  </div>
</template>

<script type="text/ecmascript-6">
import CustomInput from './CustomInput.vue'
export default {
  name: 'ModelTest',
  components: {
    CustomInput
  },
  data() {
    return {
      msg:"",
      msg1:'',
      msg2:"我爱豪哥",
      msg3:'我是element里面组件'
    }
  },
  methods: {
     handler(e){
       this.msg1 = e.target.value;
     },
     //自定义事件input回调
     inputHandler(params){
        this.msg2  = params;
     }
  },
}
</script>
