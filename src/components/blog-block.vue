<!-- blog block -->
<template>
<div class="blog-block" @click="skipDetail">
  <div class="blog-info">
    <div class="sub-title">{{ blogData.publishUser }}{{ blogData.publishTime }}</div>
    <div class="main-title">{{ blogData.title }}</div>
  </div>
  
  <ul class="action-list">
    <li><i class="el-icon-thumb"></i>{{ blogData.starIds.length }}</li>
    <li><i class="el-icon-star-on"></i>{{ blogData.collectIds.length }}</li>
  </ul>
</div>
</template>

<script>

export default {
components: {},
props: {
  blogData: {
    type: Object,
  },
},
data() {
  return {

  };
},
computed: {},
watch: {},
created() {},
mounted() {},
methods: {
  skipDetail() {
    this.$router.push({
      path: `/blogDetail/${this.blogData.id}`
    })
  }
}
}
</script>
<style lang='less' scoped>
.blog-block {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(178,186,194,.15);
  .blog-info {
    text-align: left;
  }
  .action-list {
    color: #b2bac2;
    i {
      display: inline-block;
      padding-right: 6px;
    }
  }
}
</style>