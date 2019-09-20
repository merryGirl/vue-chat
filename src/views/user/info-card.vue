<!-- 用户信息 -->
<template>
<div class="user-info">
  信息卡系您了啊
  <!-- <div class="head">头部信息</div> -->
  <div class="middle">

    <div class="footer">
      中间底部信息
    </div>
  </div>
</div>
</template>

<script>
import less from 'less'
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
methods: {

}
}
</script>
<style lang='less' scoped>
.user-info {
  .head {
    position: fixed;
    width: 100%;
    height: 80px;
    top: 0;
    background-color: antiquewhite;
  }
  .middle {
    width: 200px;
    height: 200px;
    // height: calc(100vh - 105px);
    border: 1px solid red;
    overflow-y: scroll;
    margin: 0 auto;
    margin-top: 80px;
    .footer {
      width: 200px;
      position: absolute;
      bottom: 0;
      color: @grey-dark;
      border: 2px solid forestgreen;
    }
  }
}
</style>
