<template>
<div class="edit-wrapper">
  <div class="article-title">
   <el-input v-model="article.title" placeholder="请输入文章标题"></el-input>
   <el-button @click="toggleType">{{editText}}</el-button>
   <el-button @click="publish">发布</el-button>
  </div>
  <div class="article-content">
    <mavon-editor v-if="editType == 1" @contentChange="contentChange"></mavon-editor>
    <quill-editor v-else></quill-editor>
  </div>
</div>
</template>

<script>
import mavonEditor from './markdown'
import quillEditor from './editor'
import marked from 'marked'
import { mapGetters, mapActions } from 'vuex'

export default {
components: {
  mavonEditor,
  quillEditor
},
data() {
  return {
    article: {
      title: '',
      content: ''
    },
    editType: 1,               //1:markdown  2:editor
  };
},
computed: {
  editText() {
    return this.editType == 1 ? 'editor' : 'markdown';
  },

  ...mapGetters({
    userData: 'quser',
  }),
},
watch: {},
created() {},
mounted() {},
methods: {
  toggleType() {
    this.editType = this.editType == 1 ? 2 : 1
  },

  contentChange(val) {
    if (this.editType == 1) {
      this.article.content = marked(val)
    }
  },

  publish() {
    let time = new Date()

    this.$axios({
      url: '/publish',
      method: 'post',
      data: {
        title: this.article.title,
        content: this.article.content,
        publishUser: this.userData.name && this.userData.name.length ? this.userData.name : 'merryGirl',
        publishTime: time.toLocaleString()
      }
    }).then(res => {
      const data = res.data

      if (data.passed) {
        this.$message.success(data.message)
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
.edit-wrapper {
  .article-title {
    display: flex;
  }
}
</style>