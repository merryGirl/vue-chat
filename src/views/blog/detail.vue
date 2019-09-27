<!-- 组件描述 -->
<template>
<div class="blog-detail">
  <ul class="action-left">

  </ul>

  <div class="detail-wrapper main-area">
    <div class="main-content">
      <div class="author-info-block ">
        <a href="" class="main-title">{{ detailData.publishUser }}</a>
        <div class="sub-title">{{ detailData.publishTime }}</div>
      </div>
      <div v-html="detailData.content"></div>
    </div>

    <div class="sidebar">
      <!-- 关于作者 -->
    </div>
  </div>
</div>
</template>

<script>

export default {
components: {},
data() {
  return {
    detailData: {}
  };
},
computed: {
  detailId() {
    return this.$route.params.detailId
  }
},
watch: {},
created() {
  this.getDetailData()
},
mounted() {},
methods: {
  getDetailData() {
    this.$axios({
      url: '/blog/detail',
      method: 'get',
      params: {
        id: this.detailId
      }
    }).then(res => {
      const data = res.data

      if (data.passed) {
        this.detailData = data.result
      } else {
        this.$message.error(data.message)
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
}
</script>
<style lang='less' scoped>
.blog-detail {
  display: flex;
  justify-content: center;
  .detail-wrapper {
    .main-content {
      .author-info-block {
        text-align: left;
        padding: 10px;
        a {
          color: #333;
        }
      }
    }
  }
}
</style>