
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '我是大吉-isdaji',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: '我是大吉-一个不务正业的程序员' },
      { hid: 'keywords', name: 'keywords', content: '博客,web前端,后端,服务器,PHP' },
      { hid: 'description', name: 'description', content: '我是大吉-一个不务正业的程序员,博客、web前端、后端、服务器、PHP' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{
      src: '/js/iconfont.js'
    },
    {
      src: '/js/formatDate.js'
    },
  ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    'normalize.css',
    'assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios:{
    prefix: '/api/',
    proxy: true
  },
  proxy: {
    '/api/': {
      target:'http://admin.isdaji.cn/',
      pathRewrite: {
        '^/api/': '/'
      }
    }
},
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    vendor:['axios']
  }
}
