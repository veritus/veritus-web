/* @flow */
import type { PoliticianType, Action } from '../../types';

export type State = {
  +data: ?Array<PoliticianType>,
  +loading: boolean,
  +errors: *,
};

const initialState = {
  data: null,
  loading: false,
  errors: null,
};

const politiciansReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'POLITICIANS_LOAD':
      return { ...state, loading: true, data: null, errors: null };
    case 'POLITICIANS_LOAD_SUCCESS':
      return { ...state, loading: false, data: action.data };
    case 'POLITICIANS_LOAD_FAILURE':
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
};

export default politiciansReducer;
