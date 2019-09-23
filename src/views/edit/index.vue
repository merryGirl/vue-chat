<template>
<div class="edit-wrapper">
  <div class="article-title">
   <el-input v-model="article.title" placeholder="请输入文章标题"></el-input>
   <el-button @click="toggleType">{{editText}}</el-button>
  </div>
  <div class="article-content">
    <mavon-editor v-if="editType == 1" @contentChange="contentChange"></mavon-editor>
    <quill-editor v-else></quill-editor>
  </div>


  <div v-html="article.content"></div>
</div>
</template>

<script>
import mavonEditor from './markdown'
import quillEditor from './editor'
import marked from 'marked'

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

},
watch: {},
created() {},
mounted() {},
methods: {
  toggleType() {
    this.editType = this.editType == 1 ? 2 : 1;
  },

  contentChange(val) {
    if (this.editType == 1) {
      this.article.content = marked(val);
    }
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