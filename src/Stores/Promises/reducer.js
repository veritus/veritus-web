/* @flow */
import type { Promise, Action } from '../../types';

export type State = {
  +promises: ?Array<Promise>,
  +loading: boolean,
  +error: *,
};

const initialState = {
  promises: null,
  loading: false,
  error: null,
};

const promisesReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'PROMISES_LOAD':
      return { ...state, loading: true, promises: null };
    case 'PROMISES_LOAD_SUCCESS':
      return { ...state, loading: false, promises: action.promises };
    case 'PROMISES_LOAD_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default promisesReducer;
