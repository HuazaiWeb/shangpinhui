<template>
  <div>
     <h1>对于el-button进行二次封装</h1>
    <HinButton type="success" icon='el-icon-delete' size="mini" title="提示按钮" @click="handle"></HinButton>
  </div>
</template>

<script type="text/ecmascript-6">
import HinButton from './HinButton'   
  export default {              
    name: 'AttrsListenersTest',
    components:{
        HinButton,
    },
    methods: {
      handle(){
        alert(6666)
      }
    },
  }
</script>
