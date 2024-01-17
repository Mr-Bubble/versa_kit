<template>
  <div class="zh-body">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
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
        />
      </van-cell-group>
      <div class="zh-button">
        <van-row justify="center">
          <van-col span="8">
            <van-button
              block
              icon="certificate"
              type="primary"
              size="small"
              native-type="submit"
            >
              去水印
            </van-button>
          </van-col>
        </van-row>
      </div>
    </van-form>

    <div>
      <van-swipe lazy-render>
        <van-swipe-item v-for="image in imagesData" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="zh_footer_tips">
      <h4 class="app-font-danger">使用须知:</h4>
      <p>
        ⭐️ 温馨提示:
        粘贴图集地址时无需删除文案，但如果图集链接正确但解析失败请删掉文案后重试
      </p>
      <p>⭐️ 支持平台: 抖音、皮皮虾、皮皮搞笑、微博、最右、快手...</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { closeToast, showLoadingToast, showNotify } from "vant";
import { getParseImages } from "@/api/tenapi";
const dataForm = reactive({
  url: ""
});

let imagesData = ref({});

const onSubmit = () => {
  const { url } = dataForm;
  let imagesUrl = "";
  const regex = /https?:\/\/[^\s]+/;
  const match = url.match(regex);
  if (match && match.length > 0) {
    imagesUrl = match[0];
  } else {
    console.log("Invalid share URL");
  }

  const params = {
    url: imagesUrl
  };
  showLoadingToast({
    message: "解析中...",
    forbidClick: true
  });
  getParseImages(params).then(response => {
    closeToast();
    if (response.code === 200) {
      imagesData.value = response.data;
      showNotify({ type: "success", message: response.msg || "解析成功" });
    } else {
      showNotify({ type: "danger", message: response.msg || "解析失败" });
    }
  });
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
