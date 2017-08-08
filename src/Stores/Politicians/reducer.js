/* @flow */
import type { PoliticianAPI, Action } from '../../types';

export type State = {
  +politicians: ?Array<PoliticianAPI>,
  +loading: boolean,
  +error: *,
};

const initialState = {
  politicians: null,
  loading: false,
  error: null,
};

const politiciansReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'POLITICIANS_LOAD':
      return { ...state, loading: true, politicians: null };
    case 'POLITICIANS_LOAD_SUCCESS':
      return { ...state, loading: false, politicians: action.politicians };
    case 'POLITICIANS_LOAD_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default politiciansReducer;
