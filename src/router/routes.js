import Layout from "@/layout/index.vue";
import Home from "@/views/home/index.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Home" },
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
        meta: {
          title: "主页",
          not_back: true
        }
      },
      {
        name: "Images",
        path: "/images",
        component: () => import("@/views/images/index.vue"),
        meta: {
          title: "图集去水印"
        }
      },
      {
        name: "Video",
        path: "/video",
        component: () => import("@/views/video/index.vue"),
        meta: {
          title: "视频去水印"
        }
      },
      {
        name: "XmSports",
        path: "/xmSports",
        component: () => import("@/views/xmSports/index.vue"),
        meta: {
          title: "运动小助手"
        }
      },
      {
        path: "/sky",
        children: [
          {
            name: "SkyHeight",
            path: "height",
            component: () => import("@/views/sky/height/index.vue"),
            meta: {
              title: "光遇查身高"
            }
          },
          {
            name: "SkyDailyMagic",
            path: "daily-magic",
            component: () => import("@/views/sky/daily-magic/index.vue"),
            meta: {
              title: "每日魔法"
            }
          },
          {
            name: "SkyDailyLocation",
            path: "daily-location",
            component: () => import("@/views/sky/daily-location/index.vue"),
            meta: {
              title: "每日位置"
            }
          }
        ]
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "工具"
        }
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: "关于",
          noCache: true
        }
      }
    ]
  }
];

export default routes;
