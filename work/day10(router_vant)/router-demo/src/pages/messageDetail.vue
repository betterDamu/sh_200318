<template>
  <div>
    messageDetail.vue
  </div>
</template>

<script>
    export default {
        name: "messageDetail",
        props:{
          id:String
        },
        watch:{
          $route:{
            handler(){
              console.log(this.id)
            },
            deep:true
          }
        }
    }
</script>

<style scoped>

</style>
