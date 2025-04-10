<template>
  <div
    class="min-h-[calc(100vh-99px)] bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-5 px-4"
  >
    <div class="max-w-md mx-auto">
      <div
        class="rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 shadow-lg"
      >
        <van-empty :image="image" :description="description" class="py-8">
          <template #description>
            <p
              class="text-gray-600 dark:text-gray-300 text-base mb-4 text-center"
            >
              {{ description }}
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ subDescription }}
            </p>
          </template>
        </van-empty>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    default: "error"
  },
  description: {
    type: String,
    default: "暂无数据"
  },
  subDescription: {
    type: String,
    default: "敬请期待..."
  }
});
</script>

<style scoped>
:deep(.van-empty__image) {
  width: 120px;
  height: 120px;
}

:deep(.van-empty__description) {
  margin-top: 16px;
}
</style>
