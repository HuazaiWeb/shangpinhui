<template>
    <div>
        <a :title="title">
            <!-- 下面这种写法，不能用: v-on不能用@符号进行替换 -->
            <el-button v-bind="$attrs" v-on="$listeners">添加</el-button>
        </a>
    </div>
</template>

<script>

export default {
    name:'', 
    props:['title'],
    mounted() {
        console.log('组件实例---',this);
        //$attrs属于组件实例的一个属性,可以获取到父组件传递过来的props数据
        //对于子组件而言，父组件给的数据可以利用props接受，但是需要注意，如果子组件通过props接受的属性，在$attrs属性当中是获取不到的
        console.log(this.$attrs)
        //$listeners，它也是组件实例自身的一个属性，它可以获取到父组件给子组件传递自定义事件
        console.log(this.$listeners)
    },
}   
</script>

<style>

</style>