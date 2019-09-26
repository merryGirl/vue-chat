<!-- 组件描述 -->
<template>
<div class="user-center">
  <h2>个人资料</h2>

  <form>
    <label for="headImg">头像</label>
    <!-- <img :src="user.headImg"> -->
    <br />
    <div v-for="(infoVal, infoKey, infoIndex) in userData" :key="infoIndex" class="form-item">
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
import { mapGetters, mapActions } from 'vuex'

export default {
components: {},
data() {
  return {
    focusPoint: '',
  };
},
computed: {
  localLang() {
    return this.$i18n.locale
  },

  ...mapGetters({
    userData: 'quser',
  }),
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
created() {
  this.initUserData();
},
mounted() {},
methods: {
  initUserData() {
    this.$store.dispatch('initQuser');
  },

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