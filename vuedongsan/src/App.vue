<template>

  <div class="menu">
    <!-- <a v-for="i in navbar" :key="i">{{ i }}</a> -->
    <a v-for="(a,i) in navbar" :key="i">{{ i }}</a>
  </div>

  <div v-for="(a,i) in products" :key="i">
    <img :src="require('./assets/room' + (i+1) + '.jpg')">
    <h4 >{{ a }}</h4>
    <p>{{ price[i] }}만원</p>
    <button @click="increase(i)">신고하기</button> <span>신고수: {{ reports[i] }}</span>
  </div>
</template>

<script>  

  export default {
    name: 'App',
    data() {
      ///데이터 보관함(object 자료로)
      return {
        price: [40, 45],
        products: ['자연빌', 'cs타워'],
        navbar: ['Home', 'Shop', 'About'],
        reports: [0, 0]
      }
    },
    methods: {
      increase(i) {
        this.reports[i]++
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
  }

  .menu {
    background-color: darkslateblue;
    padding: 15px;
    border-radius: 5px;
  }

  .menu a {
    color: white;
    padding: 10px;
  }

  img {
    margin-top: 40px;;
  }

</style>
