import { login } from '../../api/sys'
import md5 from 'md5'
import { TOKEN } from '../../constant'
import { getItem, setItem } from '@/util/storage.js'
import { setTimeStamp } from '@/util/auth.js'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        // login({
        //   username,
        //   password: md5(password)
        // })
        //   .then((data) => {
        //     console.log(data)
        //     resolve()
        //   })
        //   .catch((err) => {
        //     reject(err)
        //   })
        console.log(username)
        console.log(md5(password))
        setTimeStamp() //保存登陆时间
        this.commit('user/setToken', '1234567890') //设置token
        resolve()
      })
    },
    logout() {
      this.commit('user/setToken', '')
      router.push('/login')
    }
  }
}
