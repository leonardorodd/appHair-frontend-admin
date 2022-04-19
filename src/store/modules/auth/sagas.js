/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { signInSuccess, signInFailure, signOut } from '../auth/actions';
import { errorMessage } from '../alert/actions';
import apiClient from '../../../services/apiClient';
import jwt from 'jsonwebtoken';

export function* login({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(apiClient.post, '/login/app', JSON.stringify({ email, password }));

    yield put(signInSuccess(response.data));

    history.push('/');
  } catch (error) {
    yield put(errorMessage(payload.error));
    yield put(signInFailure());
  }
}

export function logout() {
  /*   localStorage.removeItem('user');
   */
  delete apiClient.defaults.headers['Access-Token'];
  history.push('/');
}

/* export function* setToken({ payload }) {
  if (!payload) return;

  const { access_token: accessToken, expires_in: expiresIn } = payload.auth.token;

  apiClient.defaults.headers.common['Access-Token'] = accessToken;

  if (new Date(expiresIn).getTime() < new Date.getTime()) {
    console.log('sss');
  } else {
    yield put(signOut());
  }
}
 */
/* export function tokenIsExpired(token) {
  const decodedToken = jwt.decode(token, { complete: true, json: true });

  if (decodedToken.payload.exp * 1000 > Date.now()) {
    return false;
  }

  return true;
} */

export default all([
  /*   takeLatest('persist/REHYDRATE', setToken),
   */
  takeLatest('@auth/SIGN_IN_REQUEST', login),
  takeLatest('@auth/SIGN_OUT', logout),
]);
