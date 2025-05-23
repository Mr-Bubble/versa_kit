import { createApp } from "vue";
import { store } from "./store";
import "./styles/tailwind.css";
// normalize.css
import "normalize.css/normalize.css";
// 全局样式
import "./styles/index.less";
// svg icon
import "virtual:svg-icons-register";

// Toast
import "vant/es/toast/style";

// Dialog
import "vant/es/dialog/style";

// Notify
import "vant/es/notify/style";

// ImagePreview
import "vant/es/image-preview/style";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
