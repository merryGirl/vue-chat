<!-- 组件描述 -->
<template>
<div class="user-center">
  <h2>个人资料</h2>

  <form>
    <label for="headImg">头像</label>
    <img :src="user.headImg">
    <br />
    <div v-for="(infoVal, infoKey, infoIndex) in user" :key="infoIndex" class="form-item">
      <template v-if="infoKey != 'headImg'">
        <!-- <label :for="infoKey">{{ $t(`userInfo[${infoKey}]`) }}</label> -->
        <label :for="infoKey">{{ infoKey | keyLabel }}</label>
        <div @click.stop="modifyInfo(infoKey)">
          <input :name="infoKey" :id="infoKey" :placeholder="infoVal" class="no-style-input"/>

          <div class="handle-btn">
            <template v-if="focusPoint == infoKey">
              <span>保存</span>
              <span>取消</span>
            </template>
            <span v-else>修改</span>
          </div>
        </div>
      </template>
    </div>
  </form>
</div>
</template>

<script>

export default {
components: {},
data() {
  return {
    user: {
      headImg: 'https://user-gold-cdn.xitu.io/2019/3/13/169778478164f607?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
      name: 'merryGirl',
      position: '前端', 
      company: '公司',
      introduction: '我是一只快乐的蓝精灵',
    },
    focusPoint: '',
  };
},
computed: {
  localLang() {
    return this.$i18n.locale;
  }
},
filters: {
  keyLabel: function(val) {
    let labelObj = {    
      headImg: '头像',                    
      name: '昵称',
      position: '职位',
      company: '公司',
      introduction: '简介'
    }
    return labelObj[val];
  }
},
watch: {},
created() {},
mounted() {},
methods: {
  modifyInfo(val) {
    this.focusPoint = val;
  }
}
}
</script>
<style lang='less' scoped>
.user-center {
  .no-style-input {
    background-color: transparent;
    border: none;
    &:focus {
      outline: none
    }
  }

  form {
    .form-item {
      display: flex;
      .handle-btn {
        display: inline-block;
      }
    }
  }

}
</style>