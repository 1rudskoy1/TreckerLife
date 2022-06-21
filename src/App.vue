<template>
  <div class="_container">
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
    font-family: 'Neue Montreal';
    background: #1B232A;
  }
  ._container{
    max-width: 1440px;
    margin: 0 auto;
  }
</style>
