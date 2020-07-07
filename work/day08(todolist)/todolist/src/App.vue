<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header @addTodo="addTodo"></todo-header>
        <todo-list :list="list"></todo-list>
        <todo-footer :list="list" @checkedAll="checkedAll"></todo-footer>
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
          {id:1,text:"捡了一个三级甲",checked:false},
          {id:2,text:"舔了一个三级包",checked:false}
        ]
      }
    },
    methods:{
      /*新增功能 是头部输入完成后新增todo的逻辑 是子向父进行数据传递 todo-header&app */
      addTodo(todo){
        this.list.unshift(todo)
      },
      /*删除功能 点击item组件中删除按钮 进行一次非父子的数据传递 todo-item&app */
      delTodo(id){
        this.list = this.list.filter((item)=>{
          return item.id !== id;
        })
      },
      /*选中功能 点击item组件中复选框 进行一次非父子的数据传递 todo-item&app */
      checked(id,flag){
        this.list.forEach((item)=>{
          if(item.id === id)
            item.checked = flag
        })
      },
      /*全选 全不选 是子向父进行数据传递 todo-footer&app */
      checkedAll(flag){
        this.list.forEach((item)=>{
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
      // 给总线绑定两个事件 deltoodo进行删除  checked进行选中的
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
