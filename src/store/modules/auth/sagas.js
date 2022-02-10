/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { signInSuccess, signInFailure } from '../auth/actions';
import { errorMessage } from '../alert/actions';
import apiClient from '../../../services/apiClient';
import { history } from '../../../services/history';
import { handleResponse } from '../../../services/handleResponse';

export function* login({ payload }) {
  try {
    const { email, password } = payload;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    };

    const response = yield call(fetch, 'http://localhost:4000/users/authenticate', requestOptions);
    const response2 = yield call(() => handleResponse(response));

    localStorage.setItem('user', JSON.stringify(response2));
    yield put(signInSuccess(response2));
    history.push('/');
  } catch (error) {
    // eslint-disable-next-line prettier/prettier
    yield all([
        put(signInFailure()),
        put(errorMessage(error))
    ]);
  }
}

export function logout() {
  localStorage.removeItem('user');
  history.push('/');
}

// eslint-disable-next-line prettier/prettier
export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', login),
  takeLatest('@auth/SIGN_OUT', logout),
]);
