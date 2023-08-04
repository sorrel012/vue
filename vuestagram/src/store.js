import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'

import insta from './assets/insta.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state() {
        return {
            insta,
            more : {},
            id: 0,
        }
    },
    mutations: {
        write(state, writing) {
            state.insta.unshift(writing);
        },
        showMore(state, writing) {
            state.insta.push(writing);
            state.id++;
        },
        clickLike(state) {
            state.like++;
        },
    },
    actions: {
        showMore(context) {
            axios.get(`https://codingapple1.github.io/vue/more${context.state.id}.json`)
                .then((result) => {                    
                    context.commit('showMore', result.data);
                })
                .catch(error => {
                    console.log(error);
                    Swal.fire({
                        text: '더 이상 게시물이 없습니다.',
                        customClass: {
                            popup: 'popup-font'
                        }
                    });                    
                });         
        }
    }
});

export default store;