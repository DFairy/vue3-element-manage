<template>
  <div class="header-search" :class="{ show: isShow }">
    <svg-icon
      class-name="search-icon"
      icon="search"
      @click.stop="onShowClick"
      id="guide-search"
    />
    <el-select
      ref="headerSearchSelectRef"
      class="header-search-select"
      v-model="search"
      filterable
      default-first-option
      remote
      placeholder="Search"
      :remote-method="querySearch"
      @change="onSelectChange"
    >
      <el-option
        v-for="option in searchOptions"
        :key="option.item.path"
        :label="option.item.title.join(' > ')"
        :value="option.item"
      />
    </el-select>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters } from '@/util/route'
import { generateRoutes } from './FuseData'
import Fuse from 'fuse.js'
import { watchSwitchLang } from '@/util/i18n'

const isShow = ref(false)
const headerSearchSelectRef = ref(null)
const onShowClick = () => {
  isShow.value = !isShow.value
  headerSearchSelectRef.value.focus()
}
const router = useRouter()
// 检索数据源
let searchPool = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateRoutes(filterRoutes)
})
// search 相关
const search = ref('')
/**
 * 搜索库相关
 */
let fuse
const initFuse = (searchPool) => {
  fuse = new Fuse(searchPool, {
    // 是否按优先级进行排序
    shouldSort: true,
    // 匹配算法放弃的时机， 阈值 0.0 需要完美匹配（字母和位置），阈值 1.0 将匹配任何内容。
    threshold: 0.4,
    // 匹配长度超过这个值的才会被认为是匹配的
    minMatchCharLength: 1,
    // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
    // name：搜索的键
    // weight：对应的权重
    keys: [
      {
        name: 'title',
        weight: 0.7
      },
      {
        name: 'path',
        weight: 0.3
      }
    ]
  })
}
initFuse(searchPool.value)
// 搜索结果
const searchOptions = ref([])
// 搜索方法
const querySearch = (query) => {
  if (query !== '') {
    searchOptions.value = fuse.search(query)
  } else {
    searchOptions.value = []
  }
}
// 选中回调
const onSelectChange = (val) => {
  router.push(val.path)
  close()
}

const close = () => {
  isShow.value = false
  headerSearchSelectRef.value.blur()
  searchOptions.value = []
}

watch(isShow, (val) => {
  if (val) {
    document.addEventListener('click', close)
  } else {
    document.removeEventListener('click', close)
  }
})

// 处理国际化
watchSwitchLang(() => {
  searchPool = computed(() => {
    const filterRoutes = filterRouters(router.getRoutes())
    return generateRoutes(filterRoutes)
  })
  initFuse(searchPool.value)
})
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;
  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;
    ::v-deep .el-input {
      .el-input__wrapper {
        box-shadow: none !important;
        border: none;
      }
    }
    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
