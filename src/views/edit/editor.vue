<template>
<div class="editor-wrapper">
  <quill-editor 
    ref="quillEditor"
    v-model="quillEditorContent"
    :options="editorOption">
  </quill-editor>
</div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'

export default {
components: {
  quillEditor 
},
props:{
},
data() {
  const toolbarOptions = [
    [{'header': [1, 2, 3, 4, 5, 6, false]}],            // 设置字体大小
    [{'header': 1}, {'header': 2}],
    [{'align': []}],                                    // 排布问题（居中、居左、居右）
    [{'indent': '-1'}, {'indent': '+1'}],              //缩进
    ['bold', 'italic', 'underline', 'strike'],            // 黑体、斜体、下划线、删除线
    [{'list': 'ordered'}, {'list': 'bullet'}],         //列表排列（序号、点号）
    [{'color': []}, {'background': []}],                   // 字体颜色、字体背景色
    ['clean'],                                               //格式化
    ['code-block']                                       //代码块
  ];

  return {
    editorOption: {
      modules: {
        toolbar: {
          container: toolbarOptions,
        }
      }
    },
    quillEditorContent: '',                        //富文本内容
  };
},
computed: {

},
watch: {

},
created() {},
mounted() {},
methods: {
 
},
}
</script>

<style lang='less' scoped>
.editor-wrapper {
  .img-upload {
    display: none;
  }
}
</style>