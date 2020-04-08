# isdajiBlog

一个基于vue+nuxtJS+elementUI的个人博客项目

## 项目地址
前台地址：<https://www.mdeditor.com>

## 项目介绍
一个不务正业的php程序员学习vue后写的实战练手项目，也算是迈出了转向全栈工程师的第一步了。

起初本只想做个小项目练练手，在选择项目的过程中发现作为一个2年开发经验的程序猿，竟然还没有一个自己的个人博客，实在有点说不过去。因此借助此次机会把自己的blog上线。

在写的过程中也遇到了不少坑，具体有哪些坑我会在以后的blog中做详细的说明（既然有了就得用起来）。

这个blog项目只是初版，后期还会在慢慢完善，UI设计也是使用的element现有的组件，本人自认为设计美感不强所以有做什么特殊的设计。如果代码有啥问题，还希望各路大神多多指教。

本项目采用了element的前端框架，支持手机端自适应。是前后端完全分离的项目，后端采用的是php（ThinkCMF）[此处跳转](https://gitee.com/yangyigit/personal_blog)。

## 功能列表

- 【首页导航】
- 【首页列表展示】
- 【文章详情页】
- 【文章分页】
- 【评论管理】

## 准备工作
由于后台请求地址不同，请根据自己的情况修改
1、nuxt.config.js
```
  proxy: {
    '/api/': {
      target:'url', //更换服务器地址
      pathRewrite: {
        '^/api/': '/'
      }
    }
}
```
2、pages\lists\_id copy.vue
```
    getListInfo(){
      var that = this;
      //更换服务器地址
     axios.get('http://www.isdaji.com/api/portal/lists/getCategoryPostLists', {
        params: {
          category_id: this.$route.params.id,
          page: that.page,
          page_size: that.page_size
        }
      }).then((res)=>{
       res = res.data
      if(res.code ==1 && res.data){
        this.lists = res.data.list
        this.page_count = res.data.page_count
      }
     })
    }
```


## 安装&发布

```
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```