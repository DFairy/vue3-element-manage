<template>
  <div class="profile">
    <el-row>
      <el-col :span="24">
        <div class="user-card">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>{{ $t('msg.profile.projectIntroduction') }}</span>
              </div>
            </template>
            <div>
              {{ $t('msg.profile.introduction') }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.profile {
  .user-card {
    margin-right: 20px;
  }
}
</style>
