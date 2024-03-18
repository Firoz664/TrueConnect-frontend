import axios from "axios"
import { redirect } from "react-router-dom"
import {
  adminInfoGetterService,
  adminInfoRemovalService,
} from "./Redux/services/storage"
import { BASE_LOCAL } from "./constants"

export const axiosInstance = axios.create({
  baseURL: BASE_LOCAL,
})

axiosInstance.interceptors.request.use(function (config) {
  config.headers["x-access-token"] = `${adminInfoGetterService().token}`
  return config
})

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      adminInfoRemovalService()
      localStorage.clear()
      window.location = "/login";
    } else return Promise.reject(error)
  },
)
