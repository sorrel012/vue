<template>
    <div @click="chooseFilter" :class="`${filter} filter-item`" :style="`background-image: url(${uploadImage})`">
        <slot></slot>
    </div> 
</template>

<script>
import { eventBus } from '../assets/eventBus.js';

export default {
    name: 'filterbox',
    props: {
        uploadImage: String,
        filter: String,
    }, 
    methods: {
        chooseFilter() {
            eventBus.$emit('choose', this.filter);
        }
    }
}
</script>

<style>
    .filter-item {
        width: 100px;
        height: 100px;
        margin: 10px 10px 10px auto;
        padding: 8px;
        display: inline-block;
        color : white;
        background-size: cover;
        background-position : center;
    }
    .filter-item:hover {
        cursor: pointer;
    }   
</style>