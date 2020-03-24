<template>
  <div class="container">
    <el-row :gutter="0">
      <!-- 左边内容 -->
      <left :info="info"/>
      <!-- 右边内容 -->
      <right />
    </el-row>
  </div>
</template>

<script>
import left from "./index/left";
import right from "./index/right";
import axios from 'axios'

export default {
  name: "index",
  components: { left, right },
  asyncData(context) {
    return context.$axios.get('/api/portal/pages')
      .then(res => {
        if(res.data.code == 1){
          return { info: res.data.data }
        }
      })
  }
};
</script>
<style lang="less" scoped>
.container {
  margin-top: 0.5rem;
  max-width: 1400px;
  margin: 1rem auto;
}
</style>