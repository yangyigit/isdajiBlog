<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-if="breadcattitle"><nuxt-link :to="'/lists/'+breadid">{{breadcattitle}}</nuxt-link></el-breadcrumb-item>
    <el-breadcrumb-item v-if="breadtitle">{{breadtitle}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props:{
    breadtitle:String,
    breadcattitle:String,
    breadid:Number
  },
  name: "Breadcrumb",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
</style>
