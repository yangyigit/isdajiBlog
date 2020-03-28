<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    type="flex"
    router
  >
    <el-menu-item class="logo">
      <div class="logo-title">
        <nuxt-link to="/">我是大吉</nuxt-link> 
        <span class="logo-slogan">一个不务正业的程序猿</span>
      </div>
    </el-menu-item>
    <el-menu-item index="/" class="nav-title hidden-sm-and-down">首页</el-menu-item>
    <template v-for="(item) of nav">
    <el-menu-item :index="'/lists/'+item.id.toString()" class="nav-title hidden-sm-and-down" :key="item.id" v-if="!item.children">{{item.name}}</el-menu-item>
    </template>
    <template v-for="item of nav">
    <el-submenu :index="item.id.toString()" class="nav-title hidden-sm-and-down" :key="item.id" v-if="item.children">
      <template slot="title" class="nav-title">{{item.name}}</template>
      <el-menu-item :index="'/lists/'+itemchid.id.toString()" v-for="itemchid of item.children" :key="itemchid.id">{{itemchid.name}}</el-menu-item>
    </el-submenu>
    </template>
  </el-menu>
</template>

<script>
import axios from 'axios'

export default {
  name: "NavMenu",
  data() {
    return {
      activeIndex: "/",
      nav:[]
    };
  },
  created(){
    this.getNavInfo()
  },
  methods: {
    getNavInfo(){
     axios.get('http://www.isdaji.com/api/portal/categories').then((res)=>{
       res = res.data
      if(res.code ==1 && res.data){
        this.nav = res.data
      }
     })
    }
  }
};
</script>
<style lang="less" scoped>
.logo {
  margin-right: 1.875rem ;
  .logo-title {
    font-size: 1.4rem;
    color:#3498db;
    .logo-slogan {
      font-size: 0.6rem;
      color: #bdc3c7;
      display: inline-block;
      padding-left: 0.3rem;
    }
  }
}
.nav-title{
  font-size: 0.87rem;
}
</style>
