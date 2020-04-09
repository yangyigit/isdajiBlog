<template>
  <div class="container">
    <el-row :gutter="0">
      <!-- 左边内容 -->
      <left :info="info" :resart="resart"/>
      <!-- 右边内容 -->
      <right  :siteInfo="siteInfo" :links="links"/>
    </el-row>
  </div>
</template>

<script>
import left from "./index/left";
import right from "./index/right";

export default {
  name: "index",
  components: { left, right },
  async asyncData({ $axios }) {
    const respage = await $axios.$get('/api.php/portal/pages')
    const resart = await $axios.$get('/api.php/portal/recommend')
    const links= await $axios.$get('/api.php/portal/site/getLinks')
    const siteInfo = await $axios.$get('/api.php/portal/site',{
        params: {
          type: 'site_info'
        }
      })
    return {
      info: respage.data,
      resart: resart.data,
      siteInfo: siteInfo.data,
      links: links.data
    }
  }
  // asyncData(context) {
  //   return context.$axios.get('/api/portal/pages')
  //     .then(res => {
  //       if(res.data.code == 1){
  //         return { info: res.data.data }
  //       }
  //     })
  // }
};
</script>
<style lang="less" scoped>
.container {
  margin-top: 0.5rem;
  max-width: 1400px;
  margin: 1rem auto;
}
</style>