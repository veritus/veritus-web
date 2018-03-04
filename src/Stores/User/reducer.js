/* @flow */
import type { User, Action } from '../../types';
import actionTypes from './actionTypes';
export type State = {
  +data: ?User,
  +loading: boolean,
  +error: ?string,
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const userReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return { ...state, loading: true, data: null, error: null };
    case actionTypes.USER_LOGIN_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case actionTypes.USER_LOGIN_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default userReducer;
