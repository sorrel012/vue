<template>
    <div id="app">
        <div>
            <div class="header">
                <ul class="header-button-left">
                    <li>Cancel</li>
                </ul>
                <ul class="header-button-right">
                    <li>Next</li>
                </ul>
                <img src="./assets/logo.png" class="logo" />
            </div>

            <Container :insta="insta"/>

            <button @click="showMore">더보기</button>

            <div class="footer">
                <ul class="footer-button-plus">
                    <input type="file" id="file" class="inputfile" />
                    <label for="file" class="input-plus">+</label>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
import Container from './components/Container.vue'
import insta from './assets/insta.js'
import axios from 'axios'

export default {
    name: 'App',
    data() {
        return {
            insta,
            id: 0
        }
    },
    components: {
        Container,
    },
    methods: {
        showMore() {         
            axios.get(`https://codingapple1.github.io/vue/more${this.id}.json`)
                .then((result) => {
                    this.insta.push(result.data);
                this.id++;
                })
                .catch(error => {
                    console.log(error);
                });          
        }   
    }
}
</script>

<style>
    body {
        margin: 0;
    }

    ul {
        padding: 5px;
        list-style-type: none;
    }

    .logo {
        width: 22px;
        margin: auto;
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        top: 13px;
    }

    .header {
        width: 100%;
        height: 40px;
        background-color: white;
        padding-bottom: 8px;
        position: sticky;
        top: 0;
    }

    .header-button-left {
        color: skyblue;
        float: left;
        width: 50px;
        padding-left: 20px;
        cursor: pointer;
        margin-top: 10px;
    }

    .header-button-right {
        color: skyblue;
        float: right;
        width: 50px;
        cursor: pointer;
        margin-top: 10px;
    }

    .footer {
        width: 100%;
        position: sticky;
        bottom: 0;
        padding-bottom: 10px;
        background-color: white;
    }

    .footer-button-plus {
        width: 80px;
        margin: auto;
        text-align: center;
        cursor: pointer;
        font-size: 24px;
        padding-top: 12px;
    }

    .sample-box {
        width: 100%;
        height: 600px;
        background-color: bisque;
    }

    .inputfile {
        display: none;
    }

    .input-plus {
        cursor: pointer;
    }

    button {
        margin: 5px 15px;
        border: none;
        background-color: rgb(207, 237, 255);
        font-family: SUITE-Regular;
        border-radius: 5px;
        width: 60px;
        height: 30px;
    }

    button:hover {
        cursor: pointer;
    }

    @font-face {
        font-family: 'SUITE-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }
    
    #app {
        box-sizing: border-box;
        font-family: SUITE-Regular;
        margin-top: 60px;
        width: 100%;
        max-width: 460px;
        margin: auto;
        position: relative;
        border-right: 1px solid #eee;
        border-left: 1px solid #eee;
    }
</style>
