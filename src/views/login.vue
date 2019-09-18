<template>
<div class="login">
  <p v-if="!name">Please select a user name to enter the chat room</p>
  <select v-model="name">
    <option v-for="userItem in userData" :key="userItem.id" :value="userItem.name">
      {{userItem.name}}
    </option>
  </select>
  <div class="err-text" v-if="errorMsg">{{errorMsg}}</div>
  <div class="handle-btn" v-if="name">
    <button @click="exitRoom">退出聊天室</button>
  </div>
  <mavon-editor v-model="value"/>




  <div v-if="name" class="chat-wrapper">
    <ul>
      <li>好友列表</li>
      <li>群</li>
      <li 
        v-for="userItem in userData" 
        :key="userItem.id"
        :class="{'is-active': userItem.name == chatPeopleName}"
        @click="selcetChat(userItem)">
        {{userItem.name}}
      </li>
    </ul>
    <div class="chat-content">
      <div class="chat-title">{{chatPeopleName ? `正在和${chatPeopleName}聊天` : '当前无聊天对象'}}</div>
      <div class="chat-box">
        <div class="chat-data">

        </div>
        <input placeholder="请输入消息"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
components: {},
data() {
  return {
    userData: [],
    name: '',                            //login name
    chatPeopleName: '',                  
    errorMsg: '',
    value: ''
  };
},
computed: {},
watch: {
  name: {
    handler(nv) {
      if (!nv) {
        this.errorMsg = '必须选择一个用户名才能进入';
      } else {
        this.errorMsg = '';
        if (!localStorage.getItem('vueChatName')) {
          localStorage.setItem('vueChatName', nv);
        }
      }
    }
  }
},
created() {
  this.getUser();
},
mounted() {
  this.name = localStorage.getItem('vueChatName')
},
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
  },

  exitRoom() {
    localStorage.removeItem('vueChatName'); 
    this.name = '';
    this.chatPeopleName = '';
  },

  selcetChat(userVal) {
    this.chatPeopleName = userVal.name;
  }
},
}
</script>
<style lang='less' scoped>
.login {
  margin-top: 60px;
  .err-text {
    font-size: 12px;
    color: red;
  }
  .handle-btn {
    margin: 10px auto;
    button:first-child {
      margin-right: 20px;
    }
  }

  .chat-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    ul {
      padding-left: 0;
      margin: 0;
      list-style: none;
      background-color: #FAFAFA;
      border: 1px solid grey;
      border-right: none;
      li {
        padding: 5px 10px;
        text-align: center;
        cursor: pointer;
        &.is-active {
          background-color: #C9B9B9;
        }
      }
    }
    .chat-content {
      .chat-title {
        border-top: 1px solid grey;
        border-right: 1px solid grey;
      }
      .chat-box {
        .chat-data {
          width: 550px;
          border: 1px solid grey;
          height: 280px;
        }
        input {
          width: 529px;
          height: 32px;
          border-top: none;
          border-color: grey;
          padding-left: 20px;
        }
      }
    }
  }
}
</style>