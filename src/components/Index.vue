<template>
  <div>
    后台管理系统
  </div>
</template>

<script>
// const LoginPage = () => import('./LoginPage.vue')
import { testAPI } from '@/api/globalAPI'

export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
      testAPI({
        firstName: 'a'
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log('index err', new Error(err))
      })
  }
}
</script>

<style scoped lang="less">
</style>