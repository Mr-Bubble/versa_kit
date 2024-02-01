import { http } from "@/utils/http";

export function postXmPorts(params) {
  return http.request({
    url: "https://sport-api.yyink.cn/api/mi",
    method: "get",
    params
  });
}
