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
    case actionTypes.GET_VOTES_BY_CASE_SUCCESS: {
      const voteRecord = action.voteRecord[0] || null;
      const exists =
        state.data &&
        voteRecord &&
        state.data.some((vr: VoteRecord) => vr.althingi_id === voteRecord.althingi_id);
      let data = state.data || [];
      if (exists) {
        // If vote record exists, we update it
        data = data.map(
          (vr: VoteRecord) =>
            vr.althingi_id === action.voteRecord.althingi_id ? action.voteRecord : vr
        );
      } else if (voteRecord) {
        // If vote record does not exist, we add it to the list
        data = [...data, voteRecord];
      }

      return { ...state, loading: false, data };
    }
    case actionTypes.GET_VOTES_BY_CASE_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default voteRecordReducer;
