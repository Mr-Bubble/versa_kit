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
            v-model="dataForm.user_name"
            name="user_name"
            label="账号"
            placeholder="请输入 Zepp Life 账号"
            required
            :rules="[{ required: true, message: '请输入 Zepp Life 账号' }]"
            class="!bg-transparent dark:text-gray-200"
          />
          <van-field
            v-model="dataForm.password"
            type="password"
            name="password"
            label="密码"
            placeholder="请输入 Zepp Life 密码"
            required
            :rules="[{ required: true, message: '请输入 Zepp Life 密码' }]"
            class="!bg-transparent dark:text-gray-200"
          />
          <van-field
            v-model="dataForm.step"
            name="step"
            type="digit"
            label="步数"
            placeholder="请输入步数"
            required
            :rules="[{ required: true, message: '请输入步数' }]"
            class="!bg-transparent dark:text-gray-200"
          />
          <van-field
            name="is_save"
            label="记住账号密码"
            class="!bg-transparent dark:text-gray-200"
          >
            <template #input>
              <van-switch v-model="dataForm.is_save" @change="saveUserInfo" />
            </template>
          </van-field>

          <van-button
            round
            block
            type="primary"
            native-type="submit"
            class="!bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            提交
          </van-button>
        </van-form>
      </div>

      <div
        class="rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 shadow-lg"
      >
        <h4 class="text-lg font-bold mb-4 text-red-500 dark:text-red-400">
          使用说明
        </h4>
        <div class="space-y-3 text-sm text-gray-600 dark:text-gray-300">
          <p>
            1、首次使用请在应用商店中下载 [Zepp Life]
            APP，打开软件并选择'没有账号立即注册'，一定要新注册不能用第三方账号授权登录
          </p>
          <p>
            2、进入 [Zepp Life] app，依次点击:
            我的->第三方接入->绑定你想同步数据的平台。
          </p>
          <p>3、使用此小程序进行提交。</p>
          <p class="text-red-500 dark:text-red-400">
            4、特别注意: 首次提交后因账号刚注册官方安全限制第一次不会同步,需要等
            24 小时后再来提交方可同步,后续使用不再有此限制
          </p>
          <p>5、仅供学习交流，严禁用于商业用途，请于24小时内删除</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { postXmPorts } from "@/api";
import { closeToast, showLoadingToast, showNotify } from "vant";

const dataForm = reactive({
  user_name: "",
  password: "",
  step: "",
  is_save: false
});

onMounted(() => {
  // 获取 localStorage 中的值
  const user_name = localStorage.getItem("user_name");
  const password = localStorage.getItem("password");

  if (user_name && password) {
    dataForm.user_name = user_name;
    dataForm.password = password;
    dataForm.is_save = true;
  }
});

const saveUserInfo = val => {
  if (!val) {
    localStorage.removeItem("user_name");
    localStorage.removeItem("password");
  }
};

const onSubmit = () => {
  const formData = new URLSearchParams();
  const { user_name, password, step, is_save } = dataForm;
  formData.append("user", user_name);
  formData.append("password", password);
  formData.append("step", step);
  showLoadingToast({
    message: "加载中...",
    forbidClick: true,
    duration: 0
  });
  postXmPorts(formData).then(response => {
    closeToast();
    if (is_save) {
      localStorage.setItem("user_name", user_name);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("user_name");
      localStorage.removeItem("password");
    }
    if (response.code === 200) {
      showNotify({ type: "success", message: response.msg || "提交成功" });
    } else {
      showNotify({ type: "danger", message: response.msg || "提交失败" });
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
