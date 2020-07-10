<template>
  <div id="app">
    <van-popup v-model="show" position="top">
      <van-contact-card
        @click="handleC"
        type="add"
        name="damu"
        tel="15851802777"
        add-text=""></van-contact-card>
    </van-popup>

  </div>
</template>

<script>
  import { ContactCard, ContactList, ContactEdit,Popup  } from 'vant';
  export default {
    name: 'App',
    data(){
      return {
        show:false
      }
    },
    components:{
      [ContactCard.name]:ContactCard,
      [ContactList.name]:ContactList,
      [ContactEdit.name]:ContactEdit,
      [Popup.name]:Popup
    },
    methods:{
      handleC(){
        console.log("handleC")
      }
    }
  }
</script>

<style scoped>

</style>
