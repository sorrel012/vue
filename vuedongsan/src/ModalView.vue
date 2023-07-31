<template>
  <div class="bg1" v-if="isOpened == true">
    <div class="bg2">
     <img :src="rooms[clicked].image" class="images">
      <h3>{{ rooms[clicked].title }}</h3>
      <h4>{{ rooms[clicked].content }}</h4>
      <p>{{ rooms[clicked].price }}원</p>
      <!-- <input @input="month = $event.target.value"> -->
      <input v-model="month">
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>
  
<script>
export default {
    name: 'ModalView',
    props: {
      rooms: Array,
      clicked: Number,
      isOpened: Boolean
    },
    data() {
      return {
        month: 0
      }
    }
}
</script>
  
<style>
</style>