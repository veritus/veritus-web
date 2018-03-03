/* @flow */
import type { Dispatch } from '../../types';
import type { Case, CaseId } from './types';
import actionTypes from './actionTypes';

import { getParliamentCaseById as apiGetParliamentCaseById } from '../../utils/api';

const getCaseById = () => ({ type: actionTypes.GET_CASE_BY_ID_REQUEST });

const getCaseByIdSuccess = (politicians: Array<Case>) => ({
  politicians,
  type: actionTypes.GET_CASE_BY_ID_SUCCESS,
});

const getCaseByIdFailure = (error: *) => ({
  error,
  type: actionTypes.GET_CASE_BY_ID_FAILURE,
});

export const fetchCaseById = (id: CaseId) => (dispatch: Dispatch) => {
  dispatch(getCaseById());

  return apiGetParliamentCaseById(id).then(
    resp => resp.data && dispatch(getCaseByIdSuccess(resp.data)),
    error => dispatch(getCaseByIdFailure(error.message))
  );
};

export default {
  getCaseById,
  getCaseByIdSuccess,
  getCaseByIdFailure,
  fetchCaseById,
};
