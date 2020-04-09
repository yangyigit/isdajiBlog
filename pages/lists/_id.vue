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
        background
        :hide-on-single-page="true"
        layout="prev, pager, next"
        next-text="下一页"
        prev-text="上一页"
        :page-count="page_count"
        :current-page="page"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "",
  async asyncData({ $axios, params, route }) {
    let page = route.query.page ? Number.parseInt(route.query.page) : 1;
    const categories = await $axios.$get("/api.php/portal/categories/" + params.id);
    const listInfo = await $axios.$get(
      "/api.php/portal/lists/getCategoryPostLists",
      {
        params: {
          category_id: params.id,
          page: page,
          page_size: 2
        }
      }
    );
    return {
      categories: categories.data,
      lists: listInfo.data.list,
      page_count: listInfo.data.page_count,
      page:listInfo.data.page
    };
  },
  data() {
    return {
      lists: [],
      page_count: 0,
      page: 1,
      page_size: 2
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
  methods: {
    goBack() {
      this.$router.go(-1); //返回上一层
    },
    handleCurrentChange(page) {
      this.page = page;
      this.$route.query.page = page;
      window.location =
        "/lists/" + this.$route.params.id + "?page=" + this.$route.query.page;
      // window.location ='/lists/2?page='+this.$route.query.page
      // this.$router.push({path:'/lists/2?',query:{page:this.$route.query.page}});
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
