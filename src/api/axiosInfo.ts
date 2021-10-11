import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInfo = axios.create({
  baseURL: process.env.REACT_APP_API_URL_INFO,
  headers: {
    'Content-Type': 'application/json',
  },
});
// Add a request interceptor
axiosInfo.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInfo.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
export default axiosInfo;
