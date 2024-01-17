import { http } from "@/utils/http";
const app_api = "//tenapi.cn";

export function getParseImages(params) {
  return http.request({
    url: "/v2/images",
    method: "get",
    params,
    individuation: {
      app_api: app_api
    }
  });
}

export function getParseVideo(params) {
  return http.request({
    url: "/v2/video",
    method: "get",
    params,
    individuation: {
      app_api: app_api
    }
  });
}
