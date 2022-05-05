<template>
  <div id="box">
    <div id="login">
      <div class="wid">
        <h3>百科知识答题平台</h3>
      </div>
      <form id="f1">
        <div class="wid">
          <el-input class="name"
                    placeholder="请输入用户名"
                    :prefix-icon="Avatar"
                    v-model="formObj.loginName" />
        </div>
        <div class="wid">
          <el-input class="password"
                    placeholder="请输入密码"
                    :prefix-icon="Box"
                    v-model="formObj.loginPass" />
        </div>
        <div class="wid">
          <el-button type="primary"
                     class="signin"
                     @click="login">登录</el-button>
        </div>
        <div class="wid"
             style="width:400px">
          <el-link type="info"
                   @click="regist">注册</el-link>
          <el-link type="info"
                   @click="tixi">感兴趣体系</el-link>
          <el-link type="info">忘记密码</el-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { useCount } from './login.js'
export default {
  setup() {
    // 需要调用 useCount 才能使用
    let { formObj, login, regist, tixi } = useCount()
    // 必须return, 才能提供组件使用
    return { formObj, login, regist, tixi }
  },
}
</script>
<style scoped lang="scss">
@import './login.scss';
</style>
