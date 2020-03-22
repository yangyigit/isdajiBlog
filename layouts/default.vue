<template>
  <div>
    <nav-menu />
    <nuxt />
    <common-footer />
  </div>
</template>

<script>
import NavMenu from './public/NavMenu'
import CommonFooter from './public/CommonFooter'
export default {

  components: { NavMenu,CommonFooter },

}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #ecf0f1;
}
a{
  
    text-decoration: none;
}
</style>
