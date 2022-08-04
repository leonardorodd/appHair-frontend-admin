/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { signInSuccess, signInFailure, signOut } from '../auth/actions';
import { errorMessage } from '../alert/actions';
import apiClient from '../../../services/apiClient';
import { history } from '../../../services/history';

export function* login({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(apiClient.post, `/login/app?email=${email}&password=${password}`);

    yield put(signInSuccess(response.data));

    history.push('/');
  } catch (error) {
    console.log('error: ', error);

    yield put(errorMessage(error.data.msg));
    yield put(signInFailure());
  }
}

export function logout() {
  delete apiClient.defaults.headers['Access-Token'];
  history.push('/');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', login), takeLatest('@auth/SIGN_OUT', logout)]);
