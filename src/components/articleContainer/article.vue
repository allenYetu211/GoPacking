<template>
  <div class="container">
    <img :src="item.src" alt="">
    <p>{{item.name}}</p>
  </div>
</template>

<script>
export default {
  props: ['item', 'index']

}
</script>

<style lang="scss">
@import 'src/Public/css/adaptive.scss';
  .container {
    width: 100%;
    img {
      width: 100%;
    }
    p {
      text-align: center;
      font-size: px2rem(16);
    }
  }
  
</style>
