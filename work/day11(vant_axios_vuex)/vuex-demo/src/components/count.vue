<template>
  <div>
      {{count}}
  </div>
</template>

<script>

    /*仓库中的数据 在组件上使用时;最好拿一个计算属性与之对应!!!
      这样可以避免脏数据的问题;而且数据的响应式依旧存在!*/

    export default {
        name: "count",
        computed:{
          count(){
            return this.$store.state.count
          }
        }
    }
</script>

<style scoped>

</style>
