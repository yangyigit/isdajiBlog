<template>
      <!-- 左边内容 -->
      <el-col :md="16" :lg="16" :xl="16" class="left-list">
        <el-card class="box-card">
          <!-- 内容类型 -->
          <div slot="header" class="clearfix">
            <span>关于我</span>
            <el-button style="float: right; padding: 3px 0" type="text">阅读全文</el-button>
          </div>
          <!-- 内容 -->
          <div class="content">
          <h2 class="content-title">
            <a href>Electron 免费视频教程-用前端技术开发桌面应用</a>
          </h2>
          <span class="content-date">2020-1-3</span>
          <span class="content-des">个人感悟</span>
          <i class="el-icon-collection-tag
"></i>
          <el-tag size="mini">php</el-tag>
          <el-row :gutter="10">
            <el-col :md="6" :lg="6" :xl="6">
              <div class="block">
                <el-image :src="src" class="content-img">
                  <div slot="placeholder" class="image-slot">
                    加载中
                    <span class="dot">...</span>
                  </div>
                </el-image>
              </div>
            </el-col>
            <el-col :md="18" :lg="18" :xl="18">
              <div class="content-summary"> 在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具 - AndrewNeo - CSDN博客sdsadasdCSDN博客asdsadasdCSDN博客asdsadasdCSDN博客asdsadasdCSDN博客asdsadasdCSDN博客asdsadasdCSDN博客asdsadasdCSDN博客asdsadasdCSDN博客asdsadasdCSDN博客asdsadasdCSDN博客asdsadasdCSDN博客asdsadasdCSDN博客asdsadasdCSDN博客asdsadasdCSDN博客asdsadasdCSDN博客asdsadasd</div>
            </el-col>
          </el-row>
          </div>
          <el-divider></el-divider>
          
        </el-card>
      </el-col>
</template>

<script>
export default {
  name: "left",
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    };
  }
};
</script>
<style lang="less" scoped>
.span-style() {
  display: inline-block;
  margin: 0.5rem 1rem 1rem 0;
  color: #7f8c8d;
  font-size: 0.87rem;
}
.container {
  .left-list {
    padding: 0 1rem;
    .content{
      margin-bottom: 2.5rem;
    }
    .clearfix {
      span {
        color: #2c3e50;
      }
    }
    .content-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0;
      a:visited {
        color: #3498db;
      }
      a {
        color: #3498db;
      }
    }
    .content-date {
      .span-style();
    }
    .content-des {
      .span-style();
    }
    .content-summary{
      padding: 0 .5rem;
      color: #636e72;
      line-height: 1.5rem;
    }
  }
  .el-card {
    margin: 1rem 0;
  }
}
</style>