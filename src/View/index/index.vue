<template>
 <div>
  <title-index :theme="theme"></title-index>
 </div>
</template>

<script>
import TitleIndex from 'com~/title'
export default {
  components: {
    TitleIndex
  },
  data () {
    return {
      theme: 'index'
    }
  }
}
</script>

<style lang="scss" scpoed>

</style>
