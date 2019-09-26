<!-- 组件描述 -->
<template>
<div class="blog">
  <template v-for="blogItem in blogs">
    <blog-block :key="blogItem.id" :blogData='blogItem'></blog-block>
  </template>
</div>
</template>

<script>
import blogBlock from '../../components/blog-block'

export default {
components: {
  blogBlock
},
data() {
  return {
    blogs: []
  };
},
computed: {},
watch: {},
created() {
  this.getBlogs()
},
mounted() {},
methods: {
  getBlogs() {
    this.$axios({
      url: '/blogs',
      method: 'get',
    }).then(res => {
      const data = res.data

      if (data.passed) {
        this.blogs = data.result
      } else {
        this.$message.error(data.message)
      }
    }).catch(err => {
      console.log(err)
    })
  },

  toDetail(e) {
    console.log(e)
  }
}
}
</script>
<style lang='less' scoped>
</style>