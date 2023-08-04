<template>
    <div class="post">
        <div class="post-header">
            <div class="profile" :style="{ backgroundImage : `url(${insta.userImage})`}"></div>
            <span class="profile-name">{{ insta.name }}</span>
        </div>
        <div :class="insta.filter" class="post-body" :style="{ backgroundImage : `url(${insta.postImage})`}"></div>
        <div class="post-content">
            <p>{{ insta.likes }} Likes</p>
            <p><strong>{{ insta.name }}</strong> {{ insta.content }} </p>
            <p class="date">{{ insta.date }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'post',
        props: {
            insta: Object,
        },
    }
</script>

<style>

</style>