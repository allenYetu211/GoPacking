<template>
  <div class="title">
 
<!--  主页  -->
 
      <div class="themes" v-if="theme === 'index'">
          <div class="items">
            <i class="i-icon">
              <img src="../assets/muen@3x.png" alt="">
            </i>
          </div>

          <div class="translateCount">
           {{newCount}} / {{allCount}}
          </div>

          <div class="packs">
            <i class="i-icon">
              <img src="../assets/packs@3x.png" alt="">
            </i>
          </div>
      </div>


  </div>
</template>

<script>
export default {
  props: ['theme']
}
</script>

<style lang="scss" scoped>
@import 'src/Public/css/adaptive.scss';
.themes{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: px2rem(18);
  .translateCount{
    // font-size: px2rem(30);
  }
}
.i-icon {
  display: block;
  width: px2rem(24);
  height: px2rem(24);
  img {
    width: 100%;
  }
}

</style>
