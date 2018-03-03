/* @flow */
import type { Action } from '../../types';
import type { Case } from './types';
import actionTypes from './actionTypes';

export type State = {
  +data: ?Array<Case>,
  +loading: boolean,
  +error: *,
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const casesReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case actionTypes.GET_CASES_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.GET_CASES_SUCCESS:
      return { ...state, loading: false, data: action.cases };
    case actionTypes.GET_CASES_FAILURE:
      return { ...state, loading: false, error: action.error };

    case actionTypes.GET_CASE_BY_ID_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.GET_CASE_BY_ID_SUCCESS: {
      const exists =
        state.data &&
        state.data.some((parliamentCase: *) => parliamentCase.id === action.case.id);
      let data = state.data || [];
      if (exists) {
        // If case exists, we update it
        data = data.map(
          (parliamentCase: Case) =>
            parliamentCase.id === action.case.id ? action.case : parliamentCase
        );
      } else {
        // If case does not exist, we add it to the list
        data = [...data, action.case];
      }
      return { ...state, loading: false, data };
    }
    case actionTypes.GET_CASE_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default casesReducer;
