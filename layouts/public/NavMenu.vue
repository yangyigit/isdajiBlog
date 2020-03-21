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
        我是大吉
        <span class="logo-slogan">一个热爱分享的程序猿</span>
      </div>
    </el-menu-item>
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">关于我</el-menu-item>
    <el-menu-item index="2">关于我</el-menu-item>
    <el-menu-item index="2">关于我</el-menu-item>
    <el-submenu index="3">
      <template slot="title">知识分享</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
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
</style>
