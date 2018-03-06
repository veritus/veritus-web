/* @flow */
import type { Dispatch } from '../../types';
import type { VoteRecord } from './types';
import type { CaseId } from '../Cases/types';

import actionTypes from './actionTypes';

import { getVoteRecordByCaseId as apiGetVoteRecordByCaseId } from './api';

/* 
    GET CASE BY ID
*/

const getVoteRecordByCaseId = () => ({ type: actionTypes.GET_VOTES_BY_CASE_REQUEST });

const getVoteRecordByCaseIdSuccess = (voteRecord: VoteRecord) => ({
  voteRecord,
  type: actionTypes.GET_VOTES_BY_CASE_SUCCESS,
});

const getVoteRecordByCaseIdFailure = (error: *) => ({
  error,
  type: actionTypes.GET_VOTES_BY_CASE_FAILURE,
});

export const fetchVoteRecordByCaseId = (id: CaseId) => (dispatch: Dispatch) => {
  dispatch(getVoteRecordByCaseId());

  return apiGetVoteRecordByCaseId(id).then(
    resp => resp.data && dispatch(getVoteRecordByCaseIdSuccess(resp.data)),
    error => dispatch(getVoteRecordByCaseIdFailure(error.message))
  );
};
