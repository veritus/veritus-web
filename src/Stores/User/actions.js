/* @flow */
import actionTypes from './actionTypes';
import { login, signUp } from '../../utils/api';

import { saveToken } from '../../utils/tokenStorage';

const loginUser = () => ({ type: actionTypes.USER_LOGIN });

const loginUserSuccess = (data: { email: string }) => ({
  data,
  type: actionTypes.USER_LOGIN_SUCCESS,
});

const loginUserFailure = (error: *) => ({
  error,
  type: actionTypes.USER_LOGIN_FAILURE,
});

export const loginUserThunk = (email: string, password: string) => (
  dispatch: Dispatch
) => {
  dispatch(loginUser());

  return login(email, password).then(resp => {
    if (resp.error) {
      return dispatch(loginUserFailure(resp.error.message));
    }
    const { data } = resp;
    if (!data) {
      throw new Error('received login response without data');
    }
    saveToken(data.key);
    return dispatch(loginUserSuccess({ email }));
  });
};

export const signUpUserThunk = (email: string, password: string) => (
  dispatch: Dispatch
) => {
  dispatch(loginUser());

  return signUp(email, password).then(resp => {
    if (resp.error) {
      return dispatch(loginUserFailure(resp.error.message));
    }

    const { data } = resp;
    if (!data) {
      throw new Error('received sign up response without data');
    }
    saveToken(data.key);
    return dispatch(loginUserSuccess({ email }));
  });
};
export default {
  loginUser,
  loginUserSuccess,
  loginUserFailure,
  loginUserThunk,
  signUpUserThunk,
};
