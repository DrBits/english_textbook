import { all, delay, put, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from '../constants/user';

export function* login() {
  try {
    yield delay(400);

    yield put({
      type: ACTION_TYPES.USER_LOGIN_SUCCESS
    });
  } catch (err) {
    yield put({
      type: ACTION_TYPES.USER_LOGIN_FAIL,
      payload: err
    });
  }
}

export function* logout() {
  try {
    yield delay(200);

    yield put({
      type: ACTION_TYPES.USER_LOGOUT_SUCCESS
    });
  } catch (err) {
    yield put({
      type: ACTION_TYPES.USER_LOGOUT_FAIL,
      payload: err
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(ACTION_TYPES.USER_LOGIN, login),
    takeLatest(ACTION_TYPES.USER_LOGOUT, logout)
  ]);
}
