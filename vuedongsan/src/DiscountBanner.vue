<template>
    <div class="discount">
      <h4>지금 결제하면 {{ amount }}% 할인</h4>
    </div>
</template>
  
<script>
export default {
    name: 'DiscountBanner',
    data() {
        return {
            amount: 20
        }
    },
    mounted(){
      setInterval(()=>{
          this.amount--;
      }, 1000);
    }
}
</script>
  
<style>
    .discount {
    background-color: #eee;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    }
</style>