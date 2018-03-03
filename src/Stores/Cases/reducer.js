/* @flow */
import type { Action } from '../../types';
import type { Case } from './types';
import actionTypes from './actionTypes';

export type State = {
  +cases: ?Array<Case>,
  +loading: boolean,
  +error: *,
};

const initialState = {
  cases: null,
  loading: false,
  error: null,
};

const casesReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case actionTypes.GET_CASE_BY_ID_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.GET_CASE_BY_ID_SUCCESS:
      return { ...state, loading: false, cases: action.cases };
    case actionTypes.GET_CASE_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default casesReducer;
