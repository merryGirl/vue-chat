<template>
  <div class="hide-input">
    <input type="text" autocomplete="off" placeholder="请输入您的登录邮箱" name="email" class="el-input__inner">
    <input type="password" autocomplete="off" placeholder="6-16位密码，区分大小写" name="password" class="el-input__inner">
    <input type="password" autocomplete="new-password" placeholder="请输入您的原密码" class="el-input__inner" aria-autocomplete="list">
  </div>
</template>

<script>

export default {
components: {},
data() {
  return {

  };
},
}
</script>
<style lang='less' scoped>
.hide-input {
  position: absolute;
  top: -1000px;
}
</style>