<template>
<header>
  <div class="container">

    <div class="logo">

    </div>
    <ul>
      <li>首页</li>
      <li>沸点</li>
      <li>社区</li>
      <li>
        <el-input placeholder="请输入搜索关键字"></el-input>
      </li>
      <li>发布文章</li>
      <i class="el-icon-message-solid"></i>
      <li>
        <router-link to="/userInfo">头像</router-link>
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