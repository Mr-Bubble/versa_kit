<script setup name="home">
import { reactive } from "vue";

const contentList = reactive([
  {
    title: "工具",
    name: "",
    sub: [
      {
        icon: "chart-trending-o",
        path: "xmSports",
        title: "运动小助手",
        color: "blue light",
        display: true
      },
      {
        icon: "scan",
        path: "qrcode",
        title: "二维码生成",
        color: "mauve light",
        display: false
      },
      {
        icon: "tv-o",
        path: "video",
        title: "视频去水印",
        color: "pink light",
        display: true
      },
      {
        icon: "other-pay",
        path: "images",
        title: "图集去水印",
        color: "brown light",
        display: true
      }
    ]
  },
  {
    title: "光遇",
    name: "sky",
    sub: [
      {
        icon: "fire-o",
        path: "height",
        title: "查身高",
        color: "cyan light",
        display: true
      },
      {
        icon: "guide-o",
        path: "daily-location",
        title: "每日位置",
        color: "olive light",
        display: true
      },
      {
        icon: "tosend",
        path: "daily-magic",
        title: "每日魔法",
        color: "purple light",
        display: true
      }
    ]
  }
]);
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
    <template v-for="(item, index) in contentList" :key="index">
      <div class="mb-6 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm">
        <div class="mb-4 text-left">
          <van-tag
            plain
            type="primary"
            size="large"
            class="text-lg font-semibold px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-200"
          >
            {{ item.title }}
          </van-tag>
        </div>
        <van-grid :border="false" :column-num="2" :gutter="16">
          <template v-for="(items, sub_index) in item.sub" :key="sub_index">
            <van-grid-item
              v-if="items.display"
              :icon="items.icon"
              :text="items.title"
              :to="item.name ? item.name + '/' + items.path : items.path"
              class="group"
            >
              <template #icon>
                <div
                  :class="[
                    'w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-transform duration-200 group-active:scale-95',
                    items.color === 'blue light' &&
                      'bg-blue-50 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400',
                    items.color === 'mauve light' &&
                      'bg-purple-50 text-purple-500 dark:bg-purple-900/20 dark:text-purple-400',
                    items.color === 'pink light' &&
                      'bg-pink-50 text-pink-500 dark:bg-pink-900/20 dark:text-pink-400',
                    items.color === 'brown light' &&
                      'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400',
                    items.color === 'cyan light' &&
                      'bg-cyan-50 text-cyan-500 dark:bg-cyan-900/20 dark:text-cyan-400',
                    items.color === 'olive light' &&
                      'bg-green-50 text-green-500 dark:bg-green-900/20 dark:text-green-400',
                    items.color === 'purple light' &&
                      'bg-purple-50 text-purple-500 dark:bg-purple-900/20 dark:text-purple-400'
                  ]"
                >
                  <van-icon :name="items.icon" size="24" />
                </div>
              </template>
            </van-grid-item>
          </template>
        </van-grid>
      </div>
    </template>
  </div>
</template>

<style scoped>
:deep(.van-grid-item__content) {
  padding: 1rem;
  background: transparent;
}

:deep(.van-grid-item__text) {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--van-text-color);
}
</style>
