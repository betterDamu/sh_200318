<template>
  <div id="app">
    {{fullName}}
    <v-count></v-count>
  </div>
</template>

<script>
  import count from "./components/count";
  import {mapGetters} from "vuex";
  export default {
    name: 'App',
    components:{
      "v-count":count
    },
    computed:{
      ...mapGetters(["fullName"])
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
