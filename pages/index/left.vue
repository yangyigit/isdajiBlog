<template>
      <!-- 左边内容 -->
      <el-col :md="16" :lg="16" :xl="16" class="left-list">
        
        <el-card class="box-card" v-for="item of info" :key="item.id">
          <!-- Page内容 -->
          <div class="content">
          <h2 class="content-title">
             <nuxt-link :to="{name:'page',params:{id:item.id}}">{{item.post_title}}</nuxt-link>
          </h2>
          <span class="content-date">{{item.create_time}}</span>
          <i class="el-icon-collection-tag
"></i>
          <el-tag size="mini">{{item.post_keywords}}</el-tag>
          <el-row :gutter="10">
            <el-col :md="6" :lg="6" :xl="6">
              <div class="block">
                <el-image :src="item.more.thumbnail" class="content-img">
                  <div slot="placeholder" class="image-slot">
                    加载中
                    <span class="dot">...</span>
                  </div>
                </el-image>
              </div>
            </el-col>
            <el-col :md="18" :lg="18" :xl="18">
              <div class="content-summary"> {{item.post_excerpt}}
              </div>
              <el-button style="float: left; padding: 3px 0" type="text"><nuxt-link :to="{name:'page',params:{id:item.id}}" class="read_more">阅读全文</nuxt-link></el-button>
              <div class="readnum"><i class="el-icon-reading read-icon"><span>{{item.post_hits}}</span></i></div>
            </el-col>
          </el-row>
          </div>
        </el-card>

        <el-card class="box-card" v-for="art of resart" :key="art.category_id">
          <!-- 内容类型 -->
          <div slot="header" class="clearfix">
            <span>{{art.name}}</span>
          </div>
          <!-- 内容 -->
          <div class="content" v-for="content of art.child" :key="content.id">
          <h2 class="content-title">
            <nuxt-link :to="{name:'articles',params:{id:content.id}}">{{content.post_title}}</nuxt-link>
          </h2>
          <span class="content-date">{{content.published_time}}</span>
          <span class="content-des">{{art.name}}</span>
          <i class="el-icon-collection-tag
"></i>
          <el-tag size="mini">{{content.post_keywords}}</el-tag>
          <el-row :gutter="10">
            <el-col :md="6" :lg="6" :xl="6">
              <div class="block">
                <el-image :src="content.more.thumbnail" class="content-img">
                  <div slot="placeholder" class="image-slot">
                    加载中
                    <span class="dot">...</span>
                  </div>
                </el-image>
              </div>
            </el-col>
            <el-col :md="18" :lg="18" :xl="18">
              <div class="content-summary">{{content.post_excerpt}}</div>
              <el-button style="float: left; padding: 3px 0" type="text"><nuxt-link  class="read_more" :to="{name:'articles',params:{id:content.id}}">阅读全文</nuxt-link></el-button>
              <div class="readnum"><i class="el-icon-reading read-icon"><span>{{content.post_hits}}</span></i></div>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          </div>
        </el-card>
        
      </el-col>
</template>

<script>
export default {
  name: "left",
  props:{
    info:Array,
    resart:Object
  }
};
</script>
<style>
  .content:last-child .el-divider{
    background-color: #ffffff;
    height: 0;
  }
</style>
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
      min-height: 11.5rem;
    }
    .read_more{
      color: #3498db;
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