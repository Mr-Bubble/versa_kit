<template>
  <div
    class="min-h-[calc(100vh-99px)] bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-5 px-4"
  >
    <div class="max-w-md mx-auto">
      <div
        class="mb-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 shadow-lg"
      >
        <van-form @submit="onSubmit" class="space-y-5">
          <van-field
            v-model="dataForm.url"
            name="url"
            label="链接"
            rows="3"
            autosize
            type="textarea"
            placeholder="将分享的地址粘贴到这里就可以去水印了呀"
            required
            :rules="[
              {
                required: true,
                message: '请输入需要去水印的地址链接或者文字内容'
              }
            ]"
            class="!bg-transparent dark:text-gray-200"
          />
          <van-button
            block
            icon="certificate"
            type="primary"
            native-type="submit"
            class="!bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            去水印
          </van-button>
        </van-form>
      </div>

      <div
        v-if="videoData.show"
        class="mb-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 shadow-lg"
      >
        <van-divider dashed class="text-gray-600 dark:text-gray-300">{{
          videoData.title
        }}</van-divider>
        <div class="flex flex-wrap gap-3 justify-center">
          <van-button
            v-if="videoData.cover"
            :url="videoData.cover"
            type="default"
            class="!bg-white dark:!bg-gray-700 dark:!text-gray-200 hover:!bg-gray-50 dark:hover:!bg-gray-600 transition-colors duration-300"
          >
            下载封面
          </van-button>
          <van-button
            v-if="videoData.url"
            :url="videoData.url"
            type="default"
            class="!bg-white dark:!bg-gray-700 dark:!text-gray-200 hover:!bg-gray-50 dark:hover:!bg-gray-600 transition-colors duration-300"
          >
            下载视频
          </van-button>
          <van-button
            v-if="videoData.music.url"
            :url="videoData.music.url"
            type="default"
            class="!bg-white dark:!bg-gray-700 dark:!text-gray-200 hover:!bg-gray-50 dark:hover:!bg-gray-600 transition-colors duration-300"
          >
            下载音乐
          </van-button>
        </div>
      </div>

      <div
        class="rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 shadow-lg"
      >
        <h4 class="text-lg font-bold mb-4 text-red-500 dark:text-red-400">
          使用须知
        </h4>
        <div class="space-y-3 text-sm text-gray-600 dark:text-gray-300">
          <p>
            ⭐️ 温馨提示:
            粘贴图集地址时无需删除文案，但如果图集链接正确但解析失败请删掉文案后重试
          </p>
          <p>⭐️ 支持平台: 抖音、皮皮虾、皮皮搞笑、微博、最右、快手...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { closeToast, showLoadingToast, showNotify } from "vant";
import { getParseVideo } from "@/api/tenapi";
const dataForm = reactive({
  url: ""
});

let videoData = ref({
  show: false
});

const onSubmit = () => {
  const { url } = dataForm;
  let videoUrl = "";
  const regex = /https?:\/\/[^\s]+/;
  const match = url.match(regex);
  if (match && match.length > 0) {
    videoUrl = match[0];
  } else {
    console.log("Invalid share URL");
  }

  const params = {
    url: videoUrl
  };
  showLoadingToast({
    message: "解析中...",
    forbidClick: true,
    duration: 0
  });
  getParseVideo(params).then(response => {
    closeToast();
    if (response.code === 200) {
      videoData.value = response.data;
      videoData.value.show = true;
      showNotify({ type: "success", message: response.msg || "解析成功" });
    } else {
      videoData.value.show = false;
      showNotify({ type: "danger", message: response.msg || "解析失败" });
    }
  });
};
</script>

<style scoped>
:deep(.van-field__label) {
  color: rgb(75 85 99);
}

:deep(.van-field__control) {
  color: rgb(31 41 55);
}

:deep(.van-field__error-message) {
  color: rgb(239 68 68);
}

@media (prefers-color-scheme: dark) {
  :deep(.van-field__label) {
    color: rgb(209 213 219);
  }

  :deep(.van-field__control) {
    color: rgb(243 244 246);
  }

  :deep(.van-field__error-message) {
    color: rgb(248 113 113);
  }
}
</style>
