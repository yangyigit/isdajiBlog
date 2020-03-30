<template>
  <!-- 右边内容 -->
  <el-col :md="8" :lg="8" :xl="8" class="right-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="right-list-title">个人简介</span>
      </div>
      <div class="author-introduction">
        <div class="author-introduction-img-wrap"><img src="~/static/img/contentimg.jpg" class="author-introduction-img" alt /></div>
        <div class="author-des">{{siteInfo.site_information}}</div>
      </div>
      <el-divider content-position="center">社交账号</el-divider>
      <div class="accounts">
        <el-tooltip class="accounts-item" effect="dark" :content="siteInfo.site_contact[0]" placement="top">
          <el-button>
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-tubiao215
"></use></svg>QQ
          </el-button>
        </el-tooltip>
        <el-tooltip class="accounts-item" effect="dark" :content="siteInfo.site_contact[1]" placement="top">
          <el-button>
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-weixin
"></use></svg>微信
          </el-button>
        </el-tooltip>
        <el-tooltip class="accounts-item" effect="dark" :content="siteInfo.site_contact[2]" placement="top">
          <el-button>
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-github

"></use></svg>GitHub
          </el-button>
        </el-tooltip>
        <el-tooltip class="accounts-item" effect="dark" :content="siteInfo.site_contact[3]" placement="top">
          <el-button>
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-youxiang
"></use></svg>邮箱
          </el-button>
        </el-tooltip>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="right-list-title">友情链接</span>
      </div>
      <div class="right-tools" v-for="item in links" :key="item.id">
        <span>{{item.name}}</span>
        <span>:</span>
        <a :href="item.url" :target="item.target">{{item.url}}</a>
        <el-divider></el-divider>
      </div>
    </el-card>
  </el-col>
</template>

<script>
export default {
  name: "right",
  props:{
    siteInfo:Object,
    links:Array
  },
  mounted(){
    console.log(this.links)
  }
};
</script>
<style lang="less" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
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
    .author-introduction-img-wrap{
      overflow: hidden;
      border-radius: 50%;
      img {
        object-fit: cover;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transition: all 0.6s;  
      }
      img:hover {
        transform: scale(1.5);
      }
    }
    .author-des {
      padding: 1rem 4rem;
      font-size: 0.87rem;
      color: #636e72;
      line-height: 1.2rem;
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