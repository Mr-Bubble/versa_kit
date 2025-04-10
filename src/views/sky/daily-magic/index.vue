<template>
  <div class="min-h-[calc(100vh-99px)] bg-gray-50 dark:bg-gray-900 py-5 px-4">
    <div
      class="mb-4 rounded-lg bg-white dark:bg-gray-800 p-3 text-sm text-gray-600 dark:text-gray-300 shadow-sm"
    >
      <p>⭐️ 点击图片即可预览,长按图片即可保存</p>
    </div>

    <div v-if="loading" class="flex h-40 items-center justify-center">
      <van-loading vertical>加载中...</van-loading>
    </div>

    <div v-else-if="imagesData" class="flex justify-center">
      <div class="w-11/12">
        <van-image
          :src="imagesData"
          @click="previewImage"
          class="rounded-lg shadow-md transition-transform hover:scale-[1.02]"
        />
      </div>
    </div>

    <div v-else class="flex h-40 items-center justify-center">
      <van-empty image="error" description="无数据" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { closeToast, showImagePreview, showLoadingToast } from "vant";
import { getDailyMagic } from "@/api/t1qq";

let imagesData = ref("");

let loading = ref(false);

const onSubmit = () => {
  loading.value = true;
  showLoadingToast({
    message: "生成中...",
    forbidClick: true,
    duration: 0
  });
  getDailyMagic().then(response => {
    if (response && response.type && response.type.startsWith("image/")) {
      // 创建 FileReader 对象
      const reader = new FileReader();

      // 监听 FileReader 的加载完成事件
      reader.onloadend = function () {
        // 将读取的数据转换为 base64 字符串
        imagesData.value = reader.result;
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
  showImagePreview([imagesData.value]);
};
</script>

<style scoped></style>
