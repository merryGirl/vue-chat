/* eslint-disable prettier/prettier */
import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import enLang from './en'
import zhLang from './zh'

Vue.use(Vuei18n)

const messages = {
  en: {
    ...enLang,
  },
  zh: {
    ...zhLang,
  }
};

const i18n = new Vuei18n({
  locale: 'zh-CN',
  messages
})

export default i18n
