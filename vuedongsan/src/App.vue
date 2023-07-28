<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <h4>자연빌</h4>
    <p>{{ price1 }}만원</p>
  </div>
  <div>
    <h4>cs오피스텔</h4>
    <p>{{ price2 }}만원</p>
  </div>
</template>

<script>  

  export default {
    name: 'App',    
    data() {
      ///데이터 보관함(object 자료로)
      return {
        price1 : 40,
        price2 : 45
      } 
    },
    components: {
    }
  }

  
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
