<template>
  <div id="app">
    <blog-head v-if="routerName != 'login'"></blog-head>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import blogHead from './components/blog-head'

export default {
  name: 'app',
  components: {
    blogHead
  },
  computed: {
    routerName() {
      return this.$route.name
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
}

.head-dropdown {
  li {
    padding: 0;
    a {
      display: block;
      padding: 0 20px;
    }
  }
}
</style>
