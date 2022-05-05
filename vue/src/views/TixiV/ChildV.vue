<template>
  <div class="child">
    <h3>{{ msg }}</h3>
    <el-form :model="form"
             label-width="120px">
      <el-form-item label="喜欢的体系">
        <el-input v-model="form.uid" />
      </el-form-item>
      <el-form-item label="区域的选择">
        <el-select v-model="form.region"
                   placeholder="please select your 区域">
          <el-option label="中国"
                     value="1" />
          <el-option label="欧美"
                     value="2" />
          <el-option label="非洲"
                     value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="日期">
        <el-col :span="11">
          <el-date-picker v-model="form.date1"
                          type="date"
                          placeholder="请选择日期"
                          style="width: 100%" />
        </el-col>
      </el-form-item>
      <el-form-item label="性别">
      <el-radio-group v-model="form.gender">
        <el-radio label="绅士" />
        <el-radio label="贵妇" />
      </el-radio-group>
    </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="submitadd">+增加体系+</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'ChildV',
  setup() {
    const msg = ref('~添加喜欢的知识体系~')
    const form = reactive({
      uid: '',
      region: '',
      date1: '',
      gender: '',
    })
    return { msg, form }
  },
  methods: {
      submitadd(){
          this.$store.dispatch('exam/submitadd', {'checked':false,'uid':this.form.uid,'region':this.form.region,'date1':this.form.date1,'gender':this.form.gender})
      }
  },
}
</script>

<style lang="scss" scoped>
.child{
    width: 800px;
    min-width: 800px;
    margin: 0 auto;
    h3{
        margin: 20px auto;
        font-size: 30px;
        text-shadow: 3px 3px 4px #27ad3c;
    }
}
</style>