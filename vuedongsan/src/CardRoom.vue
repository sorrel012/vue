<template>
  <div v-for="(a,i) in rooms" :key="i">
    <img :src="a.image" class="images">
    <h4 @click="$emit('openModal', a.id); $emit('report')" class="titleModal">{{ a.title }}</h4>
    <p>{{ a.price }}원</p>
  </div>
</template>
  
<script>
export default {
    name: '',
    props: {
      rooms: Array,
      isOpened: Boolean
    }
}
</script>
  
<style>
</style>