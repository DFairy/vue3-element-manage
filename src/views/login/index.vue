<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :model="loginFrom"
      :rules="loginRules"
      ref="loginFormRef"
    >
      <h3>{{ $t('msg.login.title') }}</h3>
      <LangSelect class="lang-select" />
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user"></svg-icon>
        </span>
        <el-input v-model="loginFrom.username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password" />
        </span>
        <el-input :type="passwordType" v-model="loginFrom.password" />
        <span class="svg-container">
          <svg-icon
            :icon="passwordType == 'password' ? 'eye' : 'eye-open'"
            @click="changeOpen"
            className="eye"
          />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :loading="loading"
          @click="login(loginFormRef)"
          >{{ $t('msg.login.loginBtn') }}</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import LangSelect from '@/components/LangeSelect'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { checkPass } from './rule.js'
import { useI18n } from 'vue-i18n'
const loginFormRef = ref(null)
const loginFrom = reactive({
  username: 'super-admin',
  password: '123456'
})
const i18n = useI18n()
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: i18n.t('msg.login.usernameRule')
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: checkPass()
    }
  ]
})
const store = useStore()
const router = useRouter()
const loading = ref(false)
const passwordType = ref('password')
const changeOpen = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
const login = (formEl) => {
  if (!formEl) return
  loading.value = true
  formEl.validate((valide) => {
    if (valide) {
      store.dispatch('user/login', loginFrom).then(() => {
        loading.value = false
        router.push('/')
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-container {
  width: 100%;
  height: 100%;
  background: $bg;
  overflow: hidden;
  .login-form {
    width: 500px;
    margin: auto;
    margin-top: 150px;
    position: relative;
    h3 {
      color: #fff;
      text-align: center;
      font-size: 26px;
      margin-bottom: 50px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      display: inline-block;
      .eye {
        cursor: pointer;
      }
    }
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      margin-bottom: 30px;
    }
    ::v-deep .el-input {
      width: 85%;
      height: 45px;
      .el-input__wrapper {
        background: transparent;
        box-shadow: none !important;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        caret-color: $cursor;
        .el-input__inner {
          color: #fff;
        }
      }
    }
    .el-button {
      width: 100%;
    }
    .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
</style>
