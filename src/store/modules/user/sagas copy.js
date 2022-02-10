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

export function* getAll() {
  try {
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
  try {
    const response = yield call(apiClient.post, '/users/register', {
      headers: authHeader(),
      body: JSON.stringify(payload),
    });

    yield put(registerSuccess(response));
  } catch (error) {
    yield put(registerFailure(error.message));
  }
}

// eslint-disable-next-line prettier/prettier
export default all([
  takeLatest('@user/GETALL_REQUEST', getAll),
  takeLatest('@user/DELETE_REQUEST', deleteUser),
  takeLatest('@user/REGISTER_REQUEST', registerUser),
]);
