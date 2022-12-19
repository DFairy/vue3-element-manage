<template>
  <el-dropdown @command="selectLang">
    <span>
      <svg-icon id="guide-lang" icon="language" />
    </span>
    <template #dropdown>
      <el-dropdown-item :disabled="language == 'zh'" command="zh"
        >中文</el-dropdown-item
      >
      <el-dropdown-item :disabled="language == 'en'" command="en"
        >English</el-dropdown-item
      >
    </template>
  </el-dropdown>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { ElMessage } from 'element-plus'
const store = useStore()
const i18n = useI18n()
const language = computed(() => store.getters.language)
const selectLang = (lang) => {
  console.log(lang)
  i18n.locale.value = lang
  store.commit('app/setLanguage', lang)
  ElMessage({
    message: i18n.t('msg.toast.switchLangSuccess'),
    type: 'success'
  })
}
</script>

<style></style>
