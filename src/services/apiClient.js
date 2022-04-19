/* eslint-disable no-console */
import axios from 'axios';
import portalConfig from '../portalConfig.json';
import { store } from '../store';

const api = axios.create({
  baseURL: /* 'https://6c3e-2804-d59-9a5f-ca00-ec4b-b029-e8d2-439f.ngrok.io/api'  */ `http://${portalConfig.API_SERVICE_HOST}:${portalConfig.API_SERVICE_PORT}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});

api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (!error.response) {
      throw new Error('Server was not responding');
    }

    return Promise.reject(error.response.data);
  },
);

api.interceptors.request.use(function (config) {
  let token = store.getState().auth.token;

  console.log('aqui: ', token);

  if (token && token.access_token) {
    config.headers['Access-Token'] = token.access_token;
  } else {
    localStorage.removeItem('persist:apphair');
    history.push('/');
  }

  return config;
});

export default api;
