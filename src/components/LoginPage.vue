<template>
  <div class="hello">
    <h1>Login Page</h1>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

import {
  loginAPI
} from '@/api/globalAPI'

export default {
  name: 'HelloWorld',
  methods: {
    /**
     * 提交登陆操作
     */
    submitLoginForm() {
      loginAPI({
        username: 'admin',
        password: '123456',
        code: 123456
      })
        .then(res => {
          const {
            code,
            data,
            msg
          } = res.data

          if (code === 1000) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('rid', data.tid)
            localStorage.setItem('username', 'admin')

            this.$message({
              type: 'success',
              message: '登陆成功！'
            })
            // 改变登录状态为已登录
            this.$store.commit('moduleLogin/login')
            // 跳转到应用
            this.$router.push('/')
          } else {
            this.$message({
              type: 'error',
              message: msg
            })
          }
        })
    }
  },
  mounted() {
    // this.submitLoginForm()
  }
}
</script>

<style scoped lang="less">
</style>
