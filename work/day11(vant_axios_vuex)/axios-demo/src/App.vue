<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
  import axios from "./http"
  export default {
    name: 'App',
    async mounted(){
      const body = await axios.get("/contactList",{
        baseURL:"http://localhost:9000/api"
      })
      console.log(body);
    }
  }
</script>

<style scoped>

</style>
