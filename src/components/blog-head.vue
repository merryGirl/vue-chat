<template>
<header>
  <div class="container">

    <div class="logo">

    </div>
    <ul>
      <li @click="routerSkip('/')">{{ $t('headNav.main') }}</li>
      <li @click="routerSkip('/hotBlog')">{{ $t('headNav.hot') }}</li>
      <li @click="routerSkip('/community')">{{ $t('headNav.community') }}</li>
      <li>
        <el-input 
          size="mini" 
          suffix-icon="el-icon-search"
          v-model="searchVal"
          :placeholder="$t('headNav.searchHolder')"></el-input>
      </li>
      <li><i class="el-icon-message-solid" @click="routerSkip('/notifications')"></i></li>
      <li @click="routerSkip('/edit')">
        <el-button type="warning" size="mini" round>{{ $t('headNav.issue') }}</el-button>
      </li>
      <li @click="changeLang" class="pointer">
        {{ $i18n.locale | langText }}
      </li>
      <li>
        <el-dropdown>
          <span class="el-dropdown-link">
            头像
          </span>
          <el-dropdown-menu slot="dropdown" class="head-dropdown">
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
    }],
    searchVal: ''
  };
},
computed: {},
filters: {
  langText(val) {
    return val == 'zh' ? 'EN' : '中';
  }
},
watch: {
},
created() {},
mounted() {},
methods: {
  changeLang() {
    this.$i18n.locale = this.$i18n.locale == 'zh' ? 'en' : 'zh';
  },

  routerSkip(pathName) {
    this.$router.push({ path: pathName });
  }

}
}
</script>
<style lang='less' scoped>
header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: @mian-head-bg-color;
  border-bottom: 1px solid #f1f1f1;
  .container {
    max-width: 960px;
    margin: auto;
    ul {
      display: flex;
      li {
        padding: 0 10px;
      }
    }
  }

}
</style>