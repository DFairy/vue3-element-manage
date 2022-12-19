import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import installIcon from './icons'
import i18n from './i18n'
import 'element-plus/dist/index.css'
import './style/common.scss'
import './permission.js'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
const app = createApp(App)
installIcon(app)
app.use(ElementPlus, {
  locale: store.getters.language === 'en' ? en : zhCn
})
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')
