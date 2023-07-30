<template>
  <div class="bg1" v-if="isOpened == true">
    <div class="bg2">
     <img :src="rooms[isClicked].image" class="images">
      <h3>{{ rooms[isClicked].title }}</h3>
      <h4>{{ rooms[isClicked].content }}</h4>
      <p>{{ rooms[isClicked].price }}원</p>
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