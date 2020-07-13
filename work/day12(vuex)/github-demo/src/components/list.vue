<template>
  <div class="row">
    <div class="card" v-for="card in cards" :key="card.id">
      <a :href="card.html_url" target="_blank">
        <img :src="card.avatar_url" style='width: 100px' alt="...."/>
      </a>
      <p class="card-text">{{card.login}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "list",
        data(){
          return {
            cards:[]
          }
        },
        mounted(){
          this.$bus.$on("search",async (searchName)=>{
            const {items} = await this.$axios.get("https://api.github.com/search/users",{
              params:{
                q:searchName
              }
            })
            this.cards = items
          })
        }
    }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
