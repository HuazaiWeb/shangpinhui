<template>
  <div>
    <h2>BABA有存款: {{ money }}</h2>
    <button @click="borrowFromXM(100)">找小明借钱100</button><br />
    <button @click="borrowFromXH(150)">找小红借钱150</button><br />
    <button @click="borrowFromAll(200)">找所有孩子借钱200</button><br />

    <br />
    <!-- ref:可以获取到真实DOM节点，可以获取相应组件的实例VC -->
    <!-- ref也算在一种通信手段:在父组件中可以获取子组件(属性|方法) -->
    <Son ref="son" />

    <br />
    <Daughter ref="dau" />
  </div>
</template>

<script>
import Son from "./Son";
import Daughter from "./Daughter";

export default {
  name: "ChildrenParentTest",
  data() {
    return {
      money: 1000,
    };
  },

  methods: {
    //小明借用100元
    borrowFromXM(money) {
      //父亲的钱加上100元
      this.money += money;
      this.$refs.son.money -= money;
    },
    borrowFromXH(money) {
      this.money += money;
      this.$refs.dau.money -= money;
    },
    borrowFromAll(money) {
      //VC:$children属性,可以获取当前组件的全部子组件[这个属性在用的时候很少用索引值获取子组件，因为没有办法确定数组里面的元素到底是哪一个子组件]
      this.money += 2*money;
      this.$children.forEach((item) => {
          item.money -= money;
      });
    },
  },

  components: {
    Son,
    Daughter,
  },
};
</script>

<style>
</style>
