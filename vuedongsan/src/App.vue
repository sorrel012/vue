<template>

  <ModalView :rooms="rooms" :clicked="clicked" :isOpened="isOpened" @closeModal="isOpened = false"/>

  <div class="menu">
    <!-- <a v-for="i in navbar" :key="i">{{ i }}</a> -->
    <a v-for="(a,i) in navbar" :key="i">{{ a }}</a>
  </div>

  <DiscountBanner/>  

  <!-- <div v-for="(a,i) in products" :key="i">
    <img :src="require('./assets/room' + (i+1) + '.jpg')">
    <h4 >{{ a }}</h4>
    <p>{{ price[i] }}만원</p>
    <button @click="increase(i)">신고하기</button> <span>신고수: {{ reports[i] }}</span>
  </div> -->

  <CardRoom :rooms="rooms" :isOpened="isOpened" :reports="reports" @openModal="isOpened = true; clicked= $event" @reports="reports[$event]++"/>

</template>

<script>  

  import data from './assets/oneroom.js';
  import DiscountBanner from './DiscountBanner.vue';
  import ModalView from './ModalView.vue';
  import CardRoom from './CardRoom.vue';

  export default {
    name: 'App',
    data() {
      ///데이터 보관함(object 자료로)
      return {        
        // price: [40, 45],
        // products: ['자연빌', 'cs타워'],
        navbar: ['Home', 'Shop', 'About'],
        reports: [0, 0, 0, 0, 0, 0],
        isOpened: false,
        rooms: data,
        clicked: 0
      }
    },
    methods: {
    },
    components: {
      DiscountBanner : DiscountBanner,
      ModalView : ModalView,
      CardRoom : CardRoom
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

  body {
    margin: 0;
  }

  div {
    box-sizing: border-box;
  }

  .bg1 {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    position: fixed;
    padding: 20px;
  }

  .bg2 {
    width: 100%;
    background-color: white;
    border-radius: 8px;
    padding: 20px;
  }

  .images {
    width: 60%;
  }

  .titleModal:hover {
    cursor: pointer;
  }

</style>
