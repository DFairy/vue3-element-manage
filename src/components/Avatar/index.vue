<template>
  <el-dropdown>
    <div class="avatar-wrapper">
      <el-avatar :size="40">admin</el-avatar>
      <i class="el-icon-s-tools"></i>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <a target="_blank" href="">
          <el-dropdown-item> {{ $t('msg.navBar.link') }}</el-dropdown-item>
        </a>
        <el-dropdown-item divided @click="logout">
          {{ $t('msg.navBar.logout') }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.avatar-wrapper {
  cursor: pointer;
  margin-top: 5px;
  position: relative;
  .el-avatar {
    --el-avatar-background-color: none;
    margin-right: 12px;
  }
}
</style>
