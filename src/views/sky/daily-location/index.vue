<template>
  <div class="zh-body">
    <div class="zh_footer_tips">
      <p>⭐️ 点击图片即可预览,长按图片即可保存</p>
    </div>

    <van-tabs v-model:active="active" @change="onTapTab" animated swipeable>
      <template v-for="(item, index) in tabs" :key="index">
        <van-tab :title="item.title" :disabled="loading"></van-tab>
      </template>
    </van-tabs>

    <van-loading v-if="loading" vertical>加载中...</van-loading>
    <div v-else-if="tabs[active].imagesData">
      <van-divider />
      <van-row justify="center">
        <van-col span="22">
          <van-image :src="tabs[active].imagesData" @click="previewImage" />
        </van-col>
      </van-row>
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
