<template>
  <div class="container">
    <Nav-Bar></Nav-Bar>
    <router-view/>
  </div>
  
  
</template>

<script>
  import NavBar from "./components/TheNavbar.vue"
  export default{
  components:{
    NavBar
  },

  setup(){

    return{

    }
  }
}
</script>
<style lang="scss">
  body{
    overflow: hidden;
    font-family: 'Neue Montreal';
    background-color: #1B232A !important;
  }
</style>
