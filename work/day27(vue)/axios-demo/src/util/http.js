//拿到任意一个模块的config配置 已经 axios实例
//最终这个函数要返回对应的发请求的函数
export default function (config,axios) {
    let obj = {};
    for(let key in config.api){
      //当前这个函数是真正发请求的函数
      //当前函数应该要返回一个promise
      //并且这个promise所持有的值 必须得是请求拿到的值
      const {url,method,transfromType}  = config.api[key];
      //data : 组件上发请求时传过来的参数
      obj[key]=async function (data) {
        data = data || {}

        //根据isForm来对data进行装换
        let transformData = "";
        if(transfromType === "form"){
          transformData = new FormData();
          for(let key in data){
            transformData.append(key,data[key])
          }
        }else{
          transformData = data;
        }


        let body = "";
        //发送请求去拿对应接口的数据
        switch (method){
          case "get":
          case "delete":
            body = await axios({
              url,
              method,
              params:transformData
            })
            break;
          case "put":
          case "post":
            body = await axios({
              url,
              method,
              data:transformData
            })
            break;
        }
        return body
      }
    }
    return obj
}
