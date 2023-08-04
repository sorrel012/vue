<template>
    <div id="app">
        <div>
            <div class="header">
                <ul class="header-button-left">
                    <li v-if="step == 1" @click="step=0">Cancle</li>
                    <li v-if="step == 2" @click="step--">Previous</li>
                </ul>
                <ul class="header-button-right">
                    <li v-if="step == 1" @click="step++">Next</li>
                    <li v-if="step == 2" @click="step=0">Cancle</li>
                </ul>
                <img src="./assets/logo.png" class="logo" />
            </div>

            <Container :insta="insta" :step="step" :uploadImage="uploadImage" :filter="filter" @writing="writing = $event"/>

            <div v-if="step == 0">
                <div style="text-align: center;">
                    <button @click="showMore">더보기</button>
                </div>
            </div>

            <div class="footer">
                <ul class="footer-button-plus">
                    <input @change="upload" accept="image/*" type="file" id="file" class="inputfile"/>
                    <label  v-if="step == 0" for="file" class="input-plus">+</label>
                    <label  v-if="step == 2" class="input-plus pub" @click="publish">발행</label>
                </ul>
            </div>

        </div>        
    </div>
</template>

<script>
import Container from './components/Container.vue'
import insta from './assets/insta.js'
import axios from 'axios'
import { eventBus } from './assets/eventBus.js';

export default {
    name: 'App',
    data() {
        return {
            insta,
            id: 0,
            step: 0,
            uploadImage: '',
            writing: '',
            filter: '',
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
                    alert('더 이상 게시물이 없습니다.')
                });          
        },
        tab(value) {
            this.step = value - 1;
        },
        upload(e) {
            let file = e.target.files;
            if(file[0].type.includes) {
                this.step++;
                this.uploadImage = URL.createObjectURL(file[0])
            } else {
                alert('이미지만 업로드할 수 있습니다.');
            }
        },
        publish() {
            if(this.writing == null || this.writing == '') {
                alert('게시글을 입력해 주세요.');
            } else {
                var mine = {
                        name: "Hanee",
                        userImage: "https://picsum.photos/100?random=8",
                        postImage: this.uploadImage,
                        likes: 0,
                        date: "August 4",
                        liked: false,
                        content: this.writing,
                        filter: this.filter
                };
                this.insta.unshift(mine);
                this.step = 0;
            }
        },
    },
    mounted() {
        eventBus.$on('choose', (f) => {
            this.filter = f;
        });
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

    .pub {
        background-color: rgb(207, 237, 255);
        padding: 5px 15px;
        border-radius: 7px;
        color: white;
        font-size: 1.3rem;
    }

    textarea {
        resize: none;
        overflow: visible;
        font-family: SUITE-Regular;
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
