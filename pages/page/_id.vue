<template>
  <div class="container">
    <breadcrumb class="breadcrumb" :breadtitle="info.post_title" />
    <el-card class="box-card">
      <div class="artchive-title">{{info.post_title}}</div>
      <div class="tools-line">
        <span>{{info.create_time | formatDate}}</span>
        <i class="el-icon-view read-icon">
          <span>{{info.post_hits}}</span>
        </i>
      </div>
      <el-divider></el-divider>
      <div class="artchive-content" v-html="info.post_content"></div>
    </el-card>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import {formatDate} from '@/static/js/formatDate.js'

export default {
  name: "page",
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id);
  },
  data() {
    return {};
  },
      //独立设置head信息
  head(){
      return{
        title:'我是大吉-'+this.info.post_title,
        meta:[
          {hid:'description',name:'description',content:this.info.post_excerpt},
          {hid: 'keywords', name: 'keywords', content: this.info.post_keywords},
          {hid: 'title', name: 'title', content: '我是大吉-'+this.info.post_title},
        ]
      }
  },
  components: { Breadcrumb },
  asyncData(context) {
    return context.$axios
      .get("/api/portal/pages/" + context.params.id)
      .then(res => {
        if (res.data.code == 1) {
          return { info: res.data.data };
        }
      });
  },
  filters:{

    formatDate(time) {
      time = time * 1000
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  margin-top: 0.5rem;
  max-width: 1300px;
  margin: 1rem auto;
  padding: 0 1rem;
  .breadcrumb {
    margin: 1rem 0;
  }
  .artchive-title {
    font-size: 2rem;
    text-align: center;
    color: #2d3436;
  }
  .artchive-content {
    color: #777;
  }
  .tools-line {
    margin-top: 2rem;
    span {
      margin-right: 0.5rem;
    }
  }
}
</style>
