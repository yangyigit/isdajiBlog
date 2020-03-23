<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    type="flex"
  >
    <el-menu-item class="logo">
      <div class="logo-title">
        <nuxt-link to="/">我是大吉</nuxt-link> 
        <span class="logo-slogan">一个热爱分享的程序猿</span>
      </div>
    </el-menu-item>
    <el-menu-item index="1" class="nav-title hidden-sm-and-down"><nuxt-link to="/">首页</nuxt-link></el-menu-item>
    <el-menu-item index="2" class="nav-title hidden-sm-and-down">关于我</el-menu-item>
    <el-menu-item index="3" class="nav-title  hidden-sm-and-down">教程</el-menu-item>
    <el-menu-item index="4" class="nav-title  hidden-sm-and-down">使用工具</el-menu-item>
    <el-menu-item index="5" class="nav-title  hidden-sm-and-down">生活</el-menu-item>
    <el-submenu index="6" class=" hidden-sm-and-down nav-title">
      <template slot="title" class="nav-title">知识分享</template>
      <el-menu-item index="6-1">选项1</el-menu-item>
      <el-menu-item index="6-2">选项2</el-menu-item>
      <el-menu-item index="6-3">选项3</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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
