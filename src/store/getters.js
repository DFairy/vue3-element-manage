import { MAIN_COLOR } from '@/constant'
import { generateColors } from '@/util/theme'
import { getItem } from '@/util/storage'
const getters = {
  language: (state) => state.app.language,
  token: (state) => state.user.token,
  sidebaropend: (state) => state.app.sidebaropend,
  cssVar: (state) => {
    return {
      ...state.theme.variables,
      ...generateColors(getItem(MAIN_COLOR))
    }
  },
  mainColor: (state) => state.theme.mainColor,
  tagsViewList: (state) => state.app.tagsViewList
}
export default getters
