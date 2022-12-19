import { setItem, getItem } from '@/util/storage.js'
import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'
import variables from '@/style/variable.scss'
export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR,
    variables
  }),
  mutations: {
    setMainColor(state, themecolor) {
      state.variables.menuBg = themecolor
      state.mainColor = themecolor
      setItem(MAIN_COLOR, themecolor)
    }
  },
  actions: {}
}
