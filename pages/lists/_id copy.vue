<template>
  <div class="container">
    <el-card>
      <el-page-header @back="goBack" content="列表页面" title="返回"></el-page-header>
    </el-card>
    <el-card class="box-card" v-for="item in lists" :key="item.id">
      <el-row :gutter="20" v-if="item">
        <el-col :span="4">
          <div class="list-img-wrap">
            <el-image :src="item.thumbnail" fit="cover"></el-image>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="list-content-wrap">
            <p>
              <nuxt-link :to="'/articles/'+item.id">{{item.post_title}}</nuxt-link>
            </p>
            <div class="list-content">{{item.post_excerpt}}</div>
            <div class="more">
              <div>{{item.published_time}}</div>
              <nuxt-link :to="'/articles/'+item.id">更多></nuxt-link>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        @prev-click="handleCurrentPrev"
        @next-click="handleCurrentNext"
        background
        :hide-on-single-page="true"
        layout="prev, pager, next"
        next-text="下一页"
        prev-text="上一页"
        :page-count="page_count"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "",
  data() {
    return {
      lists:[],
      page_count:0,
      page:1,
      page_size:2
    };
  },
  async asyncData({ $axios, params }) {
    const categories = await $axios.$get("/api/portal/categories/" + params.id);
    return {
      categories: categories.data
    };
  },
  //独立设置head信息
  head() {
    return {
      title: "我是大吉-" + this.categories.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.categories.description
        }
      ]
    };
  },
  created(){
    this.getListInfo()
  },
  methods: {
    goBack() {
      this.$router.go(-1); //返回上一层
    },
    getListInfo(){
      var that = this;
     axios.get('http://www.isdaji.com/api/portal/lists/getCategoryPostLists', {
        params: {
          category_id: this.$route.params.id,
          page: that.page,
          page_size: that.page_size
        }
      }).then((res)=>{
       res = res.data
      if(res.code ==1 && res.data){
        this.lists = res.data.list
        this.page_count = res.data.page_count
      }
     })
    },
    handleCurrentChange(val) {
       this.page = val;
       this.getListInfo();
    },
    handleCurrentPrev(val) {
       this.page = val;
       this.getListInfo();
    },
    handleCurrentNext(val) {
       this.page = val;
       this.getListInfo();
    }
  }
};
</script>
<style lang="less" scoped>
@text: #bdc3c7;
.container {
  margin-top: 0.5rem;
  max-width: 1300px;
  margin: 1rem auto;
  .el-card {
    margin: 1rem 0;
  }
  .list-content-wrap {
    display: flex;
    flex-direction: column;
    p {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 600;
      padding-bottom: 1rem;
      a {
        color: #3498db;
      }
    }
    .list-content {
      color: @text;
      min-height: 8rem;
      color: #34495e;
    }
    .more {
      display: flex;
      justify-content: space-between;
      a {
        color: #34495e;
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
  }
}
</style>
