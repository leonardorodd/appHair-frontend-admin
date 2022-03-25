/* eslint-disable no-console */
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { signInSuccess, signInFailure, signOut } from '../auth/actions';
import { errorMessage } from '../alert/actions';
import apiClient from '../../../services/apiClient';
import jwt from 'jsonwebtoken';

/* import { history } from '../../../services/history';
 */
export function* login({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(apiClient.post, '/login/app', JSON.stringify({ email, password }));

    /*     localStorage.setItem('user', JSON.stringify(response));
     */

    /*     setToken(response);
     */ yield put(signInSuccess(response));

    history.push('/');
  } catch (error) {
    yield put(signInFailure(error.msg || error.message));
  }
}

export function* setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token && !tokenIsExpired(token)) {
    apiClient.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    yield put(signOut());
  }
}

export function tokenIsExpired(token) {
  const decodedToken = jwt.decode(token, { complete: true, json: true });

  if (decodedToken.payload.exp * 1000 > Date.now()) {
    return false;
  }

  return true;
}

export function logout() {
  localStorage.removeItem('user');
}

export function* loginError({ payload }) {
  yield put(errorMessage(payload.error));
}

// eslint-disable-next-line prettier/prettier
export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', login),
  takeLatest('@auth/SIGN_OUT', logout),
  takeLatest('@auth/SIGN_IN_FAILURE', loginError),
]);
