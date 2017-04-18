<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import 'src/Public/css/adaptive.scss';
#app {
  width: 100%;
  height:100%;
  padding: px2rem(15);
  background-color:#eee;
}
</style>
