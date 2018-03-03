/* @flow */
import type { SubjectPromise, Action } from '../../types';
import { ActionTypes } from './actions';
import { ActionTypes as SubjectActionTypes } from '../Subjects/actions';

export type State = {
  +data: ?Array<SubjectPromise>,
  +loading: boolean,
  +error: *,
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const subjectsPromisesReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SUBJECTS_PROMISES_LOAD:
      return { ...state, loading: true, data: null, error: null };
    case ActionTypes.SUBJECTS_PROMISES_LOAD_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case ActionTypes.SUBJECTS_PROMISES_LOAD_FAILURE:
      return { ...state, loading: false, error: action.error };
    case SubjectActionTypes.SUBJECT_PROMISE_LINK_SUCCESS: {
      const nullGuard = state.data || [];
      return { ...state, data: [...nullGuard, action.payload] };
    }
    default:
      return state;
  }
};

export default subjectsPromisesReducer;
