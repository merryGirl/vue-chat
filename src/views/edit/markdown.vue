<!-- 组件描述 -->
<template>
<div class="md-edit">
  <mavon-editor v-model="value"/>
</div>
</template>

<script>

export default {
components: {},
props: {

},
data() {
  return {
    value: ''
  };
},
computed: {},
watch: {
  value: {
    handler: function(nv) {
      this.$emit('contentChange', nv)
    }
  }
},
created() {},
mounted() {},
methods: {}
}
</script>
<style lang='less' scoped>
</style>