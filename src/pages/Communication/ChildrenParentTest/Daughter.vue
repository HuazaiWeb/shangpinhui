<template>
  <div style="background: #ccc; height: 50px;">
    <h3>女儿小红: 有存款: {{money}}</h3>
    <button @click="giveMoney(50)">给BABA钱: 100</button>
  </div>
</template>

<script>
import myMixin from './myMixin/myMixin.js'
export default {
  mixins:[myMixin],
  name: 'Daughter',
  data () {
    return {
      money: 20000
    }
  },

}
</script>
