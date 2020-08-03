import axios from "axios";

const axiosObj = axios.create({
  baseURL: 'http://localhost:9000/api',
  timeout: 2000,
})


axiosObj.interceptors.request.use(function (config) {
  return config;
});

axiosObj.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default axiosObj;
