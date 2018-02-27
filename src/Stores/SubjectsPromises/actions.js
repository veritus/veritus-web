/* @flow */

import type { Dispatch, SubjectPromise } from '../../types';
import { getSubjectsPromises as apiGetSubjectsPromises } from '../../utils/api';

export const ActionTypes = {
  SUBJECTS_PROMISES_LOAD: 'SUBJECTS_PROMISES_LOAD',
  SUBJECTS_PROMISES_LOAD_SUCCESS: 'SUBJECTS_PROMISES_LOAD_SUCCESS',
  SUBJECTS_PROMISES_LOAD_FAILURE: 'SUBJECTS_PROMISES_LOAD_FAILURE',
};

const getSubjectsPromises = () => ({ type: ActionTypes.SUBJECTS_PROMISES_LOAD });

const getSubjectsPromisesSuccess = (data: Array<SubjectPromise>) => ({
  data,
  type: ActionTypes.SUBJECTS_PROMISES_LOAD_SUCCESS,
});

const getSubjectsPromisesFailure = (error: *) => ({
  error,
  type: ActionTypes.SUBJECTS_PROMISES_LOAD_FAILURE,
});

export const fetchSubjectsPromises = () => (dispatch: Dispatch) => {
  dispatch(getSubjectsPromises());

  return apiGetSubjectsPromises().then(
    resp => resp.data && dispatch(getSubjectsPromisesSuccess(resp.data)),
    error => dispatch(getSubjectsPromisesFailure(error.message))
  );
};

export default {
  getSubjectsPromises,
  getSubjectsPromisesSuccess,
  getSubjectsPromisesFailure,
  fetchSubjectsPromises,
};
