<template>
    <div>
      <ul>
        <li v-for="(item,index) in messageList" :key="index">
          <router-link :to="`/home/message/${item.id}`">{{item.title}}</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
    //模拟一下数据库
    var messageList = [
      {id:0,title:"msg0"},
      {id:1,title:"msg1"},
      {id:2,title:"msg2"},
      {id:3,title:"msg3"},
      {id:4,title:"msg4"},
      {id:5,title:"msg5"}
    ]
    export default {
        name: "message",
        data(){
          return {
            messageList:[]
          }
        },
        mounted(){
          //模拟一下ajax请求
          setTimeout(()=>{
            this.messageList = messageList
          },2000)
        }
    }
</script>

<style scoped>

</style>
