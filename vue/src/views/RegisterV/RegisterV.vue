<template>
  <div id="box">
    <div id="login">
      <div class="wid">
        <h3>百科答题--注册页面</h3>
      </div>
      <form id="f1">
        <div class="wid">
          <el-input placeholder="请输入用户名..."
                    :prefix-icon="Apple"
                    v-model="user" />
        </div>
        <div class="wid">
          <el-input v-model="pwd"
                    placeholder="请输入密码..."
                    :prefix-icon="Search" />
        </div>
        <div class="wid">
          <el-button type="primary"
                     class="signin"
                     @click="regist">点击注册</el-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Search, Apple } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'RegisterV',
  setup() {
    console.log(Search)
    console.log(Apple)
    const router = useRouter()
    const user = ref('')
    const pwd = ref('')

    const regist = () => {
      if (user.value != '' && pwd.value != '') {
        ElMessage({
          message: '注册成功~',
          type: 'success',
        })
        sessionStorage.setItem('user', user.value)
        sessionStorage.setItem('pwd', pwd.value)
        setTimeout(() => {
          router.push({
            path: '/',
          })
        }, 2000)
      } else {
        ElMessage({
          message: '不能为空~',
          type: 'error',
        })
      }
    }
    return { regist, user, pwd, Search, Apple }
  },
}
</script>

<style lang="scss" scoped>
@import './register.scss';
</style>