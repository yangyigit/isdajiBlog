<template>
  <el-container>
    <el-footer>
      <div>
        <a href="http://www.beian.miit.gov.cn/">鲁ICP备20010492号</a>
      </div>
      </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "CommonFooter",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.el-footer {
  text-align: center;
  line-height: 60px;
  a{
    color: #7f8c8d;
    font-size: .8rem;
    &:hover {
      color: #3498db;
    }
  }
}
</style>
