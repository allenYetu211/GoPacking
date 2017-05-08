<template>
  <div class="introduction">
      <div class="container-items" v-for="item in atricles" >
        <atricle :item='item'></atricle>
      </div>
  </div>
</template>

<script>
import atricle from 'com~/articleContainer/article'
export default {
  components: {
    atricle
  },
  data () {
    return {
      atricles: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$axios.get('/api/goods').then((response) => {
        this.atricles = response.data.data
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import 'src/Public/css/adaptive.scss';
.container-items {
  width: 33.33333%;
  float: left;
  padding: px2rem(5);
}
</style>
