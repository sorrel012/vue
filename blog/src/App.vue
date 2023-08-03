<template>
  <div id="app">
    <div class="container-fluid">

      <nav class="navbar bg-light px-3 mb-5">
        <a class="navbar-brand" href="#">Blog</a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/main" class="nav-link">메인</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list" class="nav-link">게시판</router-link>
          </li>
        </ul>
      </nav>
      
      <router-view :writings="writings"></router-view>
      <!-- <List :writings="writings"></List>  -->

    </div>
  </div>
</template>

<script>
  import writings from './assets/blog.js'

  export default {
    name: 'App',
    data() {
      return {
        writings
      }
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

  @font-face {
    font-family: 'SUITE-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  .container-fluid {    
    font-family: SUITE-Bold;
  }

</style>
