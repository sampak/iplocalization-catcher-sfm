import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? "https://localhost:8080",
  headers: {
    "content-type": "application/json",
  },
});

const reqInterceptor = (config: any) => {
  config.url += `?access_key=${process.env.REACT_APP_API_KEY}`;

  return config;
};

const reqInt = axiosInstance.interceptors.request.use(reqInterceptor);
