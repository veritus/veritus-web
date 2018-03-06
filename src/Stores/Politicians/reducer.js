/* @flow */
import type { PoliticianType, Action } from '../../types';

export type State = {
  +politicians: ?Array<PoliticianType>,
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
      return { ...state, loading: true, politicians: null, error: null };
    case 'POLITICIANS_LOAD_SUCCESS':
      return { ...state, loading: false, politicians: action.data };
    case 'POLITICIANS_LOAD_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default politiciansReducer;
