<template>
  <div id="box">
    <ChildV></ChildV>
    <el-card class="box-card">
      <div class="card-header">
        <h3>你感兴趣的知识体系~</h3>
      </div>
      <el-table :data="tableData"
                style="width: 100%"
                @row-click="xuan">
        <el-table-column label=""
                         width="50">
          <el-checkbox v-model="checked"
                       label=""
                       size="small" />
        </el-table-column>
        <el-table-column prop="uid"
                         label="编号"
                         width="180" />
        <el-table-column prop="region"
                         label="地域"
                         width="180" />
        <el-table-column prop="date1"
                         label="日期" />
        <el-table-column prop="gender"
                         label="性别" />
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import ChildV from './ChildV.vue'
// import { mapGetters } from 'vuex'
import { useStore } from 'vuex'
export default {
  name: 'TixiV',
  components: { ChildV },
  setup() {
    let checked = ref(false)
    const store = useStore()
    return {
      checked,
      tableData: computed(() => store.state.exam.tixiData),
    }
  },
  methods: {
    xuan(row) {
      console.log(row)
      this.checked = !row.checked
    },
  },
}
</script>

<style lang="scss" scoped>
#box {
  background: url('../../assets/05.jpg');
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
  .box-card {
    margin: 0 auto;
    width: 800px;
    min-width: 800px;
    h3 {
      font-size: 20px;
      font-style: italic;
      color: #b6e32b;
    }
  }
}
</style>