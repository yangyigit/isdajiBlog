<template>
  <div class="container">
    <el-row :gutter="0">
      <!-- 左边内容 -->
      <left />
      <!-- 右边内容 -->
      <right />
    </el-row>
  </div>
</template>

<script>
import left from "./index/left";
import right from "./index/right";

export default {
  name: "index",
  components: { left, right }
};
</script>
<style lang="less" scoped>
.container {
  margin-top: 0.5rem;
  max-width: 1400px;
  margin: 1rem auto;
}
</style>