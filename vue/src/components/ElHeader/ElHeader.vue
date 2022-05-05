<template>
  <div>
    <el-header class="head"
               style="height: 80px">
      <el-row :gutter="24">
        <el-col :span="10">
          <div>百科知识答题系统</div>
        </el-col>
        <el-col :span="4"
                :offset="10"
                style="font-size:15px">
          <div>欢迎--您--回家</div>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>

<script>
export default {
    name:"El-header"       //次处命名不能使用驼峰
}
</script>

<style scoped>
@import url('./ElHeader.css');
</style>