//根据config.js axios.js 帮我们生成下面这个对象
import contactConfig from "./config"
import contactAxios from "./axios"
import httpFn from "@/util/http.js"
export default httpFn(contactConfig,contactAxios)
