/* @flow */
import type { PartyType, Action } from '../../types';

export type State = {
  +data: ?Array<PartyType>,
  +loading: boolean,
  +error: *,
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const partiessReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'PARTIES_LOAD':
      return { ...state, loading: true, data: null, error: null };
    case 'PARTIES_LOAD_SUCCESS':
      return { ...state, loading: false, data: action.parties };
    case 'PARTIES_LOAD_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default partiessReducer;
