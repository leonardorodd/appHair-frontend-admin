import { all, takeLatest, call, put } from 'redux-saga/effects';
import { signInSuccess, signInFailure } from '../auth/actions';
import { errorMessage } from '../alert/actions';
import apiClient from '../../../services/apiClient';
import { history } from '../../../services/history';

export function* login({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(apiClient.post, '/login/app', JSON.stringify({ email, password }));

    localStorage.setItem('user', JSON.stringify(response));

    yield put(signInSuccess(response));
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
}

// eslint-disable-next-line prettier/prettier
export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', login),
  takeLatest('@auth/SIGN_OUT', logout),
]);
