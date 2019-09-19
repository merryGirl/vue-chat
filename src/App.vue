<template>
  <div id="app">
    <blog-head></blog-head>
    <router-view></router-view>
  </div>
</template>

<script>
import blogHead from './components/blog-head'

export default {
  name: 'app',
  components: {
    blogHead
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
