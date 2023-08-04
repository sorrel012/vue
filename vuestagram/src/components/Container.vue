<template>
    <div>

        <!-- 글 목록 -->
        <div v-if="step == 0">
            <Post :insta="insta[i]" v-for="(a,i) in insta" :key="i"/>
        </div>

        <!-- 필터선택페이지 -->
        <div v-if="step == 1">
            <div :class="filter" class="upload-image" :style="`background-image:url(${uploadImage})`"></div>
            <div class="filters">
                <FilterBox :uploadImage="uploadImage" :filter="filter" v-for="filter in filters" :key="filter">
                    {{ filter }}
                </FilterBox>    
            </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="step == 2">
            <div class="upload-image" :class="filter" :style="`background-image:url(${uploadImage})`"></div>
            <div class="write">
                <textarea @input="$emit('writing', $event.target.value)" class="write-box" placeholder="글을 작성해 주세요."></textarea>
            </div>
        </div>

    </div>
</template>

<script>
import Post from './Post.vue';
import FilterBox from './FilterBox.vue';

export default {
    name: 'container',
    data() {
        return {
            filters: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                    "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                    "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
            tmpFilter: '',
        }
    },
    props: {
        insta: Array,
        step: Number,
        uploadImage: String,
        filter: String,
    },
    components: {
        Post,
        FilterBox,
    },
    methods: {
        handlePreview: function(filter)  {
            alert(this.tmpFilter);
            this.tmpFilter = filter;
        },
    }
}
</script>

<style>
    .post {
        width: 100%;
    }
    .profile {
        background-image: url("https://picsum.photos/100?random=0");
        width: 30px;
        height: 30px;
        background-size: 100%;
        border-radius: 50%;
        float: left;
    }
    .profile-name {
        display: block;
        float: left;
        padding-left: 10px;
        padding-top: 7px;
        font-size: 14px;
    }
    .post-header {
        height: 30px;
        padding: 10px;
    }
    .post-body {
        background-image: url("https://picsum.photos/600?random=0");
        height: 450px;
        background-position: center;
        background-size: cover;
    }
    .post-content {
        padding-left: 15px;
        padding-right: 15px;
        font-size: 14px;
    }
    .date {
        font-size: 11px;
        color: grey;
        margin-top: -8px;
    } 
    .upload-image{
        width: 100%;
        height: 450px;
        background-size : cover;
    }
    .filters{
        overflow-x:scroll;
        white-space: nowrap;
    }
    .filter-1 {
        width: 100px;
        height: 100px;
        background-color: cornflowerblue;
        margin: 10px 10px 10px auto;
        padding: 8px;
        display: inline-block;
        color : white;
        background-size: cover;
    }
    .filters::-webkit-scrollbar {
        height: 5px;
    }
    .filters::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    .filters::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 5px;
    }
    .filters::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
    .write-box {
        border: none;
        width: 90%;
        height: 100px;
        padding: 15px;
        margin: auto;
        display: block;
        outline: none;
    }
</style>