/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { all, takeLatest, call, put } from 'redux-saga/effects';
import apiClient from '../../../services/apiClient';
import {
  getAllFailure,
  getAllSuccess,
  deleteUserFailure,
  deleteUserSuccess,
  registerSuccess,
  registerFailure,
} from '../../modules/user/actions';
import authHeader from '../../../services/auth-header';
import { handleResponse } from '../../../services/handleResponse';
import { successMessage, errorMessage } from '../alert/actions';
import { history } from '../../../services/history';

export function* getAll() {
  try {
    const requestOptions = {
      method: 'GET',
      headers: authHeader(),
    };

    const response = yield call(apiClient.get, '/users', {}, { headers: authHeader() });

    yield put(getAllSuccess(response));
  } catch (error) {
    yield put(getAllFailure(error.message));
  }
}

export function* deleteUser({ payload }) {
  try {
    const response = yield call(apiClient.delete, `/users/${payload.id}`, {}, { headers: authHeader() });

    yield put(deleteUserSuccess(response));
  } catch (error) {
    yield put(deleteUserFailure(payload.id, error.message));
  }
}

export function* registerUser({ payload }) {
  const { email, password } = payload;

  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    };

    yield call(fetch, 'http://localhost:4000/users/register', requestOptions);
    yield put(registerSuccess());
    yield put(successMessage('Registration successful'));
    history.push('/login');
  } catch (error) {
    yield all([put(registerFailure()), put(errorMessage(error))]);
  }
}

// eslint-disable-next-line prettier/prettier
export default all([
  takeLatest('@user/GETALL_REQUEST', getAll),
  takeLatest('@user/DELETE_REQUEST', deleteUser),
  takeLatest('@user/REGISTER_REQUEST', registerUser),
]);
