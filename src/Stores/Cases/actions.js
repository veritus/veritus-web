/* @flow */
import type { Dispatch } from '../../types';
import type { Case, CaseId } from './types';
import actionTypes from './actionTypes';

import {
  getParliamentCaseById as apiGetParliamentCaseById,
  getParliamentCases as apiGetParliamentCases,
} from '../../utils/api';

/* 
    GET CASE BY ID
*/

const getCaseById = () => ({ type: actionTypes.GET_CASE_BY_ID_REQUEST });

const getCaseByIdSuccess = (parliamentCase: Case) => ({
  case: parliamentCase,
  type: actionTypes.GET_CASE_BY_ID_SUCCESS,
});

const getCaseByIdFailure = (error: String) => ({
  error,
  type: actionTypes.GET_CASE_BY_ID_FAILURE,
});

export const fetchCaseById = (id: CaseId) => (dispatch: Dispatch) => {
  dispatch(getCaseById());

  return apiGetParliamentCaseById(id)
    .then(resp => resp.data && dispatch(getCaseByIdSuccess(resp.data)))
    .catch(error => dispatch(getCaseByIdFailure(error.message)));
};

/* 
    GET ALL CASES
*/

const getCases = () => ({ type: actionTypes.GET_CASES_REQUEST });

const getCasesSuccess = (cases: Array<Case>) => ({
  cases,
  type: actionTypes.GET_CASES_SUCCESS,
});

const getCasesFailure = (error: String) => ({
  error,
  type: actionTypes.GET_CASES_FAILURE,
});

export const fetchCases = () => (dispatch: Dispatch) => {
  dispatch(getCases());

  return apiGetParliamentCases()
    .then(resp => resp.data && dispatch(getCasesSuccess(resp.data)))
    .catch(error => dispatch(getCasesFailure(error.message)));
};

export default {
  fetchCaseById,
  fetchCases,
};
