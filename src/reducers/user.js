import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ACTION_TYPES, STATUS } from '../constants/user';

export const userState = {
  isAuthenticated: false,
  status: STATUS.IDLE
};

export default {
  user: handleActions(
    {
      [ACTION_TYPES.USER_LOGIN]: state =>
        immutable(state, {
          status: { $set: STATUS.RUNNING }
        }),
      [ACTION_TYPES.USER_LOGIN_SUCCESS]: state =>
        immutable(state, {
          isAuthenticated: { $set: true },
          status: { $set: STATUS.READY }
        }),
      [ACTION_TYPES.USER_LOGOUT]: state =>
        immutable(state, {
          status: { $set: STATUS.RUNNING }
        }),
      [ACTION_TYPES.USER_LOGOUT_SUCCESS]: state =>
        immutable(state, {
          isAuthenticated: { $set: false },
          status: { $set: STATUS.IDLE }
        })
    },
    userState
  )
};
