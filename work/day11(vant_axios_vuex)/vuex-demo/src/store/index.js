import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)


//1. 怎么优雅的读取仓库中的数据
//2. 怎么优雅的修改仓库中的数据
export default new Vuex.Store({
  state:{
    count:0
  }
})
