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
    case actionTypes.GET_CASES_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.GET_CASES_SUCCESS:
      return { ...state, loading: false, cases: action.cases };
    case actionTypes.GET_CASES_FAILURE:
      return { ...state, loading: false, error: action.error };

    case actionTypes.GET_CASE_BY_ID_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.GET_CASE_BY_ID_SUCCESS: {
      const exists = state.cases && state.cases.includes(c => c.id === action.case.id);
      let cases = state.cases || [];
      if (exists) {
        // If case exists, we update it
        cases = cases.map(c => (c.id === action.case.id ? action.case : c));
      } else {
        // If case does not exist, we add it to the list
        cases = [...cases, action.case];
      }
      return { ...state, loading: false, cases };
    }
    case actionTypes.GET_CASE_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default casesReducer;
