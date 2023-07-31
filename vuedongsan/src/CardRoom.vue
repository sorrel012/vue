<template>
  <div v-for="(a,i) in rooms" :key="i">
    <img :src="a.image" class="images">
    <h4 @click="$emit('openModal', a.id)" class="titleModal">{{ a.title }}</h4>
    <button @click="$emit('reports', a.id)">신고하기</button> <span>신고수: {{ reports[i] }}</span>
    <p>{{ a.price }}원</p>
  </div>
</template>
  
<script>
export default {
    props: {
      rooms: Array,
      isOpened: Boolean,
      reports: Array
    },
}
</script>
  
<style>
</style>