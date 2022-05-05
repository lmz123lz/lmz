<template>
  <div>
    <!-- 头部 -->
    <ElHeader></ElHeader>

    <!-- 答题区 -->
    <!-- 记分区 -->
    <AslideV></AslideV>
  </div>
</template>
<script>
import ElHeader from '@/components/ElHeader/ElHeader.vue'
import AslideV from '@/components/AslideV/AslideV.vue'
export default {
  name: 'Index',
  components: { ElHeader, AslideV }
}
</script>
<style scope>
</style>
