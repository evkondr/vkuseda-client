import axios, { InternalAxiosRequestConfig } from 'axios';

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authHttpRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config:InternalAxiosRequestConfig) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${localStorage.getItem('tkn')}`;
  return config;
};

authHttpRequest.interceptors.request.use(authInterceptor);

export {
  httpRequest,
  authHttpRequest,
};
