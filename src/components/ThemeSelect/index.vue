<template>
  <el-dropdown @command="handleCommand">
    <svg-icon icon="change-theme" className="svg" id="guide-theme" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t('msg.theme.themeColorChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <div>
    <SelectColor v-model="selectColorVisible" />
  </div>
</template>

<script setup>
import SelectColor from './component/SelectColor.vue'
import { ref } from 'vue'
const selectColorVisible = ref(false)
const handleCommand = (command) => {
  console.log(command)
  selectColorVisible.value = true
}
</script>

<style>
.svg {
  padding: 0 18px 0 0;
  font-size: 24px;
  color: #5a5e66;
  vertical-align: text-bottom;
  cursor: pointer;
}
</style>
