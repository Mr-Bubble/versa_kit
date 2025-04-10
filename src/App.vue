<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useDarkModeStoreHook } from "@/store/modules/darkMode";

const darkModeStore = useDarkModeStoreHook();

onMounted(() => {
  // 初始化深色模式
  if (darkModeStore.darkMode) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.add("van-theme-dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("van-theme-dark");
  }
});
</script>

<style></style>
