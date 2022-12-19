<template>
  <div class="sidebar-container" id="guide-sidebar">
    <div class="logo-container">
      <el-avatar :size="logoHeight">C</el-avatar>
      <h1 class="logo-title" v-if="$store.getters.sidebaropend">
        {{ $t('msg.login.title') }}
      </h1>
    </div>
    <el-scrollbar>
      <SideBarMenu />
    </el-scrollbar>
  </div>
</template>

<script setup>
import SideBarMenu from './SidebarMenu.vue'
const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
