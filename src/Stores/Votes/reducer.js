/* @flow */
import type { Action } from '../../types';
import type { VoteRecord } from './types';
import actionTypes from './actionTypes';

export type State = {
  +data: ?Array<VoteRecord>,
  +loading: boolean,
  +error: *,
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const voteRecordReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case actionTypes.GET_VOTES_BY_CASE_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.GET_VOTES_BY_CASE_SUCCESS:
      const exists =
        state.data &&
        state.data.some(
          (voteRecord: VoteRecord) => voteRecord.id === action.voteRecord.id
        );
      let data = state.data || [];
      if (exists) {
        // If case exists, we update it
        data = data.map(
          (voteRecord: VoteRecord) =>
            voteRecord.id === action.voteRecord.id ? action.voteRecord : voteRecord
        );
      } else {
        // If case does not exist, we add it to the list
        data = [...data, action.voteRecord];
      }
      return { ...state, loading: false, data };
    case actionTypes.GET_VOTES_BY_CASE_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default voteRecordReducer;
