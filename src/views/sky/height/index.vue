<template>
  <div v-if="show">
    <van-empty image="error" description="跑路了, 跑路了" />
  </div>
  <div class="zh-body" v-else>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="dataForm.user_id"
          name="user_id"
          label="角色 ID"
          placeholder="请输入角色 ID"
          required
          :rules="[{ required: true, message: '请输入角色 ID' }]"
        />
        <van-field
          v-model="dataForm.invite_code"
          name="invite_code"
          label="好友邀请码"
          placeholder="请输入好友邀请码"
        />
        <van-field name="is_save" label="保存角色 ID">
          <template #input>
            <van-switch v-model="dataForm.is_save" @change="saveUserID" />
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          查询身高
        </van-button>
      </div>
    </van-form>

    <van-cell-group inset v-if="heightData.user_id">
      <van-cell title="当前用户:" :value="heightData.user_id" />
      <van-cell title="体型值:" :value="heightData.scale" />
      <van-cell title="身高值:" :value="heightData.height" />
      <van-cell title="当前身高:" :value="heightData.currentHeight" />
      <van-cell title="最高身高:" :value="heightData.maxHeight" />
      <van-cell title="最矮身高:" :value="heightData.minHeight" />
    </van-cell-group>

    <div class="zh_footer_tips">
      <h4 class="app-font-danger">使用说明:</h4>
      <p>1、使用时请到游戏精灵中复制完整角色 ID</p>
      <p>
        2、首次必须绑定好友邀请码，加上好友无需在填此邀请码，切记请勿拉黑加上的这个好友否则身高无法测，后续可直接用角色
        ID 进行查询
      </p>
      <p>3、仅供学习交流，严禁用于商业用途，请于24小时内删除</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { closeToast, showLoadingToast, showNotify } from "vant";
import { getSkyHeightsByFriend } from "@/api/sky";

const dataForm = reactive({
  user_id: "",
  invite_code: "",
  is_save: false
});

let heightData = ref({});
const show = ref(true);

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

<style scoped lang="less">
.zh-body {
  background-color: var(--van-background);
  box-sizing: border-box;
  min-height: calc(100vh - 99px);
  padding-bottom: 20px;
  padding-top: 20px;
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
