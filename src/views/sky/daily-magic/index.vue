<template>
  <div class="zh-body">
    <div class="zh_footer_tips">
      <p>⭐️ 点击图片即可预览,长按图片即可保存</p>
    </div>

    <van-loading v-if="loading" vertical>加载中...</van-loading>
    <div v-else-if="imagesData">
      <van-row justify="center">
        <van-col span="22">
          <img :src="imagesData" @click="previewImage" />
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  closeToast,
  showImagePreview,
  showLoadingToast,
  showNotify
} from "vant";
import { getDailyMagic } from "@/api/t1qq";

let imagesData = ref("");

let loading = ref(false);

const onSubmit = () => {
  loading.value = true;
  showLoadingToast({
    message: "生成中...",
    forbidClick: true,
    durationL: 0
  });
  getDailyMagic().then(response => {
    if (response) {
      // 将文件流字符串解码为二进制数据
      const binaryData = new Blob([response], { type: "image/jpeg" });

      // 创建 FileReader 对象
      const reader = new FileReader();

      // 监听 FileReader 的加载完成事件
      reader.onloadend = function () {
        // 将读取的数据转换为 base64 字符串
        const base64String = reader.result;

        imagesData.value = base64String;
      };

      // 读取 Blob 数据，并将其转换为 base64 字符串
      reader.readAsDataURL(binaryData);
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

<style scoped lang="less">
.zh-body {
  background-color: var(--van-background);
  box-sizing: border-box;
  min-height: calc(100vh - 99px);
  padding-bottom: 20px;
  padding-top: 20px;

  .zh-button {
    margin: 15px;
    text-align: center;
    .van-button:not(:last-child) {
      margin-right: var(--van-padding-md);
    }
  }
}

.zh_footer_tips {
  h4 {
    margin: 0;
  }
  text-align: left;
  background: var(--van-background-2);
  margin: 14px;
  padding: 10px;
  font-size: 12px;
  border-radius: 8px;
}
</style>
