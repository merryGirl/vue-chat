<template>
<header>
  <div class="container">

    <div class="logo">

    </div>
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>沸点</li>
      <li>社区</li>
      <li>
        <el-input placeholder="请输入搜索关键字"></el-input>
      </li>
      <li>发布文章</li>
      <i class="el-icon-message-solid"></i>
      <li>
        <el-dropdown>
          <span class="el-dropdown-link">
            头像
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(userItem, userIndex) in userConfig" :key="userIndex">
              <router-link :to="userItem.path">{{userItem.name}}</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
  </div>
</header>
</template>

<script>

export default {
components: {},
data() {
  return {
    userConfig: [{
      name: '主页',
      path: '/userHomepage'
    },{
      name: '登出',
      path: '/login'
    }]
  };
},
computed: {},
watch: {},
created() {},
mounted() {},
methods: {}
}
</script>
<style lang='less' scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #f1f1f1;
  .container {
    max-width: 960px;
    ul {
      display: flex;
    }
  }

}
</style>