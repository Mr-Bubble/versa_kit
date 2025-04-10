<template>
  <div class="min-h-[calc(100vh-99px)] bg-gray-50 dark:bg-gray-900 py-5 px-4">
    <div
      class="mb-4 rounded-lg bg-white dark:bg-gray-800 p-3 text-sm text-gray-600 dark:text-gray-300 shadow-sm"
    >
      <p>⭐️ 点击图片即可预览,长按图片即可保存</p>
    </div>

    <div class="mb-4">
      <van-tabs
        v-model:active="active"
        @change="onTapTab"
        animated
        swipeable
        class="rounded-lg bg-white dark:bg-gray-800 shadow-sm"
      >
        <template v-for="(item, index) in tabs" :key="index">
          <van-tab
            :title="item.title"
            :disabled="loading"
            class="text-sm dark:text-gray-200"
          ></van-tab>
        </template>
      </van-tabs>
    </div>

    <div v-if="loading" class="flex h-40 items-center justify-center">
      <van-loading vertical>加载中...</van-loading>
    </div>

    <div v-else-if="tabs[active].imagesData" class="space-y-4">
      <van-divider class="!my-4 dark:border-gray-700" />
      <div class="flex justify-center">
        <div class="w-11/12">
          <van-image
            :src="tabs[active].imagesData"
            @click="previewImage"
            class="rounded-lg shadow-md transition-transform hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, reactive, ref } from "vue";
import { closeToast, showImagePreview, showLoadingToast } from "vant";
import { getDailyLocation } from "@/api/t1qq";

let active = ref(0);

let loading = ref(false);

const tabs = reactive([
  {
    title: "日常任务位置",
    api: "scrw",
    imagesData: ""
  },
  {
    title: "季节蜡烛位置",
    api: "scjl",
    imagesData: ""
  },
  {
    title: "大蜡烛位置",
    api: "scdl",
    imagesData: ""
  }
]);

const onTapTab = () => {
  if (!tabs[active.value].imagesData) {
    onSubmit();
  }
};

const onSubmit = () => {
  nextTick(() => {
    loading.value = true;
  });
  showLoadingToast({
    message: "生成中...",
    forbidClick: true,
    duration: 0
  });
  const url = tabs[active.value].api;
  getDailyLocation(url).then(response => {
    if (response && response.type && response.type.startsWith("image/")) {
      // 创建 FileReader 对象
      const reader = new FileReader();

      // 监听 FileReader 的加载完成事件
      reader.onloadend = function () {
        // 将读取的数据转换为 base64 字符串
        tabs[active.value].imagesData = reader.result;
      };

      // 读取 Blob 数据，并将其转换为 base64 字符串
      reader.readAsDataURL(response);
    }
    closeToast();
    loading.value = false;
  });
};

onSubmit();

const previewImage = () => {
  showImagePreview([tabs[active.value].imagesData]);
};
</script>

<style scoped></style>
