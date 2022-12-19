<template>
  <div class="navbar">
    <Hanburger class="hamburger-container" />
    <Breadcrumb id="guide-breadcrumb" />
    <div class="right-menu">
      <Guide class="right-menu-item hover-effect" />
      <HeaderSearch class="right-menu-item hover-effect" />
      <ThemeSelect class="right-menu-item hover-effect" />
      <Screenfull class="right-menu-item hover-effect" />
      <LangSelect class="right-menu-item hover-effect" />
      <Avatar class="right-menu-item" />
    </div>
  </div>
</template>

<script setup>
import Avatar from '@/components/Avatar'
import Hanburger from '@/components/Hanburger'
import LangSelect from '@/components/LangeSelect'
import Screenfull from '@/components/Screenfull'
import Breadcrumb from '@/components/Breadcrumb'
import ThemeSelect from '@/components/ThemeSelect'
import HeaderSearch from '@/components/HeaderSearch'
import Guide from '@/components/Guide'
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
    .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }
  }
}
</style>
