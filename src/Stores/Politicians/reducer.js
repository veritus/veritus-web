/* @flow */
import type { PoliticianType, Action } from '../../types';

export type State = {
  +data: ?Array<PoliticianType>,
  +loading: boolean,
  +error: *,
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const politiciansReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'POLITICIANS_LOAD':
      return { ...state, loading: true, data: null, error: null };
    case 'POLITICIANS_LOAD_SUCCESS':
      return { ...state, loading: false, data: action.data };
    case 'POLITICIANS_LOAD_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default politiciansReducer;
