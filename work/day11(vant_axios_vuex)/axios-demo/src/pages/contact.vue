<template>
  <div>
    <van-button type="default">默认按钮</van-button>
  </div>
</template>

<script>
    import {Button} from "vant"
    export default {
        name: "contact",
        components:{
          [Button.name]:Button
        }
    }
</script>

<style scoped>

</style>
