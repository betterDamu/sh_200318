<template>
  <div id="app">
   xxx
  </div>
</template>

<script>
  import http from "./http"
  export default {
    name: 'App',
    async mounted(){
      const body = await http.get("/contactList",{
        baseURL:"http://localhost:9000/api"
      })
      console.log(body);
    }
  }
</script>

<style scoped>

</style>
