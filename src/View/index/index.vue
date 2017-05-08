<template>
 <div>
  <title-index :theme="theme"></title-index>
  <!--<swipe></swipe>-->
  <div class="server-atricle" v-for="(item, index) in atricles">
      <atricle :item='item' :index='index'></atricle>
  </div>
  <img src="/static/goods@2x.png" alt="">
 </div>
</template>

<script>
// import Swipe from 'com~/slide/slide'
import TitleIndex from 'com~/title'
import atricle from 'com~/articleContainer/article'

export default {
  data () {
    return {
      theme: 'index',
      atricles: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      // console.log(this.$axios)
      this.$axios.get('/api/goods').then((response) => {
        console.log(response)
        this.atricles = response.data.data
        console.log(this.atricles)
      })
    })
  },
  components: {
    TitleIndex,
    atricle
    // Swipe
  },
  computed: {
  }
}
</script>

<style lang="scss" scpoed>
.server-atricle {
  width: 100%;
  padding: 15px;
}
</style>
