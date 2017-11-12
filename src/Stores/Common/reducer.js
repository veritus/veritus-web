/* @flow */
import type { Action } from '../../types';

export type State = {
  +error: ?string,
};

const initialState = {
  error: null,
};

const politiciansReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'COMMON_CLEAR_ERROR':
      return { ...state, error: null };
    case 'COMMON_SET_ERROR':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default politiciansReducer;
