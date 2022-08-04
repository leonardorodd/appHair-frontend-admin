/* eslint-disable no-console */
import axios from 'axios';
import portalConfig from '../portalConfig.json';
import { store } from '../store';
import { signOut } from '../store/modules/auth/actions';

const api = axios.create({
  baseURL: `http://${portalConfig.API_SERVICE_HOST}:${portalConfig.API_SERVICE_PORT}/api`,
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

    console.log('error: ', error);

    return Promise.reject(error.response);
  },
);

api.interceptors.request.use(function (config) {
  let token = store.getState().auth.token;
  /*  if (token) {
    config.headers['Access-Token'] = token.access_token;
  } */
  if (token) {
    console.log('é válido: ', new Date(token.expires_in) > new Date());
    console.log('date: ', new Date());
    console.log('expirationDate: ', new Date(token.expires_in));
    if (new Date(token.expires_in) > new Date()) {
      config.headers['Access-Token'] = token.access_token;
    } else {
      store.dispatch(signOut());
    }
  }

  return config;
});

export default api;
