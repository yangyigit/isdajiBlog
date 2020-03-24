<template>
  <div class="container">
    <breadcrumb class="breadcrumb"/>
    <el-card class="box-card">
      <div class="artchive-title">{{info.post_title}}</div>
      <div class="artchive-content" v-html="info.post_content"></div>
    </el-card>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: "",
  validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  data() {
    return {};
  },
  components: { Breadcrumb },
  asyncData(context) {
        return context.$axios.get('/api/portal/pages/'+context.params.id)
      .then(res => {
        if(res.data.code == 1){
          return { info: res.data.data }
        }
      })
  },
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
