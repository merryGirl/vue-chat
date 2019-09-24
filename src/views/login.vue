<template>
<div class="login">
  <el-form :model="user" :rules="rules" status-icon ref="ruleForm">
    <template v-if="formType == 'login'">
      <el-form-item prop="email" label="账户：">
        <el-input v-model.trim="user.email" placeholder="请输入您的登录邮箱" name="email">
          <i slot="prefix" class="el-input__icon el-icon-message"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="pass" label="密码：">
        <el-input v-model.trim="user.pass" placeholder="6-16位密码，区分大小写" type="password" name="password">
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
      </el-form-item>
    </template>

    <template v-if="formType == 'registered'">
      <hide-pass></hide-pass>

      <el-form-item prop="name" label="昵称：">
        <el-input v-model.trim="user.name" placeholder="请输入昵称" name="email">
          <i slot="prefix" class="el-input__icon el-icon-message"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="email" label="账户：">
        <el-input v-model.trim="user.email" placeholder="请输入您的登录邮箱" name="email">
          <i slot="prefix" class="el-input__icon el-icon-message"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="pass" label="密码：">
        <el-input v-model.trim="user.pass" placeholder="6-16位密码，区分大小写" type="password" name="password">
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="passConfirm" label="确认密码：">
        <el-input v-model.trim="user.passConfirm" placeholder="确认密码" type="password" name="password">
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="graphicCode" label="验证码：">
        <el-input v-model.trim="user.graphicCode" placeholder="请输入验证码">
          <i slot="prefix" class="el-input__icon icon-font icon-safe"></i>
          <template slot="append">
          </template>
        </el-input>
        <div class="pointer verify-code" @click="refreshCode">
          <verify-code :identifyCode="identifyCode"></verify-code>
        </div>
      </el-form-item>
    </template>
  </el-form>

  <span @click="changeForm">{{ formConfig[formType].tip }}</span>
  <el-button @click="submit">{{ formConfig[formType].btn }}</el-button>
</div>
</template>

<script>
import hidePass from '../components/hide-pass'
import verifyCode from '../components/identify'

export default {
components: {
  hidePass,
  verifyCode
},
data() {
  let verifyEmail = (rule, value, callback) => {
    let reg =  /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
    if (!value) {
      callback(new Error('请输入邮箱'))
    } else {
      if (!reg.test(value)) {
        callback(new Error('请输入正确邮箱格式'))
      }
      callback()
    } 
  }

  let verifyPass = (rule, value, callback) => {
    let reg = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,16}$/

    if (value === '') {
      callback(new Error('密码不得为空'))
    } else {
      if (!reg.test(value)) {
        callback(new Error('密码6-16字符，并同时包含字母和数字'))
      }
      callback()
    } 
  }

  let verifyPassConfirm = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请再输入一遍新密码'))
    } else {
      if (value !== this.user.pass) {
        callback(new Error('两次输入的密码不一致'))
      }
      callback()
    }
  }

  let verifyName = (rule, value, callback) => {
    if (!value) {
      callback(new Error('请输入昵称'))
    } else {
      let str = this.$utils.strDetection('userName', value);

      if (value.length > 20) {
        callback(new Error('昵称不得超过20个字符'))
      } else if (str.length) {
        callback(new Error(`昵称不得含有特殊字符:  ${str.join('   ')}`))
      }
      callback()
    }
  }

  return {
    formType: 'login',                 //login、registered
    formConfig: {
      login: {
        btn: '登录',
        tip: '忘记密码？注册'
      },
      registered: {
        btn: '注册',
        tip: '返回登录'
      }
    },
    user: {
      email: '',
      pass: '',
      passConfirm : '',
      name: '',
      graphicCode: ''
    },
    rules: {
      email: [
        {required: true, validator: verifyEmail, trigger: 'blur'}
      ],
      pass: [
        {required: true, validator: verifyPass, trigger: 'blur'}
      ],
      passConfirm: [
        {required: true,  validator: verifyPassConfirm, trigger: 'blur'}
      ],
      name: [
        {required: true, validator: verifyName, trigger: 'blur'}
      ],

    },
    identifyCode: '1234',
    identifyCodes: 'a1b2c3d4e5f67g8h9i0jklmn4opqrst5uv6wxyzABCD2EF7GHIJ8KLM3N9OPQRS0TU1VW4XYZ',
  }
},
computed: {},
filters: {
},
watch: {
  formType: {
    handler: function(nv, ov) {
      this.refreshForm()
    }
  },
},
created() {},
mounted() {
  this.identifyCode = "";
  this.makeCode(this.identifyCodes, 4);
},
methods: {
  changeForm() {
    this.formType = this.formType == 'login' ? 'registered' : 'login'
  },

  // 表单重置
  refreshForm() {
    Object.assign(this.$data.user, this.$options.data().user)

    this.$nextTick(() => {
      this.$refs['ruleForm'] && this.$refs['ruleForm'].resetFields()
    })
  },

  submit() {
    let loginParams = {
      method: 'post',
      url: '/user/login',
      data: {
        email: this.user.email,
        pass: this.user.pass
      },
    }
    let registeredParams = {
      method: 'post',
      url: '/user/registered',
      data: {
        name: this.user.name,
        pass: this.user.pass,
        email: this.user.email
      },
    }
  
    let paramsObj = this.formType == 'login' ? loginParams : registeredParams

    this.$refs['ruleForm'].validate((valid) => {
      if (valid) {
        this.$axios(paramsObj).then(res => {
          const data = res.data
    
          if (data.code == 200) {
            this.$message.success(`${this.formConfig[this.formType].btn}成功！`)
            this.$router.push({ path: '/' })
          } else {
            this.$message.error(data.message)
          }
        }).catch(err =>  {
            console.error(err)
          }
        )
      } else {
        return false
      }
    })
  },

  refreshCode() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },

  makeCode(o, l) {
    for (let i = 0; i < l; i++) {
      this.identifyCode += o[
        this.randomNum(0, o.length)
      ];
    }
  },

  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
}
}
</script>

<style lang='less'>
.login {
  .el-form {
    width: 500px;
    margin: 0 auto;
  }

}
</style>
<style lang='less' scoped>
.login {
  
}
</style>