<template>
      <!-- 左边内容 -->
      <el-col :md="16" :lg="16" :xl="16" class="left-list">
        
        <el-card class="box-card" v-for="item of info" :key="item.id">
          <!-- 内容 -->
          <div class="content">
          <h2 class="content-title">
             <nuxt-link :to="{name:'artchive',params:{newsId:3306}}">{{item.title}}</nuxt-link>
          </h2>
          <span class="content-date">{{item.date}}</span>
          <span class="content-des">{{item.keyword}}</span>
          <i class="el-icon-collection-tag
"></i>
          <el-tag size="mini">php</el-tag>
          <el-row :gutter="10">
            <el-col :md="6" :lg="6" :xl="6">
              <div class="block">
                <el-image :src="item.imgUrl" class="content-img">
                  <div slot="placeholder" class="image-slot">
                    加载中
                    <span class="dot">...</span>
                  </div>
                </el-image>
              </div>
            </el-col>
            <el-col :md="18" :lg="18" :xl="18">
              <div class="content-summary"> {{item.desc}}
              </div>
              <el-button style="float: left; padding: 3px 0" type="text">阅读全文</el-button>
              <div class="readnum"><i class="el-icon-reading read-icon"><span>{{item.readnum}}</span></i></div>
            </el-col>
          </el-row>
          </div>
        </el-card>

                <el-card class="box-card">
          <!-- 内容类型 -->
          <div slot="header" class="clearfix">
            <span>关于我</span>
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
                <el-image src="" class="content-img">
                  <div slot="placeholder" class="image-slot">
                    加载中
                    <span class="dot">...</span>
                  </div>
                </el-image>
              </div>
            </el-col>
            <el-col :md="18" :lg="18" :xl="18">
              <div class="content-summary"> 在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具 - AndrewNeo - CSDN博客sdsadasdCSDN博客asdsadasdC
              </div>
              <el-button style="float: left; padding: 3px 0" type="text">阅读全文</el-button>
              <div class="readnum"><i class="el-icon-reading read-icon"></i></div>
            </el-col>
          </el-row>
          </div>
          <el-divider></el-divider>
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
                <el-image src="" class="content-img">
                  <div slot="placeholder" class="image-slot">
                    加载中
                    <span class="dot">...</span>
                  </div>
                </el-image>
              </div>
            </el-col>
            <el-col :md="18" :lg="18" :xl="18">
              <div class="content-summary"> 在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具 - AndrewNeo - CSDN博客sdsadasdCSDN博客asdsadasdC
              </div>
                            <el-button style="float: left; padding: 3px 0" type="text">阅读全文</el-button>
              <div class="readnum"><i class="el-icon-reading read-icon"></i>120</div>
            </el-col>
          </el-row>
          </div>
          <el-divider></el-divider>
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
                <el-image src="" class="content-img">
                  <div slot="placeholder" class="image-slot">
                    加载中
                    <span class="dot">...</span>
                  </div>
                </el-image>
              </div>
            </el-col>
            <el-col :md="18" :lg="18" :xl="18">
              <div class="content-summary"> 在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具 - AndrewNeo - CSDN博客sdsadasdCSDN博客asdsadasdC
              </div>
                            <el-button style="float: left; padding: 3px 0" type="text">阅读全文</el-button>
              <div class="readnum"><i class="el-icon-reading read-icon"></i>120</div>
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
  props:{
    info:Array
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
      min-height: 7.5rem;
    }
    .readnum{
      float: right;
      .read-icon{
        padding: 0 .2rem;
        span{
          padding: 0 .2rem;
        }
      }
    }
  }
  .el-card {
    margin: 1rem 0;
  }
}
</style>