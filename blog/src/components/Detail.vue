<template>    
    <div class="mt-3 bg-light pt-4 pb-2">
        <div>
            <h5>{{ writings[$route.params.id].title }}</h5>
            <p class="mt-4">{{ writings[$route.params.id].content }}</p>
            <div class="text-start ms-4">
                <router-link :to="`/detail/${$route.params.id}/comment`">댓글</router-link>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detail',
        props: {
            writings : Array,
        }
    }
</script>

<style>

</style>