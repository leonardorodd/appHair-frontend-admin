/* eslint-disable no-console */
import axios from 'axios';
/* import portalConfig from '../portalConfig.json';
 */
const api = axios.create({
  baseURL:
    'https://6c3e-2804-d59-9a5f-ca00-ec4b-b029-e8d2-439f.ngrok.io/api' /* `http://${portalConfig.API_SERVICE_HOST}:${portalConfig.API_SERVICE_PORT}/api` */,
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
      // The request was made but no response was received
      throw new Error('Server was not responding');
    }

    /*     console.log(`sfsdf${error}`);
     */
    return Promise.reject(error.response.data);
  },
);

export default api;
