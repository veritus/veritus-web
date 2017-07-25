/* @flow */
import type { PromiseType, Action } from '../../types';

export type State = {
  +promises: ?Array<PromiseType>,
  +loading: boolean,
};

const initialState = {
  promises: null,
  loading: false,
};

const promisesReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'PROMISES_LOAD':
      return { ...state, loading: true, promises: null };
    case 'PROMISES_LOAD_SUCCESS':
      return { ...state, loading: false, promises: action.promises };
    case 'PROMISES_LOAD_FAILURE':
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default promisesReducer;
