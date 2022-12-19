<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebaropend ? 'openSidebar' : 'hideSidebar']"
  >
    <sidebar :style="{ backgroundColor: $store.getters.cssVar.menuBg }" />
    <div class="main-container">
      <div class="fixed-header">
        <nav-bar />
        <tags-view />
      </div>
      <app-main> </app-main>
    </div>
  </div>
</template>

<script setup>
import AppMain from './components/AppMain.vue'
import NavBar from './components/NavBar.vue'
import Sidebar from './components/Sidebar'
import TagsView from '@/components/TagsView'
</script>

<style lang="scss" scoped>
@import '~@/style/variable.scss';
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - $sideBarWidth);
  transition: width $sideBarDuration;
  z-index: 99;
}
.hideSidebar .fixed-header {
  width: calc(100% - $hideSideBarWidth);
}
</style>
