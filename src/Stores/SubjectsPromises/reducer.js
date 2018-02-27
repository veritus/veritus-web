/* @flow */
import type { SubjectPromise, Action } from '../../types';

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
    case 'SUBJECTS_PROMISES_LOAD':
      return { ...state, loading: true, data: null, error: null };
    case 'SUBJECTS_PROMISES_LOAD_SUCCESS':
      return { ...state, loading: false, data: action.subjects };
    case 'SUBJECTS_PROMISES_LOAD_FAILURE':
      return { ...state, loading: false, error: action.error };
    case 'SUBJECT_PROMISE_LINK_SUCCESS': {
      const nullGuard = state.data || [];
      return { ...state, data: [...nullGuard, action.payload] };
    }
    default:
      return state;
  }
};

export default subjectsPromisesReducer;
