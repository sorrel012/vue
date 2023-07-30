<template>
  <div class="bg1" v-if="isOpened == true">
    <div class="bg2">
     <img :src="rooms[isClicked].image" class="images">
      <h3>{{ rooms[isClicked].title }}</h3>
      <h4>{{ rooms[isClicked].content }}</h4>
      <p>{{ rooms[isClicked].price }}원</p>
      <button @click="isOpened=false">닫기</button>
    </div>
  </div>
</template>
  
<script>
export default {
    name: 'ModalView',
}
</script>
  
<style>
</style>