<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header @addTodo="addTodo"></todo-header>
        <todo-list :list="list"></todo-list>
        <todo-footer></todo-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import todoHeader from "./components/todo-header";
  import todoList from "./components/todo-list";
  import todoFooter from "./components/todo-footer";
  export default {
    name: 'App',
    data(){
      return {
        list:[
          {id:0,text:"抢了一个三级头",checked:false},
          {id:1,text:"捡了一个三级甲",checked:true},
          {id:2,text:"舔了一个三级包",checked:false}
        ]
      }
    },
    methods:{
      addTodo(todo){
        this.list.unshift(todo)
      },
      delTodo(id){
        this.list = this.list.filter((item)=>{
          return item.id !== id;
        })
      },
      checked(id,flag){
        this.list.forEach((item)=>{
          if(item.id === id)
            item.checked = flag
        })
      }
    },
    components:{
      "todo-header" : todoHeader,
      "todo-list" : todoList,
      "todo-footer" : todoFooter
    },
    mounted(){
      this.$bus.$on("delTodo",this.delTodo)
      this.$bus.$on("checked",this.checked)
    }
  }
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
