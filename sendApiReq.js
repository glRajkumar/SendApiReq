import axios from "axios";
import { root } from './endPoints';

const token = "" // your token code

const requestIntercepter = (instance, isAuthendicated, headers) => {
  instance.interceptors.request.use(
    function (config) {
      if (isAuthendicated) {
        config.headers = {
          Authorization: token,
          ...headers
        }
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  )
}

const responseIntercepter = instance => {
  instance.interceptors.response.use(
    res => res.data,
    error => {
      const err = new Error(error?.message)
      err.status = error?.response?.status
      err.message = error?.response?.data?.message
      throw err
    }
  )
}

const sendApiReq = ({ isAuthendicated = true, headers = {}, ...others }) => {
  const instances = axios.create({ baseURL: root.baseUrl })
  requestIntercepter(instances, isAuthendicated, headers)
  responseIntercepter(instances)
  return instances({ ...others })
}

export default sendApiReq;
