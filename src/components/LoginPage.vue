<template>
  <div class="child-vhc wrapper--login">
    <div class="form--login">
      <el-form :model="formLogin">
        <el-form-item prop="username">
          <el-input v-model="formLogin.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formLogin.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-col :span="12">
            <el-form-item prop="code">
              <el-input v-model="formLogin.code"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <!-- 获取验证码 -->
            <div class="captcha--wrapper child-vhc">
              <img :src="`http://localhost:9091/captcha`" @click="this.getCaptcha">
            </div>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

import { BASE_URL } from '@/public/constant'
import {
  loginAPI,
  getCaptchaAPI
} from '@/api/globalAPI'

export default {
  name: 'HelloWorld',
  data() {
    return {
      codeImg: null,
      formLogin: {
        username: '',
        password: '',
        code: ''
      }
    }
  },
  methods: {
    /**
     * 获取验证码
     */
    getCaptcha() {
      getCaptchaAPI()
        .then(res => {
          this.codeImg = res.data
        })
    },

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
    this.getCaptcha()
  }
}
</script>

<style scoped lang="less">
.wrapper--login {
  width: 100%;
  height: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../assets/images/bg.jpg') center no-repeat;
  background-size: cover;
}
.form--login {
  width: 400px;
  min-height: 200px;
  padding: 30px 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
}
.captcha--wrapper {
  height: 40px;
  
  img {
    height: 100%;
    background: #fff;
  }
}
</style>
