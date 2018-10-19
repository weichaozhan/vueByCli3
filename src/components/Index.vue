<template>
  <div>
    <app-header></app-header>
  </div>
</template>

<script>
const AppHeader = () => import('./AppHeader.vue')
import moment from 'moment'

export default {
  name: "",
  components: {
    AppHeader
  }
}
</script>

<style scoped lang="less">
</style>