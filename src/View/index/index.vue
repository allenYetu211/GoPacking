<template>
 <div>
  <title-index :theme="theme"></title-index>
 </div>
</template>

<script>
import TitleIndex from 'com~/title'
import axios from 'axios'

export default {
  mounted () {
    this.$nextTick(() => {
      axios.get('/api/goods').then((response) => {
        console.log(response)
      })
    })
  },
  components: {
    TitleIndex
  },
  data () {
    return {
      theme: 'index'
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scpoed>

</style>
