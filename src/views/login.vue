<!-- 组件描述 -->
<template>
<div class="login">
  {{userData}}
</div>
</template>

<script>

export default {
components: {},
data() {
  return {
    userData: [],
  };
},
computed: {},
watch: {},
created() {
  this.getUser();
},
mounted() {},
methods: {
  getUser() {
    this.axios({
      url: '/user/login',
      method: 'get',
    }).then(res => {
      const data = res.data;
      
      if (data.passed) {
        this.userData = data.result;
      } else {
      }
    }).catch(err => {
      console.log(err)
    })
  }
},
}
</script>
<style lang='less' scoped>
</style>