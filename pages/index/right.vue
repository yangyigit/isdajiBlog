<template>
      <!-- 右边内容 -->
      <el-col :md="8" :lg="8" :xl="8" class="right-list">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
        </el-card>
      </el-col>
</template>

<script>
export default {
  name: "right",
};
</script>
<style lang="less" scoped>
  .right-list {
    padding: 0 1rem;
  }
  .el-card {
    margin: 1rem 0;
  }
</style>