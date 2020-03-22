<template>
  <!-- 右边内容 -->
  <el-col :md="8" :lg="8" :xl="8" class="right-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="right-list-title">个人简介</span>
      </div>
      <div class="author-introduction">
        <img src="~/static/img/contentimg.jpg" alt />
        <div class="author-des">萨达萨达所大所大所大所多as打算大所大所的萨达萨达所大所大所大所多所多所多所多所多所多</div>
      </div>
      <el-divider content-position="center">社交账号</el-divider>
      <div class="accounts">
        <el-tooltip class="accounts-item" effect="dark" content="Top Center 提示文字" placement="top">
          <el-button>
            <i class="el-icon-user-solid">QQ</i>
          </el-button>
        </el-tooltip>
        <el-tooltip class="accounts-item" effect="dark" content="Top Center 提示文字" placement="top">
          <el-button>
            <i class="el-icon-user-solid">微信</i>
          </el-button>
        </el-tooltip>
        <el-tooltip class="accounts-item" effect="dark" content="Top Center 提示文字" placement="top">
          <el-button>
            <i class="el-icon-user-solid">码云</i>
          </el-button>
        </el-tooltip>
        <el-tooltip class="accounts-item" effect="dark" content="Top Center 提示文字" placement="top">
          <el-button>
            <i class="el-icon-user-solid">公众号</i>
          </el-button>
        </el-tooltip>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="right-list-title">常用工具</span>
      </div>
      <div class="right-tools">
        <span>工具名称：</span>
        <a href="http://www.baidu.com">http://www.baidu.com</a>
      </div>
      <el-divider></el-divider>
            <div class="right-tools">
        <span>工具名称：</span>
        <a href="http://www.baidu.com">http://www.baidu.com</a>
      </div>
      <el-divider></el-divider>
            <div class="right-tools">
        <span>工具名称：</span>
        <a href="http://www.baidu.com">http://www.baidu.com</a>
      </div>
      <el-divider></el-divider>
    </el-card>
  </el-col>
</template>

<script>
export default {
  name: "right"
};
</script>
<style lang="less" scoped>
.right-list {
  padding: 0 1rem;
  .clearfix {
    text-align: center;
  }
  .author-introduction {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      object-fit: cover;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .author-des {
      padding: 1rem 4rem;
      font-size: 0.87rem;
      color: #636e72;
    }
  }
  .accounts {
    display: flex;
    justify-content: center;
    .accounts-item {
      flex: 1;
      text-align: center;
    }
  }
}
.el-card {
  margin: 1rem 0;
}
</style>