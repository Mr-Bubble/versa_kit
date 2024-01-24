import { http } from "@/utils/http";
const app_api = "//api.t1qq.com";

export function getDailyMagic() {
  return http.request({
    url: "/api/sky/mf/magic?key=TN9RH687qOT6KJxOPNLqdo3SAE",
    method: "get",
    responseType: "arraybuffer",
    individuation: {
      app_api: app_api
    }
  });
}

export function getDailyLocation(url) {
  return http.request({
    url: "/api/sky/sc/" + url + "?key=TN9RH687qOT6KJxOPNLqdo3SAE",
    method: "get",
    responseType: "arraybuffer",
    individuation: {
      app_api: app_api
    }
  });
}
