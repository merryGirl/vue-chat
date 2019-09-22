/* eslint-disable prettier/prettier */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from './plugins/axios'

Vue.use(Vuex)

const INIT_QUSER = 'INIT_QUSER';  

export default new Vuex.Store({
  state: {
    quser: {},
  },
  getters: {
    quser: state => state.quser,
  },
  mutations: {
    [INIT_QUSER](state, { userData }) {
      state.quser = userData;
    }
  },
  actions: {
    // 初始化quser
    initQuser({commit}) {
      axios
        .get('/currentUser')
        .then(res => {
          if (res && res.data.passed) {
            let userData = res.data.result;
            commit(INIT_QUSER, { userData });
          }  else if (res && res.data.code == 558) {
            let userData = {};
            commit(INIT_QUSER, { userData });
          } 
        })
        .catch(err => {
          console.log(err);
        });
    },
  }
})