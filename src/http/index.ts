import axios, { InternalAxiosRequestConfig } from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authHttp = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config:InternalAxiosRequestConfig) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${localStorage.getItem('tkn')}`;
  return config;
};

authHttp.interceptors.request.use(authInterceptor);

export {
  http,
  authHttp,
};
