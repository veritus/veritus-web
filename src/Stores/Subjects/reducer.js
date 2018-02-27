/* @flow */
import type { Subject, Action } from '../../types';
import { ActionTypes } from './actions';
export type State = {
  +subjects: ?Array<Subject>,
  +loading: boolean,
  +error: *,
};

const initialState = {
  subjects: null,
  loading: false,
  error: null,
};

const subjectsReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SUBJECTS_LOAD:
      return { ...state, loading: true, subjects: null, error: null };
    case ActionTypes.SUBJECTS_LOAD_SUCCESS:
      return { ...state, loading: false, subjects: action.subjects };
    case ActionTypes.SUBJECTS_LOAD_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default subjectsReducer;
