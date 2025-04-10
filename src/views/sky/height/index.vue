<template>
  <EmptyState
    v-if="show"
    image="error"
    description="跑路了, 跑路了"
    sub-description="敬请期待后续更新..."
  />
  <div
    v-else
    class="min-h-[calc(100vh-99px)] bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-5 px-4"
  >
    <div class="max-w-md mx-auto">
      <div
        class="mb-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 shadow-lg"
      >
        <van-form @submit="onSubmit" class="space-y-5">
          <van-field
            v-model="dataForm.user_id"
            name="user_id"
            label="角色 ID"
            placeholder="请输入角色 ID"
            required
            :rules="[{ required: true, message: '请输入角色 ID' }]"
            class="!bg-transparent dark:text-gray-200"
          />
          <van-field
            v-model="dataForm.invite_code"
            name="invite_code"
            label="好友邀请码"
            placeholder="请输入好友邀请码"
            class="!bg-transparent dark:text-gray-200"
          />
          <van-field
            name="is_save"
            label="保存角色 ID"
            class="!bg-transparent dark:text-gray-200"
          >
            <template #input>
              <van-switch v-model="dataForm.is_save" @change="saveUserID" />
            </template>
          </van-field>

          <van-button
            round
            block
            type="primary"
            native-type="submit"
            class="!bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            查询身高
          </van-button>
        </van-form>
      </div>

      <div v-if="heightData.user_id" class="space-y-6">
        <div
          class="rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 shadow-lg"
        >
          <h3 class="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">
            身高信息
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(value, key) in heightData"
              :key="key"
              class="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3"
            >
              <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">
                {{ getTitle(key) }}
              </div>
              <div class="text-sm font-medium text-gray-800 dark:text-gray-200">
                {{ value }}
              </div>
            </div>
          </div>
        </div>

        <div
          class="rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 shadow-lg"
        >
          <h4 class="text-lg font-bold mb-4 text-red-500 dark:text-red-400">
            使用说明
          </h4>
          <div class="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <p>1、使用时请到游戏精灵中复制完整角色 ID</p>
            <p>
              2、首次必须绑定好友邀请码，加上好友无需在填此邀请码，切记请勿拉黑加上的这个好友否则身高无法测，后续可直接用角色
              ID 进行查询
            </p>
            <p>3、仅供学习交流，严禁用于商业用途，请于24小时内删除</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { closeToast, showLoadingToast, showNotify } from "vant";
import { getSkyHeightsByFriend } from "@/api/sky";
import EmptyState from "@/components/EmptyState/index.vue";

const dataForm = reactive({
  user_id: "",
  invite_code: "",
  is_save: false
});

let heightData = ref({});
const show = ref(true);

const titleMap = {
  user_id: "当前用户",
  scale: "体型值",
  height: "身高值",
  currentHeight: "当前身高",
  maxHeight: "最高身高",
  minHeight: "最矮身高"
};

const getTitle = key => titleMap[key] || key;

onMounted(() => {
  // 获取 localStorage 中的值
  const user_id = localStorage.getItem("user_id");

  if (user_id) {
    dataForm.user_id = user_id;
    dataForm.is_save = true;
  }
});

const saveUserID = val => {
  if (!val) {
    localStorage.removeItem("user_id");
  }
};

const onSubmit = () => {
  const { user_id, is_save, invite_code: inviteCode } = dataForm;
  showLoadingToast({
    message: "加载中...",
    forbidClick: true,
    duration: 0
  });

  const psData = {
    user: user_id
  };

  if (inviteCode) {
    psData.inviteCode = inviteCode;
  }

  getSkyHeightsByFriend(psData).then(response => {
    closeToast();
    if (response.code === 200) {
      response.data.user_id = user_id;
      if (is_save) {
        localStorage.setItem("user_id", user_id);
      } else {
        localStorage.removeItem("user_id");
      }
      showNotify({ type: "success", message: response.msg || "提交成功" });
      heightData.value = {
        ...response.data
      };
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
