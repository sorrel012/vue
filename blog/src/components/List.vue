<template>
    <div class="mt-3 bg-light pt-4 pb-2">
        <div v-for="(a, i) in writings" :key="i">
            <div>
                <h5>{{ a.title }}</h5>
                <p>{{ a.date }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'list',
        props: {
            writings : Array,
        }
    }
</script>

<style>

</style>