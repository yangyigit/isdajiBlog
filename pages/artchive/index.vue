<template>
  <div class="container">
    <breadcrumb class="breadcrumb"/>
    <el-card class="box-card">
      <div class="artchive-title">我的文章标题</div>
      <div class="artchive-content">我的文章内容{{$route.params.newsId}}</div>
    </el-card>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: "",
  data() {
    return {};
  },
  components: { Breadcrumb },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.container {
  margin-top: 0.5rem;
  max-width: 1400px;
  margin: 1rem auto;
  .breadcrumb{
    margin: 1rem 0;
  }
  .artchive-title{
    font-size:  2rem;
    text-align: center;
    color: #2d3436;
  }
  .artchive-content{
    color: #777;
  }
}
</style>
